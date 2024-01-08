import os from 'os';
import {readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';

import { Heap } from "heap-js";
import { fetchBatchRPCDataFromChainData } from "../../packages/chainlist/index.js";
import { generateChainData } from "../../packages/chainlist/utils/fetch.js";
import pino from 'pino';
import pinoPretty from 'pino-pretty';
import { join } from 'path';

const logger = pino(pinoPretty());

export class ChainList {
    constructor() {
        this._mainAppDir = join(os.homedir(), '.universal-providers');
        this._ensureDir(this._mainAppDir);
        this._cacheDir = join(this._mainAppDir, 'cache');
        this._ensureDir(this._cacheDir);
        
        this._chainlistCacheFile = join(this._cacheDir, 'chainlist.json')
        this._chainMapCacheFile = join(this._cacheDir, 'chain.json');
        this._chainIdMapCacheFile = join(this._cacheDir, 'chainid.json')
        this._rpcStatusCacheFile = join(this._cacheDir, 'rpc_status.json')

        this.chainlist = [];
        this.chainIdMap = {};
        this.chainMap = {};
        this.rpcStatus = {};
    }

    _ensureDir(dir) {
        if (!existsSync(dir)) {
          mkdirSync(dir);
        }
      }

    async init() {
        this.chainlist = await generateChainData();
        this.chainlist.forEach(data => {
            const name = data['shortName'];
            this.chainMap[name] = data;
            const chainId = data['chainId'];
            this.chainIdMap[chainId] = data;
        });
    }

    async initWithData(chainlist) {
        this.chainlist = chainlist;
        this.chainlist.forEach(data => {
            const name = data['shortName'];
            this.chainMap[name] = data;
            const chainId = data['chainId'];
            this.chainMap[chainId] = data;
        });
    }

    async updateCache(chainlist=this.chainlist.entries(), noTrack=false) {
        for (const [index, data] of chainlist) {
            logger.info(`Updating the cache of the ${data.name}...`)
            if (noTrack) {
                data.rpc = data.rpc.filter(r => r.tracking && r.tracking === "none");
            }
    
            let res = await fetchBatchRPCDataFromChainData(data);
    
            const top5Heap = new Heap((a, b) => {
                if (a.height !== b.height) {
                    return b.height - a.height;
                } else {
                    return b.latency - a.latency;
                }
            });
    
            res = res.filter(item => item && item.height && item.latency);
            res.forEach((value, idx) => {
                if (value && value.height && value.latency) {
                    top5Heap.push([value, idx]);
                    if (top5Heap.size() > 5) top5Heap.pop();
                }
            });
    
            const top5Indexes = top5Heap.toArray().map(item => item[1]);
            const chainId = data.chainId;
            this.rpcStatus[chainId] = top5Indexes.map(value => res[value]);
    
            data.rpc = data.rpc.filter((_, idx) => top5Indexes.includes(idx));
    
            this.chainlist[index] = data;
        }
    }

    saveCache() {
        writeFileSync(this._chainlistCacheFile, JSON.stringify(this.chainlist));
        writeFileSync(this._chainIdMapCacheFile, JSON.stringify(this.chainIdMap));
        writeFileSync(this._chainMapCacheFile, JSON.stringify(this.chainMap));
        writeFileSync(this._rpcStatusCacheFile, JSON.stringify(this.rpcStatus));
    }
}
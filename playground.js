// import { fetchBatchRPCData } from "./packages/chainlist/index.js";
// import { generateChainData } from "./packages/chainlist/utils/fetch.js";

import { fetchBatchRPCDataFromChainData } from "./packages/chainlist/index.js";
import { ChainList } from "./src/apis/chainlist.js";

// const chaindata = await generateChainData();

// console.log(JSON.stringify(chaindata[0]));

// const res = await fetchBatchRPCData([
//     "https://eth-mainnet.diamondswap.org/rpc",
//     "https://rpc.ankr.com/eth"
// ])

// console.log(res)

const cd = [
    {
        "name": "Ethereum Mainnet",
        "chain": "ETH",
        "icon": "ethereum",
        "rpc": [
            {
                "url": "https://eth.llamarpc.com",
                "tracking": "none",
                "trackingDetails": "LlamaNodes is open-source and does not track or store user information that transits through our RPCs (location, IP, wallet, etc). To learn more, have a look at the public Privacy Policy in our docs: https://llamanodes.notion.site/Privacy-Practices-f20fd8fdd02a469d9d4f42a5989bb936",
                "isOpenSource": true
            },
            {
                "url": "https://endpoints.omniatech.io/v1/eth/mainnet/public",
                "tracking": "none",
                "trackingDetails": "All the data and metadata remain private to the users. No third party is able to access, analyze or track it. OMNIA leverages different technologies and approaches to guarantee the privacy of their users, from front-running protection and private mempools, to obfuscation and random dispatching. https://blog.omniatech.io/how-omnia-handles-your-personal-data"
            },
            {
                "url": "https://rpc.ankr.com/eth",
                "tracking": "limited",
                "trackingDetails": "For service delivery purposes, we temporarily record IP addresses to set usage limits and monitor for denial of service attacks against our infrastructure. Though we do look at high-level data around the success rate of transactions made over the blockchain RPC, we do not correlate wallet transactions made over the infrastructure to the IP address making the RPC request. Thus, we do not store, exploit, or share any information regarding Personal Identifiable Information (PII), including wallet addresses. https://www.ankr.com/blog/ankrs-ip-address-policy-and-your-privacy/"
            },
            {
                "url": "https://go.getblock.io/d7dab8149ec04390aaa923ff2768f914",
                "tracking": "none",
                "trackingDetails": "We automatically collect certain information through cookies and similar technologies when you visit, use or navigate Website. This information does not reveal your specific identity (like your name or contact information) and does not allow to identify you. However, it may include device and usage information, such as your IP address, browser and device characteristics, its type and version, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website, information about your interaction in our emails, and other technical and statistical information. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.Specifically, as the RPC provider, we do not log and store your IP address, country, location and similar data. https://getblock.io/privacy-policy/"
            },
            {
                "url": "https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7",
                "tracking": "yes",
                "trackingDetails": "We may automatically record certain information about how you use our Sites (we refer to this information as \"Log Data\"). Log Data may include information such as a user's Internet Protocol (IP) address, device and browser type, operating system, the pages or features of our Sites to which a user browsed and the time spent on those pages or features, the frequency with which the Sites are used by a user, search terms, the links on our Sites that a user clicked on or used, and other statistics. We use this information to administer the Service and we analyze (and may engage third parties to analyze) this information to improve and enhance the Service by expanding its features and functionality and tailoring it to our users' needs and preferences. https://nodereal.io/terms"
            },
            {
                "url": "https://ethereum.publicnode.com",
                "tracking": "none",
                "trackingDetails": "We do not store or track any user data with the exception of data that will be public on chain. We do not correlate wallets address's with IP's,  any data which is needed to transact is deleted after 24 hours. We also do no use any Analytics or 3rd party website tracking. https://www.publicnode.com/privacy"
            },
            {
                "url": "wss://ethereum.publicnode.com",
                "tracking": "none",
                "trackingDetails": "We do not store or track any user data with the exception of data that will be public on chain. We do not correlate wallets address's with IP's,  any data which is needed to transact is deleted after 24 hours. We also do no use any Analytics or 3rd party website tracking. https://www.publicnode.com/privacy"
            },
            {
                "url": "https://1rpc.io/eth",
                "tracking": "none",
                "trackingDetails": "With the exception of data that will be public on chain, all the other metadata / data should remain private to users and other parties should not be able to access or collect it. 1RPC uses many different techniques to prevent the unnecessary collection of user privacy, which prevents tracking from RPC providers. https://docs.1rpc.io/technology/zero-tracking"
            },
            {
                "url": "https://rpc.builder0x69.io",
                "tracking": "none",
                "trackingDetails": "Private transactions / MM RPC: https://twitter.com/builder0x69"
            },
            {
                "url": "https://rpc.mevblocker.io",
                "tracking": "none",
                "trackingDetails": "Privacy notice: MEV Blocker RPC does not store any kind of user information (i.e. IP, location, user agent, etc.) in any data bases. Only transactions are preserved to be displayed via status endpoint like https://rpc.mevblocker.io/tx/0x627b09d5a9954a810cd3c34b23694439da40558a41b0d87970f2c3420634a229. Connect to MEV Blocker via https://rpc.mevblocker.io"
            },
            {
                "url": "https://rpc.flashbots.net",
                "tracking": "none",
                "trackingDetails": "Privacy notice: Flashbots Protect RPC does not track any kind of user information (i.e. IP, location, etc.). No user information is ever stored or even logged. https://docs.flashbots.net/flashbots-protect/rpc/quick-start"
            },
            {
                "url": "https://virginia.rpc.blxrbdn.com",
                "tracking": "yes",
                "trackingDetails": "We may collect information that is publicly available in a blockchain when providing our services, such as: Public wallet identifier of the sender and recipient of a transaction, Unique identifier for a transaction, Date and time of a transaction, Transaction value, along with associated costs, Status of a transaction (such as whether the transaction is complete, in-progress, or resulted in an error) https://bloxroute.com/wp-content/uploads/2021/12/bloXroute-Privacy-Policy-04-01-2019-Final.pdf"
            },
            {
                "url": "https://uk.rpc.blxrbdn.com",
                "tracking": "yes",
                "trackingDetails": "We may collect information that is publicly available in a blockchain when providing our services, such as: Public wallet identifier of the sender and recipient of a transaction, Unique identifier for a transaction, Date and time of a transaction, Transaction value, along with associated costs, Status of a transaction (such as whether the transaction is complete, in-progress, or resulted in an error) https://bloxroute.com/wp-content/uploads/2021/12/bloXroute-Privacy-Policy-04-01-2019-Final.pdf"
            },
            {
                "url": "https://singapore.rpc.blxrbdn.com",
                "tracking": "yes",
                "trackingDetails": "We may collect information that is publicly available in a blockchain when providing our services, such as: Public wallet identifier of the sender and recipient of a transaction, Unique identifier for a transaction, Date and time of a transaction, Transaction value, along with associated costs, Status of a transaction (such as whether the transaction is complete, in-progress, or resulted in an error) https://bloxroute.com/wp-content/uploads/2021/12/bloXroute-Privacy-Policy-04-01-2019-Final.pdf"
            },
            {
                "url": "https://eth.rpc.blxrbdn.com",
                "tracking": "yes",
                "trackingDetails": "We may collect information that is publicly available in a blockchain when providing our services, such as: Public wallet identifier of the sender and recipient of a transaction, Unique identifier for a transaction, Date and time of a transaction, Transaction value, along with associated costs, Status of a transaction (such as whether the transaction is complete, in-progress, or resulted in an error) https://bloxroute.com/wp-content/uploads/2021/12/bloXroute-Privacy-Policy-04-01-2019-Final.pdf"
            },
            {
                "url": "https://cloudflare-eth.com",
                "tracking": "yes",
                "trackingDetails": "Just as when you visit and interact with most websites and services delivered via the Internet, when you visit our Websites, including the Cloudflare Community Forum, we gather certain information and store it in log files. This information may include but is not limited to Internet Protocol (IP) addresses, system configuration information, URLs of referring pages, and locale and language preferences. https://www.cloudflare.com/privacypolicy/"
            },
            {
                "url": "https://eth-mainnet.public.blastapi.io",
                "tracking": "limited",
                "trackingDetails": "All the information in our logs (log data) can only be accessed for the last 7 days at any certain time, and it is completely purged after 14 days. We do not store any user information for longer periods of time or with any other purposes than investigating potential errors and service failures. https://blastapi.io/privacy-policy"
            },
            {
                "url": "https://api.securerpc.com/v1",
                "tracking": "unspecified"
            },
            {
                "url": "https://openapi.bitstack.com/v1/wNFxbiJyQsSeLrX8RRCHi7NpRxrlErZk/DjShIqLishPCTB9HiMkPHXjUM9CNM9Na/ETH/mainnet",
                "tracking": "yes",
                "trackingDetails": "Information about your computer hardware and software may be automatically collected by BitStack. This information can include: your IP address, browser type, domain names, access times and referring website addresses. https://bitstack.com/#/privacy"
            },
            {
                "url": "https://eth-pokt.nodies.app",
                "tracking": "none",
                "trackingDetails": "What We Do Not Collect: User's IP address, request origin, request data. https://www.blog.pokt.network/rpc-logging-practices/"
            },
            {
                "url": "https://eth-mainnet-public.unifra.io",
                "tracking": "limited",
                "trackingDetails": "Regarding the RPC(remote procedure call) data, we do not collect request data or request origin. We temporarily record the request method names and IP addresses for 7 days to ensure our service functionality such as load balancing and DDoS protection. All the data is automatically deleted after 7 days. Only the amounts of RPC requests of users are recorded for accounting and billing purposes within longer time. https://unifra.io/"
            },
            {
                "url": "https://ethereum.blockpi.network/v1/rpc/public",
                "tracking": "limited",
                "trackingDetails": "We do not collect request data or request origin. We only temporarily record the request method names and IP addresses for 7 days to ensure our service functionality such as load balancing and DDoS protection. All the data is automatically deleted after 7 days and we do not store any user information for longer periods of time. https://blockpi.io/privacy-policy"
            },
            {
                "url": "https://rpc.payload.de",
                "tracking": "none",
                "trackingDetails": "Sent transactions are private: https://payload.de/docs. By default, no data is collected when using the RPC endpoint. If provided by the user, the public address for authentication is captured when using the RPC endpoint in order to prioritize requests under high load. This information is optional and solely provided at the user's discretion. https://payload.de/privacy/"
            },
            {
                "url": "https://api.zmok.io/mainnet/oaen6dy8ff6hju9k",
                "tracking": "none",
                "trackingDetails": "API requests - we do NOT store any usage data, additionally, we do not store your logs. No KYC - \"Darknet\" style of sign-up/sign-in. Only provider that provides Ethereum endpoints as TOR/Onion hidden service. Analytical data are stored only on the landing page/web.  https://zmok.io/privacy-policy"
            },
            {
                "url": "https://eth-mainnet.g.alchemy.com/v2/demo",
                "tracking": "yes",
                "trackingDetails": "We may collect certain information automatically when you use our Services, such as your Internet protocol (IP) address, user settings, MAC address, cookie identifiers, mobile carrier, mobile advertising and other unique identifiers, browser or device information, location information (including approximate location derived from IP address), and Internet service provider. https://www.alchemy.com/policies/privacy-policy"
            },
            {
                "url": "https://eth.api.onfinality.io/public",
                "tracking": "limited",
                "trackingDetails": "For the sole purpose of providing our service, we temporarily record IP addresses and origins to check against free limits, provide load balancing, prevent DOS attacks, and to determine where best to locate our nodes. We do not, and will never, correlate or link specific wallet addresses or transactions made over our infrastructure to the IP address or origin making the RPC request. After processing IP addresses, we discard the IP address value within 24 hours. Read more here: https://blog.onfinality.io/how-does-onfinality-deal-with-personal-information/"
            },
            {
                "url": "https://core.gashawk.io/rpc",
                "tracking": "yes",
                "trackingDetails": "Sign-in with Ethereum on https://www.gashawk.io required prior to use. We may collect information that is publicly available in a blockchain when providing our services, such as: Public wallet identifier of the sender and recipient of a transaction, Unique identifier for a transaction, Date and time of a transaction, Transaction value, along with associated costs, Status of a transaction (such as whether the transaction is complete, in-progress, or resulted in an error), read the terms of service https://www.gashawk.io/#/terms and the privacy policy https://www.gashawk.io/#/privacy."
            },
            {
                "url": "https://mainnet.eth.cloud.ava.do"
            },
            {
                "url": "https://ethereumnodelight.app.runonflux.io"
            },
            {
                "url": "https://eth-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf"
            },
            {
                "url": "https://main-light.eth.linkpool.io"
            },
            {
                "url": "https://rpc.eth.gateway.fm",
                "tracking": "yes",
                "trackingDetails": "When you use our services or visit our websites, we may log your device’s IP address for debugging and security reasons. We may retain this information for up to twelve months"
            },
            {
                "url": "https://rpc.chain49.com/ethereum?api_key=14d1a8b86d8a4b4797938332394203dc",
                "tracking": "yes",
                "trackingDetails": "We collect device information and request metadata like IP address and User Agent for the purpose of load balancing and rate limiting. More info: https://chain49.com/privacy-policy"
            },
            {
                "url": "https://eth.meowrpc.com",
                "tracking": "none",
                "trackingDetails": "With the exclusion of data that will be openly visible and available on the blockchain, MEOWRPC does not track or store any kind of user information (such as location, IP address, etc.) that passes through our RPC. For further details regarding our privacy practices, we encourage you to refer to our Privacy Policy. https://privacy.meowrpc.com"
            },
            {
                "url": "https://eth.drpc.org",
                "tracking": "none",
                "trackingDetails": "Specific types of technical data that we may temporarily log include:IP address (only in logs for redirecting requests to the nearest RPC nodes and rate limiting at the free level, which are cleared weekly). The user ID is hidden in the temporary logs, so it is not possible to link them to a specific user.https://drpc.org/privacy-policy"
            },
            {
                "url": "https://mainnet.gateway.tenderly.co",
                "tracking": "yes",
                "trackingDetails": "Additionally, if you are an Account Member, we may collect business and transactional data about you (and your business) that accumulates over the normal course of operation regarding providing our Services. This may include transaction records, stored files, user profiles, information about collaborators, analytics data, and other metrics, as well as other types of information created or generated by your interaction with our Services. https://tenderly.co/privacy-policy"
            },
            {
                "url": "https://rpc.tenderly.co/fork/c63af728-a183-4cfb-b24e-a92801463484",
                "tracking": "yes",
                "trackingDetails": "Additionally, if you are an Account Member, we may collect business and transactional data about you (and your business) that accumulates over the normal course of operation regarding providing our Services. This may include transaction records, stored files, user profiles, information about collaborators, analytics data, and other metrics, as well as other types of information created or generated by your interaction with our Services. https://tenderly.co/privacy-policy"
            },
            {
                "url": "https://gateway.tenderly.co/public/mainnet",
                "tracking": "yes",
                "trackingDetails": "Additionally, if you are an Account Member, we may collect business and transactional data about you (and your business) that accumulates over the normal course of operation regarding providing our Services. This may include transaction records, stored files, user profiles, information about collaborators, analytics data, and other metrics, as well as other types of information created or generated by your interaction with our Services. https://tenderly.co/privacy-policy"
            },
            {
                "url": "https://api.zan.top/node/v1/eth/mainnet/public",
                "tracking": "limited",
                "trackingDetails": "ZAN Node Service generally does not store any kind of user information (e.g. IP address, location, requst location, request data, etc.) that transits through our RPCs except for one senario ——we may track your IP address when you are using our RPCs and will delete it immediately when you stoping using our RPCs. To learn more, please review our privacy policy at https://a.zan.top/static/Privacy-Policy.pdf"
            },
            {
                "url": "https://eth-mainnet.diamondswap.org/rpc",
                "tracking": "limited",
                "trackingDetails": "We record limited metadata from requests. This data is stored for a maximum of 90 days and is solely used for debugging, identifying suspicious activity, and generating analytics."
            },
            {
                "url": "https://rpc.notadegen.com/eth"
            },
            {
                "url": "https://eth.merkle.io",
                "tracking": "none",
                "trackingDetails": "merkle does not track or store user information that transits through our RPCs (location, IP, wallet, etc)."
            },
            {
                "url": "https://rpc.lokibuilder.xyz/wallet",
                "tracking": "none",
                "trackingDetails": "Private transactions. No tracking of any kind (no IPs, location, wallet etc.): https://lokibuilder.xyz/privacy"
            },
            {
                "url": "https://services.tokenview.io/vipapi/nodeservice/eth?apikey=qVHq2o6jpaakcw3lRstl",
                "tracking": "yes",
                "trackingDetails": "Information about your computer hardware and software may be automatically collected by Tokenview. This information can include such details as your IP address, browser type, domain names, access times, etc.https://services.tokenview.io/en/protocol"
            },
            {
                "url": "https://eth.nodeconnect.org",
                "tracking": "yes",
                "trackingDetails": "We may collect information about how you interact with our Service. This may include information about your operating system, IP address, and browser type : https://nodeconnect.org/privacy.txt"
            },
            {
                "url": "https://api.mycryptoapi.com/eth"
            },
            {
                "url": "wss://mainnet.gateway.tenderly.co"
            },
            {
                "url": "https://rpc.blocknative.com/boost"
            },
            {
                "url": "https://rpc.flashbots.net/fast"
            },
            {
                "url": "https://rpc.mevblocker.io/fast"
            },
            {
                "url": "https://rpc.mevblocker.io/noreverts"
            },
            {
                "url": "https://rpc.mevblocker.io/fullprivacy"
            }
        ],
        "features": [
            {
                "name": "EIP155"
            },
            {
                "name": "EIP1559"
            }
        ],
        "faucets": [],
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "infoURL": "https://ethereum.org",
        "shortName": "eth",
        "chainId": 1,
        "networkId": 1,
        "slip44": 60,
        "ens": {
            "registry": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
        },
        "explorers": [
            {
                "name": "etherscan",
                "url": "https://etherscan.io",
                "standard": "EIP3091"
            },
            {
                "name": "blockscout",
                "url": "https://eth.blockscout.com",
                "icon": "blockscout",
                "standard": "EIP3091"
            },
            {
                "name": "dexguru",
                "url": "https://ethereum.dex.guru",
                "icon": "dexguru",
                "standard": "EIP3091"
            }
        ],
        "tvl": 65500894473.8954,
        "chainSlug": "ethereum"
    }
];

// const res = await fetchBatchRPCDataFromChainData(cd[0]);
// console.log(res);
const c = new ChainList();
await c.init();

await c.updateCache()

c.saveCache()
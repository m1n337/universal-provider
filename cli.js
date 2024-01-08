import { program } from "commander";

const banner = `// _                          
// | | ._  o     _  ._ _  _. |   |_) ._ _     o  _|  _  ._ _ 
// |_| | | | \\/ (/_ | _> (_| |   |   | (_) \\/ | (_| (/_ | _> 
`

program
    .name('uprovider')
    .description(`${banner}\nUniversal Provider: Automaticly select a blockchain provider`)
    .version('0.0.1')

program
    .command('evm')
    .description('Evm compatiable chain providers')
    .action(() => {
        console.log("EVM")
    })

program.parse(process.argv)
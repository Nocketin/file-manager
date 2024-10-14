import { __dirname, __filename } from "./utils.js";
import readline from "readline";
import {homedir} from "os";
import nwd from "./nwd.js";
import basic from "./basic.js";
import os from "./os.js";
import Hash from "./hash.js";
import Compress from "./compress.js";


let username = "Unknown Person";

const args = process.argv.slice();
args.forEach((arg) => {
    if (arg.startsWith('--username=')){
        username=arg.split('=')[1];
    }
});


const homeDir = homedir();
process.chdir(homeDir);

console.log(`Welcome to the File Manager, ${username}`);
console.log(`You are currently in ${homeDir}`);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    
});

const exit = () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`)
    rl.close();
};


rl.on('line', async (input) =>{
    const [command, ...args] = input.split(' ');

    const fun1 = new nwd;
    const fun2 = new basic;
    const fun3 = new os;
    const fun4 = new Hash;
    const fun5 = new Compress;

    try{
    switch (command){

        case `.exit`:
            exit();
            break;

        case `up`:
            fun1.up();
            break;

        case `cd`:
            fun1.cd(args.join(''));
            break;

        case `ls`:
            fun1.ls();
            break;

        case `cat`:
            await fun2.cat(args.join(''));
            break;

        case `add`:
            fun2.add(args.join(''));
            break;

        case `rn`:
            fun2.rn(args[0], args[1]);
            break;

        case `cp`:
            fun2.cp(args[0], args[1]);
            break;
        
        case `mv`:
            fun2.cp(args[0],args[1]);
            break;
            
        case `rm`:
            fun2.rm(args.join(''));
            break;

        case `--EOL`:
            fun3.eol();
            break;

        case `--cpus`:
            fun3.cpu();
            break;

        case `--homedir`:
            fun3.homed();
            break;

        case `--username`:
            fun3.username();
            break;
        
        case `--architecture`:
            fun3.architecture();
            break;
        
        case `hash`:
            fun4.hash(args.join(''));
            break;

        case `compress`:
            fun5.compress(args[0], args[1]);
            break;

        case `decompress`:
            fun5.decompress(args[0], args[1]);
        default:
            console.log("Invalid input");
            
    }
}
catch(err){
    console.log(err);
}
    console.log(`You are currently in ${process.cwd()}`);
});


rl.on(`SIGINT`, () => {
    exit();
});
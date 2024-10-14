import { EOL, cpus, homedir, userInfo, arch} from "os";

export default class OS {

    eol(){
        console.log(JSON.stringify(EOL));
    }

    cpu(){
        const cpuInfo = cpus();
        console.log(`Amount of CPUS:${cpuInfo.length}`);
        cpuInfo.forEach((cpu, index) => {
            const {model, speed} = cpu;
            console.log(`CPU number${index+1}: Model: ${model}, Clock rate: ${speed/1000}`)
        });
    }

    homed(){
        console.log(homedir());
    }

    username(){
        const{username} = userInfo();
        console.log(username);
    }

    architecture(){
        console.log(arch());
    }

    
}
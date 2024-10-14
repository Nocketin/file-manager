import { createHash } from "crypto";
import {readFile} from 'node:fs/promises';

    export default class Hash{

    async hash(file) {
        const input = await readFile(file);
        const hash = createHash('sha256').update(input).digest("hex");;
    
        console.log(hash);
    }
    
    };

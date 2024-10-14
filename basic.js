import {rm, rename, writeFile} from "node:fs/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { basename, join } from "node:path";

export default class Basic {

    cat(file) {
        return new Promise((res) => {
          const readStream = createReadStream(file, { encoding: 'utf-8' })
          readStream.on('data', (data) => {
            console.log(data);
          })
          readStream.on('end', () => {res()})
        })
      }

    add(file){
        writeFile(file,"", {flag: "wx"});
    };

    rn(file, newName){
        rename(file, newName)
    }

    async cp(pathToFile, newPath) {
        const fileName = basename(pathToFile)
        const newFilePath = join(newPath, fileName)
        try {
          const readStream = createReadStream(pathToFile)
          const writeStream = createWriteStream(newFilePath, { flags: 'wx' })
      
          readStream.pipe(writeStream)
        } catch (error) {
          console.log(error);
        }
      }
    
      async mv(pathToFile, newPath) {
        await this.cp(pathToFile, newPath)
        await this.rm(pathToFile)
      }

    rm(file){
        rm(file);
    }
}
import { readdir } from 'node:fs/promises';
import { __filename, __dirname } from './utils.js';


export default class Nwd {
    up(){
        process.chdir("..");
    };

    cd(dir) {
        process.chdir(dir);
      };
    
    async ls() {
        console.log("lol");
        console.log(process.cwd());
    const data = await readdir(process.cwd(), { withFileTypes: true });

        const files = data
          .filter(file => file.isFile())
          .map(file => ({ name: file.name, type: "file" }))
          .sort((file1, file2) => file1.name.localeCompare(file2.name));
        const directories = data
          .filter(dir => dir.isDirectory())
          .map(dir => ({ name: dir.name, type: "directory" }))
          .sort((dir1, dir2) => dir1.name.localeCompare(dir2.name));
    
        console.table([...directories, ...files]);
      };


}
  
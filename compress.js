import { createReadStream, createWriteStream} from "fs";
import { createBrotliCompress, createBrotliDecompress} from "zlib";
import { pipeline } from "stream";

export default class Compress{
    compress(startFile, endFile){
        const input = createReadStream(startFile);
        const output = createWriteStream(endFile, {flags: 'wx'});
        const compressStream = createBrotliCompress() ;

        input.pipe(compressStream).pipe(output);
       
    }

    decompress(startFile, endFile){
        const input = createReadStream(startFile);
        const output = createWriteStream(endFile, {flags: 'wx'});
        const compressStream = createBrotliDecompress() ;

        input.pipe(compressStream).pipe(output);
    }
}
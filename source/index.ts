import { promisify } from "node:util";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import got, { Response, Request, Progress } from "got";
import { customOptionsHook } from './custom-options.js';
import { downloadHandler } from './download-handler';

// const pipeline = promisify(stream.pipeline);
// const downloadStream = got.stream(url);
// const fileWriterStream = fs.createWriteStream(fileName);


const unlink = promisify(fs.unlink);
const rename = promisify(fs.rename);

const gotDl = got.extend({
  isStream: true,
  mutableDefaults: true,
  context: {
    forceDownload: true,
    fileName: undefined,
    tempPath: undefined,
    downloadProgress: undefined,
    checksum: undefined,
    algorithm: undefined,
  },
  hooks: {
    init: [ customOptionsHook ],
  },
  handlers: [	downloadHandler ],
});

export * from "got";
export { gotDl };
export { GotOptionsInit, OptionsInit, Context } from "./context.js";

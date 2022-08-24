import {
  Request,
  Response,
  Options,
  OptionsInit as GotOptionsInit, 
  RequestError,
  HandlerFunction
} from "got";
import { OptionsInit } from "./context.js";

export const downloadHandler = (options: Options, next: HandlerFunction) => {
  const {
    forceDownload,
    fileName,
    tempPath,
    downloadProgress,
    checksum,
    algorithm
  } = options.context;

  if (!forceDownload) {
    return next(options);
  }

  return (async () => {
    try {
      const response = await next(options);
      // special response handling
      return response;
    } catch ( error: unknown ) {
      if (error instanceof RequestError) {
        const response = error.response;
        // special error handling
      }
      throw error;
    }
  })();
}
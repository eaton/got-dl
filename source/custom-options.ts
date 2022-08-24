import { Options, OptionsInit as GotOptionsInit } from "got";
import { OptionsInit } from "./context.js";

export function customOptionsHook(raw: GotOptionsInit, options: Options): void {
  const typedRaw = raw as OptionsInit;

  const names = [
    "forceDownload",
    "fileName",
    "tempPath",
    "downloadProgress",
    "checksum",
    "algorithm",
  ] as const;

  for (const name of names) {
    if (name in raw) {
      options.context[name] = typedRaw[name];
      delete typedRaw[name];
    }
  }
}

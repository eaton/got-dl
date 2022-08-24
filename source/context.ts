import { OptionsInit as GotOptionsInit, Progress } from "got";

export interface Context extends Record<string, unknown> {
  forceDownload: true;
  filename?: string;
  tempPath?: string;
  downloadProgress?: Progress;
  checksum?: string;
  algorithm?: string;
}

export interface OptionsInit extends Context, GotOptionsInit {}
export { OptionsInit as GotOptionsInit } from "got";

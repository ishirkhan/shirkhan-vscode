import fs from "fs";

export function getFileContent(path) {
  return fs.readFileSync(path).toString();
}

import { getInput, setFailed, setOutput } from "@actions/core";
import { existsSync } from "fs";
import { createRelease } from "./createRelease";

async function main() {
  const keyFile = getInput("keyFile");
  const packageName = getInput("packageName");
  const aabFile = getInput("aabFile");
  const track = getInput("track");
  const releaseName = getInput("releaseName");

  console.log({ keyFile, packageName, aabFile, track, releaseName });

  console.log({ keyFileExists: existsSync(keyFile) });

  // await createRelease({
  //   keyFile,
  //   packageName,
  //   aabFile,
  //   track,
  //   releaseName,
  // });

  setOutput("versionCode", -1);
}

main().catch(setFailed);

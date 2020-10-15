import { getInput, setFailed, setOutput } from "@actions/core";
import { createRelease } from "./createRelease";

async function main() {
  const keyFile = getInput("keyFile");
  const packageName = getInput("packageName");
  const aabFile = getInput("aabFile");
  const track = getInput("track");
  const releaseName = getInput("releaseName");

  const versionCode = await createRelease({
    keyFile,
    packageName,
    aabFile,
    track,
    releaseName,
  });

  setOutput("versionCode", versionCode);
}

main().catch(setFailed);

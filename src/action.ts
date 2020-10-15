import { getInput, setFailed, setOutput } from "@actions/core";
import { createRelease } from "./createRelease";

async function main() {
  const keyFile = getInput("key-file");
  const packageName = getInput("package-name");
  const aabFile = getInput("aab-file");
  const track = getInput("track");
  const releaseName = getInput("release-name");

  const versionCode = await createRelease({
    keyFile,
    packageName,
    aabFile,
    track,
    releaseName,
  });

  setOutput("version-code", versionCode);
}

main().catch(setFailed);

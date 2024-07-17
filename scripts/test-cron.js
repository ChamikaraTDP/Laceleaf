const { appendFile } = require("node:fs/promises");


process.chdir('/home/chamikara/Projects/Laceleaf');

async function updateProccessData(metadata) {
  await appendFile("./client-data/process-meta.json", JSON.stringify(metadata));
  // await metadataFile.writeFile(JSON.stringify(metadata));
  // metadataFile.close();
}

updateProccessData({ time: Date.now() });
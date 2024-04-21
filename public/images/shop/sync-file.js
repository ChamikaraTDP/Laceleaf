const fs = require("node:fs");
const path = require("node:path");

const folderPath = ".";
let base = "/images/shop";

// utils
function getFileNames(folderPath) {
  const fileNames = fs
    .readdirSync(folderPath)
    .map((fileName) => {
      return path.join(folderPath, fileName);
    })
    .filter(isFile);

  return fileNames;
}

const isFolder = (fileName) => {
  return fs.lstatSync(fileName).isDirectory();
};

const isFile = (fileName) => {
  return fs.lstatSync(fileName).isFile();
};

// Read folder names
const folderNames = fs
  .readdirSync(folderPath)
  .map((fileName) => {
    return path.join(folderPath, fileName);
  })
  .filter(isFolder);

folderNames.sort((a, b) => a.localeCompare(b));

console.log(folderNames);

// read existing file
let previousData = null;

try {
  if (fs.existsSync("./item-metadata.json")) {
    const imgData = fs.readFileSync("./item-metadata.json");

    previousData = JSON.parse(imgData);
  }
} catch (error) {
  console.log("Error occured while reading file, item-metadata.json ", error);
}

// Read file names
let folderPathL2 = "";
let fileNames = [];
let imgJson = {};

for (let folderName of folderNames) {
  folderPathL2 = folderPath + "/" + folderName;
  fileNames = getFileNames(folderPathL2);
  fileNames.sort((a, b) => a.localeCompare(b));

  if (previousData && previousData[folderName]) {
    imgJson[folderName] = {  ...previousData[folderName] };

    imgJson[folderName].images = fileNames.slice(1).map((fn, index) => {
      return {
        title:
          folderName.trim().toLowerCase().replaceAll(" ", "-") +
          "-" +
          (index + 1),
        path: base + "/" + fn,
      };
    });
    imgJson[folderName].shopImagePath = base + "/" + fileNames[0];
  } else {
    imgJson[folderName] = {
      id: folderName,
      title: folderName.trim().replaceAll("-", " "),
      description: "",
      images: fileNames.slice(1).map((fn, index) => {
        return {
          title:
            folderName.trim().toLowerCase().replaceAll(" ", "-") +
            "-" +
            (index + 1),
          path: base + "/" + fn,
        };
      }),
      shopImagePath: base + "/" + fileNames[0],
      prices: [
        {
          size: "",
          age: "",
          price: 0,
        },
      ],
      popular: false,
    };
  }

  console.log(folderName, " -> ", fileNames);
}

// write content to file
const content = JSON.stringify(imgJson, null, 1);

try {
  fs.writeFileSync("./item-metadata.json", content);
} catch (err) {
  console.error(err);
}

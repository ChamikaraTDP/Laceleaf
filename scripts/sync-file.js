const fs = require("node:fs");
const path = require("node:path");

const base = "./public/images/shop";

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
  .readdirSync(base)
  .map((fileName) => {
    return path.join(base, fileName);
  })
  .filter(isFolder);

folderNames.sort((a, b) => a.localeCompare(b));

console.log(folderNames);

// read existing file
let previousData = null;

try {
  if (fs.existsSync("./src/data/item-metadata.en.json")) {
    const imgData = fs.readFileSync("./src/data/item-metadata.en.json");

    previousData = JSON.parse(imgData);
  }
} catch (error) {
  console.log(
    "Error occured while reading file, item-metadata.en.json ",
    error
  );
}

// Read file names
let folderName = "";
let fileNames = [];
let imgJson = {};

for (let folderPath of folderNames) {
  fileNames = getFileNames(folderPath).map((fileName) => {
    return fileName.split("public", 2)[1];
  });
  fileNames.sort((a, b) => a.localeCompare(b));
  folderName = folderPath.substring(base.length - 1);

  if (previousData && previousData[folderName]) {
    imgJson[folderName] = { ...previousData[folderName] };

    imgJson[folderName].images = fileNames.slice(1).map((fileName, index) => {
      return {
        // title:
        //   folderName.trim().toLowerCase().replaceAll(" ", "-") +
        //   "-" +
        //   (index + 1),
        title: `image ${index + 1}`,
        path: fileName,
      };
    });
    imgJson[folderName].shopImagePath = fileNames[0];
  } else {
    imgJson[folderName] = {
      id: folderName,
      title: folderName.trim().replaceAll("-", " "),
      description: "",
      images: fileNames.slice(1).map((fileName, index) => {
        return {
          // title:
          //   folderName.trim().toLowerCase().replaceAll(" ", "-") +
          //   "-" +
          //   (index + 1),
          title: `image ${index + 1}`,
          path: fileName,
        };
      }),
      shopImagePath: fileNames[0],
      prices: [
        {
          size: "",
          age: "",
          price: 0,
        },
      ],
      popular: false,
      shopPrice: 0,
      isInStock: true,
      category: "Flowers",
    };
  }

  console.log(folderName, " -> ", fileNames);
}

// write content to file
const content = JSON.stringify(imgJson, null, 1);

try {
  fs.writeFileSync("./src/data/item-metadata.en.json", content);
} catch (err) {
  console.error(err);
}

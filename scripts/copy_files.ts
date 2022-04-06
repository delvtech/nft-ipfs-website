const fs = require("fs");

console.log(__dirname);

for (let i = 1; i <= 4700; i++) {
  const filePath = `../metadatas/${i}`;
  const filePathCopy = `../public/${i}`;

  fs.copyFile(filePath, filePathCopy, (err) => {
    if (err) throw err;

    console.log("File Copy Successfully.");
  });
}

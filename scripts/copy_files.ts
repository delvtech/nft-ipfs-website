const fs = require("fs");

for (let i = 1; i <= 4700; i++) {
  const filePath = `../metadatas/${i}.png`;
  const filePathCopy = `../public/${i}.png`;

  fs.copyFile(filePath, filePathCopy, (err) => {
    if (err) throw err;

    console.log("File Copy Successfully.");
  });
}

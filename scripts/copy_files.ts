import fs from "fs";

console.log(__dirname);

async function copyFiles() {
  for (let i = 4701; i <= 10_000; i++) {
    const filePath = `./metadatas/${i}`;
    const filePathCopy = `./public/${i}`;

    await fs.copyFile(filePath, filePathCopy, (err) => {
      if (err) throw err;

      console.log("File Copy Successfully.");
    });
  }
}

copyFiles();

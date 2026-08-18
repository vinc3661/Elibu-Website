const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const root = "./src/assets";

async function walk(folder) {
  const items = fs.readdirSync(folder, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(folder, item.name);

    if (item.isDirectory()) {
      await walk(fullPath);
      continue;
    }

    const ext = path.extname(item.name).toLowerCase();

    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

    const outputFolder = path.join(folder, "optimized");
    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder);
    }

    const output = path.join(
      outputFolder,
      path.basename(item.name, ext) + ".webp"
    );

  await sharp(fullPath)
  .resize({
    width: 1920,
    withoutEnlargement: true,
  })
  .webp({ quality: 75 })
  .toFile(output);

    console.log(`✔ ${item.name}`);
  }
}

walk(root).then(() => console.log("✅ Done!"));
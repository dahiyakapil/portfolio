import sharp from "sharp";
import fs from "fs";
import path from "path";

function publicUrl(filePath) {
  return "/" + filePath.replace(/\\/g, "/").replace(/^public\//, "");
}

async function writeVariants(input, outBase, { width, height, fit = "inside" } = {}) {
  const resized = sharp(input).resize({
    width,
    height,
    fit,
    withoutEnlargement: true,
  });

  const webpPath = `${outBase}.webp`;
  const avifPath = `${outBase}.avif`;

  await Promise.all([
    resized.clone().webp({ quality: 72, effort: 6 }).toFile(webpPath),
    resized.clone().avif({ quality: 55, effort: 6 }).toFile(avifPath),
  ]);

  const info = await sharp(webpPath).metadata();
  const webpSize = fs.statSync(webpPath).size;
  const avifSize = fs.statSync(avifPath).size;

  console.log(
    path.basename(outBase),
    `${info.width}x${info.height}`,
    `webp=${(webpSize / 1024).toFixed(1)}KB`,
    `avif=${(avifSize / 1024).toFixed(1)}KB`
  );

  return {
    width: info.width,
    height: info.height,
    webp: publicUrl(webpPath),
    avif: publicUrl(avifPath),
  };
}

const jobs = [
  {
    in: "public/assets/Kapil_DP-modified.png",
    out: "public/assets/kapil-avatar",
    width: 192,
    height: 192,
    fit: "cover",
  },
  {
    in: "public/assets/Kapil_Square.png",
    out: "public/assets/kapil-avatar-lg",
    width: 256,
    height: 256,
    fit: "cover",
  },
  {
    in: "public/assets/projects/SportsHub-hero.png",
    out: "public/assets/projects/SportsHub-hero",
    width: 1200,
  },
  {
    in: "public/assets/projects/Resumind.png",
    out: "public/assets/projects/Resumind",
    width: 1200,
  },
  {
    in: "public/assets/projects/Mail-App-CLoudflare.png",
    out: "public/assets/projects/Mail-App-Cloudflare",
    width: 1200,
  },
  {
    in: "public/assets/projects/URL-Shortener.png",
    out: "public/assets/projects/URL-Shortener",
    width: 1200,
  },
  {
    in: "public/assets/projects/Pocket-Notes.png",
    out: "public/assets/projects/Pocket-Notes",
    width: 1200,
  },
  {
    in: "public/assets/projects/HungryHub.png",
    out: "public/assets/projects/HungryHub",
    width: 1200,
  },
];

const manifest = {};
for (const job of jobs) {
  const result = await writeVariants(job.in, job.out, {
    width: job.width,
    height: job.height,
    fit: job.fit ?? "inside",
  });
  manifest[path.basename(job.out)] = result;
}

fs.mkdirSync("scripts", { recursive: true });
fs.writeFileSync(
  "scripts/image-manifest.json",
  JSON.stringify(manifest, null, 2)
);
console.log("done");

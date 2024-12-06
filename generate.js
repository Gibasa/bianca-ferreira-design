import fs from "fs";
import path from "path";

// Caminho para a pasta "portfolio"
const portfolioPath = path.resolve("public", "images", "portfolio");

// Função para ler parágrafos do arquivo TXT
function readTextFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  return content.split(/\n\s*\n/).map(paragraph => paragraph.trim() || "");
}

// Processar cada pasta de grupo
function processGroupFolder(folderPath) {
  const files = fs.readdirSync(folderPath);

  const textFile = files.find((file) => file.endsWith(".txt"));
  const textFileEn = files.find((file) => file.endsWith("_en.txt")); // Arquivo de texto em inglês
  const videoFile = files.find((file) => file.endsWith(".mp4"));
  const coverImage = files.find(
    (file) => file.startsWith("cover") && /\.(jpg|png|jpeg)$/i.test(file)
  );
  const otherImages = files.filter(
    (file) => /\.(jpg|png|jpeg)$/i.test(file) && !file.startsWith("cover")
  );


  let textData = {};
  let textDataEn = {};


  if (textFile) {
    textData = readTextFile(path.join(folderPath, textFile));
  } else {
    textData = { p1: "Sem descrição no momento" };
  }
  
  if (textFileEn) {
    textDataEn = readTextFile(path.join(folderPath, textFileEn));
  } else {
    textDataEn = { p1: "No description at the moment" };
  }
  return {
    text: textData,
    text_en: textDataEn, // Inclui o texto em inglês
    video: videoFile
      ? `/images/portfolio/${path.basename(folderPath)}/${videoFile}`
      : null,
    images: {
      cover: coverImage
        ? `/images/portfolio/${path.basename(folderPath)}/${coverImage}`
        : null,
      ...otherImages.reduce((acc, img, idx) => {
        acc[`img ${idx + 1}`] = `/images/portfolio/${path.basename(
          folderPath
        )}/${img}`;
        return acc;
      }, {}),
    },
  };
}

// Processar todas as pastas no "portfolio"
function processPortfolio(portfolioPath) {
  const folders = fs
    .readdirSync(portfolioPath)
    .filter((folder) =>
      fs.statSync(path.join(portfolioPath, folder)).isDirectory()
    );

  return folders.map((folderName) => {
    const folderPath = path.join(portfolioPath, folderName);
    return {
      group: folderName,
      ...processGroupFolder(folderPath),
    };
  });
}

// Gera o JSON
const portfolioData = processPortfolio(portfolioPath);

// Caminho para salvar o JSON em "src/assets"
const outputPath = path.resolve("src", "assets", "portfolio.json");

// Cria a pasta "assets" caso ela não exista
fs.mkdirSync(path.dirname(outputPath), { recursive: true });

// Salva o JSON
fs.writeFileSync(outputPath, JSON.stringify(portfolioData, null, 2), "utf-8");

console.log(`JSON gerado com sucesso em ${outputPath}`);

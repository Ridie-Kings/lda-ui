import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Crear directorio assets en dist si no existe
const distAssetsDir = path.join(__dirname, 'dist', 'assets');
if (!fs.existsSync(distAssetsDir)) {
  fs.mkdirSync(distAssetsDir, { recursive: true });
}

// Copiar archivos de fuentes
const srcAssetsDir = path.join(__dirname, 'src', 'assets');
const fontFiles = fs.readdirSync(srcAssetsDir).filter(file => 
  file.endsWith('.woff') || file.endsWith('.woff2') || file.endsWith('.ttf')
);

fontFiles.forEach(file => {
  const src = path.join(srcAssetsDir, file);
  const dest = path.join(distAssetsDir, file);
  fs.copyFileSync(src, dest);
  console.log(`Copied ${file} to dist/assets/`);
});

console.log('Font assets copied successfully!');

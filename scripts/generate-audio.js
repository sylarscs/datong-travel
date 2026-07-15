/**
 * Generate audio files from guide scripts using system TTS.
 * Run: node scripts/generate-audio.js
 */
const fs = require("fs");
const path = require("path");
const say = require("say");

const SCRIPTS_DIR = path.join(__dirname, "..", "content", "audio");
const OUTPUT_DIR = path.join(__dirname, "..", "public", "audio");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function extractScript(content) {
  // Get everything after the ## Script heading
  const parts = content.split("## Script");
  if (parts.length < 2) return content;
  // Remove Quick Facts section
  const script = parts[1].split("## Quick Facts")[0];
  // Clean up: remove markdown formatting
  return script
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/\[(.+?)\]\(.+?\)/g, "$1")
    .replace(/^#.+$/gm, "")
    .replace(/---/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function generateAudio(inputFile, outputFile) {
  try {
    const content = fs.readFileSync(inputFile, "utf8");
    const script = extractScript(content);

    if (!script || script.length < 50) {
      console.log(`  ⚠️  No script content found in ${path.basename(inputFile)}`);
      return;
    }

    console.log(`  🎙️  Generating ${path.basename(outputFile)}... (${Math.ceil(script.length / 1000)}s estimated)`);

    say.export(script, "Microsoft Zira Desktop", 1.0, outputFile, (err) => {
      if (err) {
        console.error(`  ❌ Error: ${err.message}`);
      } else {
        const size = (fs.statSync(outputFile).size / 1024).toFixed(1);
        console.log(`  ✅ ${path.basename(outputFile)} (${size} KB)`);
      }
    });
  } catch (err) {
    console.error(`  ❌ ${path.basename(inputFile)}: ${err.message}`);
  }
}

// Get all .md files from content/audio/
const files = fs.readdirSync(SCRIPTS_DIR).filter((f) => f.endsWith(".md"));

console.log(`Found ${files.length} scripts in content/audio/\n`);

// Generate audio for each script
files.forEach((file, i) => {
  const inputPath = path.join(SCRIPTS_DIR, file);
  const outputPath = path.join(OUTPUT_DIR, file.replace(".md", ".wav"));
  console.log(`[${i + 1}/${files.length}] ${file}`);
  generateAudio(inputPath, outputPath);
});

console.log("\nDone! Audio files saved to public/audio/");

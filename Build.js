const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

const sourceDir = './Templates'; // Path to your Handlebars files directory
const outputDir = './dist'; // Output directory for compiled HTML files
const cssDir = './public'; // Path to your CSS files directory
const jsDir = './src'; // Path to your JavaScript files directory

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Compile each Handlebars file
fs.readdirSync(sourceDir).forEach(file => {
    const filePath = path.join(sourceDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const template = handlebars.compile(fileContents);
    const compiledHTML = template({/* Optional data object */});

    // Write compiled HTML to output directory
    fs.writeFileSync(path.join(outputDir, file.replace('.hbs', '.html')), compiledHTML);
});

// Copy CSS files to output directory
fs.readdirSync(cssDir).forEach(file => {
    const filePath = path.join(cssDir, file);
    const fileContents = fs.readFileSync(filePath);

    // Write CSS files to output directory
    fs.writeFileSync(path.join(outputDir, file), fileContents);
});

// Copy JS files to output directory
fs.readdirSync(jsDir).forEach(file => {
    const filePath = path.join(jsDir, file);
    const fileContents = fs.readFileSync(filePath);

    // Write JS files to output directory
    fs.writeFileSync(path.join(outputDir, file), fileContents);
});

console.log('Build completed successfully!');

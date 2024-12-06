const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;
const UglifyJS = require('uglify-js');

const srcDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');

// Create the dist directory if it doesn't exist
fs.mkdir(distDir, { recursive: true }, (err) => {
    if (err) {
        console.error(err);
        return;
    }

    // Copy files from src to dist
    ncp(srcDir, distDir, function (err) {
        if (err) {
            console.error(err);
            return;
        }

        console.log('Files copied successfully.');

        // Minify JavaScript files in the dist directory
        fs.readdir(distDir, (err, files) => {
            if (err) {
                console.error(err);
                return;
            }

            files.forEach((file) => {
                if (path.extname(file) === '.js') {
                    const filePath = path.join(distDir, file);
                    const result = UglifyJS.minify(fs.readFileSync(filePath, 'utf8'));

                    if (result.error) {
                        console.error(result.error);
                        return;
                    }

                    fs.writeFileSync(filePath, result.code, 'utf8');
                    console.log(`Minified ${file}`);
                }
            });
        });
    });
});

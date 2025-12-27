#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Clean and create dist directory
if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
}
fs.mkdirSync('dist');
fs.mkdirSync('dist/frontend');

console.log('Building JavaScript...');
try {
    execSync(
        'npx browserify src/frontend/index.jsx --debug --outfile dist/frontend/index.js --transform [ babelify --presets [ @babel/preset-react ] ]',
        { stdio: 'inherit' }
    );
} catch (error) {
    console.error('JavaScript build failed:', error.message);
    process.exit(1);
}

console.log('Building CSS...');
try {
    execSync(
        'npx sass src/frontend/index.scss dist/frontend/index.css',
        { stdio: 'inherit' }
    );
} catch (error) {
    console.error('CSS build failed:', error.message);
    process.exit(1);
}

console.log('Copying files...');
fs.copyFileSync('src/frontend/index.html', 'dist/frontend/index.html');

// Copy backend directory recursively
function copyDir(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

copyDir('src/backend', 'dist/backend');
fs.copyFileSync('src/electron.js', 'dist/electron.js');

console.log('Build complete!');

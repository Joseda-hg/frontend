// MAYBE TODO REWRITE ASYNCHRONOUSLY

const fs = require('fs')
const { marked } = require('marked')

const testFolder = '../markdown';
const files = fs.readdirSync(testFolder);
console.log(files)

files.forEach(element => {
    console.log(fs.readFileSync(`../markdown/${element}`,{encoding:'utf8', flag:'r'}))
    let fileContent = fs.readFileSync(`../markdown/${element}`,{encoding:'utf8', flag:'r'})
    let htmlver = marked.parse(fileContent)

    console.log(htmlver)
    fs.writeFile(`../posts/${element}`, fileContent, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      
});

// The flow in theory would be
// 1. Folder with markdown files
// Each file generates a html output that would inserted into a template
// Also each generates a separate entry dynamically

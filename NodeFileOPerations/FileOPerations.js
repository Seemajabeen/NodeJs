const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'test.txt');


function writeFile() {
    fs.writeFile(filePath, 'Hello, this is a sample txt file.\n', 'utf8', (err) => {
        if (err) {
            console.error("Error writing file", err);
        }
        else {
            console.log("File written successfully");
        }
    });
}

function readFile() {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file", err);
        }
        else {
            console.log("File content:");
            console.log(data);
        }
    });
}

function appendFile() {
    fs.appendFile(filePath, 'This content is appended to the file.\n', 'utf8', (err) => {
        if (err) {
            console.error("Error appending to file", err);
        }
        else {
            console.log("Content appended successfully");
        }
    });
}


function deleteFile() {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error("Error deleting file", err);
        }
        else {
            console.log("File deleted successfully");
        }
    });
}


console.log("Starting file operations...");
writeFile();

setTimeout(() => {
    readFile();
    setTimeout(() => {
        appendFile();
        setTimeout(() => {
            readFile();
            setTimeout(() => {
                deleteFile();
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);



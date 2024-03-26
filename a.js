// WRITE node.js script to take input in a loop and logs the same input

import readline from 'readline'
import clipboardy from 'clipboardy'

// copy text to clipboard



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getInput() {
  rl.question('Enter size: ', (input) => {
    const converted = Math.floor((Number(input) / 1920) * 1440)
    console.log(`Copied: ${converted}`);
    clipboardy.writeSync(`${converted}`);
    // rl.close();
    getInput();
  });
}

getInput();


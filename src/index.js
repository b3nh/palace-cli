#!/usr/bin/env node

const clipboardy = require('clipboardy');
const chalk = require('chalk');

const { createHash, addTypes } = require('./utils');
const { properties } = require('./prompts');

(() => {
  console.log(chalk.white.bgBlack.underline.bold('\nMemory Palace CLI\n'));

  console.log(
    chalk.white.bgGreen.bold(' Loci ') +
      chalk.white.bgBlack.bold(
        " Welcome to Memory Palace CLI, I'm your guide Loci."
      )
  );

  setTimeout(async () => {
    const result = await properties();
    const { DESTINATION, PASSPHRASE, CONFIRM } = result;

    if (PASSPHRASE !== CONFIRM) {
      console.clear();
      console.log(
        chalk.white.bgRed.bold(' Loci ') +
          chalk.white.bgBlack.bold(
            ' Repeat passphrase for ' +
              DESTINATION +
              ' does not match! Try again...\n'
          )
      );
      process.exit();
    }

    const outputHash = createHash(DESTINATION + PASSPHRASE);
    const withTypes = addTypes(outputHash);

    clipboardy.writeSync(withTypes);

    console.clear();
    console.log(
      chalk.white.bgGreen.bold(' Loci ') +
        chalk.white.bgBlack.bold(
          ' Strong password for ' + DESTINATION + ' copied to clipboard!\n'
        )
    );
    process.exit();
  }, 500);
})();

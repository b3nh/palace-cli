const inquirer = require('inquirer');
const chalk = require('chalk');

module.exports = async function properties() {
  const a1 = await inquirer.prompt({
    prefix: chalk.white.bgGreen.bold(' Loci '),
    type: 'input',
    name: 'DESTINATION',
    message: chalk.white.bgBlack('Which room do you wish to enter?'),
  });

  const { DESTINATION } = a1;

  const a2 = await inquirer.prompt([
    {
      prefix: chalk.white.bgGreen.bold(' Loci '),
      type: 'password',
      name: 'PASSPHRASE',
      mask: '*',
      message: chalk.white.bgBlack(
        'You open the door for ' +
          DESTINATION +
          ', describe what you see inside?'
      ),
    },
  ]);

  const a3 = await inquirer.prompt([
    {
      prefix: chalk.white.bgRed.bold(' Loci '),
      type: 'password',
      name: 'CONFIRM',
      mask: '*',
      message: chalk.white.bgBlack('Repeat what you see exactly:'),
    },
  ]);

  const { PASSPHRASE } = a2;
  const { CONFIRM } = a3;

  return { DESTINATION, PASSPHRASE, CONFIRM };
};

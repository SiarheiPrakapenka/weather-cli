import chalk from 'chalk'
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
  console.log(
    dedent(`
      ${chalk.bgCyan(' HELP ')}
      Without params - return weather
      -s [CITY] for setting the city
      -h to return help
      -t [API_KEY] for setting the token
    `)
  );
};

export { printError, printSuccess, printHelp }
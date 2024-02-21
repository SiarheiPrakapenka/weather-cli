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

const printWeather = (res) => {
  console.log(
    dedent(`
      ${chalk.bgYellow(' WEATHER ')}
      🏙️ City: ${res.name}, ${res.sys.country}
      ${res.weather[0].main}, ${res.weather[0].description}
      🌡️ Temperature: ${res.main.temp}°C
      🧪 Pressure: ${res.main.pressure}hPa
      💧 Humidity: ${res.main.humidity}%
      🌫️ Wind: ${res.wind.speed}
    `)
  );
};

export { printError, printSuccess, printHelp, printWeather }
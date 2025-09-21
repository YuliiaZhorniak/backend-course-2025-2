const { URL } = require('url');
const date = '202302';      
const time_period = 'm';     
const base = 'https://bank.gov.ua';
const path = '/NBUStatService/v1/statdirectory/inflation';

const url = new URL(path, base);
url.searchParams.set('period', time_period);
url.searchParams.set('date', date);

if (url.search) {
  url.search += '&json';
} else {
  url.search = '?json';
}

console.log(url.toString());

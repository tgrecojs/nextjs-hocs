import dayjs from 'dayjs';

const formatNumber = num =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

const numberFormatted = (number = 0) =>
  number === 0
    ? 0
    : number < 1000
    ? '< 0.0001'
    : number > 1000
    ? Number(parseFloat(parseFloat(number)).toFixed(0)).toLocaleString()
    : '< 0.0001';

const fortmatUSD = () => {};

export { formatNumber, numberFormatted };

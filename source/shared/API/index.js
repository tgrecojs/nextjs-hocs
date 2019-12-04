import fetch from 'isomorphic-unfetch';

const fetchData = async (query = 'TIME_SERIES_WEEKLY&symbol=MSFT') => {
  const response = await fetch(
    `${process.env.ALPHA_API_ENDPOINT}/query?function=${query}&apikey=${process.env.ALPHA_API_KEY}`
  );
  console.log(' response #####', response);
  const data = await response.body.json();
  console.log('data #####', data);
  return data;
};

const altFetch = (query = 'TIME_SERIES_WEEKLY&symbol=MSFT') => {
  return fetch(
    `${process.env.ALPHA_API_ENDPOINT}/query?function=${query}&apikey=${process.env.ALPHA_API_KEY}`
  )
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(res => {
      console.log('after parsed', res);
      return res;
    })
    .catch(err => err);
};

export { fetchData, altFetch };

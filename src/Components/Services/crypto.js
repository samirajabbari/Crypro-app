const BACIC_Address = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-xf78BdD5Y3cQnppUVvt3oXq4";

function CryptoApi(page, currency) {
  return `${BACIC_Address}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`;
}
function SearchApi(search) {
  return `${BACIC_Address}/search?query=${search}&x_cg_demo_api_key=${API_KEY}`;
}
export { CryptoApi,SearchApi };

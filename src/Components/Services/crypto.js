const BACIC_Address = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-xf78BdD5Y3cQnppUVvt3oXq4";

function CryptoApi() {
  return `${BACIC_Address}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`;
}
export { CryptoApi };

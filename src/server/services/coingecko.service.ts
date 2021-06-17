import CoinGecko from 'coingecko-api';


const coinGeckoClient = new CoinGecko();

export default class CoinGeckoService {

  get = async () => {

    const result = await coinGeckoClient.coins.all()

    return result;

  }



}
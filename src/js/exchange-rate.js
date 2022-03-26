export default class CurrencyConverter {
  static async exchangeRate(selectedCurrency, usdAmount) {
    try {
      const API_KEY = process.env.API_KEY;
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/USD/${selectedCurrency}/${usdAmount}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}
export default class CurrencyConverter {
  static async exchangeRate(selectedCurrency, usdAmount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${selectedCurrency}/${usdAmount}`);
    }
  }
}
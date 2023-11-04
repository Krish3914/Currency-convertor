function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(response => response.json())
    .then(data => {
      const exchangeRate = data.rates[toCurrency];
      const convertedAmount = (amount * exchangeRate).toFixed(2);
      // document.write("\n");
      document.getElementById("result").textContent = `\n ${amount} ${fromCurrency} is same as ${convertedAmount} ${toCurrency}`;
    })
    .catch(error => {
      console.error("Error fetching exchange rates:", error);
      document.getElementById("result").textContent = "Error converting currency. Enter a Valid Input !!";
    });
}

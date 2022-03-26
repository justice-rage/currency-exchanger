import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './js/exchange-rate';

function clearFields() {
  $('#usd').text("");
  $('.showErrors').text("");
  $('.showConversionRate').text("");
}

function getElements(response) {
  if (response) {
    const selectedCurrency = (response.target_code);
    const usdConverted = (response.conversion_result);
    $('.showConversionRate').append(`Your USD amount equates to ${usdConverted} ${selectedCurrency}`);
  } else {
    $('.showErrors').text(`Error: ${response}`);
  }
}

async function makeApiCall(selectedCurrency, usdAmount) {
  const response = await CurrencyConverter.exchangeRate(selectedCurrency, usdAmount);
  getElements(response);
}

$(document).ready(function() {
  $('#usdAmount').click(function() {
    const usdValue = $('#usd').val();
  });
});

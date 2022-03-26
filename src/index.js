import CurrencyConverter from './js/exchange-rate';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function clearFields() {
  $('#usd').text("");
  $('.showErrors').text("");
  $('.showConversionRate').text("");
}

$(document).ready(function() {
  $('#usdAmount').click(function() {
    const usdValue = $('#usd').val();
  });
});
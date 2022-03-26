import CurrencyConverter from './js/exchange-rate';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#usdAmount').click(function() {
    const usdValue = $('#usd').val();

  function getElements(response) {
      $('.showConversionRate').text(`${usdValue} USD converted to ${response.main.conversion_rates}%`);
    }
  });
});
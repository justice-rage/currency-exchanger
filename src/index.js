import CurrencyConverter from './js/exchange-rate';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#usdAmount').click(function() {
    const usdValue = $('#usd').val();
    $('#usd').val("");

    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

  function getElements(response) {
      $('.showConversionRate').text(`${usdValue} USD converted to ${response.main.conversion_rates}%`);
    }
  });
});

// Event handlers
const handleOrder = function() {
  const notes = $('textarea').val().toLowerCase();
  if (notes.includes('vegan')) {
    alert('Warning: Our cheesecakes contain dairy!');
  } else {
    const quantity = $('select[name="quantity"]').val();
    const topping = $('input[name="topping"]:checked').parent().text().trim();
    const orderDetails = `<p>Thank you! Your order has been placed</p>
                         <p>Quantity: ${quantity}</p>
                         <p>Topping: ${topping}</p>
                         <p>Notes: ${notes}</p>`;
    $('form').html(orderDetails);
  }
};

const handleMonthDropdownShow = function() {
  $('.month-dropdown').show();
};

const handleMonthDropdownHide = function() {
  $(this).hide();
};

const handleMonthSelect = function() {
  const month = $(this).text();
  $('#month-display').text(month);
  $('.month-dropdown').hide();
};

// Set up event listeners when document is ready
$(document).ready(function() {
  $('#orderButton').click(handleOrder);
  $('.dropdown-trigger').on('mouseover', handleMonthDropdownShow);
  $('.month-dropdown').mouseleave(handleMonthDropdownHide);
  $('.month-select').click(handleMonthSelect);
});

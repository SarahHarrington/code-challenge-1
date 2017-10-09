$(document).ready(readyNow);

function readyNow() {
  $('.generate').on('click', generateDiv);
  $('div').on('click', '.swap', swapColors);
  $('div').on('click', '.delete', deleteBlock);
}

var generateClicks = 0;

function generateDiv() {
  generateClicks += 1;
  $('#blockHolder').append('<div class="block">' +
    '<p class="counter">' + generateClicks + '</p>' +
    '<button class="swap">Swap</button>' +
    '<button class="delete">Delete</button>' + '</div>');
}

function swapColors() {
  $(this).parent().toggleClass('block');
}

function deleteBlock() {
  $(this).parent().remove();
}

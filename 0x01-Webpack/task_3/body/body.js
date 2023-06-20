import $ from 'jquery';
import _ from 'lodash';
import './body.css'

$('body').append('<div></div>');
$('div').append('<button>Click here to get started</button>');
$('div').append('<p id="count"> </p');


let count = 0;

function updateCounter() {
    count += 1;
    $('#count').html(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));

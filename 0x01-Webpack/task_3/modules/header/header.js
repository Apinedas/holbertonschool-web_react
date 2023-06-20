import $ from 'jquery';
import hbtn_logo from '../assets/holberton-logo.jpg'
import './header.css'

$('body').append('<header></header>');
$('header').append(`<img src=${hbtn_logo} width=200px height=200px alt="Hbtn logo">`);
$('header').append('<h1>Holberton Dashboard</h1>');
console.log('Init header');

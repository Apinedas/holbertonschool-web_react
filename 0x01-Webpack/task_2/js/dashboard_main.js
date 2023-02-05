import $ from "jquery"
import _ from "lodash"
import "../css/main.css"

$("body").append(`
    <p>Holberton Dashboard</p>
    <p>Dashboard data for the students</p>
    <button>Click here to get started</button>
    <p id='count'></p>
    <p>Copyright - Holberton School</p>`)

function updateCounter() {
    let count = parseInt($("#count").html());
    if (count) {
        count += 1;
    } else {
        count = 1;
    }
    $("#count").empty()
    $("#count").append(count);
}

$("button").on("click", _.debounce(updateCounter, 500));

$("body").prepend(`<div id=logo></div>`);
$("#logo").css("width", "200px")
$("#logo").css("height", "200px")
$("#logo").css("background-image", "url(../assets/holberton-logo.jpg)")
$("#logo").css("background-size", "200px")

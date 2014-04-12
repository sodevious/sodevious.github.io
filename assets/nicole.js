$(document).ready(function() {
    $.get('http://www.codecademy.com/', function(data) {
        $("#data").text(data);
    });
// Make your API request:
var apiUrl = "http://www.codecademy.com/";
//put the correct method where the underscore is:
$.get(apiUrl, function(data) {

});

});

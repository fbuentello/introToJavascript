// Code goes here

$(document).ready(function() {


    var JSON_URL = 'http://beta.json-generator.com/api/json/get/4yi7jDSVe';

    $.a
    // Get URL
    $.getJSON(JSON_URL, function(jsonData) {

        // puts name into html tag
        var makeListItem = function makeListItem(text) {
            return "<li>" + text + "</li>";
        };

        // Array that will hold names(in html format)
        var names = [];

        // Documentation http://underscorejs.org/#each
        _.each(jsonData, function(obj) {


            var location = '';

            // TODO: Show "city,state" if showLocation is true
                // set to location variable

            // Convert object's name to html
            var htmlObj = makeListItem(obj.name + location);


            // TODO: Add to NAMES array

        });

        // Combine Array to one big string
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
        var finalHTMLNames = names.join("");

        // add finalHTMLNames to html element
        $('#API').append(finalHTMLNames);
    });

});
// Runs when document is ready
$(document).ready(function() {


  var jsonData = [{
    name: "laboris amet",
    longitude: "-96.610434",
    latitude: "-61.558906"
  }, {
    name: "in nisi",
    longitude: "132.082613",
    latitude: "0.693002"
  }, {
    name: "occaecat officia",
    longitude: "-25.098646",
    latitude: "-42.213335"
  }, {
    name: "velit nulla",
    longitude: "144.479591",
    latitude: "46.671075"
  }, {
    name: "officia cillum",
    longitude: "115.698335",
    latitude: "-14.202141"
  }];

  // puts name into html tag
  var makeListItem = function makeListItem(text) {
    return "<li>" + text + "</li>";
  };

  // Array that will hold names(in html format)
  var NAMES = [];

  // Documentation http://underscorejs.org/#each
  _.each(jsonData, function(obj) {

    // Convert object's name to html
    var htmlObj = makeListItem(obj.name);

    // TODO: Add to NAMES array

  });

  // Combine Array to one big string
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  var finalHTMLNames = NAMES.join("");

  // add finalHTMLNames to html element
  $('#HardCoded').append(finalHTMLNames);

});
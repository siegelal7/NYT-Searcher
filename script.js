$(document).ready(function () {
  var apiKey = "RUN0H2sWaFCGb2vhcbToOvKXcrDt3l8R";
  // console.log("test");
  var inputValue = $("#keyword");
  var numberOfArticles = $("#number-of-articles");
  var startYear = $("#start-year");
  var endYear = $("#end-year");
  var searchBtn = $("#search-btn");
  var clearBtn = $("#clear-btn");

  searchBtn.on("click", function (event) {
    event.preventDefault();
    var entryValue = inputValue.val();
    // console.log("clicked submit");
    // console.log(inputValue.val());
    var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${entryValue}&api-key=${apiKey}`;
  });
});

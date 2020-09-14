$(document).ready(function () {
  var apiKey = "RUN0H2sWaFCGb2vhcbToOvKXcrDt3l8R";
  // console.log("test");
  var inputValue = $("#keyword");
  var numberOfArticles = $("#number-of-articles");
  var startYear = $("#start-year");
  var endYear = $("#end-year");
  var searchBtn = $("#search-btn");
  var clearBtn = $("#clear-btn");
  var searchResults = $("#search-results");

  searchBtn.on("click", function (event) {
    event.preventDefault();
    var entryValue = inputValue.val();
    // console.log("clicked submit");
    // console.log(inputValue.val());
    var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${entryValue}&api-key=${apiKey}`;
    var urlCond = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${entryValue}&api-key=${apiKey}&fq=pub_year:${startYear.val()}`;
    var urlCondBoth = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${entryValue}&api-key=${apiKey}&fq=pub_year:(${startYear.val()} ${endYear.val()})`;
    if (startYear.val() == "" && endYear.val() == "") {
      $.ajax({
        url: url,
        method: "GET",
      }).then(function (response) {
        searchResults.empty();
        var articles = response.response.docs;
        //   console.log(response);
        for (i = 0; i < parseInt(numberOfArticles.val()); i++) {
          console.log(articles[i]);
          var ul = $("<ul>");
          var newArticle = $("<a>");
          newArticle.text(articles[i].abstract);
          newArticle.attr("href", articles[i].web_url);
          newArticle.attr("target", "_blank");
          searchResults.append(ul);
          ul.append(newArticle);
        }
      });
    } else if (endYear.val() == "" && startYear.val() !== "") {
      $.ajax({
        url: urlCond,
        method: "GET",
      }).then(function (r) {
        searchResults.empty();
        var articles = r.response.docs;
        //   console.log(response);
        for (i = 0; i < parseInt(numberOfArticles.val()); i++) {
          console.log(articles[i]);
          var ul = $("<ul>");
          var newArticle = $("<a>");
          newArticle.text(articles[i].abstract);
          newArticle.attr("href", articles[i].web_url);
          newArticle.attr("target", "_blank");
          searchResults.append(ul);
          ul.append(newArticle);
        }
      });
    } else if (endYear.val() !== "" && startYear.val() !== "") {
      searchResults.empty();
      console.log("both");
    }
  });
});

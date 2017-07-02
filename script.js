$(document).ready(function () {
  $.get("sentence.html", function (response) {
    $("#sentences").html(response);
  });

  $.get("this_doesnt_exist.html", function (data) {
    // This will not be called because the .html file request doesn't exist
    doSomethingGood();
  }).fail(function (error) {
    // This is called when an error occurs
    console.log('Something went wrong: ' + error);
  });

  var url = "https://api.github.com/repos/rails/rails/commits?sha=82885325e04d78fb7ec608a4670164d842d23078";

  $.get(url)
    .done(function (data) {
      console.log("Done");
      console.log(data);
    });

});

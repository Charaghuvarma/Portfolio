$(document).ready(function() {
  $("#page1").one("click", function() {
    $("#page2").load("pro1.html");
    $("#page1").css("display", "none");
    $("#page2").css("display", "block");
  });
});
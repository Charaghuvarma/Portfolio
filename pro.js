document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("click", function() {
    // Hide the first page
    var page1 = document.querySelector("#page1");
    page1.style.opacity = "0";
    page1.style.pointerEvents = "none";

    // Show the second page
    var page2 = document.querySelector("#page2");
    page2.style.opacity = "1";
    page2.style.pointerEvents = "auto";
  });
});

$(document).ready(function() {
  $(document).click(function() {
    // Load the content of page2.html into the #page2 div
    $("#page2").load("pro1.html");
    // Hide the first page
    $("#page1").css("display", "none");
    // Show the second page
    $("#page2").css("display", "block");
  });
});
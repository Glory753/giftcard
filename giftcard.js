$(function() {
    $("#orderButton").click(function() {
        $("#orderModal").modal("show");
     });
    $("#loginButton").click(function() {
        $("#loginModal").modal("show");
    });
    $("#orderButton").click(function() {
        $("#orderModal").modal("hide");
    });
    $("#loginButton").click(function() {
        $("#loginModal").modal("hide");
    });  
});
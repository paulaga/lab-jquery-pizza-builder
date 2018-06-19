// Write your Pizza Builder JavaScript in this file.
$(function(){
  $("#pizza > section:not(.crust), .sauce-white").hide();
  $("#pizza section:last-child").removeClass("crust-gluten-free");
  $("aside li").hide();

  $("button").removeClass("active");

  $(".btn-pepperonni").click(function(){
    $(this).toggleClass("active");
    $(".pep").fadeToggle();
    $("aside li:nth-child(1)").fadeToggle();
  });
  
  $(".btn-mushrooms").click(function(){
    $(this).toggleClass("active");
    $(".mushroom").fadeToggle();
    $("aside li:nth-child(2)").fadeToggle();
  });

  $(".btn-green-peppers").click(function(){
    $(this).toggleClass("active");
    $(".green-pepper").fadeToggle();
    $("aside li:nth-child(3)").fadeToggle();
  });

  $(".btn-sauce").click(function(){
    $(this).toggleClass("active");
    $(".sauce-white").fadeToggle();
    $("aside li:nth-child(4)").fadeToggle();
  });

  $(".btn-crust").click(function(){
    $(this).toggleClass("active");
    $("section.crust").toggleClass("crust-gluten-free");
    $("aside li:nth-child(5)").fadeToggle();
  });

});
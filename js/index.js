console.log("Your index.js file is loaded correctly!");


$('.test').on("click", function(e){
    e.preventDefault();
    var targetHref = $(this).attr('href');
    
  $('html, body').animate({
      scrollTop: $(targetHref).offset().top
  }, 1000);
  
});

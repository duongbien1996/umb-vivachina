$(document).ready(function () {
    $(".nav-menu-button").click(function () {
        $(".mobile-menu").slideToggle();
        $(this).toggleClass("open-menu");

    }); 
    $(".mobile-menu li.multi-level").append("<span class='plus-icon'></span>");
      $(".mobile-menu li.multi-level span").click(function(){
            $(this).toggleClass("plus-icon").toggleClass("minus-icon");
            $(this).prev().slideToggle();
           
      });      
    $('.search-icon').click(function () {
        if ($('#search').val().trim() == "") {
             $('#search').css("border-bottom", "1px solid #cb004c");
            return;
        }
        else {
            $(".form-search ").submit();
        }
    })
    $('.search-icon-mobile').click(function () {
        if ($('#search-mobile').val().trim() == "") {
            $('#search-mobile').css("border-bottom", "1px solid #cb004c");
            return;
        }
        else {
            $(".form-search-mobile").submit();
        }
    })    
  
});
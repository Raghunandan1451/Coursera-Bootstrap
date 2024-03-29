$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 500 } );
    $("#carouselButton").click(function(){
        if($(this).children('span').hasClass('fa-pause')){
            $("#mycarousel").carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if($(this).children('span').hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    $('#loginButton').click(function() {
        $('#loginModal').modal('toggle');
    });
    $('#myReserveButton').click(function() {
        $('#myReserveModal').modal('toggle');
    });
});
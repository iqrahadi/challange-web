$(document).ready(function(){
    $('.carousel').slick({
    slidesToShow: 3,
    dots:true,
    centerMode: true,
    }); 
    document.getElementsByClassName("slick-prev")[0].innerHTML="<img style='width:10px;height:20px' src='https://www.pinclipart.com/picdir/big/379-3797829_chevron-left-icon-png-download-arrow-png-transparent.png'/>"
    document.getElementsByClassName("slick-next")[0].innerHTML="<img style='width:10px;height:20px' src='https://www.pinclipart.com/picdir/big/379-3797829_chevron-left-icon-png-download-arrow-png-transparent.png'/>"
});



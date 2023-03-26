$(document).ready(function(){
    function show() {
        $('.copied').addClass('show');
    }

    function hide() {
        $('.copied').removeClass('show');
    }

    $(".copy-btn").click(function(){
        $("#text").select();
        document.execCommand("copy");
        show();
        setTimeout(hide,800);
    });


$('.generate-btn').click(function(ß){
    var length = 12,
    charSet = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:"<>?-=[];',./~`,
    randPass = '';

    for (var i =0; i < length; i++) {
        var randNum = Math.floor(Math.random()*charSet.length);
        randPass += charSet.substring(randNum, randNum+1);
    }
    $('#text').val(randPass);
});

});
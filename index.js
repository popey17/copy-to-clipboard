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
});
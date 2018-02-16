$(document).ready(function(){
    $.post("https://api.mekatrotekno.com/checkVersion", {bundle_id: "com.omk.club", verison: 2.1}, function (data) {
        if (JSON.parse(data).status == "failed"){
            $(window).attr('location', 'update.html');
        }
    });
});
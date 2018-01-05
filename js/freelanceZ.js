function loadDoc() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("demo").innerHTML = this.responseText;
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };
    xhttp.open("GET", "https://api.mekatrotekno.com/announcements", true);
    xhttp.send();
    function myFunction(arr) {
        var out = "";
        var i;
        for(i = 0; i < arr.length; i++) {
            //out +=  "<div class='row back' id='" + arr[i].id + "'>  <span>" + arr[i].title + "</span>   </div> <div class='bos25'></div>";
            out += '<div class="row bos35" id="'+ arr[i].id +'"> ' +
                '<div class="col-12"> ' +
                '<div class="borderRadius" > ' +
                '<div class="img"> ' +
                ' <img class="indexImg" src="https://api.mekatrotekno.com/imagestore/news/' + arr[i].image + '.png" alt=""> ' +
                ' <p>'+ arr[i].title +'</p> ' +
                '</div> ' +
                '</div> ' +
                '</div> ' +
                '</div> ';

        }
        document.getElementById("newsfeed").innerHTML = out;
    }
}

loadDoc();
$().ready(function () {
    var url = "http://115.159.97.137:8080/weather";
    alert(url);
    $.ajax({
        crossDomain:true,
        url:url,
        /*async:false,*/
        type:'GET',
        dataType:'JSON',
        success:function (data) {
            var temp = document.getElementById("temp");
            var hum = document.getElementById("hum");
            var press = document.getElementById("press");
            var air = document.getElementById("air");
            var n1 = document.createTextNode(data.temp);
            var n2 = document.createTextNode(data.hum);
            var n3 = document.createTextNode(data.press);
            var n4 = document.createTextNode(data.air);
            temp.appendChild(n1);
            hum.appendChild(n2);
            press.appendChild(n3);
            air.appendChild(n4);
        },
        error:function () {
            alert("ERROR");
        }
    })
})

$(document).ready(function(){

    var mode = localStorage.getItem('mode');
    var time;
    $("#current-mode").text(localStorage.getItem('mode'));
    $("#current-user").text(localStorage.getItem('user'));
    $("#status").hide();
    $("#next").hide();

    if(mode=='easy'){
        time = 15;
    }else if(mode=="medium"){
        time = 10;
    }else {
        time = 1;
    }


    $.ajax({
        url :'https://marcconrad.com/uob/smile/api.php?out=json',
        method : 'GET',
        'Access-Control-Allow-Headers': '*',
    }).done((res) =>{
        console.log(JSON.parse(res).question);
        $("#game-image").attr('src', JSON.parse(res).question)
    })

    var countDownDate = new Date().getTime() + time * 60 * 1000;

// Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for hours, minutes and seconds
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("target-time").innerHTML =  hours + ":"
            + minutes + ":" + seconds;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("target-time").innerHTML = "00:00";
            $("#status").show();
            $("#next").show();
        }
    }, 1000);

});
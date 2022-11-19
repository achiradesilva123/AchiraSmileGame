function login(){
    var email = $('#login-email').val();

    var sendInfo = {
        email: email,
    };

    $.ajax({
     url :'http://localhost:8080/api/v1/user',
     method : 'POST',
     contentType: "application/json; charset=utf-8",
     data: JSON.stringify(sendInfo)
    }).done((res) =>{
        if(!res.status)
            alert(res.message);

        window.location.href = "../selectMode/mode.html"
        $.cookie("user",res.data);
    })

}
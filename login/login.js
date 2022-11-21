
function saveData(user){
    // localStorage.setItem('user',user);
    localStorage.setItem('userId',user.userId);
    localStorage.setItem('email',user.email);
    window.location.href = "../selectMode/mode.html"
}


function login(){
    var email = $('#login-email').val();
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    var sendInfo = {
        email: email,
    };

    $.ajax({
     url :'http://localhost:8080/api/v1/user',
     method : 'POST',
     contentType: "application/json; charset=utf-8",
     data: JSON.stringify(sendInfo)
    }).done((res) =>{

        if(res.status)
           saveData(res.data)

            Toast.fire({
                icon: 'error',
                title: res.message
            })



    })

}
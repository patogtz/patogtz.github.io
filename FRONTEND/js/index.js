$('#login_button').on('click', function(){
  // cargar email y password

  json_to_send = {
    "email": $('#email').val(),
    "password" : $('#password').val()
  };

  json_to_send = JSON.stringify(json_to_send);
  console.log(json_to_send)
  $.ajax({
    url: 'https://exfinala01193455.herokuapp.com/users/login',
    // url: 'https://tuapp.herokuapp.com/users/login',
    headers: {
        'Content-Type':'application/json'
    },
    method: 'POST',
    dataType: 'json',
    data: json_to_send,
    success: function(data){
      // guardar token en localstorage o cookie
      localStorage.setItem('token', data.token)
      window.location = './todo.html'
    },
    error: function(error_msg) {
      alert((error_msg["responseText"]));
    }
  });
})
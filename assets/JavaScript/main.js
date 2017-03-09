window.addEventListener('load',function() {
  var loginButton = document.getElementById('button');
  loginButton.addEventListener('click',function(e) {
    e.preventDefault();
    var emailInput = document.getElementById('mail');
    var passwordInput = document.getElementById('pass');
    var validateMail = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/;
    var messageCall = document.getElementById('message');

    if(emailInput.value==""){
      messageCall.innerHTML= "*Este campo es obligatorio";
    }

  });
});

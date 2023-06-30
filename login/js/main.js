function disableScrolling() {
    setTimeout(function() {
        document.body.style.overflow = 'hidden';
    }, 1000);
}
  
function enableScrolling() {
    document.body.style.overflow = '';
}



function validateL(){
    var Evalid = false;
    var Pvalid = false;

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email == '' || email == null){
        console.log('Email empty');
        document.getElementById('email').style.border ='2px solid red';
        document.getElementById('not-valid-email').textContent = 'Email field must not be empty';
    } else{
        Evalid = true;
        document.getElementById('not-valid-email').innerHTML = '';
        document.getElementById('email').style.border ='0px';
    }

    if (password == '' || password == null){
        console.log('Password empty');
        document.getElementById('password').style.border ='2px solid red';
        document.getElementById('not-valid-password').textContent = 'Password field must not be empty';
    } else{
        Pvalid = true;
        document.getElementById('not-valid-password').innerHTML = '';
        document.getElementById('password').style.border ='0px';
    }

    if(Evalid && Pvalid){
        var form = document.getElementById('form');
        var logo = document.getElementById('logo');
        var validfull = document.getElementById('fullyvalid');
        form.style.display = 'none';
        logo.style.display = 'none';
        validfull.style.display = 'flex';
    }
}
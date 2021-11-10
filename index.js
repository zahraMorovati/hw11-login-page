
const username="test@gmail.com";
const password="test1234";

function myFunction() {
    let inputUsername = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;

    if(inputUsername!=username){
        document.getElementById("invalid-username").innerHTML = "invalid username!";
        document.getElementById("invalid-username").style.position="relative";
        document.getElementById("invalid-username").style.color="rgb(228, 43, 43)";
        document.getElementById("invalid-username").style.marginTop="5px";
        document.getElementById("invalid-username").style.marginBottom="-30px";
        document.getElementById("invalid-username").style.marginLeft="40px";
        document.getElementById("username").classList.add('is-invalid');
        document.getElementById("username").style.background="white";
        document.getElementById("username").classList.add('border-danger');

    }

    if(inputPassword!=password){
        document.getElementById("invalid-password").innerHTML = "invalid password!";
        document.getElementById("invalid-password").style.position="relative";
        document.getElementById("invalid-password").style.color="rgb(228, 43, 43)";
        document.getElementById("invalid-password").style.marginTop="10px";
        document.getElementById("invalid-password").style.marginBottom="-25px";
        document.getElementById("invalid-password").style.marginLeft="40px";
        document.getElementById("password").classList.add('is-invalid');
        document.getElementById("password").style.background="white";
        document.getElementById("password").classList.add('border-danger');


    }

    if(inputPassword==password && inputUsername==username){
        window.open("loginSuccesssPage.html");
    }

  }
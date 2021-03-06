function getinfo(){
    let parentname = document.querySelector('#pname').value;
    let childname = document.querySelector('#cname').value;
    let password = document.querySelector('#password').value;


    if (parentname === '' || childname === '' || password === ''){
        document.querySelector('#error').innerHTML = 'Please enter missing information';
        return false;
    }else{
        window.location = ('/signin.html');
    }
}

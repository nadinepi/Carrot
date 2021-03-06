function getinfo(){
    let parentname = document.querySelector('#parentname').value;
    let childname = document.querySelector('#childname').value;
    let password = document.querySelector('#password').value;


    if (parentname === '' || childname === '' || password === ''){
        document.querySelector('#error').innerHTML = 'Please enter missing information';
        return false;
    }else{
        window.location = ('signin.html');
    }
}

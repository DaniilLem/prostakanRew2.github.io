let btnLog = document.querySelector('.login-btn');
let username = document.querySelector('.username');
let password = document.querySelector('.password');
let loginBlock = document.querySelector('.login');
let updatingBlock = document.querySelector('.adding-forms');


btnLog.addEventListener('click', () => {
    console.log(username.value)
    if((username.value == 'admin') && (password.value == 'aofmcksw230wmnnxw02')){
        loginBlock.classList.add('disactive');
        updatingBlock.classList.remove('disactive');
    } else {
        console.log('error')
    }
})
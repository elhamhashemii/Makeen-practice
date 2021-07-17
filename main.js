// Variables
const circles = document.querySelectorAll('.circle');
const circlesArr = Array.from(circles);
const answers = document.querySelectorAll('.show-answer');
const answerArr = Array.from(answers);
const submit = document.querySelector('.sabt-btn');
const modalInput = document.querySelector('.modal-input');
const inputAlert = document.querySelector('.input-alert');

// Responsive Menu
function showMenu(e){
    document.getElementsByClassName('small-menu')[0].style.display = 'block';
    document.querySelector('body').addEventListener('click', (e)=> {
        document.getElementsByClassName('small-menu')[0].style.display = 'none';
        e.stopPropagation()
    }, false);
}

// Working with Modal
submit.addEventListener('click', () => {
    if(modalInput.value === ''){
        submit.className = 'btn btn-block btn-secondary';
        inputAlert.innerText = 'لطفا ایمیل خود را وارد کنید!'
        setTimeout(() => {
            document.location.reload()
        }, 3000);
    }else{
        submit.className = 'btn btn-block btn-success'
        console.log('works')
    }
    setTimeout(() => {
        document.location.reload()
    }, 3000);
})



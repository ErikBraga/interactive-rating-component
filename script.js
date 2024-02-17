const container_1 = document.querySelector('#container');
const container_2 = document.querySelector('#container-2');
const btns = [...document.querySelectorAll('.btn')];
const submit = document.querySelector('.submit-btn');
const span = document.querySelector('.span');
let selecionado = 'false'
let index = ''

const tirarSelecao = () => {
    const selecionado = [...document.querySelectorAll('.clicado')];
    selecionado.map((el) => {
        el.classList.remove('clicado');
    });
}

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', () => {
        tirarSelecao()
        btns[i].classList.add('clicado');
        index = btns[i].textContent;
    })
}

submit.addEventListener('click', () => {
    if(index > 1){
        selecionado = 'true';
    }

    if(selecionado == 'true'){
        span.textContent = `You selected ${index} out of 5`;
        container_1.classList.add('hidden');
        container_2.classList.remove('hidden');
    } else if(selecionado == 'false'){
        window.alert('Feedback note not recorded.');
    }
})


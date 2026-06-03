const btnTema = document.querySelector('#btn-tema');

btnTema.addEventListener('click',() => {   

    document.body.classList.toggle('dark');

    const modoEscuro = document.body.classList.contains('dark');

    btnTema.textContent = modoEscuro ? '☀️Modo Claro!' : '🌙Modo Escuro!';

});
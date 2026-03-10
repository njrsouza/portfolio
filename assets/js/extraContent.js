const secoes = document.querySelectorAll('.section');

secoes.forEach((selecionado) => {

    selecionado.addEventListener('click', (event) => {
        //Aqui pego a extra-content, vejo se está aberta, se sim e foi clicada, adiciona a classe hidden e tira a flex, caso contrário, adiciona a flex e tira a hidden.

        const divFilha = event.currentTarget.querySelector('.extra-content')
        const seta = event.currentTarget.querySelector('img[src*="seta"]');



        if (divFilha) {
            console.log('Filha encontrada:', divFilha);
        }

        const isClosed = divFilha.classList.contains('hidden');

        if (isClosed) {
            divFilha.classList.remove('hidden');
            divFilha.classList.add('flex')
            seta.classList.toggle('rotate-180');
            selecionado.classList.add('bg-[#55569E]', 'border-transparent');
            selecionado.classList.remove('border-white');
        } else {
            divFilha.classList.remove('flex');
            divFilha.classList.add('hidden')
            seta.classList.toggle('rotate-180');
            selecionado.classList.remove('bg-[#55569E]', 'border-transparent');
            selecionado.classList.add('border-white');
        }
    })

})
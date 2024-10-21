// Problema: Verifique se um número é positivo, negativo ou zero.

// a fun
btn_tipoDeNumero.onclick = () => {
    const numero = tipoDeNumero.value;

    if (numero > 0) {
        tipoDeNumero.value = ''
        resultado_tipoDeNumero.innerHTML = `<h5>O numero ${numero} eh positivo</h5>`;
    } else if (numero < 0) {
        tipoDeNumero.value = ''
        resultado_tipoDeNumero.innerHTML = `<h5>O numero ${numero} eh negativo</h5>`;
    } else {
        tipoDeNumero.value = ''
        resultado_tipoDeNumero.innerHTML = '<h5>O numero eh igual a 0</h5>';
    }
}

btn_tipoDeTriangulo.onclick = () => {
    const primeiroLado = ladoA.value;
    const segundoLado = ladoB.value;
    const terceiroLado = ladoC.value;

    if (primeiroLado > 0 && segundoLado > 0 && terceiroLado > 0) {
        if (primeiroLado == segundoLado && primeiroLado == terceiroLado) {
            ladoA.value = '';
            ladoB.value = '';
            ladoC.value = '';
            resultado_tipoDeTriangulo.innerHTML = 'O triangulo eh equilatero';
        } else if (primeiroLado == segundoLado || primeiroLado == terceiroLado || segundoLado == terceiroLado) {
            ladoA.value = '';
            ladoB.value = '';
            ladoC.value = '';
            resultado_tipoDeTriangulo.innerHTML = '<h5>O triangulo eh isosceles</h5>';
        } else {
            ladoA.value = '';
            ladoB.value = '';
            ladoC.value = '';
            resultado_tipoDeTriangulo.innerHTML = '<h5>O triangulo eh escaleno</h5>';
        }
    } else {
        ladoA.value = '';
        ladoB.value = '';
        ladoC.value = '';
        alert('Favor digitar um lado valido');
    }
}

btn_anoBissexto.onclick = () => {
    ano = anoBissexto.value;

    if (ano.value > 1000 && ano < 3000) {
        if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
            anoBissexto.value = '';
            resultado_anoBissexto.innerHTML = `O ${ano} eh bissexto`;
        } else {
            anoBissexto.value = '';
            resultado_anoBissexto.innerHTML = `O ${ano} nao eh bissexto`;
        }
    } else {
        anoBissexto.value = '';
        alert = 'Favor digite um ano valido.';
    }
}

btn_maiorNumero.onclick = () => {
    numeros = [numero1.value, numero2.value, numero3.value];
    const maiorNumero = Math.max(...numeros);
    resultado_maiorNumero.innerHTML = `<h5>O  ${
        maiorNumero == numeros[0] ? 'primeira' : maiorNumero == numeros[1] ? 'segundo' : 'terceiro'} 
        (${maiorNumero}) eh o maior numero</h5>`;

    //     || 
    //SOLUCA ALTERNATIVA

    // const primeiroNumero = numero1.value;
    // const segundoNumero = numero2.value;
    // const terceiroNumero = numero3.value;

    // if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
    //     resultado_maiorNumero.innerHTML = `<h5>O primeiro numero (${primeiroNumero}) eh o maior numero;</h5>`
    // } else if (segundoNumero> primeiroNumero && segundoNumero > terceiroNumero) {
    //     resultado_maiorNumero.innerHTML = `<h5>O segundo numero (${segundoNumero}) eh o maior numero</h5>`;
    // } else {
    //     resultado_maiorNumero.innerHTML = `<h5>o terceiro numero (${terceiroNumero}) eh o maior numero</h5>`;
    // }
}

btn_parOuImpar.onclick = () => {
    const numero = parOuImpar.value;

    if (numero % 2 == 0) {
        resulltado_parOuImpar.innerHTML = `<h5>O ${numero} eh par</h5>`;
    } else {
        resulltado_parOuImpar.innerHTML = `<h5>O ${numero} eh impar</h5>`;
    }
}

btn__precoTotal.onclick = () => {
    const precoUn = preco.value;
    const qtd = quantidade.value;
    let precoFinal;
    let total;

    if (precoUn > 0 && qtd > 0) {
        if (qtd > 10) {
            precoFinal = (0.9 * precoUn);
            total = precoFinal * qtd;

            resultado_precoTotal.innerHTML =
                `<h5>Desconto: 10%</h5>;
            <h5>Preco unitario: ${precoFinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>;
            <h5>Total: ${total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>`;
        } else {
            precoFinal = Number(precoUn);
            total = precoUn * qtd;

            resultado_precoTotal.innerHTML =
                `<h5>Desconto: 0%</h5>
            <h5>Preco unitario: ${precoFinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>;
            <h5>Total: ${total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>`;
        }
    }
}

btn__vogalOuConsoante.onclick = () => {
    const letras = /[a-zA-Z]/;
    const vogais = /[aeiouAEIOU]/;

    if (letras.test(letra.value)) {
        if (vogais.test(letra.value)) {
            resultado_vogalOuConsoante.innerHTML = `<h5>a letra "${letra.value}" é uma vogal.</h5>`;
        } else {
            resultado_vogalOuConsoante.innerHTML = `<h5>a letra "${letra.value}" é uma consoante.</h5>`;
        }
    } else {
        alert('Favor digitar uma letra.');
    }
}

btn__notaConceito.onclick = () => {
    const nota = Number(notaConceito.value);

    if(nota >= 0 && nota <= 100) {
        if (nota < 20) resultado_notaConceito.innerHTML = `<h5>A sua ${nota} corresponde à F</h5>`;
        else if (nota < 40) resultado_notaConceito.innerHTML = `<h5>A sua ${nota} corresponde à D</h5>`;
        else if (nota < 60) resultado_notaConceito.innerHTML = `<h5>A sua ${nota} corresponde à C</h5>`;
        else if (nota < 80) resultado_notaConceito.innerHTML = `<h5>A sua ${nota} corresponde à B</h5>`;
        else resultado_notaConceito.innerHTML = `<h5>A sua ${nota} corresponde à A</h5>`;
    } else alert('Digite uma nota de 0 à 100.')
}

btn__diaDaSemana.onclick = () => {
    const numero = Number(diaDaSemana.value);

    if (numero > 0) {
        switch (numero % 7) {
            case 1:
                resultado_diaDaSemana.innerHTML = `<h5>O número ${numero} corresponde à segunda-feira.</h5>`;
                break;

            case 2:
                resultado_diaDaSemana.innerHTML = `<h5>O número ${numero} corresponde à terça-feira.</h5>`;
                break;

            case 3:
                resultado_diaDaSemana.innerHTML = `<h5>O número ${numero} corresponde à quarta-feira.</h5>`;
                break;

            case 4:
                resultado_diaDaSemana.innerHTML = `<h5>O número ${numero} corresponde à quinta-feira.</h5>`;
                break;

            case 5:
                resultado_diaDaSemana.innerHTML = `<h5>O número ${numero} corresponde à sexta-feira.</h5>`;
                break;

            case 6:
                resultado_diaDaSemana.innerHTML = `<h5>O número ${numero} corresponde à sábado.</h5>`;
                break;

            case 0:
                resultado_diaDaSemana.innerHTML = `<h5>O número ${numero} corresponde à domingo.</h5>`;
                break;

        }
    } else alert('Digite um número maior que 1.');
}

btn__impostoDeRenda.onclick = () => {
    const rendimento = Number(impostoDeRenda.value);
    let totalAPagar = 0;

    if (rendimento >= 24511.93) {
        if (rendimento <= 33919.80) {
            totalAPagar = rendimento * 0.075;
            resultado_impostoDeRenda.innerHTML = `
                <h5>Alíquota: 7,5%</h5>
                <h5>Dedução: R$ 1.838,39</h5>
                <h5>Total: ${totalAPagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>`;
        } else if (rendimento <= 45012.60) {
            totalAPagar = rendimento * 0.15;
            resultado_impostoDeRenda.innerHTML = `
                <h5>Alíquota: 15,0%</h5>
                <h5>Dedução: R$ 4.382,38</h5>
                <h5>Total: ${totalAPagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>`;
        } else if (rendimento <= 55976.16) {
            totalAPagar = rendimento * 0.225;
            resultado_impostoDeRenda.innerHTML = `
                <h5>Alíquota: 22,5%</h5>
                <h5>Dedução: R$ 7.758,32</h5>
                <h5>Total: ${totalAPagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>`;
        } else {
            totalAPagar = rendimento * 0.275;
            resultado_impostoDeRenda.innerHTML = `
                <h5>Alíquota: 27,5%</h5>
                <h5>Dedução: R$ 10.557,13</h5>
                <h5>Total: ${totalAPagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>`;
        }
    } else if (rendimento > 0) resultado_impostoDeRenda.innerHTML = `<h5>Serviço não disponível.</h5>` 
    else alert('Digite uma renda válida.')
}
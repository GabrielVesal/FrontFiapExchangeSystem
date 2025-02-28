// importando os objetos
import { produtos, contas } from "./objetos.js";


// Montando os cards dos produtos

// pegar no HTML a div para criar o grid de produtos;
const gridProdutos = document.querySelector('#gridProdutos');

// percorrer o array de objetos e para cada ocorrência, será montado um card
produtos.forEach(produto => {
    gridProdutos.innerHTML += `
    <div class="col-md-6 col-lg-4 my-3">
        <div class="card">
            <img src="${produto.banner}" class="card-img-top" alt="${produto.nome}">
            <div class="card-body">
                <h4 class="card-title text-center">${produto.nome}</h4>
                <p>Descrição: ${produto.descricao}</p>
                <p>Trocar por: ${produto.trocar}</p>
                <a href="#" class="btn btn-primary w-100">Mais informações</a>
            </div>
        </div>
    </div>
    `
})
// Fim Montando os cards dos produtos


// Popular o campo de contas

// Pegando o select da página
const tipoConta = document.querySelector('#tipoConta');

// percorrer o array e para cada ocorrência vamos criar um option recebendo o valor do array
contas.forEach(conta => {
    tipoConta.innerHTML += `
            <option class="formatar-conta" value="${conta}">${conta}</option>    
    `
})
// Finalizando Popular o campo de contas

// Passando os dados do formulário para a tabela


// passar o formulário para o JS
// precisamos detectar quando o envio(submit) acontece - evento é disparado.
// Listener fica escutando todos os eventos do usuário (submit)
// criar uma função 
// passar o como parâmetro para dentro função - CANCELAR ESSE EVENTO

document.querySelector('#dadosConta').addEventListener('submit', function(e){
    e.preventDefault();

    // Recuperar o tbody que receberá os dados digitados
    const tbody = document.querySelector('tbody');

    //recuperar os campos 
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
    ];

    // criar uma tr
    const tr = document.createElement('tr');

    // percorrer o array de campos, para cada elemento ele criará uma td
    campos.forEach(campo => {
        // criar um td
        const td = document.createElement('td');

        //passar para a td, o conteúdo que foi digitado no campo
        td.textContent = campo.value;

        if(campo.type === 'date'){
            const data  = new Date(campo.value);
            td.textContent = data.toLocaleDateString('pt-BR');
        }

        //colocar a td dentro da tr
        tr.appendChild(td);
    })
    
    // colocar a tr criada no tbody
    tbody.appendChild(tr);

    // limpando o form
    this.reset();
   
})
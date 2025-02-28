// pegando o id
const idUsuario = document.getElementById('usuario');
console.log(idUsuario);


// retornar o primeiro elemento que encontrar
const idCabecalho = document.querySelector('#cabecalho')
console.log(idCabecalho);

//pegar classes CSS
const classFormControl = document.getElementsByClassName('form-control');
console.log(classFormControl);
console.log(classFormControl[1]);


// querySelectorAll - retorna todos os elementos da página encontrados
const classFormLabel = document.querySelectorAll('.form-label');
console.log(classFormLabel);
console.log(classFormLabel[1]);
console.log(classFormLabel[1].textContent);

// Mudando um conteúdp de texto no HTML 
// classFormLabel[1].textContent = 'Data de Nascimento';

// pegando tags
const tagDiv = document.getElementsByTagName('div');
console.log(tagDiv);

const tagInput = document.querySelectorAll('input');
console.log(tagInput);
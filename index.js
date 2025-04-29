// prompt('Digite um número') caixinha de mensagem que vai sair na tela para o usuário, sempre entre "aspas"
// Number(prompt('Digite um número')) o Number vai transformar o prompt em número
// const numero = Number(prompt('Digite um número'))  Estou atribuindo um valor para a constante número.
// Ex:
//  const numero = Number(prompt('Digite um número')) ´diz-se: a constante número recebe "=" o valor do prompt e o transforma em número.

// Bom-dia

const turno = prompt('Digite manhã, tarde ou noite')

const turno = prompt('Digite manhã, tarde ou noite').toLowerCase()
//O ".toLowerCase()" vai transformar tudo em letra maiúscula para facilitar a vida do usuário.

 if (turno === 'manhã') {         // Se("if") o turno for igual,tanto em valor ,quanto número igual a 'manhã' 
    alert('Bom dia!')             // a mensagem sairá como 'Bom dia!'
 } else if (turno === 'tarde') {  // Se não ("else if") o turno for igual,tanto em valor ,quanto número igual a 'tarde' 
    alert('Boa tarde!')           //a mensagem sairá como 'Boa tarde!'
 } else {                         // Se nenhum dos dois já citados 
   alert('Boa noite!')            //a mensagem sairá como 'Boa noite!'
 }                                // Fecha comando


const opcao = prompt('Digite 1 para ver perfil, 2 para editar e 3 para sair')


switch (opcao) {
    case'1':
        alert('Você escolheu ver perfil') //bloco de construção
        break
    case'2':
        alert('Você escolheu editar perfil') //bloco de construção
        break
    case'3':
        alert('Você escolheu sair') //bloco de construção
        break
    default:
        alert('Escolha uma opção válida')
    
}
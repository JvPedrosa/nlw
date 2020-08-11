// Procurar o  botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos. qual?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Limpar os campos. quais?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo
    fields.forEach(function(field) {
        //pegar o field do momento e limpa
        field.value = ""
    })

    // Colocar na página. onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}

    

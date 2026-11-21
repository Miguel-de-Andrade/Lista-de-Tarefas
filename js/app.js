const fromulario = document.getElementById("form-tarefa")
const campoTrefa = document.getElementById("tarefa")
const listaTarefas = document.getElementById("lista-tarefas")

fromulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();

    const texto = campoTrefa.value.trim();

    if(texto == ""){
        return; 
    }

    const linha = document.createElement("tr")
    const celulaTarefa = document.createElement("td")

    celulaTarefa.textContent = texto
    linha.appendChild(celulaTarefa)

    listaTarefas.appendChild(linha)

    const celulaStatus = document.createElement("td")
    const caixa = document.createElement("input")
    caixa.type = "checkbox"

    celulaStatus.appendChild(caixa)
    linha.appendChild(celulaStatus)

    caixa.addEventListener("change", () =>{

        if(caixa.checked){
            celulaTarefa.style.textDecoration = "line-through"
        }else{
            celulaTarefa.style.textDecoration = "none"
        }
    })

    const celulaRemover = document.createElement("td")
    btnRemover = document.createElement("button")

    btnRemover.type = "button"
    btnRemover.textContent = "Remover"

    btnRemover.addEventListener("click", () =>{
        linha.remove();
    })

    celulaRemover.appendChild(btnRemover)
    linha.appendChild(celulaRemover)

    campoTrefa.value = "";
    campoTrefa.focus();
})


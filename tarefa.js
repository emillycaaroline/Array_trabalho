
var dadosLista = [];
var date = [];

function salvarUser(){
    let tarefa = document.getElementById("tarefa").value;
    let data = document.getElementById("data").value;

    if(tarefa){
        dadosLista.push(tarefa);
        date.push(data);
        criarLista();
        document.getElementById('tarefa').value = '';
        document.getElementById('data').value = '';

    }

}

//TAREFA

function criarLista(){
    let tabela = document.getElementById('tabela').innerHTML =  '<tr><th>Tarefa: </th><th>data:</th><th>Ações:</th></tr>';

    for(let i = 0;i <= (dadosLista.length - 1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>"+ date[i] +"</td><td><button class='btn btn-outline-primary onclick='editar(this.parentNode.parentNode.rowIndex)'>EDITAR TAREFA</button><button class ='btn btn-outline-danger'onclick='excluir(this.parentNode.parentNode.rowIndex)'>FINALIZADO</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}


// Editar Tarefa

function editar(i){
    document.getElementById('tarefa').value = dadosLista[(i - 1)];
    document.getElementById('data').value = date[(i - 1)];
    dadosLista.splice(dadosLista[(i-1)], 1);
    date.splice(date[(i-1)], 1);
}

 

//  CONCLUIR TAREFA

function excluir(i){
    dadosLista.splice((i-1),1);
    date.splice((i-1),1);
    document.getElementById('tabela').deleteRow(i);
    document.getElementById('tabela').deleteRow(i);

}
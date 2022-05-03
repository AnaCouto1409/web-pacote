import fetch from "node-fetch";

const response = await fetch("https:api.github.com/users/github");
const dados = await response.json();

console.log("nomeCompleto,email,login,senha")
dados.results.forEach(pessoa =>{
    let retorno = pessoa.name.first+" "+pessoa.name.last+";";
    retorno += pessoa.email+",";
    retorno += pessoa.login.username+",";
    retorno += pessoa.login.password;
    console.log(retorno);
});
//trabalhar os dados e transformar em csv
//Debugs para checar codigo

//hackersrank
//codewars
         
const module = require('./database')
class Tabelas{
    constructor(){
        this.Tabelas = tabelas;
    }
    this=criarAulasPraticas();
}
    
     const sql_Schema =` CREATE TABLE IF NOT EXISTS aLUNO( 
        INSERT INTO ALUNO-NOVO(ID, ENDEREÇO, EMAIL, RG, CPF, CIDADE,tipo_carro)
        VALUES
        (1,'Feitosa', 'Rua Bora', 'ana.Feitosa@example.com','148955897','25658778956', 'SAO PAULO', 'corsa'),
        (2,'João Miguel', 'Tomano NOKU', 'João.miguel@example.com','148955897','25658778956', 'Rio de Janeiro', 'moto'),
        (3,'Pão Nunes', 'Rua Quincas Borbas', 'borbas.borbas@example.com','1914485556','1254589713', 'SAO PAULO', 'caminhoneta'), 
        )`
    const clientes_Schema =`CREATE TABLE IF NOT EXISTS Cliente(
        ID_ALUNO PRIMARY KEY,
        nome VARCHAR(30),
        CPF VARCHAR (30),
        EMAIL TEXT,
        RG INTERGER,
        TELEFONE INT NOT NULL
    )`

function createTableAluno(){
    db.run(ALUNO_SCHEMA, error => {
        if(error){
            console.log(error);
        }
    })
}

function createTableClientes(){
    db.run(clientes_Schema,error =>{
        if(error){
            console.log(error)
        }
    })
}
db.serialize(()=>{
    createTableAluno();
    createTableClientes();
})
class Tabelas {

    init(alunos) {
        console.log("tabelas foram chamadas")
        this.criarAulas = this.criarAulas

        this.criarAulasTeoricas()
        this.criarAulasPraticas()
    }

    criarAulas() {
        const sql = `CREATE TABLE IF NOT EXISTS Atendimentos (
            id INT NOT NULL AUTO_INCREMENT,
             nome_aluno varchar(30),
             professor_id NOT NULL,
              data datetime NOT NULL, 
              dataCriacao datetime NOT NULL, 
              email varchar(30) NOT NULL, 
              cidade VARCHAR (30) NOT NULL,
              RG INTERGER  PRIMARY KEY(id)) `
    
            
        this.conexao.query(sql, (erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('tabela criada com sucesso')
            }
        }))
    }
}

module.exports = new Tabelas
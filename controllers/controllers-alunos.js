import db from '../infra/alunos-clientes';
import db from '../infra/clientes';
import clientes from '../controllers/cliente-controller';
import AlunoDAO from '../DAO/AlunoDao';
import res from 'express/lib/response.js';

const clienteDAO = new AlunosDAO(db);

export default class controllersAlunosController {
    
    static async selectAlunos(req, res) {
        try {
            let ALUNO = await AlunoDAO.selectAlunos();
            res.json(ALUNO);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    static async selectAlunos(req, res) {
        const id = req.params.id;

        try {
            let ALUNO = await AlunoDAO.selectAlunos(id);
            res.status(200).json(ALUNO);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async insertAluno(req, res) {
        const body = req.body;
        const aluno = new aluno(body.nome, body.cpf, body.idade, body.email, body.telefone);

        try {
            let result = await AlunoDAO.insertAluno(aluno);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async updateAluno(req, res) {
        const ALUNO = req.body;

        try {
            let result = await AlunoDAO.updateAluno(ALUNO);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async deleteAluno(req, res) {
        const id = req.params.id;

        try {
            let result = await AlunoDAO.deleteAluno(id);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}
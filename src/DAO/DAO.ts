const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123456',
    port: 5432,
  });

class DAO{
     public async inserirAluno(alunos: Array<IAluno>){
        try {
            await client.connect()
            for (const aluno of alunos) {
                await client.query(`INSERT INTO alunos (nome) VALUES ($1)`, [aluno?.nome])
            }
            client.end()
        } catch (error: any) {
            console.error('Erro ao inserir os nomes dos alunos no banco de dados:', error.message);
        }
    }
}

module.exports = new DAO()
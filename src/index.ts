/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";


dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	const readline = require("readline")
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	})


	let alunos: Array<IAluno> =[]

	const inserirAlunos = (quantidade: number, contador = 0): void => {
		if (contador < quantidade) {
			rl.question(`Digite o nome do aluno ${contador + 1}: `, (nome: IAluno) => {
				if (isNaN(quantidade)) {
					console.log('Número inválido, tente novamente!');
					inserirAlunos(quantidade, contador);
				} else {
					alunos.push(nome);
					inserirAlunos(quantidade, contador + 1);
				}
		    });
		} else {
	
		  rl.close();
	  
		}
	};
	inserirAlunos(3)
	const DAO = require("./DAO/DAO")
	rl.on("close",()=>{
		DAO.inserirAluno(alunos)

	})
});
	



const express = require ("express");

const app = express();

app.use(express.json());

const aluno = [{ id: 1, nome: "mario",sobrenome:"regio" ,email:"mario@gmail.com",datanascimento:"23/12/2000",matricula:"123"}];

app.get("/aluno", (req, res) => {
  return res.json(aluno);
});



app.post("/aluno", (req, res) => {
  const { id, nome,sobrenome,email,datanascimento,matricula } = req.body;

  const aluno = {
    id:"1",
    nome:"jose",
    sobrenome:"campos",
    email: "jose@gmail.com",
    datanascimento:"21/04/2001",
    matricula:"12345"

  };

  alunos.push(aluno);

  return res.json(aluno);
});



const alunos = [];


app.listen(8080);
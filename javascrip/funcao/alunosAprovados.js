const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 7,
		turma: '2C',
	},
	{
		nome: 'Bruna',
		nota: 3,
		turma: '2C',
	},
];

function alunoAprovado(alunos, media){

	let aprovados = [];

	for (let i =0; i < alunos.length; i++){
		let {nota,nome} = alunos[i];
		if (nota >= media){
			aprovados.push(nome);
		}
	}
	return aprovados;
}


console.log(alunoAprovado(alunos, 7));
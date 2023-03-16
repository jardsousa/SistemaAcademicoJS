class DisciplinaControlador {
    constructor() {
        this.DisciplinaServico = new DisciplinaServico();
    }

    inserir() {
        const nomeDisciplina = document.querySelector("#nome").value;
        const codigoDisciplina = Number(document.querySelector("#codigo").value);
        const disciplina = this.DisciplinaServico.inserir(codigoDisciplina, nomeDisciplina);
        if(disciplina){
            this.mostrarDisciplinaNoHTML(codigoDisciplina,nomeDisciplina);
            alert('Disciplina inserida com sucesso!');
        }
        else{
            alert('Código de disciplina já existente')
        }
        
        } 
    

    mostrarDisciplinaNoHTML(codigo, nome) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${codigo} - ${nome}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerDisciplinaDaLista(codigo);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoP);
    }

    removerDisciplinaDaLista(codigo) {
        this.DisciplinaServico.remover(codigo);
    }

    //inserirAlunoNaDisciplina(nome, idade, codigo){
    //    const aluno = new Aluno (nome,idade);
    //    this.DisciplinaServico.inserirAluno(aluno, codigo);
    //}

}
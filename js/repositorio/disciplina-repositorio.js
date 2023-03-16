class DisciplinaRepositorio {
    constructor() {
        this._disciplinas = [];
    }

    inserir(disciplina) {
        this._disciplinas.push(disciplina);
        return disciplina;
    }

    remover(codigo) {
        const indxRemocao = this._disciplinas.findIndex(disciplina=> disciplina.codigo === codigo);
        this._disciplinas.splice(indxRemocao, 1);
    }

    listar() {
        return this._disciplinas;
    }


    buscarPorCodigo(codigo) {
        return this._disciplinas.filter(disciplina => disciplina.codigo === codigo);
    }

    inserirAlunoNaDisciplina(codigo, nome){
        this.Disciplina

    }

    
}
class DisciplinaServico{
    constructor(){
        this._disciplinaRepositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome){
        const disciplina = new Disciplina(codigo,nome);
        return this._disciplinaRepositorio.inserir(disciplina);

    }


    remover(codigo){
        this._disciplinaRepositorio.remover(codigo);

    }
    
    listar(){
        return this._disciplinaRepositorio.listar()
    }

    buscarPorCodigo(){
        return this._disciplinaRepositorio.buscarPorCodigo(codigo)
    }



}
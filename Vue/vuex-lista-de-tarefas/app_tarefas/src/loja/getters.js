export default {

  listaTarefas: state => {
    let lista = state.tarefas.slice()
    return lista.reverse()
  },

  buscaTarefas: state => termo => {
    let resultado = []
    if (termo != '') {
      for (let i = 0; i < state.tarefas.length; i++) {
        if (state.tarefas[i].indexOf(termo) > -1)
          resultado.push(state.tarefas[i])
      }
    }
    return resultado
  }

}
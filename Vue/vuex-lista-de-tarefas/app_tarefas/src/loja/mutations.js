export default {
  ADD_TAREFA: (state, valor) => {
    state.tarefas.push(valor)
  },
  DEL_TAREFA: (state, valor) => {
    let posicao = state.tarefas.indexOf(valor)
    if (posicao > -1)
    state.tarefas.splice(posicao, 1)
  },
}
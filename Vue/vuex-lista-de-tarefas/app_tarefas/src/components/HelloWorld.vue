<template>
  <div class="hello">
    
    <!-- <div>Acessando State =  {{ $store.state.pessoa.cpf }}</div> -->
    <Tarefas/>
  </div>
</template>

<script>
import	Tarefas	from	'./Tarefas.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    Tarefas,
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

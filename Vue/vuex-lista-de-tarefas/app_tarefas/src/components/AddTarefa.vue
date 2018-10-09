<template>
  <div class="hello">
   <!--  <p>Adicionando Valores</p> -->
    <input type="text" v-model="tarefa">
    <button v-on:click="adicionar()">ADD</button>
  
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return { tarefa: "" };
  },
  props: {
    msg: String
  },
  methods: {
    adicionar() {
      if (this.tarefa) {
        //this.$store.commit("ADD_TAREFA", this.tarefa);
        this.$store.dispatch('adicionarTarefa', this.tarefa)
        this.tarefa = "";
      }
    }
  }
};
</script>

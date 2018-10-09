<template>
  <div class="hello">
    <!-- <p>Removendo Valores</p> -->
    <button v-on:click="apagar()">DEL</button>
  
  </div>
</template>

<script>
export default {
  name: "lv-deltarefa",
  props: {
    tarefa: {
      required: true,
      type: String
    }
  },
  methods: {
    apagar() {
      // this.$store.commit("DEL_TAREFA", this.tarefa);
      this.$store.dispatch('removerTarefa',	this.tarefa)
    }
  }
};
</script>

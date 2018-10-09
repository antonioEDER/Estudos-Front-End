<template>
  <div class="hello">
    <LvAddtarefa/>
    <ul>
        <li	v-for="tarefa	in	tarefas">
            <LvDeltarefa	:tarefa="tarefa"/>
            {{	tarefa	}}
        </li>
    </ul>
    <div>
      <p><LvBusca/></p>
    </div>
  </div>
</template>

<script>
import LvDeltarefa from "./DelTarefa.vue";
import LvAddtarefa	from	'./AddTarefa.vue'
import LvBusca from	'./Busca.vue'
export default {
  name: "lv-tarefas",
  components: { LvDeltarefa, LvAddtarefa, LvBusca },
  computed: {
    tarefas() {
      return this.$store.getters.listaTarefas;
    }
  }
};
</script>

<template>
  <div id="main">

    <TheMenu />

    <div id="content">
      <div class="container">
        <h2>Abertura de Chamados</h2>
        
      </div>
    </div>
  </div>
</template>

<script>

import TheMenu from "@/components/TheMenu.vue";
import setActiveMenu from "@/mixins/setActiveMenu.js";

export default {
  name: 'ChamadosView',
  components: {   
    TheMenu
  },
  mixins: [setActiveMenu],
  data(){
        return{
          
        }
    },
    methods: {
                       
    }, 
    mounted() {      
      this.setActiveMenu('chamados')
    }
}
</script>

<style lang="scss" scoped>


</style>

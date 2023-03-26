<template>
  <div id="main">

    <TheMenu />

    <div id="content">
      <div class="container">
        <h2>Status</h2>
        
      </div>
    </div>
  </div>
</template>

<script>

import TheMenu from "@/components/TheMenu.vue";
import setActiveMenu from "@/mixins/setActiveMenu.js";

export default {
  name: 'StatusView',
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
      this.setActiveMenu('status')
    }
}
</script>

<style lang="scss">

#main{
  display: flex;
  
  #content{
    width: 100%;

    .container{
      width: 80%;      
      margin: auto;
      background: #fff;

      h2, h3, p, ul, label{
        color: $preto;
      }

      form{
        background: transparent;
        padding: 0;
        margin: 0;
        border-radius: 0

        select{
          color: $preto;
          border: 1px solid #666 !important;
          padding: 7px 15px;
          border-radius: 50px;
        }
      }

    }
  }

}

</style>

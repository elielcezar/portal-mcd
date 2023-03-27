<template>
  <div id="main">

    <TheMenu />

    <div id="content">
      <div class="container">
        <h2>Tutoriais</h2>

        <div class="tutoriais">

          <div class="item">
            <div class="img">
              <img src="@/assets/foto-tutorial.jpg" alt="">
            </div>
            <div class="info">
              <h3>Chamado aberto com sucesso!</h3>
              <span class="tempo">00:00</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis quam sed nulla auctor.</p>
            </div>
          </div><!-- item -->

          <div class="item">
            <div class="img">
              <img src="@/assets/foto-tutorial.jpg" alt="">
            </div>
            <div class="info">
              <h3>Chamado aberto com sucesso!</h3>
              <span class="tempo">00:00</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis quam sed nulla auctor.</p>
            </div>
          </div><!-- item -->

          <div class="item">
            <div class="img">
              <img src="@/assets/foto-tutorial.jpg" alt="">
            </div>
            <div class="info">
              <h3>Chamado aberto com sucesso!</h3>
              <span class="tempo">00:00</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis quam sed nulla auctor.</p>
            </div>
          </div><!-- item -->

          <div class="item">
            <div class="img">
              <img src="@/assets/foto-tutorial.jpg" alt="">
            </div>
            <div class="info">
              <h3>Chamado aberto com sucesso!</h3>
              <span class="tempo">00:00</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis quam sed nulla auctor.</p>
            </div>
          </div><!-- item -->

        </div>        
      </div>
    </div>
  </div>
</template>

<script>

import TheMenu from "@/components/TheMenu.vue";
import setActiveMenu from "@/mixins/setActiveMenu.js";

export default {
  name: 'TutoriaisView',
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
      this.setActiveMenu('tutoriais')
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

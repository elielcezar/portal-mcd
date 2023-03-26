<template>
  <div id="main">

    <TheMenu />

    <div id="content">
      <div class="container">
        <h2>Promos</h2>
        
        <div class="itens-accordion"> 
          
          <div class="item">
            <div class="panel-title active" @click="handleAccordion()">Clássico do Dia  |  Vídeo</div>
            <div class="panel-cont active">
              <div class="img">
                <img src="@/assets/foto-promo-1.jpg" alt="">
                </div>              
                <form action="">
                  <div class="form-item flex">
                    <label for="">Iniciar em:</label>
                    <input type="date" id="start-1" name="trip-start-1" value="2023-03-24" min="2018-01-01" max="2023-03-24">
                  </div>
                  <div class="form-item flex">
                    <label for="">Terminar em:</label>
                    <input type="date" id="start-2" name="trip-start-2" value="2023-03-24" min="2018-01-01" max="2023-03-24">
                  </div>
                  <div class="form-item">
                    <button class="btn encerrar">Encerrar</button>
                  </div>
                </form>
            </div>
          </div><!-- item -->

          <div class="item">
            <div class="panel-title" @click="handleAccordion()">Free Refil</div>
            <div class="panel-cont">
                <div class="img">
                  <img src="@/assets/foto-promo-1.jpg" alt="">
                </div>              
                <form action="">
                  <div class="form-item flex">
                    <label for="">Iniciar em:</label>
                    <input type="date" id="start-1" name="trip-start-1" value="2023-03-24" min="2018-01-01" max="2023-03-24">
                  </div>
                  <div class="form-item flex">
                    <label for="">Terminar em:</label>
                    <input type="date" id="start-2" name="trip-start-2" value="2023-03-24" min="2018-01-01" max="2023-03-24">
                  </div>
                  <div class="form-item">
                    <button class="btn encerrar">Encerrar</button>
                  </div>                  
                </form>
            </div>
          </div><!-- item -->

          <div class="item">
            <div class="panel-title" @click="handleAccordion()">Clássico do Dia  |  Vídeo</div>
            <div class="panel-cont">
              <div class="img">
                <img src="@/assets/foto-promo-2.jpg" alt="">
                </div>              
                <form action="">
                  <div class="form-item flex">
                    <label for="">Iniciar em:</label>
                    <input type="date" id="start-1" name="trip-start-1" value="2023-03-24" min="2018-01-01" max="2023-03-24">
                  </div>
                  <div class="form-item flex">
                    <label for="">Terminar em:</label>
                    <input type="date" id="start-2" name="trip-start-2" value="2023-03-24" min="2018-01-01" max="2023-03-24">
                  </div>
                  <div class="form-item">
                    <button class="btn encerrar">Encerrar</button>
                  </div>
                </form>
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
import handleAccordion from "@/mixins/handleAccordion.js";

export default {
  name: 'PromosView',  
  components: {   
    TheMenu
  },  
  mixins: [setActiveMenu, handleAccordion],
  data(){
        return{
          
        }
    },
    methods: {

    }, 
    mounted() {
      this.handleAccordion(),
      this.setActiveMenu('promos')
    }
}
</script>

<style lang="scss" scoped>
.itens-accordion{
  .item{
    .panel-cont{
      
      .img{        
        margin-right: 5%;
      }
      form{
        width: 48%;

        button{
          display: inline-block;
          max-width: 200px;
        }
      }

    }
  }
}
</style>

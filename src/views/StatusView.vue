<template>
  <div id="main">

    <TheMenu />

    <div id="content">
      <div class="container">
        <h2>Status</h2>

        <div class="lista-telas">
          
          <div class="item">
            <h3>Tela 1</h3>
            <span class="status online">Online</span>
          </div>
          <div class="item">
            <h3>Tela 2</h3>
            <span class="status offline">Offline</span>
          </div>
          <div class="item">
            <h3>Tela 3</h3>
            <span class="status online">Online</span>
          </div>
          <div class="item">
            <h3>Tela 4</h3>
            <span class="status online">Online</span>
          </div>
          <div class="item">
            <h3>Tela 5</h3>
            <span class="status online">Online</span>
          </div>
          
        </div><!-- telas -->


        <div class="itens-accordion"> 
          
          <div class="item">
            <div class="panel-title" @click="handleAccordion()">Tela 1</div>
            <div class="panel-cont">
              <div class="img">
                <img src="@/assets/foto-promo-1.jpg" alt="">
                </div>              
                <form action="">
                  <div class="form-item">
                    <p><strong>Status:</strong> <span class="status online">Online</span>
                    </p>
                  </div>                  
                  <div class="form-item">
                    <button class="btn ligar">Ligar</button>
                  </div>
                  <div class="form-item">
                    <button class="btn reiniciar">Reiniciar</button>
                  </div>
                </form>
            </div>
          </div><!-- item -->

          <div class="item">
            <div class="panel-title active" @click="handleAccordion()">Tela 2</div>
            <div class="panel-cont active">
              <div class="img">
                <img src="@/assets/foto-promo-1.jpg" alt="">
                </div>              
                <form action="">
                  <div class="form-item">
                    <p><strong>Status:</strong> <span class="status offline">Offline</span>
                    </p>
                  </div>                  
                  <div class="form-item">
                    <button class="btn ligar">Ligar</button>
                  </div>
                  <div class="form-item">
                    <button class="btn reiniciar">Reiniciar</button>
                  </div>
                </form>
            </div>
          </div><!-- item -->

          <div class="item">
            <div class="panel-title" @click="handleAccordion()">Tela 3</div>
            <div class="panel-cont">
              <div class="img">
                <img src="@/assets/foto-promo-1.jpg" alt="">
                </div>              
                <form action="">
                  <div class="form-item">
                    <p><strong>Status:</strong> <span class="status online">Offline</span>
                    </p>
                  </div>                  
                  <div class="form-item">
                    <button class="btn ligar">Ligar</button>
                  </div>
                  <div class="form-item">
                    <button class="btn reiniciar">Reiniciar</button>
                  </div>
                </form>
            </div>
          </div><!-- item -->

          <div class="item">
            <div class="panel-title" @click="handleAccordion()">Tela 4</div>
            <div class="panel-cont">
              <div class="img">
                <img src="@/assets/foto-promo-1.jpg" alt="">
                </div>              
                <form action="">
                  <div class="form-item">
                    <p><strong>Status:</strong> <span class="status online">Offline</span>
                    </p>
                  </div>                  
                  <div class="form-item">
                    <button class="btn ligar">Ligar</button>
                  </div>
                  <div class="form-item">
                    <button class="btn reiniciar">Reiniciar</button>
                  </div>
                </form>
            </div>
          </div><!-- item -->

          <div class="item">
            <div class="panel-title" @click="handleAccordion()">Tela 5</div>
            <div class="panel-cont">
              <div class="img">
                <img src="@/assets/foto-promo-1.jpg" alt="">
                </div>              
                <form action="">
                  <div class="form-item">
                    <p><strong>Status:</strong> <span class="status online">Offline</span>
                    </p>
                  </div>                  
                  <div class="form-item">
                    <button class="btn ligar">Ligar</button>
                  </div>
                  <div class="form-item">
                    <button class="btn reiniciar">Reiniciar</button>
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
  name: 'StatusView',
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
      this.setActiveMenu('status'),
      this.handleAccordion()
    }
}
</script>

<style lang="scss" scoped>

#main{
  .container{
    .lista-telas{      
      width: 100%;
      display: flex;
      margin-bottom: 50px;

      .item{
        width: 20%;
        border: 2px solid #838282;
        border-radius: 3px;
        position: relative;
        padding: 7px;

        h3{
          border: 1px solid #a09f9f;
          font-size: 1.5rem;
          text-align: center;
          padding: 50px;
          margin-bottom: 0;     
          font-weight: 500;
        }

        .status{
          display: inline-block;
          position: absolute;            
          bottom: 12px;
          right: 18px;                                   
          padding-left: 18px;
          margin-left: 5px;

          &::before{
            content: '';
            width: 10px;
            height: 10px;
            display: block;
            position: absolute;
            left: 0;
            top: 50%;
            margin-block: -5px;
            border-radius: 50%;
          }
        }

        .status.offline{
          &::before{
            background: red;
          }
        }
        .status.online{
          &::before{
            background: #00b800;
          }
        }

      }
    }

    .itens-accordion{
      form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        .form-item{
          margin: 0 0 15px 15px;
          width: 100%;  
          
          p{
            margin: 0 0 0 5px;

            .status{
              display: inline-block;
              position: relative;
              padding-left: 18px;
              margin-left: 5px;

              &::before{
                content: '';
                width: 12px;
                height: 12px;
                display: block;
                position: absolute;
                left: 0;
                top: 50%;
                margin-block: -7px;
                border-radius: 50%;
              }
            }

            .status.offline{
              &::before{
                background: red;
              }
            }
            .status.online{
              &::before{
                background: #00b800;
              }
            }
          }
          
          button{
            max-width: 200px;
            padding: 7px;
            text-transform: none;
            font-weight: 700;

            &.ligar{
              background: #00b800;
            }
            &.reiniciar{
              background: #ffbb00;
            }
          }
        }
      }
    }
  }
}

</style>

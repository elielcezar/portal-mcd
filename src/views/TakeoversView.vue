<template>
  <div id="main">

    <TheMenu />

    <div id="content">
      <div class="container">
        <h2>Takeovers</h2>

        <div class="itens-accordion"> 
          
          <div class="item">
            <div class="panel-title active" @click="handleAccordion()">Programação 1</div>
            <div class="panel-cont active">                          
                <form action="">

                  <div class="row">
                    <div class="col-1">
                      <div class="form-item flex">
                        <label>Número da loja:</label>            
                        <select name="local" id="local">
                          <option value="BALCAO IPU VERTICAL  |  2 TELAS">Loja 1</option>
                          <option value="BALCAO IPU VERTICAL  |  3 TELAS">Loja 2</option>
                          <option value="BALCAO IPU VERTICAL  |  5 TELAS">Loja 3</option>
                        </select>
                      </div>

                      <div class="form-item flex">
                        <label>Orientação:</label>            
                        <select name="local" id="local">
                          <option value="BALCAO IPU VERTICAL  |  2 TELAS">Horizontal</option>
                          <option value="BALCAO IPU VERTICAL  |  3 TELAS">Vertical</option>                      
                        </select>
                      </div>

                    </div>
                    <div class="col-2">
                      <div class="form-item flex">
                        <label>Responsável:</label>            
                        <select name="local" id="local">
                          <option value="BALCAO IPU VERTICAL  |  2 TELAS">Loja 1</option>
                          <option value="BALCAO IPU VERTICAL  |  3 TELAS">Loja 2</option>
                          <option value="BALCAO IPU VERTICAL  |  5 TELAS">Loja 3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-1">

                      <div class="lista-telas">          
                        <div class="item">
                            <h3>Tela 1</h3>                            
                          </div>
                          <div class="item">
                            <h3>Tela 2</h3>                            
                          </div>
                          <div class="item">
                            <h3>Tela 3</h3>                            
                          </div>
                          <div class="item">
                            <h3>Tela 4</h3>                            
                          </div>                                                           
                        </div><!-- telas -->


                      <div class="lista-telas">          
                        <div class="item">
                            <h3>Tela 1</h3>                            
                          </div>
                          <div class="item">
                            <h3>Tela 2</h3>                            
                          </div>
                          <div class="item">
                            <h3>Tela 3</h3>                            
                          </div>
                          <div class="item">
                            <h3>Tela 4</h3>                            
                          </div>
                          <div class="item">
                            <h3>Tela 5</h3>                            
                          </div>                                            
                        </div><!-- telas -->
                    </div>
                    <div class="col-2">
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
                    </div>
                  </div>

                </form>
            </div>
          </div><!-- item -->

          <div class="item">
            <div class="panel-title" @click="handleAccordion()">Programação 2</div>
            <div class="panel-cont">                          
                <form action="">

                  <div class="row">
                    <div class="col-1">
                      <div class="form-item flex">
                        <label>Número da loja:</label>            
                        <select name="local" id="local">
                          <option value="BALCAO IPU VERTICAL  |  2 TELAS">Loja 1</option>
                          <option value="BALCAO IPU VERTICAL  |  3 TELAS">Loja 2</option>
                          <option value="BALCAO IPU VERTICAL  |  5 TELAS">Loja 3</option>
                        </select>
                      </div>

                      <div class="form-item flex">
                        <label>Orientação:</label>            
                        <select name="local" id="local">
                          <option value="BALCAO IPU VERTICAL  |  2 TELAS">Horizontal</option>
                          <option value="BALCAO IPU VERTICAL  |  3 TELAS">Vertical</option>                      
                        </select>
                      </div>

                    </div>
                    <div class="col-2">
                      <div class="form-item flex">
                        <label>Responsável:</label>            
                        <select name="local" id="local">
                          <option value="BALCAO IPU VERTICAL  |  2 TELAS">Loja 1</option>
                          <option value="BALCAO IPU VERTICAL  |  3 TELAS">Loja 2</option>
                          <option value="BALCAO IPU VERTICAL  |  5 TELAS">Loja 3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-1">                      
                      
                      <div class="lista-telas telas-4">          
                          <div class="item">
                            <h3>Tela 1</h3>                            
                          </div>
                          <div class="item">
                            <h3>Tela 2</h3>                            
                          </div>
                          <div class="item">
                            <h3>Tela 3</h3>                            
                          </div>
                          <div class="item">
                            <h3>Tela 4</h3>                            
                          </div>                                           
                      </div><!-- telas -->

                      <div class="lista-telas  telas-5">          
                          <div class="item">
                            <h3>Tela 1</h3>                            
                          </div>
                          <div class="item">
                            <h3>Tela 2</h3>                            
                          </div>
                          <div class="item">
                            <h3>Tela 3</h3>                            
                          </div>
                          <div class="item">
                            <h3>Tela 4</h3>                            
                          </div>
                          <div class="item">
                            <h3>Tela 5</h3>                            
                          </div>                                            
                      </div><!-- telas -->

                    </div>
                    <div class="col-2">
                      <div class="form-item flex">
                        <label for="">Iniciar em:</label>
                        <input type="date" id="start-1" name="trip-start-1" value="2023-03-24" min="2018-01-01" max="2023-03-24">
                      </div>
                      <div class="form-item flex">
                        <label for="">Terminar em:</label>
                        <input type="date" id="start-2" name="trip-start-2" value="2023-03-24" min="2018-01-01" max="2023-03-24">
                      </div>
                      <div class="form-item">
                        <button class="btn green">Iniciar</button>
                      </div>
                    </div>
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
  name: 'TakeoversView',
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
      this.setActiveMenu('takeovers'),
      this.handleAccordion()
    }
}
</script>

<style lang="scss" scoped>

#main{
  .container{

    .row{
      display: flex;
      width: 100%;      
      .col-1, 
      .col-2{
        width: 50%;
        padding: 2%;
      }
    }

    .row.telas{
      .col-1{
        width: 60%;
      }
      .col-2{
        width: 40%;
        padding-left: 5%;
      }
    }
    .lista-telas{      
      width: 100%;
      display: flex;
      margin-bottom: 25px;

      .item{
        width: 20%;
        border: 2px solid #838282;
        border-radius: 3px;
        position: relative;
        padding: 7px;

        h3{
          border: 1px solid #a09f9f;
          font-size: 1rem;
          text-align: center;
          padding: 20px;
          margin-bottom: 0;     
          font-weight: 500;
          color: #fff;
        }

      }
    }
  }
}
</style>

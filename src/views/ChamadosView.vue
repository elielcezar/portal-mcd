<template>
  <div id="main">

    <TheMenu />

    <div id="content">
      <div class="container">
        <h2>Abertura de Chamados</h2>

        <div class="itens-accordion"> 
          
          <div class="item">
            <div class="panel-title active" @click="handleAccordion()">Chamado 1</div>
            <div class="panel-cont active">                          
                <form action="">                  

                  <div class="row">
                      <div class="form-item flex">
                        <label>Responsável:</label>            
                        <select name="local" id="local">
                          <option value="BALCAO IPU VERTICAL  |  2 TELAS">Fulano</option>
                          <option value="BALCAO IPU VERTICAL  |  3 TELAS">Ciclano</option>                      
                        </select>
                      </div>
                      <div class="form-item flex">
                        <label>Número da loja:</label>            
                        <select name="local" id="local">
                          <option value="BALCAO IPU VERTICAL  |  2 TELAS">Loja 1</option>
                          <option value="BALCAO IPU VERTICAL  |  3 TELAS">Loja 2</option>
                          <option value="BALCAO IPU VERTICAL  |  5 TELAS">Loja 3</option>
                        </select>
                      </div>
                  </div>

                  <div class="row">
                      <div class="form-item flex">
                        <label>Selecione o problema:</label>            
                        <select name="local" id="local">
                          <option value="BALCAO IPU VERTICAL  |  2 TELAS">Problema 1</option>
                          <option value="BALCAO IPU VERTICAL  |  3 TELAS">Problema 2</option>
                          <option value="BALCAO IPU VERTICAL  |  5 TELAS">Problema 3</option>
                        </select>
                      </div>
                  </div>   

                  <div class="row">
                    <div class="col-1">
                      <div class="form-item">
                        <label>Anexar foto/documento:</label>            
                        <input type="file" id="myFile" name="filename">
                      </div>                      
                    </div>
                    <div class="col-2">
                      <div class="form-item flex">
                        <label>Contato:</label>            
                        <input type="text" name="" id="">
                      </div>                                            
                      <div class="form-item flex">
                        <label>Email:</label>            
                        <input type="text" name="" id="">
                      </div>  
                      <div class="form-item flex">
                        <label>Local:</label>            
                        <input type="text" name="" id="">
                      </div>  
                    </div>
                    <div class="col-3">
                      <div class="form-item flex">
                        <label>Data de abertura:</label>            
                        <input type="text" name="" id="">
                      </div>  
                      <div class="form-item flex">
                        <label>Agendamento:</label>            
                        <input type="text" name="" id="">
                      </div>  
                      <div class="form-item">
                        <button class="btn">Abrir chamado</button>
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


.row{
  width: 100%;
  display: flex;
}

</style>

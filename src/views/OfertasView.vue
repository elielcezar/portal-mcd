<template>
  <div id="main">

    <TheMenu />

    <div id="content">
      <div class="container">
        <h2>Ofertas por tempo limitado</h2>
        <form>
          <div class="form-item full">
             <select name="local" id="local">
              <option value="BALCAO IPU VERTICAL  |  2 TELAS">Oferta 1</option>
              <option value="BALCAO IPU VERTICAL  |  3 TELAS">Oferta 2</option>
              <option value="BALCAO IPU VERTICAL  |  5 TELAS">Oferta 3</option>
            </select>
          </div>
          <div class="form-item flex">
            <label>Que locais você deseja atualizar:</label>            
            <select name="local" id="local">
              <option value="BALCAO IPU VERTICAL  |  2 TELAS">BALCAO IPU VERTICAL  |  2 TELAS</option>
              <option value="BALCAO IPU VERTICAL  |  3 TELAS">BALCAO IPU VERTICAL  |  3 TELAS</option>
              <option value="BALCAO IPU VERTICAL  |  5 TELAS">BALCAO IPU VERTICAL  |  5 TELAS</option>
            </select>
          </div>

          <div class="form-item flex">
            <label>Selecione o(s) produtos que deseja atualizar:</label>
            <select name="produtos" id="prodsutos">
              <option value="MCLANCHE - DISNEY">MCLANCHE - DISNEY</option>
              <option value="MCLANCHE - MINIONS">MCLANCHE - MINIONS</option>
              <option value="MCLANCHE - PRINCESAS">MCLANCHE - PRINCESAS</option>
              <option value="MCLANCHE - CARROS">MCLANCHE - CARROS</option>
            </select>
          </div>

          <div class="form-item produto">
            <h3>McLanche Feliz</h3>


            <table>
              <thead>
                <tr>
                  <th>Dia</th>
                  <th>Abrir</th>
                  <th>Fechar</th>
                  <th class="center">Aberto 24h</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="dia">Domingo</td>                  
                  <td class="abrir"><ComboHours /></td>
                  <td class="fechar"><ComboHours /></td>
                  <td class="aberto"><CheckBox /></td>
                </tr>                        
                <tr>
                  <td class="dia">Segunda</td>                  
                  <td class="abrir"><ComboHours /></td>
                  <td class="fechar"><ComboHours /></td>
                  <td class="aberto"><CheckBox /></td>
                </tr>   
                <tr>
                  <td class="dia">Terça-feira</td>                  
                  <td class="abrir"><ComboHours /></td>
                  <td class="fechar"><ComboHours /></td>
                  <td class="aberto"><CheckBox /></td>
                </tr>   
                <tr>
                  <td class="dia">Quarta-feira</td>                  
                  <td class="abrir"><ComboHours /></td>
                  <td class="fechar"><ComboHours /></td>
                  <td class="aberto"><CheckBox /></td>
                </tr>   
                <tr>
                  <td class="dia">Quinta-feira</td>                  
                  <td class="abrir"><ComboHours /></td>
                  <td class="fechar"><ComboHours /></td>
                  <td class="aberto"><CheckBox /></td>
                </tr>   
                <tr>
                  <td class="dia">Sexta-feira</td>                  
                  <td class="abrir"><ComboHours /></td>
                  <td class="fechar"><ComboHours /></td>
                  <td class="aberto"><CheckBox /></td>
                </tr>   
                <tr>
                  <td class="dia">Sábado</td>                  
                  <td class="abrir"><ComboHours /></td>
                  <td class="fechar"><ComboHours /></td>
                  <td class="aberto"><CheckBox /></td>
                </tr>    
              </tbody>
            </table>
          </div>

          <div class="form-item">
            <button class="btn enviar">Enviar</button>
          </div>
          
        </form>       
        
      </div>
    </div>


  </div>
</template>

<script>

import TheMenu from "@/components/TheMenu.vue";
import ComboHours from "@/components/ComboHours.vue";
import CheckBox from "@/components/CheckBox.vue";
import setActiveMenu from "@/mixins/setActiveMenu.js";

export default {
  name: 'OfertasView',
  components: {   
    TheMenu,
    ComboHours,
    CheckBox
  },
  mixins: [setActiveMenu],
  data(){
        return{
          
        }
    },
    methods: {
                       
    }, 
    mounted() {      
      this.setActiveMenu('ofertas')
    }
}
</script>

<style lang="scss" scoped>

#main{   
  #content{
    .container{      
      table{
        td.aberto{
          text-align: center;

          label{
            input{
              margin: auto;
            }
          }
        }
      }
    }
  }

}

</style>

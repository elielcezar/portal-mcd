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
              <tr>
                <th>Dia</th>
                <th>Abrir</th>
                <th>Fechar</th>
                <th>Aberto 24h</th>
              </tr>
              <tr>
                <td>Domingo</td>
                <td>R$0,00</td>
                <td><ComboHours /></td>
                <td><ComboHours /></td>
                <td><input type="checkbox" /></td>
              </tr>                        
              <tr>
                <td>Segunda-feira</td>
                <td>R$0,00</td>
                <td><ComboHours /></td>
                <td><ComboHours /></td>
                <td><input type="checkbox" /></td>
              </tr>   
              <tr>
                <td>Terça-feira</td>
                <td>R$0,00</td>
                <td><ComboHours /></td>
                <td><ComboHours /></td>
                <td><input type="checkbox" /></td>
              </tr>   
              <tr>
                <td>Quarta-feira</td>
                <td>R$0,00</td>
                <td><ComboHours /></td>
                <td><ComboHours /></td>
                <td><input type="checkbox" /></td>
              </tr>   
              <tr>
                <td>Quinta-feira</td>
                <td>R$0,00</td>
                <td><ComboHours /></td>
                <td><ComboHours /></td>
                <td><input type="checkbox" /></td>
              </tr>   
              <tr>
                <td>Sexta-feira</td>
                <td>R$0,00</td>
                <td><ComboHours /></td>
                <td><ComboHours /></td>
                <td><input type="checkbox" /></td>
              </tr>   
               <tr>
                <td>Sábado</td>
                <td>R$0,00</td>
                <td><ComboHours /></td>
                <td><ComboHours /></td>
                <td><input type="checkbox" /></td>
              </tr>   
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
import setActiveMenu from "@/mixins/setActiveMenu.js";

export default {
  name: 'OfertasView',
  components: {   
    TheMenu,
    ComboHours,
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

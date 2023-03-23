<template>
  <div id="main">

    <TheMenu />

    <div id="content">
      <div class="container">
        <h2>Atualizar produtos</h2>
        <form>
          <div class="form-item">
            <label>Que locais você deseja atualizar:</label>
            <select name="local" id="local">
              <option value="BALCAO IPU VERTICAL  |  2 TELAS"></option>
              <option value="BALCAO IPU VERTICAL  |  3 TELAS"></option>
              <option value="BALCAO IPU VERTICAL  |  5 TELAS"></option>
            </select>
          </div>

          <div class="form-item">
            <label>Selecione o(s) produtos que deseja atualizar:</label>
            <select name="produtos" id="prodsutos">
              <option value="MCLANCHE - DISNEY"></option>
              <option value="MCLANCHE - MINIONS"></option>
              <option value="MCLANCHE - PRINCESAS"></option>
              <option value="MCLANCHE - CARROS"></option>
            </select>
          </div>

          <div class="form-item produto">
            <h3>McLanche Feliz</h3>
            <table>
              <tr>
                <th>Nome do Produto</th>
                <th>Valor</th>
                <th>Ativa/Desativar</th>
              </tr>
              <tr>
                <td>Brinquedos</td>
                <td>R$0,00</td>
                <td><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>Brinquedos</td>
                <td>R$0,00</td>
                <td><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>Brinquedos</td>
                <td>R$0,00</td>
                <td><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>Brinquedos</td>
                <td>R$0,00</td>
                <td><input type="checkbox" /></td>
              </tr>
              <tr>
                <td>Brinquedos</td>
                <td>R$0,00</td>
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

export default {
  name: 'MenusView',
  components: {   
    TheMenu
  },
  data(){
        return{
          
        }
    },
    methods: {
                       
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

<template>
  <div id="main">

    <TheMenu />

    <div id="content">
      <div class="container">
        <h2>Atualizar produtos</h2>
        <form>

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

<style lang="scss" scoped>

#main{
  //display: flex;
  
  #content{
   // width: 100%;

    .container{
     
      form{

        /*.form-item.flex{
          display: flex;
          align-items: center;
          width: 100%;
          margin: 0 0 20px 0;

          label{
            width: 50%;  
            margin: 0;          
          }
          select{
              width: 50%;
            }
        }*/
      }

    }
  }

}

</style>

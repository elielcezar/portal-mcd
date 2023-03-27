<template>
  <div id="main">

    <TheMenu />

    <div id="content">
      <div class="container">
        <h2>Programação Liga/Desliga</h2>

        <table>
              <tr>
                <th>Loja</th>
                <th>Horário</th>
                <th>Liga/Desliga</th>                
              </tr>
              <tr>
                <td>Loremipsum</td>                
                <td><ComboHours /> <span>às</span> <ComboHours /></td>
                <td><input type="checkbox" /></td>
              </tr>                        
              <tr>
                <td>Loremipsum</td>
                <td><ComboHours /> <span>às</span> <ComboHours /></td>
                <td><input type="checkbox" /></td>
              </tr>   
              <tr>
                <td>Loremipsum</td>                
                <td><ComboHours /> <span>às</span> <ComboHours /></td>
                <td><input type="checkbox" /></td>
              </tr>   
              <tr>
                <td>Loremipsum</td>                
                <td><ComboHours /> <span>às</span> <ComboHours /></td>
                <td><input type="checkbox" /></td>
              </tr>   
              <tr>
                <td>Loremipsum</td>                
                <td><ComboHours /> <span>às</span> <ComboHours /></td>
                <td><input type="checkbox" /></td>
              </tr>                 
            </table>
        
      </div>
    </div>
  </div>
</template>

<script>

import TheMenu from "@/components/TheMenu.vue";
import ComboHours from "@/components/ComboHours.vue";
import setActiveMenu from "@/mixins/setActiveMenu.js";

export default {
  name: 'ProgramacaoView',
  components: {   
    TheMenu,
    ComboHours
  },
  mixins: [setActiveMenu],
  data(){
        return{
          
        }
    },
    methods: {
                       
    }, 
    mounted() {      
      this.setActiveMenu('programacao')
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

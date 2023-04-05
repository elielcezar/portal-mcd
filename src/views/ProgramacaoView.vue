<template>
  <div id="main">

    <TheMenu />

    <div id="content">
      <div class="container">
        <h2>Programação Liga/Desliga</h2>

        <form>

        <table>
              <thead>
                <tr>
                  <th>Loja</th>
                  <th>Horário</th>
                  <th class="center">Liga/Desliga</th>                
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="loja">Loremipsum</td>                
                  <td class="horario"><ComboHours /> <span>às</span> <ComboHours /></td>
                  <td class="liga-desliga"><CheckBox /></td>
                </tr>                        
                <tr>
                  <td class="loja">Loremipsum</td>                
                  <td class="horario"><ComboHours /> <span>às</span> <ComboHours /></td>
                  <td class="liga-desliga"><CheckBox /></td>
                </tr>  
                <tr>
                  <td class="loja">Loremipsum</td>                
                  <td class="horario"><ComboHours /> <span>às</span> <ComboHours /></td>
                  <td class="liga-desliga"><CheckBox /></td>
                </tr>  
                <tr>
                  <td class="loja">Loremipsum</td>                
                  <td class="horario"><ComboHours /> <span>às</span> <ComboHours /></td>
                  <td class="liga-desliga"><CheckBox /></td>
                </tr>  
                <tr>
                  <td class="loja">Loremipsum</td>                
                  <td class="horario"><ComboHours /> <span>às</span> <ComboHours /></td>
                  <td class="liga-desliga"><CheckBox /></td>
                </tr>  
              </tbody>          
            </table>

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
  name: 'ProgramacaoView',
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
      this.setActiveMenu('programacao')
    }
}
</script>

<style lang="scss">

#main{

  table{
    td.horario{
      display: flex;
      align-items: center;

      span{
        display: inline-block;
        margin: 0 20px;
      }
    }
  }
}

</style>

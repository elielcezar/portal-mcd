<template>
  <div id="menus">  
      <div class="item gerenciador" @click="$router.push('/gerenciador')">
        <p>Gerenciador de Produtos</p>
      </div>
      <div class="item promos" @click="$router.push('/promos')">
        <p>Promos</p>
      </div>
      <div class="item takeovers" @click="$router.push('/takeovers')">
        <p>Takeovers</p>
      </div>
      <div class="item ofertas" @click="$router.push('/ofertas')">
        <p>Ofertas por tempo limitado</p>
      </div>
      <div class="item chamados" @click="$router.push('/chamados')">
        <p>Abertura de chamado</p>
      </div>
      <div class="item tutoriais" @click="$router.push('/tutoriais')">
        <p>Tutoriais</p>
      </div>
      <div class="item programacao" @click="$router.push('/programacao')">
        <p>Programação Liga/Desliga</p>
      </div>
      <div class="item status" @click="$router.push('/status')">
        <p>Status telas</p>
      </div>    
  </div>
</template>

<script>

export default {
  name: "TheMenu",
  data(){
   return{}
  }
}
</script>

<style lang="scss" scoped>

#menus{
    background: $vermelho;
    width: 250px;
    min-width: 250px;
    color: #fff;  
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 0;
    min-height: 100vh;

    @media(orientation:portrait){
      min-height: auto;
      height: 18vh;
      width: 100%;
      flex-direction: row;
      overflow-x: scroll;
      overflow-y: hidden;      
      padding: 15px 0 20px 0;
    }
    
    .item{                            
          width: 100%;
          padding: 15px 0 15px 100px;
          margin: 0;
          display: flex;
          justify-content: flex-start;
          background-size: auto 60px;
          background-position: 1em center;
          background-repeat: no-repeat;
          transition: all .3s;
          text-align: left;    
          cursor: pointer;   
          box-shadow: 0px -2px 4px rgba(0,0,0,.1);
          
          @media(orientation:portrait){
            padding: 4.5em 1em 1em 1em;
            background-position: top center;
            width: 100px;
            min-width: 100px;
            font-size: .7em;
          }
          
          &.gerenciador{            
            background-image: url(@/assets/ico-hamburguer.png);
          }
          &.promos{            
            background-image: url(@/assets/ico-promos.png);
          }
          &.takeovers{            
            background-image: url(@/assets/ico-takeovers.png);
          }
          &.ofertas{            
            background-image: url(@/assets/ico-tempo.png);
          }
          &.chamados{            
            background-image: url(@/assets/ico-chamado.png);
          }
          &.tutoriais{            
            background-image: url(@/assets/ico-tutoriais.png);
          }
          &.programacao{            
            background-image: url(@/assets/ico-ligadesliga.png);
          }
          &.status{            
            background-image: url(@/assets/ico-status.png);
          }

          p{
            font-weight: 700;
            font-size: .9em;
            color: #fff;            
            line-height: 1.1em;
            display: inline-block;                      
            max-width: 110px;
            height: 50px;
            display: flex;
            align-items: center;
            transition: all .3s;

            @media(orientation:portrait){             
              max-width: 100%;
              width: 100%;
              justify-content: center;
              text-align: center;
            }
          }
        }

        .item.active,
        .item:hover{ 
          background-color: #c52519;           
          p{
            color: $amarelo;            
          }
        }

        
  }
</style>
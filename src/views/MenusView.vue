<template>
  <div id="menus">  
    <div class="container">      
      <div class="carrossel">         
            <div class="item gerenciador">
              <p>Gerenciador de Produtos</p>
            </div>
            <div class="item promos">
              <p>Promos</p>
            </div>
            <div class="item takeovers">
              <p>Takeovers</p>
            </div>
            <div class="item ofertas">
              <p>Ofertas por tempo limitado</p>
            </div>
            <div class="item chamados">
              <p>Abertura de chamado</p>
            </div>
            <div class="item tutoriais">
              <p>Tutoriais</p>
            </div>
            <div class="item programacao">
              <p>Programação Liga/Desliga</p>
            </div>
            <div class="item status">
              <p>Status telas</p>
            </div>    
      </div>
   
    </div>
  </div><!-- main -->
</template>

<script>

/*import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';*/

export default {
  name: 'MenusView',
  components: {   
    
  },
  data(){
        return{
          /*settings: {         
            "dots": false,
            "arrows": false,
            "infinite": true,
            "speed": 500,
            "slidesToShow": 5,
            "slidesToScroll": 5,
            "centerMode": true,
            "autoplay": false,
            "responsive": [                  
            {
                "breakpoint": 1360,
                "settings": {
                  "slidesToShow": 5,
                  "slidesToScroll": 5              
                }
              },
              {
                "breakpoint": 480,
                "settings": {
                  "slidesToShow": 3,
                  "slidesToScroll": 3              
                }
              }
            ]
          },*/
        }
    },
    methods: {
                       
    }
}
</script>

<style lang="scss">

#menus{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;  

  .container{        
    max-width: 100%; 
    width: 100%;

    .carrossel{
        display: flex;                
        overflow-x: scroll;
        padding: 20px 0;

        @media(orientation:landscape){
          justify-content: center;
          align-items: center;
        }

        .item{                            
          max-width: 140px;
          min-width: 140px;
          height: 180px;
          margin: 0 10px;
          display: flex !important;
          align-items: center !important;            
          background: $vermelho;
          border-radius: 20px;
          padding: 7em 1em 1em 1em;
          flex-direction: column;
          justify-content: center;
          background-size: auto 100px;
          background-position: center 1em;
          background-repeat: no-repeat;
          transition: all .3s;
          text-align: center;                 

          &:hover{
            flex: 180px;
            max-width: 180px;
            height: 220px;
            padding-top: 10em;
            background-size: auto 150px;
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
            font-size: .85em;
            color: #fff;            
            line-height: 1em;
            display: inline-block;                      
            max-width: 110px;
            height: 50px;
            display: flex;
            align-items: center;
          }
        }
    }

    .carrossel::-webkit-scrollbar-track{			      
      opacity: 0;
      @media(max-width:1300px){        
        background-color: #f5f5f5;
      }
    }
    .carrossel::-webkit-scrollbar{      
      height: 7px;
      background-color: red;
      border-radius: 15px;
      @media(min-width: 1300px){
        display: none;
      }
    }
    .carrossel::-webkit-scrollbar-thumb{			
      -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,.1);
      background-color: $vermelho;
      border-radius: 15px;
      height: 7px;
    }
    
    }      
  }





</style>

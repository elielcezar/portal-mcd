<template>
  <div id="menus">  
    <div class="container">      
      <div class="carrossel">         
          <div class="item">
              <p>Gerenciador de Produtos</p>
            </div>
            <div class="item">
              <p>Promos</p>
            </div>
            <div class="item">
              <p>Takeovers</p>
            </div>
            <div class="item">
              <p>Ofertas por tempo limitado</p>
            </div>
            <div class="item">
              <p>Abertura de chamado</p>
            </div>
            <div class="item">
              <p>Tutoriais</p>
            </div>
            <div class="item">
              <p>Programação Liga/Desliga</p>
            </div>
            <div class="item">
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
      border: 1px solid;
      max-width: 100%; 
      width: 100%;

      .carrossel{
          display: flex;        
          justify-content: center;
          align-items: center;
          overflow-x: scroll;

          .item{        
            flex: 120px;            
            max-width: 120px;
            height: 120px;
            margin: 0 20px;
            display: flex !important;
            align-items: center !important;            
            background: $vermelho;
            border-radius: 20px;
            padding: 1em;                        
            flex-direction: column;
            justify-content: flex-end;            

            p{
              font-weight: 700;
              font-size: .8em;
              color: #fff;
            }
          }
      }
      
      }      
    }



</style>

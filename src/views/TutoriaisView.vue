<template>
  <div id="main">

    <TheMenu />

    <div id="content">
      <div class="container">
        <h2>Tutoriais</h2>

        <div class="tutoriais">

          <div class="item">
            <div class="img">
              <img src="@/assets/foto-tutorial.jpg" alt="">
            </div>
            <div class="info">
              <h3><a href="#">Como alterar o preço de uma tela</a></h3>
              <span class="tempo">00:00</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis quam sed nulla auctor.</p>
            </div>
          </div><!-- item -->

          <div class="item">
            <div class="img">
              <img src="@/assets/foto-tutorial.jpg" alt="">
            </div>
            <div class="info">
              <h3><a href="#">Como alterar o preço de uma tela</a></h3>
              <span class="tempo">00:00</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis quam sed nulla auctor.</p>
            </div>
          </div><!-- item -->

          <div class="item">
            <div class="img">
              <img src="@/assets/foto-tutorial.jpg" alt="">
            </div>
            <div class="info">
              <h3><a href="#">Como alterar o preço de uma tela</a></h3>
              <span class="tempo">00:00</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis quam sed nulla auctor.</p>
            </div>
          </div><!-- item -->

          <div class="item">
            <div class="img">
              <img src="@/assets/foto-tutorial.jpg" alt="">
            </div>
            <div class="info">
              <h3><a href="#">Como alterar o preço de uma tela</a></h3>
              <span class="tempo">00:00</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis quam sed nulla auctor.</p>
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
  name: 'TutoriaisView',
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
      this.setActiveMenu('tutoriais')
    }
}
</script>

<style lang="scss" scoped>

#main{
  display: flex;
  
  #content{
    width: 100%;
    .container{

      .tutoriais{
        display: flex;
        flex-wrap: wrap;

        @media(orientation:portrait){
          flex-direction: column;
        }
        .item{
          display: flex;          
          width: 45%;
          margin-bottom: 40px;
          
          &:nth-child(odd){            
            margin-right: 5%;
          }
          &:nth-child(even){            
            margin-left: 5%;
          }

          @media(orientation:portrait){
            width: 100%;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }

          .img{
            width: 55%;
            margin-right: 5%;
          }
          .info{
            width: 40%;

            h3{
              font-size: 1rem;
              line-height: 1;
              margin: 0 0 5px 0;

              a{
                color: $vermelho;
              }
            }

            span.tempo{
              font-size: .8rem;
              font-weight: bold;
            }

            p{
              margin: 0;
              font-size: .8rem;
              line-height: 1;
            }
          }
        }
      }
     
    }
  }

}

</style>

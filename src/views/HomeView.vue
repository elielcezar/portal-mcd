<template>
  <div id="main">  

    <div class="container">
     
      <form @submit.prevent="handleSubmit" v-if="!savingSuccessful">    

         <div v-if="errors" class="erros">
            <p><strong>Por favor corrija os seguintes erros:</strong> </p>
            <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>        
        </div>
                
        <div class="form-item">
          <label for="Login">Login</label>   
            <input type="text" v-model="login" class="login" />        
        </div>
        <div class="form-item">     
          <label for="Senha">Senha</label>   
            <input type="password" v-model="password" class="password" />        
        </div>               

        <div class="form-item conectado">
            <input type="checkbox" v-model="connected" class="connected" /><label for="connected">Manter-me conectado</label>
        </div>         

        <div v-if="loading" class="form-item">
          <div class="loading">
            <span>Enviando ...</span>
            <img src="@/assets/loading.gif" alt="">
          </div>           
        </div>
        <div v-else class="form-item">
          <button class="btn enviar">Conectar </button>
        </div>
      </form>

    </div>

  </div><!-- main -->
</template>

<script>

export default {
  name: 'HomeView',
  data(){
        return{
            "login": "",
            "password": "",            
            savingSuccessful: false,
            status: null,
            errors: "",
            loading: false
        }
    },
    methods: {
        handleSubmit(){
            /*const dados = {                
                login: this.login,
                password: this.password                
            };*/
            if(this.login && this.password){
              this.loading = true;
              //console.log('loading...');              
              this.$router.push("/menus");
            }else{        
              this.errors = [];      
              if(!this.login){                
                this.errors.push("- Informe seu usuário");
              }
              if(!this.password){
                this.errors.push("- Informe sua senha");
              }
            }              
          }                     
        }
}
</script>

<style lang="scss" scoped>
/*
section{  
  margin-bottom: 100px;
  h2 {
    text-transform: uppercase;
  }    
}*/

#main{
  .container{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  form{
    border-radius: 30px;
    padding: 6em 2em 2em 2em;
    background: $vermelho url(@/assets/ico-mcd.png) center 2em no-repeat;
    max-width: 500px;

    .erros{
      width: 100%;
      border: 1px solid #fff;
      padding: 1em 2em;
      color: #fff;
      margin-bottom: 1em;

      p, ul{
        margin-bottom: 10px;
        color: #fff;
      }
    }

    .form-item{
      width: 100%;
      margin: 0 0 2em 0;  
      
      label{
        color: #fff;
        margin-bottom: 10px;
      }
    }

    .conectado{
      display: flex;
      justify-content: flex-start;
      input{
        width: 25px;
        margin-right: 10px;
      }
      label{
        display: inline-block;        
        padding: 10px 0 0 0;
        color: #fff;
      }      
    }

    button{
        background: $vermelho-escuro;        
      }
  }
}
</style>

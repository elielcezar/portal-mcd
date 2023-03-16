<template>
  <div id="main">  

    <div v-if="errors" class="erros">
        <p><strong>Por favor corrija os seguintes erros:</strong> </p>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
        
      </div>
      <form @submit.prevent="handleSubmit" v-if="!savingSuccessful">            
        <div class="form-item">
            <input type="text" v-model="name" class="nome" placeholder="Seu nome *"/>        
        </div>
        <div class="form-item">        
            <input type="email" v-model="email" class="email" placeholder="Seu email *"/>        
        </div>         
        <div class="form-item">        
            <textarea v-model="message" cols="30" rows="10" placeholder="Sua mensagem *"></textarea>
        </div>            

        <div v-if="loading" class="form-item">
          <div class="loading">
            <span>Enviando ...</span>
            <img src="@/assets/loading.gif" alt="">
          </div>           
        </div>
        <div v-else class="form-item">
          <button class="btn enviar">Enviar <i class="fa-solid fa-paper-plane"></i></button>
        </div>
    </form>
    
   

  </div><!-- main -->
</template>

<script>

import axios from "axios";

export default {
  name: 'HomeView',
  data(){
        return{
            "name": "",
            "email": "",
            "subject": "",
            "message": "",
            savingSuccessful: false,
            status: null,
            errors: "",
            loading: false
        }
    },
    methods: {
        handleSubmit(){
            const dados = {
                webform_id: "contact",
                name: this.name,
                email: this.email,
                subject: "Contato pelo site",
                message: this.message
            };
            if(this.name && this.email && this.message){
              this.loading = true;
              console.log('loading...');
              axios.post('https://eliel.dev/admin/web/webform_rest/submit?api-key=22e4270419275992f36377939ac2e113', dados).then( res => {                
                console.log(res);                
                this.errors = false;                
                this.loading = false;                
                this.savingSuccessful = true;
              }).catch( err => {
                  console.log(err);                
              });  
            }else{        
              this.errors = [];      
              if(!this.name){                
                this.errors.push("Informe o seu nome");
              }
              if(!this.email){
                this.errors.push("Informe o seu email");
              }
              if(!this.message){
                this.errors.push("Escreva a sua mensagem");
              }
            }              
          }                     
        }
}
</script>

<style lang="scss">

section{  
  margin-bottom: 100px;
  h2 {
    text-transform: uppercase;
  }    
}

#main{
  .container{
    max-width: 1300px;    
    margin: auto;
  }
}
</style>

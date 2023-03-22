<template>
  <header>
   <div class="container">    
      <h1>Portal McDonald's</h1>
      <div class="user">
        Seja bem-vindo, Admin
      </div>
   </div>
  </header>  
</template>

<script>

export default {
  name: "TheHeader",
  data(){
   return{}
  }
}
</script>

<style lang="scss" scoped>

header{
  background: #000;
  color: #fff;

  .container{
    display: flex;
    justify-content: space-between;    
  }
  h1{
    font-weight: 400;
    color: #fff;
    font-size: 21px;    
    background-image: url(@/assets/ico-mcd.png), url(@/assets/ico-mm.png);
    background-repeat: no-repeat;    
    background-size: 29px auto, 30px auto;
    background-position: 0px 3px, 37px 4px;    
    display: inline-block;
    margin: 10px;
    padding-left: 75px;
    font-size: 1.3em;

    @media(max-width:768px){
      background-size: 24px auto, 26px auto;
      background-position: 0px 1px, 31px 1px;
      display: inline-block;
      margin: 10px;
      padding: 5px 0 6px 63px;
      font-size: .8em;
      line-height: 1em;
    }
  }
  .user{
    font-size: 1em;
    padding: 13px 20px;

    @media(max-width:768px){
      padding: 14px 10px 10px 0;
      font-size: .7em;
    }
  }
}

</style>

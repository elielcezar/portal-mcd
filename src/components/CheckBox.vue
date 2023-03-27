<template>    
    <label class="form-control">
        <input type="checkbox" name="checkbox" />
        <!-- Checkbox -->
    </label>    
</template>

<script>
export default {
 name: "CheckBox",
   data(){
   return{}
  }
}
</script>

<style lang="scss" scoped>
label.form-control {    
  display: block;    
  height: 100%;
  margin: 5px 0 0 0 !important;
}
.form-control--disabled {
  color: var(--form-control-disabled);
  cursor: not-allowed;
}

input[type="checkbox"] {  
  -webkit-appearance: none;  
  appearance: none;  
  background-color: var(--form-background);  
  margin: 0;

  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.1em solid #9e9e9e;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.85em;
  height: 0.85em;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);    
  transform: scale(0);
  transform-origin: bottom left;
  transition: 120ms transform ease-in-out;
  //box-shadow: inset 1em 1em var(--form-control-color);
  /* Windows High Contrast Mode */  
  background-color: green;
}

input[type="checkbox"]:checked::before {
  transform: scale(1.35);
}

/*input[type="checkbox"]:focus {
  outline: max(2px, 0.15em) solid currentColor;
  outline-offset: max(2px, 0.15em);
}*/

input[type="checkbox"]:disabled {
  --form-control-color: var(--form-control-disabled);

  color: var(--form-control-disabled);
  cursor: not-allowed;
}

</style>
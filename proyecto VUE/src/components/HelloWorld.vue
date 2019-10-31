<template>
  <div class="hello">
    <button  v-on:click="miMetodo"> Activar Método </button>
    <button  v-on:click="resetear"> Reset </button>
    <h1>{{ msg }}</h1>
     
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props:{
    documento:Object
  },
  data : function(){
    return(
       {
         msg: String
       }
    )
  },
  methods: {
    miMetodo: function() {
      this.msg = "ola k ase en vue"
    }, 
    resetear: function() {
      this.msg = ""
    }
  },
  created: function() {

    this.resetear()
    ////// Escuchamos el evento de angular
    window.document.addEventListener("DOMContentLoaded", () => {
      //
      const elementoAngular = window.document.querySelector("mi-elemento");
      elementoAngular.addEventListener("highlight", () => {
        this.miMetodo()
      });
      ///
    });
    ////
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
    <div>
        <img src="../assets/logo.png">
        <h1>{{ msg }}</h1>
        <button><router-link :to="{name: 'List'}">게시판</router-link></button>
        <h2>Essential Links</h2>
    </div>
</template>

<script>
    export default {
        name: 'iMain',
        data(){
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
a{
    text-decoration: none;
    color: black;
    font-size: 1.2em;

}
button {
    width: 10em;
    cursor: pointer;
    padding: 12px 12px;
    border-radius: 6px;
    color: #fff;
    border: 2px;
    background-color: mediumseagreen;
    transition: background-color .2s;
}
button:hover{
    background-color: lightseagreen;
}
button:active{
    border-radius: 6px;
    background-color: cadetblue;
}
</style>
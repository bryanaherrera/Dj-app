<template>
  <Header msg="SONG REQUEST"/>
  <Form></Form>
  <Song songTitle='Peaches' songArtist='Justin Bieber'></Song>
  <Song songTitle='Atlanta Girls' songArtist='Trash Panda'></Song>
  <Song songTitle='Kiwi' songArtist='Harry Styles'></Song>
</template>

<script>
import Header from './components/header.vue'
import Form from './components/requestForm.vue'
import Song from './components/songCard.vue'

export default {
  name: 'App',
  components: {
    Header,
    Form,
    Song
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffff;
  /* margin-top: 60px; */
}
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
body{
    /* height: 100%; */
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background: rgb(214, 208, 72);
    background: linear-gradient(0deg, rgba(214, 208, 72, 1) 0%, rgba(229, 171, 19, 1) 35%, rgba(92, 22, 148, 1) 100%);
}
</style> 





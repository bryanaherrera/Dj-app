  
<template>
  <Header msg="SONG REQUEST"/>
  <Form></Form>
  <Song songTitle="Peaches" songArtist="Justin Bieber"></Song> 
  <Song songTitle="Atlanta Girls" songArtist="Trash Panda"></Song> 
  <Song songTitle="Kiwi" songArtist="Harry Styles"></Song> 
</template>

<script>
import Header from '../components/header.vue'
import Form from '../components/requestForm.vue'
import Song from '../components/songCard.vue'

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
  margin-top: 60px;
}
</style>
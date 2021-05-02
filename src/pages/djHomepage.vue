<template>
  <Header msg="DJ HILO"/>
  <Header msg="Events"/>
  <Event eventName="Evan's Big Bash" eventId="5252"></Event>
  <Event eventName="Bolin Wedding" eventId="6732"></Event>
  <Event eventName="Leti's Quince" eventId="3827"></Event>
  <router-link to="/"><p>Create an event</p></router-link>
</template>

<script>
import Event from '../components/eventCard.vue'
import Header from '../components/header.vue'

export default {
  name: 'App',
  components: {
    Header,
    Event
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


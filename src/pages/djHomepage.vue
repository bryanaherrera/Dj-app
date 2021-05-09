<template>
  <div class="djName">
    <Header msg="DJ HI-LO"/>
  </div>
  <div class="eventHeader">
    <Header msg="Events"/>
  </div>
    <router-link to="/event" style="text-decoration: none;"><Event eventName="Evan's Big Bash" eventId="5252"></Event></router-link>
  <Event eventName="Bolin Wedding" eventId="6732"></Event>
  <Event eventName="Leti's Quince" eventId="3827"></Event>
  <br>
  
    <router-link to="/newEvent" style="text-decoration: none;"><button>Create an event</button></router-link>
  
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
}
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
button {
  background-color: #ffff;
  border-radius: 10px;
  padding: 10px;
  border: 0;
}
.djName{
  font-size: 30px;
}
</style>


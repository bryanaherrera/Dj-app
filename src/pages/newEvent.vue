<template>
  <Header msg="CREATE AN EVENT"/>
  <EventForm></EventForm>
</template>

<script>
import EventForm from '../components/newEventForm.vue'
import Header from '../components/header.vue'

export default {
  name: 'App',
  components: {
    EventForm,
    Header
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
/* body{
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background: rgb(214, 208, 72);
    background: linear-gradient(0deg, rgba(214, 208, 72, 1) 0%, rgba(229, 171, 19, 1) 35%, rgba(92, 22, 148, 1) 100%);
} */
</style>
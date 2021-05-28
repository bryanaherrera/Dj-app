<template>
  <EventHeader msg="Evan's Big Bash" code="5252" lcoation="Modesto" date="8/12/2021" time="6:00 pm"></EventHeader>
  <Song songTitle="Peaches" songArtist="Justin Bieber"></Song> 
  <Song songTitle="Atlanta Girls" songArtist="Trash Panda"></Song> 
  <Song songTitle="Kiwi" songArtist="Harry Styles"></Song> 
  <div class="backArrow">
    <router-link to="/dj/homepage"><i class="fas fa-arrow-circle-left fa-2x" style="color: #ffff; text-decoration: none;"></i></router-link>
  </div>
</template>

<script>
import Song from '../components/songCard.vue'
import EventHeader from '../components/eventHeader.vue'

export default {
  name: 'App',
  components: {
    Song,
    EventHeader
  }
};
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
.backArrow{
  margin-top: 10px;
}
</style>
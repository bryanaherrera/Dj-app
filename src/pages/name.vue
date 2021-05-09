<template>
    <EventHeader msg="Evan's Big Bash" code="5252" lcoation="Modesto" date="8/12/2021" time="6:00 pm"></EventHeader>
    <div class="name">
        <h1>Nickname</h1>
        <div class="input">
            <input type="text"> <Submit></Submit>
        </div>
    </div>
</template>
<script>
    import Submit from '../components/formSubmit.vue'
    import EventHeader from '../components/eventHeader.vue'

    export default {
      name: 'Landing',
      components: {
        Submit,
        EventHeader
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

    input[type=text]{
        padding: 10px;
        margin-bottom: 5px;
        border: 0;
        box-shadow: 0 15px 4px rgba(0,0,0,0.06);
        border-radius: 10px;
        background-color: rgb(196, 196, 196, .5);
    }
    .name {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
</style> 
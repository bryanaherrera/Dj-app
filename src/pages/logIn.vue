<template>
<div class="container">
    <h1>Log in</h1>
    <div class="input">
        <input type="text" placeholder="Username"> 
        <br>
        <input type="text" placeholder="Password"> 
        <br>
        <Submit></Submit>
    </div>
</div>
</template>
<script>
    import Submit from '../components/formSubmit.vue'
    export default {
        name: 'Landing',
        components: {
            Submit
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
    input[type=submit]{
        background-color: #ffff;
        border-radius: 10px;
        padding: 10px;
        border: 0;
    }
    .container {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
</style>
<template>
  <div class="container">
    <h1>EVENT ID</h1>
    <div class="input">
      <input type="text"> <Submit></Submit>
    </div>
    <div class="account">
      <p>Are you a DJ?</p> 
      <div class="links">
        <router-link to="/dj/signup" style="text-decoration: none;"><p>Sign Up</p></router-link> <router-link to="/dj/login" style="text-decoration: none;"><p>Log in</p></router-link>
      </div>
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
    .account {
      margin-top: 10px;
    }
    .account p{
      display: inline;
    }
    .account a {
      color: rgb(196, 196, 196);
      margin-top: 5px;
      margin-right: 5px;
    }
    .container {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
</style> 
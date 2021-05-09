<template>
  <div class="header">
    <h3>{{ msg }}</h3>
    <p class="description">{{ lcoation }} |</p>
    <p class="description">{{ date }} |</p>
    <p class="description">{{ time }}</p>
    <h4>{{ code }}</h4>
  </div>
</template>

<script>
export default {
  name: 'EventHeader',
  props: {
    msg: String,
    code: String,
    lcoation: String,
    date: String,
    time: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3{
    color: #ffff;
    margin-bottom: -8px;
    font-size: 30px;
  }
  .description {
      color: #ffff;
      display: inline-block;
      margin-right: 5px;
      margin-bottom: -5px;
  }
  h4 {
    font-size: 20px;
  }

</style>
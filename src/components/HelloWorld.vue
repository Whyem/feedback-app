<template>
  <div class="hello">
    <div class="flex">
      <h1>bsibissa</h1>
      <h2>touna</h2>
    </div>

    <div>
      <h1>tomatous</h1>
      <h2>touna</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background-color:red;
}
a {
  color: #42b983;
}
</style>

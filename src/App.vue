<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
/*自定义进度条颜色*/
#nprogress .bar
    background red !important; 
</style>

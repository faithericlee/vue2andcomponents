<template>
  <div>
    <h1>vue-highlightjs示例</h1>
    <pre v-highlightjs><code class="css">body {font-size: 16px}</code></pre>
    <pre v-highlightjs><code class="javascript">{{codeData}}</code></pre>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      codeData: "const s = new Date().toString()"
    };
  }
};
</script>

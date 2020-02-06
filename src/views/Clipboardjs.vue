<template>
  <div>
    <!-- Target -->
    <textarea id="bar">Mussum ipsum cacilds...</textarea>
    <br/>
    <!-- Trigger -->
    <button
      class="btn"
      data-clipboard-action="cut"
      data-clipboard-target="#bar"
    >
      Cut to clipboard
    </button>
  </div>
</template>

<script>

import Clipboard from 'clipboard'

var clipboard = new Clipboard('.btn');
//成功回调
clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);  
    e.clearSelection();
});
//失败回调
clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

export default {

}
</script>

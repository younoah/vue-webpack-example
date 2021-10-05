<template>
  <div>
    <h1
      v-if="msg"
      class="message"
      @click="log">
      {{ msg }}
    </h1>
    <Hello />
  </div>
</template>

<script>
import Hello from '~/components/Hello';

export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: 'Hello Webpack!',
    };
  },
  methods: {
    log() {
      window.addEventListener()
    }
  }
};
</script>

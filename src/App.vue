<template>
  <div>
    <h1>{{ msg }}</h1>
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
};
</script>

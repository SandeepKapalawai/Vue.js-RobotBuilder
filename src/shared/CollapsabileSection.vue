<template>
  <div>
    <div class="header">
      <span v-if="open" @click="open = !open">&#x25B2; Collapse</span>
      <span v-if="!open" @click="open = !open">&#x25BC; Expand</span>
    </div>
  </div>
  <slot v-if="open">
      <div>Default Content </div>
  </slot>
</template>

<script>
export default {
  name: 'CollapsabileSection',
  data() {
    return { open: true };
  }
};
</script>

<style scoped>
.header {
  background-color: grey;
  padding: 3px;
  cursor: pointer;
}
</style>

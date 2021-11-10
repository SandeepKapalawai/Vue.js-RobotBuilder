<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>{{ part.description }}</div>
  </div>
</template>
<script>
import getPartsMixin from './get-parts-mixins';

export default {
  name: 'PartInfo',
  mixins: [getPartsMixin],
  props: {
    partType: { type: String },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      }
    }
  },
  computed: {
    part() {
    //   const { partType, id } = this.$route.params; // one way to access your route params
      const { partType, id } = this; // another way to bypass your route params as props
      return this.parts[partType].find((part) => part.id === +id);
    }
  }
};
</script>

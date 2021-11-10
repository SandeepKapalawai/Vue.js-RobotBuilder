export default {
  created() {
    this.$store.dispatch('robots/getParts');
  },
  computed: {
    // eslint-disable-next-line space-before-blocks
    parts(){
      return this.$store.state.robots.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: []
      };
    }
  }
};

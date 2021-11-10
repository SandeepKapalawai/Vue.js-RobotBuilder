/* eslint-disable no-alert */
<template>
  <div>
    <div v-if="availableParts" class="content">
          <div class="preview">
     <!-- <CollapsabileSection></CollapsabileSection> -->
     <CollapsabileSection>
      <div class="preview-content">
        <div class="top-row">
          <img :src="selectedRobot.heads.src"/>
        </div>
        <div class="middle-row">
          <img :src="selectedRobot.leftArm.src" class="rotate-left"/>
          <img :src="selectedRobot.torsoArm.src"/>
          <img :src="selectedRobot.rightArm.src" class="rotate-right"/>
        </div>
        <div class="bottom-row">
          <img :src="selectedRobot.basesArm.src"/>
        </div>
      </div>
     </CollapsabileSection>
    </div>
      <button class="add-to-cart" @click="addToCard()">Add to cart </button>
    </div>
    <div class="top-row">
      <div class="top part" :class="[saleBorderClass]"> -->
       <div class="robot-name">{{selectedRobot.heads.title}}
        <span class="sale" v-if="selectedRobot.heads.onSale">sale</span></div>
       <PartSelector :parts ="availableParts.heads" position="top"
        @partSelected ="part => selectedRobot.heads=part" /> -->
       </div>
    </div>
    <div class="middle-row">
        <PartSelector :parts ="availableParts.arms" position="left"
        @partSelected ="part => selectedRobot.leftArm=part" />
        <PartSelector :parts ="availableParts.torsos" position="center"
          @partSelected ="part => selectedRobot.torsoArm=part" />
        <PartSelector :parts ="availableParts.arms" position="right"
          @partSelected ="part => selectedRobot.rightArm=part" />
    </div>
    <div class="bottom-row">
      <PartSelector :parts ="availableParts.bases" position="bottom"
        @partSelected ="part => selectedRobot.basesArm=part" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import createdhookMixins from './created-hook-mixin';
import PartSelector from './PartSelector.vue';
import CollapsabileSection from '../shared/CollapsabileSection.vue';

export default {
  name: 'RobotBuilder',
  created() {
    this.getParts();
  },
  beforeRouteLeave(to, from, next) {
    if (this.addedToCart) {
      // eslint-disable-next-line no-alert
      next(true);
    } else {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-restricted-globals
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-restricted-globals
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-restricted-globals
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-restricted-globals
      const response = confirm('You have not added your robot to card');
      next(response);
    }
  },
  components: { PartSelector, CollapsabileSection },
  mixins: [createdhookMixins],
  data() {
    return {
      cart: [],
      addedToCart: false,
      selectedRobot: {
        heads: {},
        leftArm: {},
        rightArm: {},
        torsoArm: {},
        basesArm: {}
      }
    };
  },
  methods: {
    ...mapActions('robots', ['getParts', 'addRobotToCart']),
    addToCard() {
      const robot = this.selectedRobot;
      const cost = robot.heads.cost +
        robot.leftArm.cost + robot.rightArm.cost + robot.torsoArm.cost + robot.basesArm.cost;
      this.addRobotToCart({ ...robot, cost }).then(() => this.$router.push('/cart'));
      this.addedToCart = true;
    }
  },
  computed: {
    headerBorderStyle() {
      return {
        border: this.selectedRobot.heads.onSale ? '3px solid red ' : '3px solid blue'
      };
    },
    saleBorderClass() {
      return this.selectedRobot.heads.onSale ? 'sale-border' : '';
    },
    availableParts() {
      return this.$store.state.robots.parts;
    }
  }
};
</script>

<style scoped>
 .part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
  }
  .part img {
  width:165px;
  }
  .top-row {
  display:flex;
  justify-content: space-around;
  }
  .middle-row {
  display:flex;
  justify-content: center;
  }
  .bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
  }
  .head {
  border-bottom: none;
  }
  .left {
  border-right: none;
  }
  .right {
  border-left: none;
  }
  .left img {
  transform: rotate(-90deg);
  }
  .right img {
  transform: rotate(90deg);
  }
  .bottom {
  border-top: none;
  }
  .prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
  }
  .next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
  }
  .center .prev-selector, .center .next-selector {
  opacity:0.8;
  }
  .left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
  }
  .left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
  }
  .right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
  }
  .right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
  }
  .right .next-selector {
  right: -3px;
  }

  .robot-name{
    position: absolute;
    top:-25px;
  }
  .sale{
    color:red;
  }
  .content{
    position:relative;
  }
  .add-to-cart{
    position:absolute;
    width: 200px;;
    right:30px;
    top: 150px;
    padding:10px;
    font-size:20px;
  }

  .sale-border{
    border :4px solid green;
  }
  .preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}

</style>

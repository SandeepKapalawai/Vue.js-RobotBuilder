<template>
  <div>
    <div class="content">
      <button class="add-to-cart" @click="addToCard()">Add to cart </button>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index"><td>{{robot.heads.title}}</td>
          <td class="cost">{{robot.cost}}</td></tr>
        </tbody>
      </table>
    </div>
    <div class="top-row">
      <div class="top part" :class="[saleBorderClass]">
        <div class="robot-name">{{selectedRobot.heads.title}}</div>
        <span class="sale" v-if="selectedRobot.heads.onSale">sale</span>
        <img :src="selectedRobot.heads.src" title="head" />
        <button class="prev-selector" @click="selectPreviousHead()">&#9668;</button>
        <button class="next-selector" @click="selectNextHead()">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.leftArm.src"  title="left arm" />
        <button class="prev-selector" @click="selectPreviousleftArm()">&#9650;</button>
        <button class="next-selector" @click="selectNextleftArm()">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torsoArm.src" title="left arm" />
        <button class="prev-selector" @click="selectPreviousTorsos()">&#9668;</button>
        <button class="next-selector" @click="selectNextTorsos()">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.src" title="left arm" />
        <button class="prev-selector" @click="selectPreviousrightArm()">&#9650;</button>
        <button class="next-selector" @click="selectNextrightArm()">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.basesArm.src" title="left arm" />
        <button class="prev-selector" @click="selectPreviousbase()">&#9668;</button>
        <button class="next-selector" @click="selectNextbase()">&#9658;</button>
      </div>
    </div>
  </div>
</template>

<script>
import createdhookMixins from './created-hook-mixin';
import availableParts from '../data/parts';

function getPreviousValidIndex(index, length) {
  const depricatedIndex = index - 1;
  return depricatedIndex < 0 ? length - 1 : depricatedIndex;
}
function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}
export default {
  name: 'RobotBuilder',
  mixins: [createdhookMixins],
  data() {
    return {
      cart: [],
      availableParts,
      selectedHeadIndex: 0,
      selectedleftArmIndex: 0,
      selectedTorsosIndex: 0,
      selectedrightArmIndex: 0,
      selectedbasesIndex: 0
    };
  },
  methods: {

    addToCard() {
      const robot = this.selectedRobot;
      const cost = robot.heads.cost +
        robot.leftArm.cost + robot.rightArm.cost + robot.torsoArm.cost + robot.basesArm.cost;
      this.cart.push({ ...robot, cost });
    },
    selectNextHead() {
      this.selectedHeadIndex = getNextValidIndex(this.selectedHeadIndex,
        availableParts.heads.length);
    },
    selectPreviousHead() {
      this.selectedHeadIndex = getPreviousValidIndex(this.selectedHeadIndex,
        availableParts.heads.length);
    },
    // left arm
    selectPreviousleftArm() {
      this.selectedleftArmIndex = getPreviousValidIndex(this.selectedleftArmIndex,
        availableParts.arms.length);
    },
    selectNextleftArm() {
      this.selectedleftArmIndex = getNextValidIndex(this.selectedleftArmIndex,
        availableParts.arms.length);
    },
    // torsos
    selectPreviousTorsos() {
      this.selectedTorsosIndex = getPreviousValidIndex(this.selectedTorsosIndex,
        availableParts.torsos.length);
    },
    selectNextTorsos() {
      this.selectedTorsosIndex = getNextValidIndex(this.selectedTorsosIndex,
        availableParts.torsos.length);
    },

    // right arm
    selectPreviousrightArm() {
      this.selectedrightArmIndex = getPreviousValidIndex(this.selectedrightArmIndex,
        availableParts.arms.length);
    },
    selectNextrightArm() {
      this.selectedrightArmIndex = getNextValidIndex(this.selectedrightArmIndex,
        availableParts.arms.length);
    },

    // bases
    selectPreviousbase() {
      this.selectedbasesIndex = getPreviousValidIndex(this.selectedbasesIndex,
        availableParts.bases.length);
    },
    selectNextbase() {
      this.selectedbasesIndex = getNextValidIndex(this.selectedbasesIndex,
        availableParts.bases.length);
    }
  },
  computed: {
    selectedRobot() {
      return {
        heads: availableParts.heads[this.selectedHeadIndex],
        leftArm: availableParts.arms[this.selectedleftArmIndex],
        rightArm: availableParts.arms[this.selectedrightArmIndex],
        torsoArm: availableParts.torsos[this.selectedTorsosIndex],
        basesArm: availableParts.bases[this.selectedbasesIndex]
      };
    },
    headerBorderStyle() {
      return {
        border: this.selectedRobot.heads.onSale ? '3px solid red ' : '3px solid blue'
      };
    },
    saleBorderClass() {
      return this.selectedRobot.heads.onSale ? 'sale-border' : '';
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
    right:30px;
    padding:10px;
    font-size:20px;
  }

  td,th{
    text-align: left;
    padding: 5px;
    padding-right: 20px;
  }
  .cost{
    text-align: right;
  }

  .sale-border{
    border :4px solid green;
  }
</style>

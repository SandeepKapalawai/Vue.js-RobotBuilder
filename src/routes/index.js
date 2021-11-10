import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobertBuilder from '../build/RobertBuilder.vue';
import PartInfo from '../parts/partinfo.vue';
import BrowseParts from '../parts/Browseparts.vue';
import RobotArms from '../parts/RobotsArms.vue';
import RobotHeads from '../parts/RobotsHeads.vue';
import RobotBases from '../parts/RobotsBases.vue';
import RobotTorsos from '../parts/RobotsTorsos.vue';
import SidebarStandard from '../shared/SidebarStandard.vue';
import SidebarBuild from '../shared/SidebarBuild.vue';
import ShoppingCart from '../cart/ShoppingCart.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStandard
    }
  },
  {
    path: '/build',
    name: 'Build',
    components: {
      default: RobertBuilder,
      sidebar: SidebarBuild
    }
  },
  {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        path: 'heads',
        name: 'Robothead',
        component: RobotHeads
      },
      {
        path: 'arms',
        name: 'RobotArms',
        component: RobotArms
      },
      {
        path: 'bases',
        name: 'RobotBases',
        component: RobotBases
      },
      {
        path: 'torsos',
        name: 'RobotTorsos',
        component: RobotTorsos
      }
    ]
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
    beforeEnter(to, from, next) {
      const isValid = Number.isInteger(Number(to.params.id));
      next(isValid); // handlle routte param ids
    }
    // another way to bypass your route as props
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart
  }
  ]
});

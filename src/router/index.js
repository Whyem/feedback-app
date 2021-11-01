import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import AddFeedBack from '../components/AddFeedBack.vue'
import EditFeedBack from '../components/EditFeedBack.vue'
import RoadMap from '../components/RoadMap.vue'
import DetailFeedBack from '../components/DetailFeedBack.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'Add Feedback',
    component: AddFeedBack
  },
  {
    path: '/edit',
    name: 'Edit Feedback',
    component: EditFeedBack
  },
  {
    path: '/roadmap',
    name: 'RoadMap',
    component: RoadMap
  },
  {
    path: '/detail/:id',
    name: 'Detail Feedback',
    component: DetailFeedBack
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

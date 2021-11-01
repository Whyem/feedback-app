<template>
  <div class="roadmap_container">
    <div class="topnav flex flex--jsb flex--ai">
      
      <div>
        <router-link to="/" class="back_link flex flex--ai">
          <img src="@/assets/shared/icon-arrow-left.svg" alt="arrow">
          <p class="back">Go Back</p>
        </router-link>
        <h2>Roadmap</h2>
      </div>

      <a href="http://" class="add flex flex--ai flex--jc">
        + Add feedback
      </a>
    </div>

    <div class="hide-for-desktop buttons flex flex--ai flex--jc">
      <button class="category_btn" @click="setCategory(status)" :class="[{'active': this.selected_status === status} , status]" v-for="(status,index) in statuses" :key="index">{{status}}</button>
      <div>
        
        <div class="title_type align-left" v-if="this.selected_status === 'Planned'">
          <h3 >{{this.selected_status}} ({{this.status_count[0]}})</h3>
          <p class="status_desc">{{this.status_desc[0]}}</p>
        </div>
        <div class="title_type align-left" v-if="this.selected_status === 'In-Progress'">
          <h3 >{{this.selected_status}} ({{this.status_count[1]}})</h3>
          <p class="status_desc">{{this.status_desc[1]}}</p>
        </div>
        <div class="title_type align-left" v-if="this.selected_status === 'Live'">
          <h3 >{{this.selected_status}} ({{this.status_count[2]}})</h3>
          <p class="status_desc">{{this.status_desc[2]}}</p>
        </div>
        

        <div class="feedbacks_container">
          <div class="planned_col" v-if="this.selected_status === 'Planned'">
            <FeedBack v-for="feedBack in planned" :key="feedBack.id" bordered=true short=true :feedBack= feedBack />
          </div>

          <div class="in_progress_col" v-else-if="this.selected_status === 'In-Progress'">
            <FeedBack v-for="feedBack in in_progress" :key="feedBack.id" bordered=true short=true :feedBack= feedBack />
          </div>

          <div class="live_col" v-else>
            <FeedBack v-for="feedBack in live" :key="feedBack.id" bordered=true short=true :feedBack= feedBack />
          </div>
        </div>
      </div>
      
    </div>
    
    <div class="hide-for-mobile flex flex--as flex--jsb">
      <div class="col align-left" v-for="(status,index) in statuses" :key="index">
        <h3>{{status}} ({{this.status_count[index]}})</h3>
        <p class="status_desc">{{this.status_desc[index]}}</p>

        <div class="feedbacks_container">
          <div class="planned_col" v-if="index == 0">
            <FeedBack v-for="feedBack in planned" :key="feedBack.id" bordered=true short=true :feedBack= feedBack />
          </div>

          <div class="in_progress_col" v-else-if="index == 1">
            <FeedBack v-for="feedBack in in_progress" :key="feedBack.id" bordered=true short=true :feedBack= feedBack />
          </div>

          <div class="live_col" v-else>
            <FeedBack v-for="feedBack in live" :key="feedBack.id" bordered=true short=true :feedBack= feedBack />
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>

import FeedBack from './FeedBack.vue'

export default {
  name: 'RoadMap',
  components:{
    FeedBack,
  },
  data: function () {
    return {
      statuses: ["Planned","In-Progress","Live"],
      status_desc: ["Ideas prioritized for research","Currently being developed","Released features"],
      status_count: [],
      planned: [],
      in_progress: [],
      live: [],
      feedBacks: [],
      selected_status: "Planned",
    }
  },

  created: function (){
    let dataFile = require('../../data.json');
    this.feedBacks = dataFile.productRequests;

    this.planned = dataFile.productRequests.filter(item =>  item.status === "planned");

    this.in_progress = dataFile.productRequests.filter(item => item.status === "in-progress");

    this.live = dataFile.productRequests.filter(item => item.status === "live");

    this.status_count = [this.planned.length, this.in_progress.length, this.live.length];
  },

  methods: {
    setCategory: function(status){
      this.selected_status = status;
    }
  }

}
</script>

<style lang="scss" scoped>

.roadmap_container{
  width: 77%;
  margin: 0 auto;
}

.col{
  width: 31%;
}


.topnav {
  background: #373F68;
  border-radius: 10px;
  padding: 27px 32px;
  margin-bottom: 24px;
}

.back_link {
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  text-decoration: none;
  transition: all 400ms ease-in-out;
  margin-bottom: 4px;

  &:hover{
    text-decoration: underline;
  }
}

.back{
  margin-left:16px;
}

h2{
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.333333px;
  color: #FFFFFF;
}

h3{
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.194444px;
  color: #3A4374;
}

.add{
  color: #F2F4FE;
  background: #AD1FEA;
  border-radius: 10px;
  padding: 13px 24px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  transition: all 400ms ease-in-out;

  &:hover{
    background: #C75AF6;
  }
}

.status_desc{
  font-size: 14px;
  line-height: 20px;
  color: #647196;
  margin-bottom: 32px;
}

.category_btn{
  width: 33.33%;
  padding: 20px 0;
  font-family: 'Jost';
  font-style: normal;
  font-weight: bold; 
  font-size: 13px;
  line-height: 19px;
  overflow: hidden;
  text-align: center;
  letter-spacing: -0.180556px;
  color: #3A437440;
  border: none;
  border-radius: 0;
  position: relative;
  margin-bottom: 24px;

  &.active{
    font-weight: bold;
    color: #3A4374;

    &::before{
      transform: scaleX(1);
    }
  }

  &::before{
    content: '';
    width: 100%;
    transform: scaleX(0);
    height: 4.5px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform-origin: center;
    transition: all 300ms ease-in-out;
  }

  &.Planned{
    &::before{
      background:#F49F85;
    }
  }

  &.In-Progress{
    &::before{
      background:#AD1FEA;
    }
  }

  &.Live{
    &::before{
      background:#62BCFA;
    }
  }
}

@media (max-width: 768px) {
  .roadmap_container{
    width: 89%;
  }
  
  h2{
    font-size: 24px;
  }
}

@media (max-width: 376px) {
  .roadmap_container{
    width: 100%;
  }

  .col{
    width: 100%;
  }

  .topnav {
    border-radius: 0;
    margin-bottom: 0;
  }

  h3{
    font-size: 18px;
  }

  .title_type{
    padding: 0 24px;
  }
}

</style>

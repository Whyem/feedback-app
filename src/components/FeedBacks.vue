<template>
  <div v-if="feedBacks.length != 0" class="content">
    <FeedBack v-for="feedBack in feedBacks" :key="feedBack.id" :feedBack= feedBack  />
  </div>

  <div v-else class="no_feedback">
    <img src="@/assets/shared/no-feedbacks.svg" alt="no_fb">
    <h3>There is no feedback yet.</h3>
    <p class="nf_text">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
    
    <router-link to="/add" class="add">
      + Add feedback
    </router-link>
  </div>
</template>

<script>

import FeedBack from './FeedBack.vue'
import axios from 'axios'

export default {
  name: 'FeedBacks',
  components:{
    FeedBack,
  },
 
  data: function () {
    return {
      feedBacks: [],
    }
  },

  created: function (){
    axios
      .get('http://127.0.0.1:3080/feedbacks')
      .then(response => {
        this.feedBacks = response.data
      })
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.no_feedback{
  background: #FFFFFF;
  border-radius: 10px;
  text-align: center;
  padding: 110px 0;
}


h3{
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  letter-spacing: -0.333333px;
  color: #3A4374;
  margin-top: 53px;
  margin-bottom: 16px;
}

.nf_text{
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: #647196;
  width: 43ch;
  margin: 0 auto;
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
  display: inline-block;
  margin-top: 48px;
  transition: all 400ms ease-in-out;

  &:hover{
    background: #C75AF6;
  }
}


@media (max-width: 376px) {
  .nf_text{
    width: 33ch;
    font-size: 13px;
  }

  .add{
    font-size: 13px;
  }

  .no_feedback{
    width: 90%;
    margin: 0 auto;
  }

}

</style>

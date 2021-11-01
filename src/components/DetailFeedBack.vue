<template>
  
  <div class="content_wrapper">
    <div class="flex flex--ai flex--jsb top_bar">
      <router-link to="/" class="back_link flex flex--ai">
        <img src="@/assets/shared/icon-arrow-left.svg" alt="arrow">
        <p class="back">Go Back</p>
      </router-link>

      <a href="http://" class="edit_btn">Edit Feedback</a>
    </div>

    <FeedBack bordered=false :feedBack=feedBack />

    <div class="comments_container">
      <Comments :comments = feedBack.comments />
    </div>

  </div>
  
  
  
</template>

<script>

import FeedBack from './FeedBack.vue';
import Comments from './Comments.vue';
import axios from 'axios';

export default {
  name: 'DetailFeedBack',
  components: {
    FeedBack,
    Comments
  },
  data: function () {
    return {
      feedBack: {},
    }
  },

  created: function (){
    axios
      .get('http://127.0.0.1:3080/feedback/' + this.$route.params.id)
      .then(response => {
        this.feedBack = response.data
      })
  }
}
</script>

<style lang="scss" scoped>
.content_wrapper{
  width: 50%;
  margin: 0 auto;
}

.top_bar{
  margin-bottom:24px;
}

.back_link {
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #647196;
  text-decoration: none;
  transition: all 400ms ease-in-out;

  &:hover{
    text-decoration: underline;
  }
}

.back{
  margin-left:16px;
}

.edit_btn{
  color: #F2F4FE;
  background: #4661E6;
  border-radius: 10px;
  padding: 12px 24px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  transition: all 400ms ease-in-out;

  &:hover{
    background: #7C91F9;
  }
}

.comments_container{
  background: #FFFFFF;
  border-radius: 10px;
  padding: 24px 34px 40px 34px;
}

@media (max-width: 768px) {
  
}

@media (max-width: 376px) {
  .content_wrapper{
    width: 100%;
  }

  .top_bar{
    width: 87%;
    margin: 0 auto;
    margin-bottom: 24px;
    margin-top: 24px;
  }

  .comments_container{
    width: 87%;
    margin: 0 auto;
  }

}


</style>

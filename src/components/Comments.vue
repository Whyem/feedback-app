<template>
  
  <div class="comment_wrapper" v-for="comment in comments" :key="comment.id">
      <Comment :bordered="'replies' in comment"  :comment=comment :isLast="!('replies' in comment)" />
      <div class="replies">
        <Comment v-for="(reply,index) in comment.replies" :key="reply.id"  :comment=reply  :isLast="(index+1) == comment.replies.length" />
      </div>
  </div>

</template>

<script>

import Comment from './Comment.vue'
import axios from 'axios'

export default {
  name: 'Comments',
  components: {
    Comment
  },

  props: {
    comments: Array,
  },

  data: function () {
    return {
      replies: [],
    }
  },

  created: function (){
     //this.replies = this.comments.filter(comment => comment.commentId != null);
     this.comments.forEach(element => {
       axios
      .get('http://127.0.0.1:3080/replies/' + element.id)
      .then(response => {
        element.replies = response.data
      })
     });
  }
  
}
</script>

<style lang="scss" scoped>

.comment_wrapper{
  border-bottom: 1px solid #8C92B315;
  margin-bottom: 32px;
  padding-bottom: 32px;
}

.replies{
  margin-left: 20px;

  &>.comment{
    padding-left: 24px;
    border-left: 1px solid #8C92B315;
    padding-bottom: 42px;

    &:last-child{
      border-left: none;
      transform: translateY(-20px);
    }

    &:nth-last-child(2){
      padding-bottom: 62px;
    }
  }
  
}

@media (max-width: 376px) {
  
  .replies{
    margin-left:0;
    
    
    &>.comment{
      //margin-top: 24px;
    }
  }

}


</style>

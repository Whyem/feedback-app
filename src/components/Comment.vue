<template>
  
  <div class="comment">
    <div class="flex flex--jsb flex--ai">
      <div class="flex flex--jc flex--ai">
        <div class="circle_container">
          <img :src="require(`@/${comment.user.img}`)" alt="arrow">
        </div>

        <div class="align-left">
          <a href="" class="fullname">{{comment.user.name}}</a>
          <p href="" class="username">@{{comment.user.username}}</p>
        </div>
      </div>

      <button class="reply_btn">Reply</button>
    </div>

    <div class="comment_content" :class="{'bordered' : bordered}">
       <p><a href="" class="replyTo" v-if="'replyingTo' in comment" >@mrmourii</a> {{comment.content}}</p> 

      <div class="post_reply" v-if="isLast">
        <form action="" class="flex flex--as flex--jsb">
          <textarea name="reply" id="reply" cols="30" rows="2" v-model="reply"></textarea>
          <button type="button" class="post_reply_btn" >Post Reply</button>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Comment',
  props: {
    comment: Object,
    bordered: Boolean,
    isLast: Boolean
  },

  data: function (){
    return{
      reply: '',
    }
  },
  
  created: function (){

  },

  methods:{
      
  }
  
}
</script>

<style lang="scss" scoped>

.bordered{
  border-left: 1px solid #8C92B315;
  margin-left: 20px;
}

.circle_container{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 32px;

  &>img{
    width:100%;
  }
}

.fullname{
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.194444px;
  color: #3A4374;
}

.username{
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #647196;
}

.reply_btn{
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: #4661E6;
  border: none;
  background-color: transparent;

   &:hover{
     text-decoration: underline;
   }
}

.comment_content{
  text-align: left;
  margin-top: 17px;
  padding: 0 0 0 72px;

  &.bordered{
    padding-left: 52px;
  }
}

.replyTo{
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #AD1FEA;
}

textarea{
  background-color: #F7F8FD;
  border-radius: 5px;
  padding: 13px 24px;
  font-family: Jost;
  font-size: 15px;
  line-height: 22px;
  color: #3A4374;
  border:none;
  text-align: left;
  min-height: 80px;
  width: 100%;

  &:focus{
    border: 1px solid #4661E6;
  }
}

.post_reply_btn{
  color: #F2F4FE;
  background: #AD1FEA;
  border-radius: 10px;
  border:none;
  padding: 12px 24px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  margin-left: 16px;
  min-width: 117px;
  transition: all 400ms ease-in-out;

  &:hover{
    background: #C75AF6;
  }
}

@media (max-width: 376px) {
  
  .comment_content{
    padding:0;

    &.bordered{
      padding-left: 0;
    }
  }

  .bordered{
    border-left: none;
    margin-left: 0;
  }

  .replies{
    margin-left:0;
  }

  .circle_container{
    margin-right: 16px;
  }

}


</style>

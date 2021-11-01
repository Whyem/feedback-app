<template>
  
  <div class="feedback"  href="">
      <div v-if="bordered" :class="{ 'planned' : this.feedBack.status === 'planned', 'in_progress' : this.feedBack.status === 'in-progress', 'live' : this.feedBack.status === 'live'}"></div>
      
      <div v-if="bordered && this.feedBack.status === 'planned'" class="type flex flex--ai status">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#F49F85"/></svg>
        <p>Planned</p>
      </div>

      <div v-else-if="bordered && this.feedBack.status === 'in-progress'" class="type flex flex--ai status">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#AD1FEA"/></svg>
        <p>In-Progress</p>
      </div>

      <div v-else-if="bordered && this.feedBack.status === 'live'" class="type flex flex--ai status">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#62BCFA"/></svg>
        <p>Live</p>
      </div>

      <div class="fb_content" :class="{'mobile': short}">
        <button @click="bluefy" class="upvote flex--ai flex--jsb one" :class="{'upvoted': liked, 'mobile': short}">
          
          <img v-if="liked" src="@/assets/shared/icon-arrow-up-white.svg" alt="arrow">
          <img v-else src="@/assets/shared/icon-arrow-up.svg" alt="arrow">
          <p class="upvote_number">{{ this.feedBack.upvotes }}</p>
        </button>

        <div class="feedback_text two">
          <router-link :to="'/detail/'+this.feedBack.id"><h2 :class="{'small': short}" >{{ this.feedBack.title }}</h2></router-link>
          <p class="feedback_desc" :class="{'small': short}">{{ this.feedBack.description }}</p>
          <div class="category" :class="{'small': short}">{{ this.feedBack.Category.name }}</div>
        </div>

        <div class="flex flex--jc flex--ai three">
          <img src="@/assets/shared/icon-comments.svg" alt="comment">
          <p class="comments_number" :class="{'small': short}" v-if="'comments' in feedBack">{{ this.feedBack.comments.countComments }}</p>
          <p class="comments_number" :class="{'small': short}" v-else>0</p>
        </div>
      </div>

    </div>
</template>

<script>

//import $ from 'jquery';

export default {
  name: 'FeedBack',

  data: function (){
    return{
      liked: true
    };
  },
  
  props: {
    feedBack: Object,
    bordered: Boolean,
    short: Boolean
  },

  created: function (){
    //console.log(this.feedBack);
    this.liked = this.feedBack.liked;
  },

  methods: {
    bluefy(){
      this.liked = !this.liked;
    }
  }
  
}
</script>

<style lang="scss" scoped>

a { 
  text-decoration: none; 
}

.feedback {
  display: block;
  background: #FFFFFF;
  border-radius: 10px;
  margin-bottom: 18px;
  text-decoration: none;
  transition: all 400ms ease-in-out;
  width:100%;

  &:hover{
    transform: scale(1.03);
  }
}

.fb_content{
  padding: 28px 32px;
  display: grid;
  grid-template-areas: 
  "one two two three"
  ". two two three";
  grid-template-columns: fit-content(0px);
  column-gap: 40px;
  row-gap: 16px;

  &.mobile{
    grid-template-areas: 
    "two two two two two"
    "one one . three three";
    column-gap: 0;
    padding: 8px 20px 24px 20px;

  }

  &:hover{
    transform: scale(1.03);
  }
  
}

.bordered{
  border-top: 6px solid black;
}

.status{
  padding: 0 32px;
}

svg{
  margin-right: 16px;
}

.type>p{
  font-size: 16px;
  line-height: 23px;
  color: #647196;
}

.planned{
  background: #F49F85;
  height: 6px;
  border-radius: 5px 5px 0 0;
  margin-bottom: 25px;
}

.in_progress{
  background: #AD1FEA;
  height: 6px;
  border-radius: 5px 5px 0 0;
  margin-bottom: 25px;
}

.live{
  background: #62BCFA;
  height: 6px;
  border-radius: 5px 5px 0 0;
  margin-bottom: 25px;
}

.upvote{
  background: #F2F4FE;
  border-radius: 10px;
  padding: 14px 16px 8px 16px;
  border: none;
  transition: all 400ms ease-in-out;
  cursor: pointer;

  &:hover{
    background: #CFD7FF;
  }

  &.mobile{
    display:flex;
    
    &>.upvote_number{
      margin-top: 0;
      margin-left: 10px;
    }
  }

  &.upvoted{

    &>p{
      color: #FFFFFF !important;
    }
    background: #4661E6;
  }

  &.mobile{
    display: flex;
    padding: 11px 16px;
  }
}

.upvote_number{
  font-family: 'Jost';
  font-weight: bold;
  font-size: 13px;
  letter-spacing: -0.180556px;
  color: #3A4374;
  margin-top: 8px;
}

.feedback_text{
  text-align: left;
}

h2{
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: #3A4374;
  margin-bottom: 4px;
  text-decoration: none;
  transition: all 400ms ease-in-out;
  
  &:hover{
    color: #4661E6; 
  }
}


.feedback_desc{
  font-size: 16px;
  line-height: 23px;
  color: #647196;
  margin-bottom: 8px;
}

.category{
  background: #F2F4FF;
  color: #4661E6;
  border-radius: 10px;
  padding: 8px 16px;
  border:none;
  font-family: inherit;
  font-weight: 600;
  font-size: 13px;
  display: inline-block;

}

.comments_number{
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.222222px;
  color: #3A4374;
  margin-left: 11px;
}

.one{
  grid-area: one;
}

.two{
  grid-area: two;
}

.three{
  grid-area: three;
}

@media (max-width: 768px) {
  .small{
    font-size: 13px;
  }

  .type>p{
  font-size: 13px;
}
}

@media (max-width: 376px) {
  .feedback{
    width: 87%;
    margin: 0 auto;
    margin-bottom: 16px;
  }

  .fb_content{
    grid-template-areas: 
    "two two two two two"
    "one one . three three";
  }


  .upvote{
    display: flex;
  }

  .upvote_number{
    margin-top: 0;
    margin-left: 10px;
  }
}

</style>

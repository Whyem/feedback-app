<template>
    <div class="pr">
        <button type="button" @click="this.isHidden = !this.isHidden, this.addClass = true" class="select_btn flex flex--ai flex--jsb">
            {{this.selected}}
            <img src="@/assets/shared/icon-arrow-up.svg" :class="{ 'flip' : isHidden }" alt="arrow" class="arrow">
        </button>

        <div class="options" :class="{ 'aos-init aos-animate' : !isHidden , 'no_event': isHidden}" :data-aos="(addClass && !isHidden)? 'zoom-in' : '' " >
            <div class="option flex flex--jsb flex--ai" :class="{ 'selected' : option === this.selected }"  v-for="(option,index) in options" :key="index" @click="setCategory(index)">
            <p>{{option}}</p>
            <img src="@/assets/shared/icon-check.svg" alt="check">
            </div>
        </div>
    </div>
</template>

<script>

import AOS from 'aos'

export default {
  name: 'DropDown',
  props: {
    options: Array
  },
  data: function () {
    return {
      selected: "",
      isHidden: true,
      addClass: false
    }
  },
  mounted: function(){
    AOS.init();
  },

  created: function() {
    this.selected = this.options[0];
  },

  methods: {
    setCategory : function(i){
      this.$emit('changeCat', i)
      this.selected = this.options[i];
      this.isHidden = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.select_btn{
  background-color: #F7F8FD;
  border-radius: 5px;
  padding: 13px 24px;
  font-family: 'Jost';
  font-size: 15px;
  line-height: 22px;color: #3A4374;
  border:none;
  width: 100%;

  &:focus{
    border: 1px solid #4661E6;
  }
}

.options{
  opacity: 0;
  width: 100%;
  position: absolute;
  top : calc(100% + 16px);
  left: 0;
  background: #FFFFFF;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  border-radius: 10px;
  z-index: 10;
}

.option{
  color: #647196;
  font-size: 16px;
  line-height: 23px;
  padding: 13px 24px;
  cursor: pointer;

  &>img{
    display: none;
  }

  &.selected{
    &>img{
      display: block;
    }
  }
  
  &:not(:last-child){
    border-bottom: 1px solid  #3a437415;
  }

  &:hover{
    color: #AD1FEA;
  }
}

.pr{
  position: relative;
}

.no_event{
  pointer-events:none;
}

.arrow{
  transition: all 400ms ease-in-out;
}

.flip{
  transform: rotate(180deg);
}

</style>

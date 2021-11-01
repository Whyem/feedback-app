<template>
    <div class="topnav flex flex--ai flex--jsb">
        <div class="flex flex--ai">
          <div class="hide-for-mobile flex flex--ai">
            <img src="@/assets/shared/bulb.svg" alt="bulb" class="bulb">
            <h2>6 Suggestions</h2>
          </div>
    
          <div class="pr">
            <button class="sort_btn flex flex--ai">
              <p>Sort by : <span class="sort_by">Most Upvotes</span></p>
              <img src="@/assets/shared/icon-arrow-up-white.svg" alt="arrow" class="arrow">
            </button>

            <div class="options">
              <div class="option flex flex--jsb flex--ai">
                <p>Most Upvotes</p>
                <img src="@/assets/shared/icon-check.svg" alt="check">
              </div>

              <div class="option flex flex--jsb flex--ai">
                <p>Least Upvotes</p>
                <img src="@/assets/shared/icon-check.svg" alt="check">
              </div>

              <div class="option flex flex--jsb flex--ai">
                <p>Most Comments</p>
                <img src="@/assets/shared/icon-check.svg" alt="check">
              </div>

              <div class="option flex flex--jsb flex--ai">
                <p>Least Comments</p>
                <img src="@/assets/shared/icon-check.svg" alt="check">
              </div>
            </div>
          </div>
          
        </div>

        <router-link to="/add" class="add flex flex--ai flex--jc">
          + Add feedback
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'TopNav',
}
</script>

<style lang="scss" scoped>
.topnav {
  background: #373F68;
  border-radius: 10px;
  padding: 14px 16px;
  margin-bottom: 24px;
}

h2 {
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  margin-right: 38px;
}

img {
  display: block;
}

.bulb{
  margin-right: 14px;
}

.sort_btn{
  background: none;
  border: none;
  font-family: inherit;
  color: #F2F4FE;
  font-size: 14px;
  line-height: 20px;
}

.sort_by{
  font-weight: bold;
}

.arrow{
  width: 8px;
  margin-left: 8px;
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

.options{
  display:none;
  width: 255px;
  position: absolute;
  bottom: -41px;
  left: 0;
  background: #FFFFFF;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  border-radius: 10px;
  transform: translateY(100%);
}

.option{
  color: #647196;
  font-size: 16px;
  line-height: 23px;
  padding: 13px 24px;
  cursor: pointer;
  
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

@media (max-width: 376px) {
  .topnav {
    border-radius: 0;
  }

  .sort_btn{
    font-size: 13px;
  }
}

</style>

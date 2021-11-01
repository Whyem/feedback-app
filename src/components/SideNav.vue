<template>

  <div class="sidenav_cont hide-for-mobile fm-bd">
    <div class="title_container">
      <h2>Frontend Mentor</h2>
      <p class="subtitle">Feedback Board</p>
    </div>

    <div class="categories_container flex">
      <button class="category active"> All</button>
      <button class="category">UI</button>
      <button class="category">UX</button>
      <button class="category">Enhancement</button>
      <button class="category">Bug</button>
      <button class="category">Feature</button>
    </div>

    <div class="roadmap_container">
      <div class="flex flex--ai flex--jsb rm_header">
        <h3>Roadmap</h3>
        <router-link to="/roadmap" >View</router-link>
      </div>

      <ul>
        <li>
          <div class="flex flex--ai">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#F49F85"/></svg>
            <p>Planned</p>
          </div>
          <h4>2</h4>
        </li>
        <li>
          <div class="flex flex--ai">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#AD1FEA"/></svg>
            <p>In-Progress</p>
          </div>
          <h4>3</h4>
        </li>
        <li>
          <div class="flex flex--ai">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#62BCFA"/></svg>
            <p>Live</p>
          </div>
          <h4>1</h4>
        </li>
      </ul>
    </div>
  </div>


  <div class="hide-for-desktop">
    <div class="sidenav_mobile flex flex--ai flex--jsb">
      <div class="align-left">
        <h2>Frontend Mentor</h2>
        <p class="subtitle">Feedback Board</p>
      </div>

      <div class="bourgir">
        <span></span>
        <span></span>
        <span></span>
      </div>
      
    </div>
  </div>

  <div class="modal"></div>

  <div class="sidenav_content_mobile">
    <div class="categories_container flex">
      <button class="category active"> All</button>
      <button class="category">UI</button>
      <button class="category">UX</button>
      <button class="category">Enhancement</button>
      <button class="category">Bug</button>
      <button class="category">Feature</button>
    </div>

    <div class="roadmap_container">
      <div class="flex flex--ai flex--jsb rm_header">
        <h3>Roadmap</h3>
        <router-link to="/roadmap" >View</router-link>
      </div>

      <ul>
        <li>
          <div class="flex flex--ai">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#F49F85"/></svg>
            <p>Planned</p>
          </div>
          <h4>2</h4>
        </li>
        <li>
          <div class="flex flex--ai">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#AD1FEA"/></svg>
            <p>In-Progress</p>
          </div>
          <h4>3</h4>
        </li>
        <li>
          <div class="flex flex--ai">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#62BCFA"/></svg>
            <p>Live</p>
          </div>
          <h4>1</h4>
        </li>
      </ul>
    </div>
  </div>
  

</template>

<script>


import $ from 'jquery'

export default {
  name: 'SideNav',
  mounted: function(){
    $(".bourgir").click(function(){
      if($(".sidenav_content_mobile").hasClass("move")){
        $(".modal").removeClass("fadeIn");
        $(".modal").addClass("fadeOut");
        $(".sidenav_content_mobile").removeClass("move");
        $("feedbacks_container").css("pointer-events","all");
        $("body").removeClass("noScroll");
      }

      else{
        $(".modal").removeClass("fadeOut");
        $(".modal").addClass("fadeIn");
        $(".sidenav_content_mobile").addClass("move");
        $("feedbacks_container").css("pointer-events","none");
        $("body").addClass("noScroll");
      }
      
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .sidenav_cont{
    margin-right: 30px
  }

  .sidenav_mobile{
    color:white;
    background: linear-gradient(150deg, rgba(255, 255, 255, 0) 79%, rgba(251,181,122,1) 100%), linear-gradient(300deg, rgba(255, 255, 255, 0) 79%, rgba(122,216,251,1) 100%),radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%);
    padding: 16px 24px;
  }

  .sidenav_content_mobile{
    position: absolute;
    background: #F7F8FD;
    top: 74px;
    right: 0;
    height: 100%;
    z-index: 6;
    transform: translateX(100%);
    transition: all 400ms ease-in-out;

    &.move{
      transform: translateX(0);
    }
  }


  .bourgir{
    height: 19px;

    &>span{
      width: 20px;
      height: 3px;
      background: white;
      display: block;

      &:not(:last-child){
        margin-bottom: 4px;
      }
    } 
  }

  .modal{
    position: absolute;
    top: 74px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00000050;
    z-index: 5;
    visibility: hidden;
  }

  .title_container {
    max-width: 255px;
    width: 255px;
    text-align: left;
    border-radius: 10px;
    padding: 62px 77px 24px 24px;
    color:white;
    background: linear-gradient(150deg, rgba(255, 255, 255, 0) 79%, rgba(251,181,122,1) 100%), linear-gradient(300deg, rgba(255, 255, 255, 0) 79%, rgba(122,216,251,1) 100%),radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%);
    margin-bottom: 24px;
  }

  .categories_container{
    width: 255px;
    max-width: 255px;
    background: white;
    border-radius: 10px;
    padding: 24px 10px 10px 24px;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }

  .roadmap_container{
    width: 255px;
    max-width: 255px;
    background: white;
    border-radius: 10px;
    padding: 24px;
  }

  .rm_header{
    margin-bottom:24px
  }

  .category{
    background: #F2F4FF;
    color: #4661E6;
    border-radius: 10px;
    padding: 5px 16px;
    border:none;
    font-family: inherit;
    font-weight: 600;
    font-size: 13px;
    margin-right: 8px;
    margin-bottom: 14px;
    
    &.active{
      color:white;
      background: #4661E6;
    }
  }

  .subtitle{
    font-weight: 500;
    font-size: 15px;
    opacity: 0.75;
    color: white;
  }
  
  h2{
    font-weight: bold;
    font-size: 20px;
    letter-spacing: -0.25px;
    margin:0;
    margin-bottom: 2px;
  }

  h3{
    color: #3A4374;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: -0.25px;
  }

  h4{
    font-weight: bold;
    font-size: 16px;
    color: #647196;
  }

  a{
    font-weight: 600;
    font-size: 13px;
    text-decoration-line: underline;
    color: #4661E6;
  }

  ul {
    list-style: none;
    text-align: left;
  }

  li{
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child){
      margin-bottom: 8px;
    }
  }

  svg{
    margin-right: 16px;
  }

  p{
    font-weight: normal;
    font-size: 16px;
    color: #647196;
  }

@media (max-width: 768px) {
  .title_container {
    width: 33%;
    margin: 0;
    margin-right: 10px;
    padding-right: 0;
    padding-top: 103px;
  }

  .categories_container{
    width: 33%;
    margin: 0;
    margin-right: 10px;
  }

  .roadmap_container{
    width: 33%;
    margin: 0;
  }

  .sidenav_cont{
    margin-right: 0;
    margin-bottom: 40px;
    width: 100%;
  }
}

@media (max-width: 376px) {
  h2{
    font-size: 15px;
  }

  .subtitle{
    font-size: 13px;
  }

  .categories_container{
    width: 82%;
    margin: 0 auto;
    margin-bottom: 24px;
    margin-top: 24px;
  }

  .roadmap_container{
    width: 82%;
    margin: 0 auto;
  }

}

.fadeIn{
  animation: fadeIn 400ms ease-in-out forwards;
}

.fadeOut{
  animation: fadeOut 400ms ease-in-out forwards;
  pointer-events: none;
}

@keyframes fadeIn{
  0%{
    opacity: 0;
    visibility: hidden;
  }

  100%{
    opacity: 1;
    visibility: visible;
  }
}

@keyframes fadeOut{
  0%{
    opacity: 1;
    visibility: visible;
  }

  100%{
    opacity: 0;
    visibility: hidden;
  }
}

</style>

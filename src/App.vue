<template>

<router-view />

  
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style lang="scss">
html{
    font-size: 100%;
    box-sizing: border-box;
}

*:focus{
    outline: none;
}

*, *::after, *::before{
    box-sizing: border-box;
}

#app{
  width: 100%;
}

body {
  padding: 94px 0 77px 0;
  margin: 0;
  font-family: 'Jost', sans-serif;
  background-color: #F7F8FD;
  min-height: 100vh;
  position: relative;
  text-align: center;
  overflow-x: hidden;
}

h1, h2, h3, h4, p, small, ul{
    margin: 0;
    padding: 0;
}

.align-left{
  text-align: left;
}

.flex{
    display: flex;

    &--row{
        flex-direction: row;
    }

    &--jc{
        justify-content: center;
    }

    &--jcfs{
        justify-content: flex-start;
    }

    &--jcfe{
        justify-content: flex-end;
    }

    &--jsb{
        justify-content: space-between;
    }

    &--ai{
        align-items: center;
    }

    &--as{
        align-items: flex-start;
    }

    &--fr{
      flex-direction: row-reverse;
    }
}

.fm-bd{
  display: block;
}

.fd-bm{
  display: flex;
}

.hide-for-desktop{
  display: none;
}

.noScroll{
  overflow: hidden;
}


@media (max-width: 768px) {
  .fm-bd{
    display: flex;
  }

  .fd-bm{
    display: block;
  }

  body {
    padding-top: 56px;
  }
}

@media (max-width: 376px) {
  body {
    padding: 0 0 77px 0;
  }
  
  .hide-for-mobile{
    display: none;
  }

  .hide-for-desktop{
    display: block;
  }
}

</style>

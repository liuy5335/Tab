<template>
    
    <div id="app">
        <div class="list" v-tab>
            <ul>
                <li class='act'>111</li>
                <li>222</li>
                <li>333</li>
            </ul>
            <div class="tabs">
                <tab1></tab1>
                <tab2></tab2>
                <tab3></tab3>
            </div>
        </div>
        <div id="app1">
            <games></games>
        </div>
        
    </div>
</template>

<script>
import Vue from "vue"
import tab1 from "./components/tab1"
import tab2 from "./components/tab2"
import tab3 from "./components/tab3"
import games from "./components/games"

import $ from 'jquery'

export default {
  name: 'app',
  data (){
    return {

    }
  },
  components : {
    tab1:tab1,
    tab2:tab2,
    tab3:tab3,
    games:games
  }/*,
  directives : {
    tab : {
      bind:function(el){
        $(el).find('li').each(function(index){
            
            $(this).click(function(){
                var that = index;
                console.log(that)
                $(this).addClass('act').siblings().removeClass('act');
                $('.tabs').children().eq(that).show().siblings().hide();
            })
        })
      }
    }
  }*/
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
*{padding:0;margin:0;list-style:none;}
html,body{
  width: 100%;
  height: 100%;
}
#app1{
  border:1px #000 solid;
}
#app{
  width: 300px;
  height: 1000px;
  border:1px #ccc solid;
  overflow: hidden;
}

.list ul{
  width: 300px;
  height: 30px;
  border-bottom:1px #ccc solid;
  display: flex;  
}
.list ul li{
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
.tabs{
  overflow: hidden;
}
.tabs p{
  background: #fff;
}
.act{
  font-weight: bold;
  background: #eee;
}
.tabs,.tabs p{
  width: 100%;
  height: 270px;
}
</style>

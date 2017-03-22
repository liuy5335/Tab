import Vue from 'vue'
import $ from 'jquery'
Vue.directive('tab',{
  bind:function(el){
    $(el).find('li').each(function(index){
    	var that = index;
        $(this).click(function(){
            console.log(that)
            $(this).addClass('act').siblings().removeClass('act');
            $('.tabs').children().eq(that).show().siblings().hide();
        })
    })
  }
})
<template>
	<!-- <div class='cont'>
		<p v-for='(value,index) in data' @click='changBg'>{{value}}</p> 
	</div>-->
	 <div id="box">
        <ul class="puzzle-wrap">
            <li  
            	:class="{'value': true, 'puzzle-empty': !value}" 
            	 v-for = "(value,index) in puzzles" 
            	 v-text="value"
            	 @click = "moveEn(index)">
            	 
            </li>
        </ul>
        <button @click = "render()">重置游戏</button>
    </div>
</template>
<script>
import $ from 'jquery'
	export default {
		name : 'games',
		/*data (){
			return {
				data : [1,2,3,4,5,6,7,8]
			}
		},
		methods:{
			changBg(){
				console.log($(this).html())
			}
		}*/
		data(){
			return {
				puzzles:[]
			}
			
		},
		methods:{
			render(){
				
				let puzzlesArr =  [],i=1;
				for(i;i<16;i++){
					puzzlesArr.push(i)
				};
				puzzlesArr = puzzlesArr.sort(()=>{
					return Math.random()-0.5
				});
				this.puzzles = puzzlesArr;
				this.puzzles.push('')
				console.log(puzzlesArr)
			},
			moveEn(index){
				let curNum = this.puzzles[index],
	                leftNum = this.puzzles[index - 1],
	                rightNum = this.puzzles[index + 1],
	                topNum = this.puzzles[index - 4],
	                bottomNum = this.puzzles[index + 4]
				
	            // 和为空的位置交换数值
	            if (leftNum === '' && index % 4) {
	            	//console.log(index)
	                this.$set(this.puzzles,index - 1, curNum)
	                this.$set(this.puzzles,index, '')
	            } else if (rightNum === '' && 3 !== index % 4) {
	                this.$set(this.puzzles,index + 1, curNum)
	                this.$set(this.puzzles,index, '')
	            } else if (topNum === '') {
	                this.$set(this.puzzles,index - 4, curNum)
	                this.$set(this.puzzles,index, '')
	            } else if (bottomNum === '') {
	                this.$set(this.puzzles,index + 4, curNum)
	                this.$set(this.puzzles,index, '')
	            }
	           
			},
			
		}/*,
		created:function(){
			render();
		}*/
	}
</script>
<style>
		body {
		    font-family: Arial, "Microsoft YaHei"; 
		}
		
		#box {
		    width: 300px;
		    margin: 3px auto 0;
		}
		
		.puzzle-wrap {
		    width: 300px;
		    height: 300px;
		    padding: 0;
		    background: #eee;
		    list-style: none;
		}
		
		.value {
		    float: left;
		    width: 25%;
		    height: 50px;
		    font-size: 20px;
		    background: orange;
		    text-align: center;
		    line-height: 50px;
		    border: 1px solid #ccc;
		    box-sizing: border-box;
		    cursor: pointer;
		}
		
		.puzzle-empty {
		    background: #ccc;
		}
		
		.btn-reset {
		    box-shadow: inset 2px 2px 18px;
		}
	/*.cont{
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}
	.cont p{
		width: 25%;
		height: 60px;
		box-sizing: border-box;
		border:1px #ccc solid;
	}
	.act{
		background: orange;
	}*/

</style>
<template>
	<div>
		{{ name }}
	</div>
</template>

<script>
export default {
	props:{
		name:{
			type:String,
			default:'lison'
		},
		
	},
	//组件被复用时调用
	beforeRouteUpdate(to,from,next){
		//可以直接使用this
		console.log(to.name,from.name);
	}
}
</script>
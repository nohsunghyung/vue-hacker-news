<template>
	<div>
		<ul>
			<li v-for="(item, index) in itemArray" :key="index" class="item-list">
				<div class="point">
					{{item.points || 0}}
				</div>
				<div class="title-area">
					<template v-if="item.domain">
						<a :href="item.url">{{ item.title }}</a>
					</template>
					<template v-else>
						<router-link :to="`/item/${item.id}`">
						{{ item.title }}
						</router-link>
					</template>
					by 
					<router-link 
						v-if="item.user" 
						:to="`/user/${item.user}`" class="user-name">
						{{ item.user }}
					</router-link>
					<a :href="item.url" v-else>{{ item.domain }}</a>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	computed : {
		itemArray(){
			return this.$store.state.list;
			// const path = this.$route.path;

			// if( path === '/news' ){
			// 	return this.$store.state.news;
			// } else if ( path === '/ask' ){
			// 	return this.$store.state.ask;
			// } else if ( path === '/jobs' ){
			// 	return this.$store.state.jobs;
			// }
		},
	},
	created(){
		// const path = this.$route.path;

		// if( path === '/news' ){
		// 	this.$store.dispatch('FETCH_NEWS');
		// } else if ( path === '/ask' ){
		// 	this.$store.dispatch('FETCH_ASK');
		// } else if ( path === '/jobs' ){
		// 	this.$store.dispatch('FETCH_JOBS');
		// }
	}
}
</script>

<style scoped>
ul {
	margin: 0;
	padding: 0;
}
li {
	display: flex;
	align-items: center;
	list-style: none;
	padding: 10px 0;
}
li + li {
	border-top: 1px solid #000;
}
li a {
	color: #666;
	text-decoration: none;
}
.point {
	width: 80px;
	height: 30px;
	line-height: 30px;
	text-align: center;
}
.title-area {
	margin-left: 20px;
}
.user-name {
	font-weight: bold;
	font-size: 16px;
}
</style>
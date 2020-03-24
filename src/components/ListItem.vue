<template>
	<div>
		<ul>
			<li v-for="(item, index) in itemArray" :key="index" class="item-list">
				<div class="point">
					{{item.points || 0}}
				</div>
				<div class="title-area">
					<template v-if="item.domain">
						<a :href="item.url" target="_blank">{{ item.title }}</a>
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
		},
	},
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
	padding: 25px 0;
}
li + li {
	border-top: 1px solid #ddd;
}
li a {
	color: #666;
	text-decoration: none;
}
.point {
	width: 80px;
	height: 30px;
	line-height: 30px;
  font-weight: bold;
	text-align: center;
  color: #4ab984;
}
.title-area {
	margin-left: 20px;
}
.user-name {
	font-weight: bold;
	font-size: 18px;
  color: #222;
}
</style>
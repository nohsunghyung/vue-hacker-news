<template>
	<div>
		<div class="user-wrap">
			<div class="user-icon">
				<i class="fas fa-user"></i>
			</div>
			<div class="user-info">
				<div class="user-name">
					<slot name="userName"></slot>
				</div>
				<slot name="time"></slot>
				<slot name="karma"></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props : {
		info : Object,
	},
	// computed : {
    //     userArray(){
    //         return this.$store.state.user;
    //     },
	// },
}
</script>

<style scoped>
.user-wrap {
	display: flex;
	align-items: center;
	justify-items: center;
	padding: 10px;
}
.user-icon i {
	font-size: 50px;
}
.user-info {
	margin-left: 20px;
}
.user-name, .user-name a {
	font-size: 20px;
	font-weight: bold;
	text-decoration: none;
	color: #222;
}
</style>
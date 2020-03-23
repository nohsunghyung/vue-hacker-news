<template>
    <div>
		<user-profile :info="userArray">
			<template slot="userName">
				{{ userArray.id }}
			</template>
			<span slot="time">
				{{ 'joined ' + userArray.created }}, 
			</span>
			<span slot="karma">
				{{ userArray.karma }}
			</span>
		</user-profile>
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile';
export default {
	components : {
		UserProfile,
	},
	computed : {
		userArray(){
			return this.$store.state.user;
		}
	},
	created(){
		const userId = this.$route.params.id;
		this.$store.dispatch('FETCH_USER',userId);
	}
}
</script>

<style>

</style>
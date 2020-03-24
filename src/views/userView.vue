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
import ListMixin from '../mixins/ListMixin'
export default {
	components : {
		UserProfile,
	},
	computed : {
		userArray(){
			return this.$store.state.user;
		}
  },
  mixins: [ListMixin]
}
</script>

<style>

</style>
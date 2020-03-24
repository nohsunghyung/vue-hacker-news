<template>
	<div>
		<user-profile :info="fechedItem">
			<router-link slot="userName" :to="`/user/${fechedItem.user}`">
				{{ fechedItem.user }}
			</router-link>
			<span slot="time">
				{{ 'posted ' + fechedItem.time_ago }}
			</span>
		</user-profile>
		<section>
			<h2>{{ fechedItem.title }}</h2>
		</section>
		<section v-html="fechedItem.content"></section>
	</div>
</template>

<script>
import UserProfile from '../components/UserProfile';
import { mapGetters } from 'vuex';
import ListMixin from '../mixins/ListMixin.js';
export default {
	components : {
		UserProfile,
	},
	computed : {
		...mapGetters([
			'fechedItem',
		])
  },
  mixins: [ListMixin],
}
</script>


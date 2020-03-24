export default {
	SET_NEWS(state, data){
		state.news = data;
	},
	SET_JOBS(state, data){
		state.jobs = data;
	},
	SET_ASK(state, data){
		state.ask = data;
	},
	SET_LIST(state, data){
		state.list = data;
	},
	SET_USER(state, data){
		state.user = data;
	},
	SET_ITEM(state, data){
		state.item = data;
  },
  clearUser(state){
    state.user = {};
  },
  clearItem(state){
    state.item = {};
  }
}
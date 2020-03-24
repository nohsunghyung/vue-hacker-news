import {
    fetchNewsList,
    fetchJobsList,
		fetchAskList,
		fetchList,
    fetchUserInfo,
    fetchItemContent,
} from '../api/index';

export default {
	// promise
	// FETCH_NEWS({ commit }){
	// 	return fetchNewsList()
	// 	.then(( response ) => {
	// 		commit('SET_NEWS', response.data);
	// 		return response;
	// 		})
	// 	.catch((error) => {
	// 			console.log(error);
	// 	})
	// },

	// async
	async FETCH_NEWS({commit}){
		const { data } = await fetchNewsList();
		commit('SET_NEWS', data);
		return data;
	},
	// promise
	// FETCH_JOBS({ commit }){
	// 	return fetchJobsList()
	// 	.then(({ data }) => {
	// 			commit('SET_JOBS', data);
	// 	})
	// 	.catch((error) => {
	// 			console.log(error);
	// 	})
	// },
	async FETCH_JOBS({ commit }){
		const { data } = await fetchJobsList();
		commit('SET_JOBS', data);
		return data;
	},
	FETCH_ASK({ commit }){
		return fetchAskList()
		.then(({ data }) => {
      commit('SET_ASK', data);
      return data;
		})
		.catch((error) => {
			console.log(error);
		})
	},
	// promise
	// FETCH_LIST({ commit }, pageName){
	// 	return fetchList(pageName)
	// 	.then( response  => {
	// 		console.log(4);
	// 		commit('SET_LIST', response.data);
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	})
	// },
	
	// async
	async FETCH_LIST({ commit }, pageName) {
		const { data } = await fetchList(pageName);
		commit('SET_LIST', data);
		return data;
	},
	async FETCH_USER({ commit }, userId){
		const { data } = await fetchUserInfo(userId)
    commit('SET_USER',data);
    return data;
	},
	FETCH_ITEM({ commit }, itemId){
		return fetchItemContent(itemId)
		.then(({ data }) => {
      commit('SET_ITEM',data);
      return data;
		})
		.catch((error) => {
			console.log(error);
		})
	}
}
import axios from 'axios';

const config = {
    baseUrl : 'https://api.hnpwa.com/v0/',
}

function fetchNewsList(){
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}
// async function fetchList(pageName) {
// 	try {
// 		// return await axios.get(`${config.baseUrl}${pageName}/1.json`);
// 		const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
// 		return response;
// 	} catch (error) {
// 		console.log(error);	
// 	}
// }

function fetchUserInfo(userId) {
  return axios.get(`${config.baseUrl}user/${userId}.json`);
}

function fetchItemContent(itemId) {
  return axios.get(`${config.baseUrl}item/${itemId}.json`);
}

export {
	fetchNewsList,
	fetchJobsList,
	fetchAskList,
	fetchList,
	fetchUserInfo,
	fetchItemContent,
}

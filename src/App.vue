<template>
    <div id="app">
        <tool-bar></tool-bar>
		<transition name="fade">
			<router-view></router-view>
		</transition>
		<Spinner :loading="loadingStatus"></Spinner>
    </div>
</template>

<script>
import ToolBar from './components/ToolBar';
import Spinner from './components/Spinner';
import bus from './utils/bus.js';

export default {
    components : {
        ToolBar,
		Spinner,
	},
	data(){
		return{
			loadingStatus : false,
		}
	},
	methods : {
		startLoading(){
			this.loadingStatus = true;
		},
		endLoading(){
			this.loadingStatus = false;
		}
	},
	created(){
		bus.$on('start:spinner', this.startLoading);
		bus.$on('end:spinner', this.endLoading);
	},
	beforeDestory(){
		bus.$off('start:spinner', this.startLoading);
		bus.$off('end:spinner', this.endLoading);
	}
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


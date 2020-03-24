<template>
    <div>
        <header>
            <ul class="header">
				<li><router-link to="/news">news</router-link></li>
				<li><router-link to="/jobs">jobs</router-link></li>
				<li><router-link to="/ask">ask</router-link></li>
			</ul>
        </header>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
	.header {
		display: flex;
		align-items: center;
		margin: 0;
		padding: 10px 0;
    background-color: #4ab984;
	}
	.header li {
		list-style: none;
		margin: 0 10px;
	}
  .header a {
    text-decoration: none;
    color: #fff;
  }
  .header .router-link-active {
    font-weight: bold;
    color: #222;
  }
</style>
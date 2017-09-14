import Vue from 'vue'
import axios from 'axios'

Vue.use({
	install(V, O) {
		V.prototype.$axios = axios
	}
})

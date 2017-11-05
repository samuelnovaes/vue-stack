import Vue from 'vue'
import Vuetify from 'vuetify'
import axios from 'axios'

Vue.use(Vuetify)
Vue.use({
	install(V, O) {
		V.prototype.$axios = axios
	}
})

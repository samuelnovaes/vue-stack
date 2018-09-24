import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
	theme: {
		primary: colors.blue.darken2,
		secondary: colors.grey.darken3,
		accent: colors.blue.accent1,
		error: colors.red.accent2,
		info: colors.blue.base,
		success: colors.green.base,
		warning: colors.amber.base
	}
})
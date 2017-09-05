<template>
	<v-app>
		<v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher>
			<v-list>
				<v-list-tile v-for="(item, i) in items" :key="i" :to="item.to">
					<v-list-tile-action>
						<v-icon>{{item.icon}}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title class="black--text">{{item.title}}</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar fixed class="primary" dark>
			<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
			<v-btn icon @click.stop="miniVariant = !miniVariant">
				<v-icon>{{miniVariant ? 'chevron_right' : 'chevron_left'}}</v-icon>
			</v-btn>
			<v-btn icon @click.stop="clipped = !clipped">
				<v-icon>web</v-icon>
			</v-btn>
			<v-btn icon @click.stop="fixed = !fixed">
				<v-icon>remove</v-icon>
			</v-btn>
			<v-toolbar-title>{{title}}</v-toolbar-title>
			<v-spacer></v-spacer>
		</v-toolbar>
		<main>
			<v-container fluid>
				<nuxt />
			</v-container>
		</main>
		<v-footer :fixed="fixed" class="grey lighten-2">
			<v-spacer/>
			<span>&copy; {{new Date().getFullYear()}}</span>
			<v-spacer/>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			clipped: false,
			drawer: true,
			fixed: false,
			items: [
				{ to: '/', title: 'Welcome', icon: 'apps' },
				{ to: '/inspire', title: 'Inspire', icon: 'bubble_chart' }
			],
			miniVariant: false,
			title: 'Vuetify.js'
		}
	}
}
</script>

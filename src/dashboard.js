/*
 * SPDX-FileCopyrightText: 2018 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import Vue from 'vue'

import Dashboard from './components/Dashboard.vue'
import store from './store/store.js'

// Load recommendations
store.dispatch('fetchRecommendations', true)

document.addEventListener('DOMContentLoaded', function() {

	OCA.Dashboard.register('recommendations', (el) => {
		const View = Vue.extend(Dashboard)
		// eslint-disable-next-line no-unused-vars
		const vm = new View({
			propsData: {},
			store,
		}).$mount(el)
	})

})

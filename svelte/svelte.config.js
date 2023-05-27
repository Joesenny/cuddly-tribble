import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'

import {mdsvex} from 'mdsvex'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extension: ['.md'],
}

/** @type {import('@sveltejs/kit').Config} */
const config = {

	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {

	adapter: adapter()

	}
}

export default config

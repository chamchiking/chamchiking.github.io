// mdsvex.config.js
import rehypeKatex from 'rehype-katex';

/** @type {import('mdsvex').MdsvexOptions} */
const config = {
	extensions: ['.md'],
	rehypePlugins: [rehypeKatex]
};

export default config;

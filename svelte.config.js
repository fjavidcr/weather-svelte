// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter: adapter()
		adapter: adapter({
      fallback: '200.html'
    }),
		paths: {
			base: dev ? '' : '/your-repo-name',
		},
		// If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
		// For example, instead of '_app', use 'app_', 'app', 'internal', etc.
		appDir: 'app',
	}
};

export default config;

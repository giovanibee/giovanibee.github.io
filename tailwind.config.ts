import { join } from 'path';
import type { Config } from 'tailwindcss';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {
			boxShadow: {
				'inner': 'inset 3px -4px 20px 0.1px rgba(28, 56, 100, 0.56), inset -4px 3px 28px 1px rgba(200,0,0,0.5)',
			},
		},
	},
  plugins: [
    skeleton({
      themes: { preset: [ "skeleton" ] }
    })
  ]
} satisfies Config;

export default config;
						
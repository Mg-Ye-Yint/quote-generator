module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
    twin: {
      styled: '@emotion/styled',
      config: 'tailwind.config.js',
      preset: 'emotion',
      debugProp: true,
    },
};

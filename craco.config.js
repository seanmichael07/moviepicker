module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ],
    }
  },
  plugins: [
    {
      plugin: require("craco-antd"),
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {  },
            javascriptEnabled: true,
          },
        },
      },
    },
  ]
  };

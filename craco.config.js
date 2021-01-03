module.exports = {
    plugins: [
      {
        plugin: require("craco-antd"),
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: { '@primary-color': '#0da574' },
              javascriptEnabled: true,
            },
          },
        },
      },
    ],
  };

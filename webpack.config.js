const developPath = {
  dev: `${__dirname}/develop/assets/js/`,
  output: `${__dirname}/src/assets/js/`
};

const webpack = require('webpack');
const path = require('path');
const glob = require('glob');

const scripts = glob.sync(`${developPath.dev}*.js`);

const entries = {};
scripts.forEach(value => {
  const re = new RegExp(`${developPath.dev.replace(/\\/g, '/')}`);
  const key = value.replace(re, '');
  entries[key] = value;
});

const config = {
  mode: 'production',
  entry: entries,
  output: {
    path: developPath.output,
    filename: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'env',
                  {
                    'targets': {
                      'ie': 11
                    },
                  }
                ]
              ]
            }
          }
        ],
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};

module.exports = config;
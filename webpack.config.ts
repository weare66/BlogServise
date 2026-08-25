import path from 'path';
import webpack from 'webpack';
// import HTMLWebpackPlugin from 'html-webpack-plugin';
import { buildPlugins } from './config/build/buildPlugins';
import { buildLoader } from './config/build/buildLoader';
import { buildResolvers } from './config/build/buildResolve';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths } from './config/build/types/config';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
};

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
  mode: 'development',
  paths,
  isDev,
});

export default config;

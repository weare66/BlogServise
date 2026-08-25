import { buildLoader } from './buildLoader';
import { buildPlugins } from './buildPlugins';
import { BuildOptions } from './types/config';
import webpack from 'webpack';
import path from 'path';
import { buildResolvers } from './buildResolve';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoader(),
    },
    resolve: buildResolvers(),
  };
}

import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoader({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  // Если не используем тайпскрипт -- нужен babel-loader
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            // Включает CSS-модули только для файлов, содержащих '.module.'
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // Настройка понятных имен классов в режиме разработки
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
            exportLocalsConvention: 'camelCase',
            namedExport: false, // Отключает принудительные именованные экспорты, разрешая export default
          },
        },
      },

      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  return [tsLoader, cssLoader];
}

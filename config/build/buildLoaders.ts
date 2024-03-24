import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    // хорошей практикой считается выносить loader в отдельную переменную, чтобы потом мы могли четко видеть последовательность
    // этих loader

    // woff2|woff - расширение для шрифтов
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    };

    const cssLoader = buildCssLoaders(isDev);

    const babelLoader = {
        test: /\.(?:js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', { targets: 'defaults' }],
                ],
                plugins: [[
                    // i18next-extract позволяет автоматически при сборке вытаскивать ключи для перевода в отдельный файл
                    'i18next-extract',
                    {
                        locales: ['ru', 'en'],
                        // чтобы при переводе ключ становился дефолтным значением
                        // keyAsDefaultValue: true
                    }],
                ],
            },
        },
    };

    // если бы ts не использовался, нам бы потребовался babel loader
    const tsLoader = {
        // указываются файлы, которые следует пропустить через loader
        test: /\.tsx?$/,
        // указывается loader, который необходимо использовать для этих файлов
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [
        fileLoader,
        svgLoader,
        babelLoader,
        tsLoader,
        cssLoader,
    ];
}

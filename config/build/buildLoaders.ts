import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
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
        }

    const svgLoader = {
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        }

    const cssLoader =  {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                // Для того, чтобы не генерировать css файлы в режиме разработки
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                // названия loader могут быть строкой, так и объектом. но в таком случае нужно создавать объект
                // и в поле loader указать его название
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            // modules - для того, чтобы использовать css modules
                            // modules: true,
                            // resPath - аргумент, принимающий путь до файла
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            // localIdentName - условие, которое будет выводить в девтулзах указанное нами название стиля
                            // а не сгенерированное уникальное.
                            // [path] - путь до компонента, чтобы гарантировать уникальность
                            // [name] - название самого класса
                            // [local] - hash, для того чтобы точно было все изолированно и уникально
                            // [hash:base64:8] - уникальный сгенерированный идентификатор из 8 символов
                            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                        }
                    }
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }
    // если бы ts не использовался, нам бы потребовался babel loader
    const tsLoader = {
            // указываются файлы, которые следует пропустить через loader
            test: /\.tsx?$/,
            // указывается loader, который необходимо использовать для этих файлов
            use: 'ts-loader',
            exclude: /node_modules/,
        }
    return [
        fileLoader,
        svgLoader,
        cssLoader,
        tsLoader
    ]
}
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoaders(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
        // Creates `style` nodes from JS strings
        // Для того, чтобы не генерировать css файлы в режиме разработки
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
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
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };
}

import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            // template позволяет использовать файл как шаблон, чтобы в него встраивались скрипты
            // без этого шаблона, в файле билда, в index.html не был виден div className='root
            template: paths.html
        }),
        new webpack.ProgressPlugin,
        // Плагин нужен для того, чтобы при компиляции извлекать css в отдельные файлы. css создается для
        // каждого файла js, в котором содержится css
        // Может возникнуть проблема, когда после добавления плагина, стили применяться не будут. Это, вероятно
        // произойдет из-за того, что в файле билда будет сгенерировано 2 уникальных стиля: один для модульного файла, другой
        // для обычного. Чтобы решить эту проблему, в css loader можно написать либо регулярку для ключа auto, либо
        // ф-ию, которая это проверяет
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ]
}
// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack'); //to access built-in plugins

import path from 'path'
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
    // entry - стартовая точка нашего приложения. Хардкодить пути нехорошая практика, потому что на разных ОС
    // пути могут работать по-разному
    // entry: './src/index.ts'

    // dirname - папка, в которой мы находимся в данный момент. Затем через запятую указываем участки пути
    entry: path.resolve(__dirname, 'src', 'index.ts'),

    // output - настройки того, куда и как мы будем делать сборку нашего приложения
    output: {
        // filename - название главного файла в сборке нашего приложения
        // [name] позволяет динамически определять название файла
        // [contenthash] - шаблон. благодаря генерации уникальный названий/идентифаторов в названии файла билда (main.d123345)
        // проблема с кэшированием решается. Это решает проблему, когда мы выкатили новую версию, а у пользователя отображается старая.
        filename: "[name].[contenthash].js",
        // path - путь, куда эта сборка должна происходить
        path: path.resolve(__dirname, 'build'),
        // clean - нужен для того, чтобы очищать файлы, которые появляются при сборке
        clean: true
    },
    // если mode стоит production, то webpack автоматически его сжимает. это называется минификация
    mode: 'development',
    // плагины позволяют выполнять задачи после сборки бандла. плагин - объект JS, имеющий метод apply. Этот метод
    // вызывается компилятором и предоставляет доступ ко всему жизненному циклу компиляции
    plugins: [
        new HtmlWebpackPlugin({
            // template позволяет использовать файл как шаблон, чтобы в него встраивались скрипты
            // без этого шаблона, в файле билда, в index.html не был виден div className='root
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin
    ],
    module: {
        rules: [
            {
                // указываются файлы, которые следует пропустить через loader
                test: /\.tsx?$/,
                // указывается loader, который необходимо использовать для этих файлов
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        // Нужно для того, чтобы при импорте не указывать расширение файла, а только его название
        extensions: ['.tsx', '.ts', '.js'],
    },
    // loader нужен для того, чтобы обрабатывать файлы, выходящие за рамки JS: png, svg, jpeg, css, scss, ts

}

export default config
import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev } = options
    return {
        // если mode стоит production, то webpack автоматически его сжимает. это называется минификация
        mode,
        // entry - стартовая точка нашего приложения. Хардкодить пути нехорошая практика, потому что на разных ОС
        // пути могут работать по-разному
        // entry: './src/index.tsx'

        // dirname - папка, в которой мы находимся в данный момент. Затем через запятую указываем участки пути
        entry: paths.entry,

        // output - настройки того, куда и как мы будем делать сборку нашего приложения
        output: {
            // filename - название главного файла в сборке нашего приложения
            // [name] позволяет динамически определять название файла
            // [contenthash] - шаблон. благодаря генерации уникальный названий/идентифаторов в названии файла билда (main.d123345)
            // проблема с кэшированием решается. Это решает проблему, когда мы выкатили новую версию, а у пользователя отображается старая.
            filename: "[name].[contenthash].js",
            // path - путь, куда эта сборка должна происходить
            path: paths.build,
            // clean - нужен для того, чтобы очищать файлы, которые появляются при сборке
            clean: true
        },
        // плагины позволяют выполнять задачи после сборки бандла. плагин - объект JS, имеющий метод apply. Этот метод
        // вызывается компилятором и предоставляет доступ ко всему жизненному циклу компиляции
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
        // loader нужен для того, чтобы обрабатывать файлы, выходящие за рамки JS: png, svg, jpeg, css, scss, ts
    }
}
import {ResolveOptions} from 'webpack'
import {BuildOptions} from "./types/config";
export function buildResolvers({paths}: BuildOptions): ResolveOptions {
    return {
        // Нужно для того, чтобы при импорте не указывать расширение файла, а только его название
        extensions: ['.tsx', '.ts', '.js'],
        // настройка необходима для компиляции абсолютных путей после того, как мы в ts.config указали начальную точку
        // для абсолютного импорта в нашем приложении
        preferAbsolute: true,
        // импорты из папки node_modules так же абсолютные (???)
        modules: [paths.src, 'node_modules'],
        // для каждого модуля главным файлом будет являться index
        mainFiles: ['index'],
        // для абсолютных импортов можно так же использовать alies (@), но с помощью {} в alias мы можем обращаться
        // к абсолютным импортам напрямую
        alias: {}
    }
}
import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        // Необходимо вновь определить путь для абсолютных импортов, т.к. сторибук понимает их неправильно
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    // необходимо для устранения ошибки с css модулями, т.к. сторибук о них не знает
    // Также есть ошибка с React is not defined. в main.ts описано как решить
    config.module.rules.push(buildCssLoaders(true));
    return config;
};

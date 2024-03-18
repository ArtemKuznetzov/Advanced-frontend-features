import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer({ port }: BuildOptions): DevServerConfiguration {
    return {
        port,
        // open будет автоматически нам открывать в браузере страницу с нашим приложением
        open: true,
        // historyApiFallback нужен для того, чтобы в Network не было фейл GET запроса во время роутинга в другой раздел
        historyApiFallback: true,
        // для того, чтобы работал hot module replacement
        hot: true,
    };
}

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {

    // Automatically clear mock calls, instances and results before every test
    clearMocks: true,
    testEnvironment: 'jsdom',
    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    // An array of file extensions your modules use
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    // для того, чтобы была возможность использовать абсолютные импорты
    modulePaths: [
        '<rootDir>src',
    ],
    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: [
        'node_modules',
    ],
    // The root directory that Jest should scan for tests and modules within
    // Дефолтная регулярка не работала с MACOS
    testMatch: [
    // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    rootDir: '../../',
    // путь к файлу, в котором импорт из jest-dom
    // тот же путь нужно прописать в ts.config
    // Будет ошибка с пресетами Babel. Нужно будет установить пресет на реакт в babel.config
    // Будет ошибка с css. Нужно прописать moduleNameMapper в jest.config
    // Будет ошибка React is not defined. Нужно в babel.config установить runtime automatic для пресета на реакт
    // Будет ошибка с асинхронными функциями в компоненте. Нужно импортировать regenerator-runtime в setupTests
    // Будет предупреждение из-за i18n. Для этого нужно создать переменную, которой присвоится значение
    // HOC withTranslation()(Component)
    // Будет предупреждение о том, что мы не прокинули instance i18n в компонент. Доступа к нему нет, т.к. он импортирован
    // в index.tsx, а рендерим при тестировании изолированный компонент
    // Для этого был создан кастомный компонент componentRender с специальным конфигом i18nForTests
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        // благодаря плагину svg импортируются как готовый компонент, можно сделать подобный мапер
        // грубо говоря это мок, который будет использоваться для всех импортов, в которых присутствует svg (расширение svg)
        // этот мапер будет возврашаться для svg, тем самым уйдет ошибка при импорте svg в тестируемом компоненте
        // '\\svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
};

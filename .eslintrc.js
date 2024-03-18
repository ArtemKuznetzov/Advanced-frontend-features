module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    // В качестве названия ключа для правила выступает его название из документации
    // 1 - warning
    // 2 - правило работает
    // 0 - правило отключено
    // либо же заменить все это на строчные названия: warning, error и т.д
    rules: {
        // 4 в данном случае количество отступов
        'react/jsx-indent': [2, 4],
        // отступы для пропсов в jsx
        'react/jsx-indent-props': [2, 4],
        // количество отступов (в целом во всех файлах???)
        indent: [2, 4],
        // расширения, в которых jsx будет разрешен
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        // правило, отключающее ошибку из-за наличия абсолютных импортов
        'import/no-unresolved': 'off',
        // отключение ошибки использования именнованных экспортов в пользу дефолтных
        'import/prefer-default-export': 'off',
        // предупреждение о неиспользуемых переменных
        'no-unused-vars': 'off',
        // чтобы не было ошибки из-за отсутствия дефолтных пропсов
        'react/require-default-props': 'off',
        // отключение ошибки из-за отсутствия импорта реакта (для 17 версии неактуально)
        'react/react-in-jsx-scope': 'off',
        // прокидывать пропсы spread оператором нехорошо, но можно для компонентов кита.
        'react/jsx-props-no-spreading': 'off',
        // правило отключающее ошибку при использовании стрелочных функций для компонента
        'react/function-component-definition': 'off',
        // ??? ошибка has been declare. Ругалось на enum
        'no-shadow': 'off',
        // правило отключает проверку с указанием расширения файла при импорте
        'import/extensions': 'off',
        // ошибка возникающая при импорте вебпака.
        // т.е. для импорта файла с дев зависимостью в файл с сборкой проекта.
        'import/no-extraneous-dependencies': 'off',
        // отключение нижних отступов. нужно для глобальных переменных
        'no-underscore-dangle': 'off',
        'no-restricted-exports': 'off',
        'no-trailing-spaces': 'off',
        // допустимая длина комментария. для себя :)
        'max-len': ['error', 150],
        'spaced-comment': [0],
    },
    globals: {
        __IS_DEV__: true,
    },
};

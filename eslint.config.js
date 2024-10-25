import globals from 'globals'
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
            globals: {
                ...globals.node,
                ...globals.commonjs,
                es2021: true
            }
        },
        plugins: {
            '@stylistic/js': stylisticJs
        },
        rules: {
            '@stylistic/js/indent': ['error', 2],
            '@stylistic/js/linebreak-style': ['error', 'unix'],
            '@stylistic/js/quotes': ['error', 'single'],
            '@stylistic/js/semi': ['error', 'never']
        }
    }
]

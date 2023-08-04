module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true,
    },
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
    },
    'rules': {
        // 'space-before-function-paren': ['error', 'always'],
        'comma-dangle': ['error', {
            'arrays': 'never',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
        }],
        'max-lines-per-function': ['error', 30],
        'max-depth': ['error', 4],
        'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
        'linebreak-style': ['error', 'windows'],
        'eol-last': ['error', 'always'],
        // 'semi': ['error', 'never'],
        'prefer-const': 'error',
    },
}

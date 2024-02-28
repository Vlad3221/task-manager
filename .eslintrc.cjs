/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
    parserOptions: {
        "parser": "@typescript-eslint/parser",
        ecmaVersion: 'latest'
    },
    rules: {
        "vue/attributes-order": ["error", {
            "order": [
                "DEFINITION",
                "LIST_RENDERING",
                "CONDITIONALS",
                "RENDER_MODIFIERS",
                "GLOBAL",
                ["UNIQUE", "SLOT"],
                "TWO_WAY_BINDING",
                "OTHER_DIRECTIVES",
                "OTHER_ATTR",
                "EVENTS",
                "CONTENT"
            ],
            "alphabetical": false
        }],
        "vue/max-attributes-per-line": ["error", {
            "singleline": {
                "max": 1
            },
            "multiline": {
                "max": 1
            }
        }],
        "vue/component-name-in-template-casing": ["error", "kebab-case", {
            "registeredComponentsOnly": true
        }],
        "vue/no-irregular-whitespace": ["error", {
            "skipStrings": true,
            "skipComments": false,
            "skipRegExps": false,
            "skipTemplates": false,
            "skipHTMLAttributeValues": false,
            "skipHTMLTextContents": false
        }],
        'vue/order-in-components': ['error', {
            order: [
                'el',
                'name',
                'key',
                'parent',
                'functional',
                ['delimiters', 'comments'],
                ['components', 'directives', 'filters'],
                'extends',
                'mixins',
                ['provide', 'inject'],
                'ROUTER_GUARDS',
                'layout',
                'middleware',
                'validate',
                'scrollToTop',
                'transition',
                'loading',
                'inheritAttrs',
                'model',
                ['props', 'propsData'],
                'emits',
                'setup',
                'asyncData',
                'data',
                'fetch',
                'head',
                'computed',
                'watch',
                'watchQuery',
                'LIFECYCLE_HOOKS',
                'methods',
                ['template', 'render'],
                'renderError'
            ]
        }],
        "comma-dangle": ["error", {
            "arrays": "never",
            "objects": "never",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        "vue/component-definition-name-casing": ["error", "PascalCase"],
        "vue/no-dupe-keys": ["error", {
            "groups": []
        }]
    }
}

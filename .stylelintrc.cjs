module.exports = {
    extends: ['stylelint-stylus/standard', 'stylelint-config-prettier', 'stylelint-config-standard'],
    plugins: [
        'stylelint-prettier',
    ],
    overrides: [
        {
            files: ["*.stylus", "*.styl", "**/*.stylus", "**/*.styl"],
            customSyntax: "postcss-styl",
        },
    ],
    rules: {
        "stylus/declaration-colon": "never",
        "stylus/pythonic": "always",
        "stylus/selector-list-comma": "never",
        "stylus/semicolon": "never",
        "stylus/single-line-comment": "always",
        "import-notation": "string",
        "media-feature-range-notation": "prefix", // "context" / "prefix"
        "stylus/media-feature-colon": ["never"], // ["never"] => max-width ":" -> не используем! ["always"] -> используем
    },
};
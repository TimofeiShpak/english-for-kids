module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "import/no-cycle": 0,
        "import/no-mutable-exports": 0,
        "no-restricted-syntax": 0,
        "import/extensions": 0,
        "no-undef": 0,
        "prefer-const": 0,
        "linebreak-style": 0,
        "quotes": ["error", "double"],
    },
};

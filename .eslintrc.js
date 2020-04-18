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
        "no-useless-escape": 0,
        "import/no-mutable-exports": 0,
        "no-param-reassign": 0,
        "guard-for-in": 0,
        "no-restricted-syntax": 0,
        "no-unused-vars": 0,
        "import/extensions": 0,
        "no-undef": 0,
        "import/prefer-default-export": 0,
        "prefer-const": 0,
        "linebreak-style": 0,
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "no-plusplus": 0,
    },
};

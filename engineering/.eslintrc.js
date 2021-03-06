module.exports = {
    "parser":"@typescript-eslint/parser",
    "plugins":['@typescript-eslint'],
    "rules":{
        "no-var":"error",
        "no-extra-semi":"error",
    },
    "parserOptions":{
        "ecmaVersion":6,
        "sourceType":"module",
        "ecmaFeatures":{
            "modules":true
        }
    }
}
module.exports = {
    plugins: ['stylelint-order'],
    extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
    rules: {
        'order/order': ['custom-properties', 'declarations'],
        'order/properties-alphabetical-order': true
    }
};

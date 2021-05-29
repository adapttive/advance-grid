define([
    'uiLayout',
    'Magento_Ui/js/form/element/abstract',
], function (layout, Abstract) {
    return Abstract.extend({
        defaults: {
            condition: {
                component: 'Magento_Ui/js/form/element/select',
                name: '${ $.name }_condition',
                target: '${ $.name }',
                // property: 'value',
                // parent: '${ $.name }',
            },
        },

        initialize: function () {
            this._super();
            layout([this.condition]);
            console.log(this);
            return this;
        },
    });
});

/**
 * @api
 */
define([
    'ko',
    'underscore',
    'mageUtils',
    'uiLayout',
    'uiElement'
], function (ko, _, utils, layout, Element) {
    'use strict';

    return Element.extend({
        defaults: {
            template: 'Adapttive_Ui/grid/refresh/refresh',
        },

        /**
         * Initializes paging component.
         *
         * @returns {Refresh} Chainable.
         */
        initialize: function () {
            this._super();
            return this;
        },


        /**
         * Refresh the current page.
         *
         * @returns {Refresh} Chainable.
         */
        refresh: function () {
            this.source.initStorage().clearData();
            this.source.reload({"refresh":true});
            return this;
        },

        loading: function () {
            return false
        }
    });
});

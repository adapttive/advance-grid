define([
        'underscore',
        'uiLayout',
    ],
    function (_, layout) {
        'use strict';
        /**
         * Removes empty properties from the provided object.
         *
         * @param {Object} data - Object to be processed.
         * @returns {Object}
         */
        function removeEmpty(data) {
            console.log("data:", data)
            var result = utils.mapRecursive(data, utils.removeEmptyValues.bind(utils));

            return utils.mapRecursive(result, function (value) {
                return _.isString(value) ? value.trim() : value;
            });
        }

        var mixin = {
            defaults: {
                template: 'Adapttive_Ui/grid/filters/filters',
                exports: {
                    appliedConditions: '${ $.provider }:params.conditions'
                },
            },

            /**
             * Creates instance of a filter associated with the provided column.
             *
             * @param {Column} column - Column component for which to create a filter.
             * @returns {Filters} Chainable.
             */
            addFilter: function (column) {
                var index = column.index,
                    processed = this._processed,
                    filter,
                    condition;

                if (!column.filter || _.contains(processed, index)) {
                    return this;
                }

                filter = this.buildFilter(column);
                condition = this.buildCondition(filter);

                processed.push(index);

                layout([filter]);
                layout([condition]);

                return this;
            },

            /**
             * Returns an array of range filters.
             *
             * @returns {Array}
             */
            getRanges: function () {
                return this.elems.filter(function (filter) {
                    return filter.isRange && !filter.isCondition;
                });
            },

            getCondition: function (name) {
                return this.elems.filter(function (filter) {
                    return filter.name === name;
                });
            },

            /**
             * Returns an array of non-range filters.
             *
             * @returns {Array}
             */
            getPlain: function () {
                return this.elems.filter(function (filter) {
                    return !filter.isRange && !filter.isCondition;
                });
            },

            buildCondition: function (filter) {
                return {
                    isCondition: true,
                    children: false,
                    dataScope: filter.dataScope + "_condition",
                    extendProvider: false,
                    imports: {
                        visible: filter.imports.visible
                    },
                    label: filter.label + " Type",
                    name: filter.name + "_condition",
                    parent: filter.parent,
                    provider: filter.provider,
                    __disableTmpl: {
                        label: true
                    },

                    component: 'Magento_Ui/js/form/element/select',
                    template: 'ui/grid/filters/field',
                    options: [
                        {value: "", label: "-- Please Select --", __disableTmpl: true},
                        {value: "nlike", label: "Not Like", __disableTmpl: true},
                        {value: "like", label: "Like", __disableTmpl: true}
                    ],
                    caption: ' '
                }
            },

            /**
             * Sets filters data to the applied state.
             *
             * @returns {Filters} Chainable.
             */
            apply: function () {
                //TODO: set conditions and filter together
                this.set('applied', removeEmpty(this.filters));

                return this;
            },
        }

        return function (target) {
            return target.extend(mixin);
        };
    });

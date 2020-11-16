# advance-grid

Module for Magento 2 provides enhanced ui grid with refresh and conditional filters

![version](https://img.shields.io/packagist/v/adapttive/advance-grid)
![php](https://img.shields.io/packagist/php-v/adapttive/advance-grid)
![license](https://img.shields.io/packagist/l/adapttive/advance-grid) 
![size](https://img.shields.io/github/repo-size/adapttive/advance-grid)
![stars](https://img.shields.io/github/stars/adapttive/advance-grid?style=social)
![contributors](https://img.shields.io/github/contributors/adapttive/advance-grid)

## installation

`composer require adapttive/advance-grid`

## features

- **refresh**: without the page reload ![ready](https://img.shields.io/badge/refresh-ready-green)
- **filter**: with conditions ![under-development](https://img.shields.io/badge/filter-under--development-yellow)
- **locking**: of columns for horizontal scroll ![under-development](https://img.shields.io/badge/locking-under--development-yellow)

## usage

- added to sales order grid by default

- to add to other ui grids, add the following to ui grid xml:

```xml
   <listingToolbar name="listing_top" template="Adapttive_Ui/grid/toolbar">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="stickyTmpl" xsi:type="string">Adapttive_Ui/grid/sticky/sticky</item>
            </item>
        </argument>
        <component name="listing_refresh" component="Adapttive_Ui/js/grid/refresh/refresh"/>
   </listingToolbar>
```

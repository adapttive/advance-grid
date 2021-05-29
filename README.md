# advance-grid

Module for Magento 2 provides enhanced ui grid with refresh and conditional filters

## features

- **refresh**: without the page reload (ready)
- **filter**: with conditions (under-development)
- **locking**: of columns for horizontal scroll (under-development)
- **ui_bookmark**: dedicated grid to reset/delete saved bookmarks when they stuck (under-development)

## usage

**refresh**: add the following to ui grid xml:

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

## references

- https://devdocs.magento.com/guides/v2.3/ui_comp_guide/howto/new_component_declaration.html
- https://devdocs.magento.com/guides/v2.4/ui_comp_guide/components/ui-toolbar.html

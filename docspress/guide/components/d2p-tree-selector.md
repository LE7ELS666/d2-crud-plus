# d2p-tree-selector

## Props

<!-- @vuese:d2p-tree-selector:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|value|值|`Number` / `String` / `Boolean` / `Array` / `Object`|`false`|-|
|filter|过滤，value中的nodes过滤方法 参数为nodes|`Function`|`false`|-|
|multiple|是否多选，传入false为单选|`Boolean`|`false`|true|
|ignoreFullCheckedChildren|是否忽略选中节点的子节点|`Boolean`|`false`|true|
|leafOnly|是否只返回叶子节点|`Boolean`|`false`|false|
|includeHalfChecked|是否包含半选节点|`Boolean`|`false`|false|
|elProps|el-tree的属性配置|`Object`|`false`|-|
|dict|数据字典配置|`Object`|`false`|-|

<!-- @vuese:d2p-tree-selector:props:end -->


## Events

<!-- @vuese:d2p-tree-selector:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|check-change|-|-|
|current-change|-|-|
|input|-|-|
|change|-|-|

<!-- @vuese:d2p-tree-selector:events:end -->



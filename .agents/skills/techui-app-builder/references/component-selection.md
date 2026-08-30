# 组件选择导航

本页只提供意图到组件的导航，不替代 [TechUI 官方文档](https://techui.net/#/docs)。使用前必须核对当前版本的组件名、属性、事件、插槽和示例。

## 高频映射

| 界面意图 | 优先检查的组件 | 文档检索词 |
| --- | --- | --- |
| 操作按钮、状态标签 | `TuiButton`、`TuiTag` | `button`、`tag` |
| 栅格与弹性布局 | `TuiRow`、`TuiCol`、`TuiGrid`、`TuiFlex` | `rowCol`、`grid`、`flex` |
| 路由导航、页签、树形导航 | `TuiRouterNav`、`TuiTabs`、`TuiTree` | `routerNav`、`tabs`、`tree` |
| 表单与字段输入 | `TuiForm`、`TuiInput`、`TuiSelect`、`TuiDatePicker`、`TuiTransfer` | `form`、`input`、`select`、`datePicker`、`transfer` |
| 字段展示与进度 | `TuiFields`、`TuiProgress` | `fields`、`progress` |
| 数字与表格动效展示 | `TuiDigitalFlip`、`TuiRollingTable` | `digitalFlip`、`rollingTable` |
| 加载、空态、错误和结果页 | `TuiLoaderPanel`、`TuiResult` | `loaderPanel`、`result` |
| 对话框、抽屉、浮层 | `TuiDialog`、`TuiDrawer`、`TuiPopPanel` | `dialog`、`drawer`、`popPanel` |
| 自适应大屏与图表 | `TuiAdaptive`、`TuiEcharts` | `adaptive`、`echarts` |
| 管理后台外壳 | `TuiAdminLayout` | `admin layout` |
| 科幻按钮与面板 | `ScifiHexButton`、`ScifiAlphaPanel` | `hex button`、`alpha panel` |

## 选择规则

1. 先明确状态模型和信息层级，再选择组件；不要按视觉相似度堆叠组件。
2. 页面级列表和远程数据由应用层持有，除非组件文档明确声明它拥有数据请求或状态职责。
3. 加载、空数据、失败和成功状态都应有明确呈现，不用一个布尔值混合所有状态。
4. 可复用能力通过已文档化的公开属性、事件、插槽和 CSS 变量表达；一次性业务组合留在页面中。
5. 不编造图标类、CSS 类或私有导出。需要图标时先从官方文档或仓库提供的图标索引查找。
6. 组件名称可能随版本调整；表中的名称是导航线索，不是离线 API 保证。

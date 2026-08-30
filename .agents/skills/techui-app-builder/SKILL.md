---
name: techui-app-builder
description: Build or extend Vue 3 applications with TechUI Base, Admin, Prime, or Scifi. Use for TechUI package selection, setup, component selection, page composition, forms, dashboards, data visualization, and sci-fi interfaces. 使用 TechUI 构建或扩展 Vue 应用时使用。
---

# TechUI App Builder

使用 TechUI 的公开包和官方文档构建可维护的 Vue 3 应用。优先选择满足需求的最小产品包，并把业务组合留在应用层。

## 工作流

1. 读取目标仓库的 `AGENTS.md`，确认允许修改、验证和外部操作的范围。
2. 确认目标是现有应用还是本仓库的某个 Starter。产品包不明确时读取 [package-selection.md](references/package-selection.md)。
3. 新建或修复启动结构时读取 [initialization.md](references/initialization.md)，复用对应 `starter/*`，不要重新发明入口结构。
4. 选择组件时读取 [component-selection.md](references/component-selection.md)，随后打开官方文档核对组件名、属性、事件、插槽和 CSS 变量。
5. 构建完整页面或应用时读取 [application-recipes.md](references/application-recipes.md)，只采用与当前场景有关的配方。
6. 在授权范围内实现。真正通用的能力放入公开、已文档化的组件 API；业务语义和一次性页面编排留在应用层。
7. 完成前读取 [validation.md](references/validation.md)，执行允许的检查，并明确区分已验证项与待验证项。

## 文档与实现契约

- 以 [TechUI 官方文档](https://techui.net/#/docs) 和当前安装包的公开导出为事实来源；本 Skill 只负责导航与决策，不复制完整 API 文档。
- 不猜测组件名、图标类、属性、事件、默认值或导入路径。找不到公开依据时先检索文档或现有代码，再向用户说明缺口。
- 保持 API 标识符、类型、默认值和枚举值为原始英文；用户可见文案按应用语言编写。
- 不复制 TechUI 源码、测试用例或文档站实现到 Starter。需要缺陷复现和 Issue 时改用 `$techui-issue-reproducer`。
- Prime、授权、令牌和客户数据属于敏感边界，不写入仓库；缺少合法材料时停止相关实现并说明所需条件。

## 参考资料路由

- [package-selection.md](references/package-selection.md)：Base、Admin、Prime、Scifi 的选择边界与功能开关。
- [initialization.md](references/initialization.md)：Vue 3、Vite、Router、主题、`TechUIInit` 和 `TuiProvider` 的最小结构。
- [component-selection.md](references/component-selection.md)：按界面意图选择高频组件，并定位官方文档。
- [application-recipes.md](references/application-recipes.md)：普通应用、管理后台、数据看板、科幻界面和 Prime 应用的组合方式。
- [validation.md](references/validation.md)：静态检查、构建、浏览器验证及结果报告边界。

## 操作边界

安装依赖、执行构建、启动浏览器、运行 Git 或发布前，必须同时满足目标仓库规范和用户授权。持续工作或“全部完成”不自动扩大这些权限。

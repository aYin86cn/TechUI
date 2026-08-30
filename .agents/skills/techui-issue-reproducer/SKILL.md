---
name: techui-issue-reproducer
description: Create minimal reproductions and issue reports for TechUI Base, Admin, Prime, or Scifi in this repository. Use for TechUI defects, startup failures, compatibility problems, and documentation mismatches. 用于构建最小复现并整理 TechUI 问题。
---

# TechUI Issue Reproducer

把 TechUI 问题压缩为最小、可阅读、可复现的 Starter，并为本仓库的 Issues 生成不泄露敏感信息的报告。

## 工作流

1. 读取本仓库 `AGENTS.md`、用户描述和现有复现材料，记录已知事实与尚未验证的推测。
2. 读取 [reproduction.md](references/reproduction.md)，选择能触发问题的最小产品包和唯一 Starter。
3. 保留失败所需的最少路由、主题、组件、数据和配置，删除无关业务依赖，但不得改变导致问题的条件。
4. 用官方文档和当前公开导出核对 API。文档与行为不一致时，同时记录文档预期和实际行为。
5. 在允许范围内执行复现检查；没有运行构建或浏览器时，必须把复现状态标记为未验证。
6. 读取 [issue-report.md](references/issue-report.md)，形成可直接提交到本仓库 Issues 的报告。

## 最小化规则

- 一个复现只聚焦一个主要问题，不同时整理无关缺陷。
- 默认只修改 `starter/base`、`starter/admin`、`starter/prime` 或 `starter/scifi` 中最匹配的一个，不同步污染其他 Starter。
- 不恢复完整测试用例，不复制 Source 内部组件实现、调试页或文档站代码。
- 版本、浏览器、操作系统、错误日志和触发步骤必须来自实际观察；无法确认时明确写“未确认”。
- 不提交许可证、钥匙串、令牌、账号、客户数据、内部地址或其他敏感信息。日志和截图先脱敏。
- 修复方案不是最小复现的必要组成；用户只要求诊断或报告时，不擅自修改组件源码。

## 参考资料

- [reproduction.md](references/reproduction.md)：Starter 选择、问题收敛、环境证据和验证等级。
- [issue-report.md](references/issue-report.md)：统一 Issue 模板、撰写规则和敏感信息检查。

## 操作边界

安装依赖、构建、浏览器复现、Git、联网提交 Issue 或发布均需要目标仓库规范与用户明确授权。生成 Issue 文案不等于授权代用户提交。

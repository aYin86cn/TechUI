# AGENTS.md

## 仓库定位

- 本仓库维护 TechUI 的最小启动案例与仓库级 AI 协作资料，不承载组件源码、完整 Demo、测试用例或文档镜像。
- 所有案例统一放在 `starter/`，当前仅包含 `base`、`admin`、`prime`、`scifi` 四个独立 Vue 3 + Vite 工程。
- 组件能力、API、授权、主题与进阶用法以 <https://techui.net/#/docs> 为准；本仓库只保证最短启动链路清晰。

## 结构边界

- 根目录只保留仓库治理、说明、workspace 配置、锁文件及 `.agents/skills`。
- 每个 Starter 必须能够独立阅读和启动，不依赖其他 Starter 的源码或相对路径资产。
- 不新增 `testcase`、`demo`、`docs`、`backup`、构建产物或复制自 Source 的组件实现。
- 公共依赖版本升级时，同步检查四个 Starter，避免不同案例长期漂移。

## AI 协作约定

- `AGENTS.md` 定义仓库职责、权限和验证硬边界；`.agents/skills` 提供可复用的任务工作流，两者不得互相替代。
- 所有 Skill 集中放在根目录 `.agents/skills/<skill-name>/`，不在四个 Starter 内重复创建。
- Skill 名称、目录、API 和组件标识使用英文；主体指导以中文为主，触发描述兼顾中英文检索。
- Skill 的 `references/` 只保存决策导航、最小契约和检查清单，不镜像完整组件文档。
- 新增 Skill 必须具有真实使用场景、完整 `SKILL.md` 和有效参考资料；不创建空目录或占位 Skill。
- TechUI 官方文档与当前公开包导出始终是组件 API 的事实来源。Skill 不得猜测组件名、图标、属性、事件、默认值或导入路径。

## 实现约定

- 示例保持简单：初始化 TechUI、注册 Vue Router、引入一个主题、展示少量代表性组件。
- 不在 Starter 内封装业务框架、权限系统、复杂路由、状态管理、请求层或完整后台模板。
- 使用公开包名与公开 API；旧别名仅用于迁移说明，不进入新示例。
- Prime 默认以体验模式启动，不提交许可证、钥匙串或任何授权材料。

## 验证与操作边界

- 修改后至少检查 JSON 可解析、workspace 路径完整、入口引用存在、四套依赖版本一致。
- 未经作者明确授权，不执行 `npm install`、`npm run build*`、浏览器联调、Git 操作或发布。
- 若未安装依赖或未运行构建，交付时必须明确说明验证边界。

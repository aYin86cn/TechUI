# TechUI Starter

[中文](#中文) | [English](#english)

## 中文

这是 TechUI 官方最小启动案例仓库。原先分散在 Base、Admin、Prime、Scifi 仓库中的 Starter 已统一到一个 workspace；完整组件演示、测试用例和重复文档不再随 Starter 分发。

同时，本仓库也是 TechUI 全部组件包统一且唯一的问题提交仓库。使用过程中发现的问题请统一提交到当前仓库的 Issues，不再分散提交到原有独立仓库。

仓库只回答一个问题：如何用 Vue 3 + Vite 启动对应的 TechUI 组件库。组件 API、主题、授权和进阶工程搭建请查阅 [TechUI 文档](https://techui.net/#/docs)。

### 为什么只保留 Starter

早期独立仓库同时包含 Starter 和大量测试用例，但测试用例会随着组件实现、内部调试方式和文档系统持续变化。多仓库重复维护容易造成版本漂移，也会让使用者误把内部验证代码当成推荐的工程实践。

因此，本仓库移除了完整测试用例，只保留可直接启动、便于阅读和复制的最小工程：

- 完整组件说明与使用示例统一由 [TechUI 文档](https://techui.net/#/docs) 维护。
- 开发期测试、调试页面和回归用例留在 TechUI Source 的内部测试体系中维护。
- 最小 Starter 提供稳定的安装与初始化基线，也便于提交问题时构建清晰、可复现的案例。
- 仓库提供面向 AI 协作的 [AGENTS.md](./AGENTS.md) 和仓库级 Agent Skills，让 AI 能更准确地理解工程边界、组件选择、构建流程和问题提交要求。

这些 AI 协作资料在初期可能并不完善，将随实际开发和问题处理持续补充；它们用于帮助开发者和 AI 更高效地使用 Starter，不会替代正式组件文档。

### Agent Skills

Skill 统一放在 [.agents/skills](./.agents/skills)，不会复制到每个 Starter：

- [techui-app-builder](./.agents/skills/techui-app-builder/SKILL.md)：选择 Base、Admin、Prime 或 Scifi，初始化应用，选择组件并组合常规应用、后台、数据看板和科幻界面。
- [techui-issue-reproducer](./.agents/skills/techui-issue-reproducer/SKILL.md)：把问题收敛为单个最小 Starter 复现，并生成可提交到本仓库 Issues 的统一报告。

在支持仓库 Skill 的 AI 工具中，可以直接使用“用 `$techui-app-builder` 构建数据看板”或“用 `$techui-issue-reproducer` 整理这个问题”。Skill 只提供工作流和导航；组件 API 仍以 [TechUI 文档](https://techui.net/#/docs) 与当前公开包为准。

### Starter

| 工程 | 组件包 | 适用场景 |
| --- | --- | --- |
| [`starter/base`](./starter/base) | `@techui/base` | 基础组件与通用数据展示 |
| [`starter/admin`](./starter/admin) | `@techui/admin` | 管理后台与工作台 |
| [`starter/prime`](./starter/prime) | `@techui/prime` | Prime 完整能力体验 |
| [`starter/scifi`](./starter/scifi) | `@techui/scifi` | 科幻动态 SVG 界面 |

### 快速开始

```bash
npm install
npm run dev:base
```

将 `base` 替换为 `admin`、`prime` 或 `scifi` 即可启动对应案例：

```bash
npm run dev:admin
npm run dev:prime
npm run dev:scifi
```

每个目录也可以作为独立工程阅读和复制。Starter 只保留初始化、路由、主题和少量代表性组件；需要构建完整项目时，请从这里开始并按文档逐步添加功能。

> `@techui/prime` 是付费组件包。仓库不包含许可证或钥匙串，示例默认进入官方提供的体验模式。

## English

This repository contains the official minimal starters for TechUI. The Base, Admin, Prime, and Scifi starters are now maintained in one workspace. Full demos, test cases, and duplicated documentation are intentionally excluded.

This is also the single official repository for reporting issues across all TechUI packages. Please submit every issue through this repository's Issues section instead of the former package-specific repositories.

Use this repository to verify the shortest Vue 3 + Vite setup path. Refer to the [TechUI documentation](https://techui.net/#/docs) for component APIs, themes, licensing, and production architecture.

### Why only starters are included

The former package-specific repositories contained both starters and extensive test cases. Those test cases change together with component internals, debugging workflows, and the documentation system. Duplicating them across repositories caused version drift and could make internal verification code look like recommended application architecture.

This repository therefore removes the full test suites and keeps only small, readable, and copyable starter projects:

- Complete component guidance and usage examples are maintained in the [TechUI documentation](https://techui.net/#/docs).
- Development tests, debugging pages, and regression cases remain in the internal TechUI Source test system.
- Minimal starters provide a stable installation and initialization baseline and make issue reproductions easier to understand.
- The repository provides an AI-oriented [AGENTS.md](./AGENTS.md) and repository-level Agent Skills so AI tools can understand repository boundaries, component selection, build workflows, and issue-reporting requirements.

The AI collaboration material may be incomplete at first and will evolve through real development and issue handling. It helps developers and AI tools work with the starters efficiently, but does not replace the official component documentation.

### Agent Skills

Skills are centralized in [.agents/skills](./.agents/skills) instead of being copied into every starter:

- [techui-app-builder](./.agents/skills/techui-app-builder/SKILL.md): selects Base, Admin, Prime, or Scifi; initializes the application; selects components; and composes standard apps, admin workbenches, dashboards, or sci-fi interfaces.
- [techui-issue-reproducer](./.agents/skills/techui-issue-reproducer/SKILL.md): reduces a problem to one minimal starter reproduction and drafts the unified report for this repository's Issues.

In an AI tool that supports repository skills, use prompts such as “Use `$techui-app-builder` to build a dashboard” or “Use `$techui-issue-reproducer` to prepare this issue.” Skills provide workflows and navigation only; component APIs remain governed by the [TechUI documentation](https://techui.net/#/docs) and current public packages.

### Available starters

| Project | Package | Purpose |
| --- | --- | --- |
| [`starter/base`](./starter/base) | `@techui/base` | Base UI and data display |
| [`starter/admin`](./starter/admin) | `@techui/admin` | Admin and workbench applications |
| [`starter/prime`](./starter/prime) | `@techui/prime` | Prime feature evaluation |
| [`starter/scifi`](./starter/scifi) | `@techui/scifi` | Sci-fi dynamic SVG interfaces |

### Quick start

```bash
npm install
npm run dev:base
```

Replace `base` with `admin`, `prime`, or `scifi` to run another starter. Each directory is intentionally small and can be copied as an independent project.

> `@techui/prime` is a paid package. No license or keychain material is stored here; the starter uses the official evaluation mode.

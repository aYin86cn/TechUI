# 最小初始化

## 先复用 Starter

本仓库的四个启动案例是首选基线：

- [Base Starter](../../../../starter/base)
- [Admin Starter](../../../../starter/admin)
- [Prime Starter](../../../../starter/prime)
- [Scifi Starter](../../../../starter/scifi)

复制或修改与已选产品包一致的 Starter。不要把四个 Starter 合并为一个含大量条件分支的入口。

## 最小入口顺序

1. 创建 Vue 应用。
2. 调用产品包对应的 `TechUIInit`。
3. 等待初始化完成。
4. 安装 Router。
5. 挂载应用。
6. 在根组件使用 `TuiProvider` 承载页面内容。

Base 的最小形态如下；其他产品包只替换为对应的公开导入，并以仓库 Starter 为准：

```ts
import { createApp } from 'vue'
import TechUIInit from '@techui/base'
import '@techui/themes/lightBlue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

TechUIInit({
  app,
  initLang: 'zh-CN',
  debug: import.meta.env.DEV,
}).then(() => {
  app.use(router)
  app.mount('#app')
})
```

## Router 与 Provider

- 即使只有一个页面，也保留最小 Router，因为 Provider 和后续组件可能依赖路由上下文。
- 路由元信息只声明当前真正使用的公开字段；最小公开页面可使用 `requireAuth: false`。
- 根组件保持轻量：主题、Provider、路由出口和必要布局即可。
- 未经需求驱动，不加入权限框架、状态库、请求层、复杂守卫或多层布局系统。

## 主题与 Vite

- 主题从 `@techui/themes` 直接导入；常用起点包括 `lightBlue`、`darkBlue` 和 `darkBlack`，最终名称以当前文档为准。
- `vite.config.ts` 应把实际选择的 TechUI 产品包和 `@techui/themes` 放入 `optimizeDeps.exclude`，保持与对应 Starter 一致。
- 依赖版本优先沿用本仓库根 workspace 与 Starter 的一致版本，不擅自升级。

这些说明不代表已获得安装依赖、构建或启动开发服务器的权限；执行前仍需读取目标仓库的 `AGENTS.md`。

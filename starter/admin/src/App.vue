<script setup>
import { ref } from 'vue'

const refreshed = ref(false)
</script>

<template>
  <TuiProvider>
    <main class="admin-shell">
      <header>
        <div>
          <p>@techui/admin</p>
          <h1>Admin Starter</h1>
        </div>
        <TuiButton type="primary" @click="refreshed = true">
          {{ refreshed ? '状态已刷新' : '刷新状态' }}
        </TuiButton>
      </header>

      <section class="metrics">
        <article><span>Workspace</span><strong>Ready</strong></article>
        <article><span>Router</span><strong>Connected</strong></article>
        <article><span>Theme</span><strong>Light Blue</strong></article>
      </section>

      <footer>
        当前案例只保留最小初始化链路。
        <a href="https://techui.net/#/docs" target="_blank" rel="noreferrer">按文档构建完整工作台</a>
      </footer>
    </main>
  </TuiProvider>
</template>

<style>
:root { font-family: Inter, "PingFang SC", "Microsoft YaHei", sans-serif; color: #dbe9ff; background: #0b1630; }
* { box-sizing: border-box; }
body { margin: 0; }

.admin-shell {
  min-height: 100%;
  padding: clamp(24px, 6vw, 72px);
  background:
    linear-gradient(90deg, rgb(63 135 255 / 8%) 1px, transparent 1px),
    linear-gradient(rgb(63 135 255 / 8%) 1px, transparent 1px),
    radial-gradient(circle at 80% 0%, #173b74, #0b1630 42%);
  background-size: 40px 40px, 40px 40px, auto;
}

header { display: flex; align-items: center; justify-content: space-between; gap: 24px; }
header p { margin: 0 0 8px; color: #70a6ff; font-weight: 700; }
h1 { margin: 0; font-size: clamp(38px, 7vw, 76px); }

.metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 64px; }
.metrics article { padding: 28px; border: 1px solid rgb(112 166 255 / 24%); border-radius: 16px; background: rgb(12 29 61 / 72%); }
.metrics span { display: block; color: #83a3d0; }
.metrics strong { display: block; margin-top: 18px; color: #f2f7ff; font-size: 24px; }
footer { margin-top: 28px; color: #8fa9ce; line-height: 1.8; }
footer a { margin-left: 8px; color: #70a6ff; font-weight: 600; text-decoration: none; }
footer a:hover { text-decoration: underline; }

@media (max-width: 720px) {
  header { align-items: flex-start; flex-direction: column; }
  .metrics { grid-template-columns: 1fr; margin-top: 40px; }
}
</style>

<script setup>
import { ref } from 'vue'

const clicks = ref(0)
</script>

<template>
  <TuiProvider>
    <main class="starter-page">
      <section class="starter-card">
        <p class="package-name">@techui/base</p>
        <h1>TechUI Base Starter</h1>
        <p class="summary">Vue 3、Vite、Router、主题与 TechUI 初始化已经完成。</p>

        <div class="actions">
          <TuiButton type="primary" @click="clicks += 1">
            组件已就绪 · {{ clicks }}
          </TuiButton>
          <a href="https://techui.net/#/docs" target="_blank" rel="noreferrer">查看完整文档</a>
        </div>
      </section>
    </main>
  </TuiProvider>
</template>

<style>
:root {
  font-family: Inter, "PingFang SC", "Microsoft YaHei", sans-serif;
  color: #17243d;
  background: #eef5ff;
}

* { box-sizing: border-box; }
body { margin: 0; }

.starter-page {
  min-height: 100%;
  display: grid;
  place-items: center;
  padding: 32px;
  background:
    radial-gradient(circle at 20% 15%, rgb(34 117 255 / 18%), transparent 30%),
    linear-gradient(145deg, #f8fbff, #e7f0ff);
}

.starter-card {
  width: min(680px, 100%);
  padding: 48px;
  border: 1px solid rgb(41 104 207 / 18%);
  border-radius: 24px;
  background: rgb(255 255 255 / 82%);
  box-shadow: 0 24px 80px rgb(43 83 145 / 16%);
}

.package-name { margin: 0 0 12px; color: #246be8; font-weight: 700; }
h1 { margin: 0; font-size: clamp(34px, 6vw, 58px); line-height: 1.05; }
.summary { margin: 20px 0 32px; color: #596b88; font-size: 17px; line-height: 1.7; }
.actions { display: flex; flex-wrap: wrap; align-items: center; gap: 18px; }
.actions a { color: #246be8; font-weight: 600; text-decoration: none; }
.actions a:hover { text-decoration: underline; }

@media (max-width: 560px) {
  .starter-page { padding: 18px; }
  .starter-card { padding: 30px 24px; }
}
</style>

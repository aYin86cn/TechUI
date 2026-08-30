<template>
  <TuiProvider>
    <main class="prime-page">
      <ScifiAlphaPanel title="TECHUI PRIME" :background-opacity="0.92">
        <div class="prime-content">
          <p class="package-name">@techui/prime · evaluation mode</p>
          <h1>One package.<br />A complete TechUI experience.</h1>
          <p>Starter 只展示初始化与代表性组件。授权、Admin 能力和进阶模块请按文档接入。</p>
          <div class="actions">
            <ScifiHexButton>PRIME READY</ScifiHexButton>
            <a href="https://techui.net/#/docs" target="_blank" rel="noreferrer">OPEN DOCUMENTATION</a>
          </div>
        </div>
      </ScifiAlphaPanel>
    </main>
  </TuiProvider>
</template>

<style>
:root { font-family: Inter, "PingFang SC", "Microsoft YaHei", sans-serif; color: #d8f5ff; background: #020b17; }
* { box-sizing: border-box; }
body { margin: 0; }

.prime-page {
  min-height: 100%;
  display: grid;
  place-items: center;
  padding: 36px;
  background:
    radial-gradient(circle at 50% 30%, rgb(0 156 255 / 24%), transparent 34%),
    linear-gradient(145deg, #020913, #071a2e 60%, #020913);
}

.prime-page > * { width: min(900px, 100%); min-height: 480px; }
.prime-content { display: flex; min-height: 420px; flex-direction: column; justify-content: center; padding: clamp(34px, 7vw, 80px); }
.package-name { margin: 0 0 14px; color: #42d9ff; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
h1 { margin: 0; color: #f4fcff; font-size: clamp(36px, 6vw, 68px); line-height: 1.02; }
.prime-content > p:not(.package-name) { max-width: 650px; margin: 24px 0 34px; color: #8eb7c9; font-size: 17px; line-height: 1.8; }
.actions { display: flex; flex-wrap: wrap; align-items: center; gap: 22px; }
.actions a { color: #42d9ff; font-size: 13px; font-weight: 700; letter-spacing: .08em; text-decoration: none; }
.actions a:hover { text-decoration: underline; }

@media (max-width: 560px) {
  .prime-page { padding: 16px; }
  .prime-content { min-height: 500px; }
}
</style>

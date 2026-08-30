<template>
  <TuiProvider>
    <main class="scifi-page">
      <ScifiAlphaPanel title="SYSTEM ONLINE" :background-opacity="0.88">
        <div class="panel-content">
          <p class="package-name">@techui/scifi</p>
          <h1>SCI-FI STARTER</h1>
          <p>动态 SVG 组件已完成初始化。这里保留一个面板与按钮作为最小启动检查。</p>
          <div class="actions">
            <ScifiHexButton>INITIALIZED</ScifiHexButton>
            <a href="https://techui.net/#/docs" target="_blank" rel="noreferrer">VIEW ALL COMPONENTS</a>
          </div>
        </div>
      </ScifiAlphaPanel>
    </main>
  </TuiProvider>
</template>

<style>
:root { font-family: "Rajdhani", Inter, "PingFang SC", sans-serif; color: #bdf8ff; background: #03090d; }
* { box-sizing: border-box; }
body { margin: 0; }

.scifi-page {
  min-height: 100%;
  display: grid;
  place-items: center;
  padding: 36px;
  background:
    repeating-linear-gradient(90deg, transparent 0 70px, rgb(0 229 255 / 5%) 71px),
    radial-gradient(circle at 50% 30%, rgb(0 229 255 / 14%), transparent 38%),
    #03090d;
}

.scifi-page > * { width: min(820px, 100%); min-height: 430px; }
.panel-content { min-height: 370px; padding: clamp(36px, 7vw, 76px); }
.package-name { margin: 0 0 16px; color: #39e5ff; font-size: 13px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
h1 { margin: 0; color: #eaffff; font-size: clamp(42px, 8vw, 80px); letter-spacing: .05em; line-height: 1; }
.panel-content > p:not(.package-name) { max-width: 600px; margin: 26px 0 36px; color: #75aeb6; line-height: 1.8; }
.actions { display: flex; flex-wrap: wrap; align-items: center; gap: 24px; }
.actions a { color: #39e5ff; font-size: 12px; font-weight: 700; letter-spacing: .12em; text-decoration: none; }
.actions a:hover { text-decoration: underline; }

@media (max-width: 560px) {
  .scifi-page { padding: 16px; }
  .panel-content { min-height: 470px; }
}
</style>

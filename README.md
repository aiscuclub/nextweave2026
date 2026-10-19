# NextWave 2026：AI 法創黑客松 官方網站

> 結合 **AI × 法律 × 科技 × 創意**，打造新世代法律科技解決方案！

由**東吳大學人工智慧應用社**主辦的「NextWave：AI 法創黑客松」2026 年度官方活動網站。網站提供活動介紹、重要時程、競賽辦法、決賽工作坊、獎金名次、重要公告與線上報名入口。

🔗 **網站**：<https://aiscuclub.github.io/nextweave2026/>
📝 **線上報名**：[Google 表單](https://docs.google.com/forms/d/1pV3JRWR1VF0grXSnMURSD6RUXyooklGbZhrUU8SW9fA/viewform)
📄 **競賽簡章**：[NextWave_AI法創黑客松_簡章.pdf](public/NextWave_AI法創黑客松_簡章.pdf)
🕰️ **2025 年活動網站**：<https://aiscuclub.github.io/NEXTWAVE/>

---

## 活動資訊

### 競賽主題

**2026 年度主軸：AI 技術應用與法律可近性提升**

運用創意思維與 AI 技術（如生成式 AI、AWS PartyRock、Figma 等低程式門檻平台），針對法律痛點提出創新解決方案與原型（Prototype）。

### 參賽資格

- 中華民國境內大專校院在學學生（大學及碩、博士生）
- 需滿 18 歲以上
- 每隊 2–5 人，可跨校、跨系組隊
- 不限科系、年級、國籍及專業領域

### 重要時程

| 項目 | 日期 / 時間 |
| --- | --- |
| 開放報名 | 2026/10/15（四） |
| 報名與初賽資料繳件截止 | 2026/11/30（一）23:59 |
| 決賽入選名單公告 | 2026/12/2（三），寄信通知 |
| 競賽工作坊與決賽線上說明會 | 2026/12/6（日）19:00–21:00，Google Meet 線上 |
| 決賽資料繳件截止 | 2026/12/25（五）23:59 |
| 決賽暨頒獎典禮 | 2026/12/27（日）13:00–19:00，東吳大學城中校區遊藝廣場 |

### 獎金

| 獎項 | 獎金 | 名額 |
| --- | --- | --- |
| 第一名 | NT$ 20,000 | 1 組 |
| 第二名 | NT$ 10,000 | 1 組 |
| 第三名 | NT$ 5,000 | 1 組 |
| 佳作獎 | NT$ 3,000 | 3 組 |
| 最佳簡報獎 | NT$ 2,000 | 1 組 |
| 參賽證明 | — | 所有入圍決賽者 |

**總獎金：NT$ 46,000**

### 主辦與協辦單位

- **主辦單位**：東吳大學人工智慧應用社
- **協辦單位**：東吳大學人本 AI 研究中心、台灣法學基金會
- **聯絡信箱**：<ai.scu.club@gmail.com>

---

## 技術架構

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 7](https://vite.dev/)（開發伺服器與打包）
- [lucide-react](https://lucide.dev/)（圖示）
- ESLint（程式碼檢查）
- GitHub Actions + GitHub Pages（自動部署）

## 本機開發

需要 [Node.js](https://nodejs.org/) 22 以上版本。

```bash
# 安裝套件
npm install

# 啟動開發伺服器（預設 http://localhost:5173/）
npm run dev

# 型別檢查並建置正式版本到 dist/
npm run build

# 在本機預覽建置結果
npm run preview

# 執行 ESLint 檢查
npm run lint
```

## 專案結構

```
nextweave2026/
├── .github/workflows/deploy.yml   # 推送到 main 時自動建置並部署到 GitHub Pages
├── index.html                     # 網頁入口、SEO 與社群分享預覽（og:image）設定
├── vite.config.ts                 # Vite 設定（建置時的 base 路徑）
├── .env                           # VITE_SITE_URL：本機建置用的網站網址預設值
├── public/                        # 靜態檔案，原樣複製到網站根目錄
│   ├── NextWave_AI法創黑客松_簡章.pdf   # 官方競賽簡章
│   ├── 2026年NextWave競賽提案書.odt     # 提案書範本（供下載）
│   ├── proposal.html              # 線上提案書規範（預覽與下載頁）
│   ├── proposal-preview/          # 提案書各頁預覽圖
│   ├── retrospective2025/         # 2025 精彩回顧照片
│   └── og-image.jpg               # 社群分享預覽圖
└── src/
    ├── main.tsx                   # React 進入點
    ├── App.tsx                    # 主頁面與各分頁區塊（時程、辦法、工作坊、獎金、公告…）
    ├── App.css / index.css        # 樣式
    ├── data/eventData.ts          # 報名連結、簡章路徑、初賽截止時間、回顧照片清單
    ├── components/
    │   ├── DeadlineCountdown.tsx  # 初賽截止倒數計時
    │   ├── PhotoCarousel2025.tsx  # 2025 回顧照片輪播
    │   └── LightboxModal.tsx      # 照片放大檢視
    └── assets/image/              # 主視覺、背景與單位 Logo
```

## 常見修改

活動資訊分散在網站程式碼與簡章 PDF 兩處，**修改日期或內容時請兩邊一起更新**，避免網站與簡章不一致。

| 想修改的內容 | 檔案位置 |
| --- | --- |
| 報名表單連結、初賽截止時間（倒數計時） | `src/data/eventData.ts` 的 `REGISTRATION_URL`、`PRELIM_DEADLINE` |
| 重要時程 | `src/App.tsx` 的 `TimelineSection` |
| 初賽／決賽說明、評分標準 | `src/App.tsx` 的 `Rules1Section` |
| 決賽工作坊時間與地點 | `src/App.tsx` 的 `WorkshopSection` |
| 獎金名次 | `src/App.tsx` 的 `PrizeSection` |
| 重要公告 | `src/App.tsx` 的 `notifications` 陣列 |
| 協辦單位 Logo | `src/App.tsx` 的 `OrgSection`，圖檔放在 `src/assets/image/` |
| 競賽簡章 | 直接替換 `public/NextWave_AI法創黑客松_簡章.pdf`（檔名不變即可） |
| 提案書範本 | 替換 `public/2026年NextWave競賽提案書.odt`，並更新 `public/proposal-preview/` 預覽圖 |
| 回顧照片 | 放入 `public/retrospective2025/photo-XX.jpg`，並調整 `eventData.ts` 中的照片數量 |

## 部署

專案使用 GitHub Actions 自動部署到 GitHub Pages：

1. 到 repo 的 **Settings → Pages → Build and deployment → Source**，選擇 **GitHub Actions**（只需設定一次）。
2. 之後每次推送到 `main` 分支，就會自動執行 `npm run build` 並將 `dist/` 部署上線。
3. 也可以在 **Actions** 分頁手動執行「Deploy to GitHub Pages」。

部署時會依照目前的帳號與 repo 名稱自動帶入網址（`BASE_PATH`、`VITE_SITE_URL`），所以 fork 到其他帳號或改 repo 名稱也能直接部署，不需要修改設定。`dist/` 是建置產物，不需要提交到 git。

---

© 2026 東吳大學人工智慧應用社 · AI 法創黑客松

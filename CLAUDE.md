# Datong Travel Guide — Project Context

## Business Goal

副业项目：面向来大同旅游的外国人做英文旅游攻略网站。

- **目标用户：** 英语国家的自由行旅客（北京→大同→平遥→西安线路）
- **盈利模式：** Trip.com 联盟佣金（CPS），用户在网站点击 affiliate link 预订酒店/门票/火车票，我们抽佣 2-7%
- **团队：** 用户（产品/内容）+ 老婆（投放/获客）
- **阶段：** 冷启动，网站刚搭建完成，流量为零

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 (CSS-based config via `@theme`) |
| Content | MDX files in `/content/`, rendered via `next-mdx-remote/rsc` |
| Deployment | Vercel (计划中，尚未部署) |
| Email | Resend API (已配置 API key，订阅功能待完善) |
| Analytics | 待添加 (Google Analytics + Vercel Analytics) |

## Design System: "Sandstone Modern"

灵感来自云冈石窟的砂岩材质。设计克制、编辑感强、不像 AI 模板。

### Colors
- `paper` #FAF8F4 — 页面背景
- `sand-100` #F2EDE5 — 卡片背景
- `sand-200` #E6DED3 — 边框、分隔线
- `sand-500` #B8A898 — 次要文字
- `stone-700` #5C5348 — 正文
- `stone-900` #2D2720 — 标题
- `cinnabar` #C9433A — **仅用于可点击元素**（CTAs、链接）
- `jade` #6B9085 — 提示/信息框

### Typography
- **Playfair Display** — 标题、Hero（每页最多 2 处使用）
- **Source Sans 3** — 正文、导航、所有 UI
- **JetBrains Mono** — 价格、时间、距离等数据

### 关键规则
- 红色（cinnabar）只在可交互元素上出现，装饰元素绝不用红色
- 设计风格参考高端旅行杂志（Monocle, Cereal），不花哨
- 响应式：移动端优先，所有页面都已适配

## Project Structure

```
/content/guides/        ← MDX 攻略文章
/content/attractions/   ← MDX 景点文章
/content/itineraries/   ← MDX 行程文章
/content/data/          ← 结构化数据文件（预留）
/components/layout/     ← Header, Footer, MobileMenu
/components/ui/         ← InfoBox, CTABanner, FAQ
/components/affiliate/  ← AffiliateCard 等 Trip.com 链接组件
/components/content/    ← TableOfContents, Breadcrumb, ItineraryDay
/components/mdx/        ← MDX 渲染组件映射
/lib/                   ← 工具函数（affiliate, content, metadata, data）
/app/                   ← Next.js App Router 页面
```

## Current Content (6 articles)

1. `/guides/datong-travel-guide` — 大同旅游总攻略（cornerstone）
2. `/guides/yungang-grottoes` — 云冈石窟详细攻略
3. `/guides/hanging-temple` — 悬空寺详细攻略
4. `/guides/datong-food-guide` — 大同美食指南（10 道必吃 + 餐厅推荐）
5. `/guides/beijing-to-datong-transport` — 北京→大同火车全攻略
6. `/itineraries/3-day-datong` — 3 日大同行程

## Features Built

- Trip.com affiliate links (hotels, tickets, trains) with click tracking
- Email subscription API (Resend, ready to activate)
- Table of Contents (sticky sidebar on desktop)
- FAQ accordion component
- Breadcrumb navigation with JSON-LD structured data
- SEO: metadata, JSON-LD, sitemap.xml, robots.txt, canonical URLs
- Google Analytics (GA4, via NEXT_PUBLIC_GA_ID env var)
- 404 page
- Mobile-responsive, all breakpoints tested

## Trip.com Affiliate Integration

- AID: `9288868` (环境变量 `NEXT_PUBLIC_TRIPCOM_AFFILIATE_ID`)
- SID: `324376718` (环境变量 `NEXT_PUBLIC_TRIPCOM_SID`)
- trip_sub3: `D18694321`
- URL 格式: `https://www.trip.com/xxx?Allianceid={AID}&SID={SID}&trip_sub3=D18694321`
- 所有 affiliate 链接通过 `lib/affiliate.ts` 的 `getAffiliateUrl()` 统一生成
- 环境变量在 `.env.local`（不提交到 git）

## Environment Variables (.env.local)

```
NEXT_PUBLIC_TRIPCOM_AFFILIATE_ID=9288868
NEXT_PUBLIC_TRIPCOM_SID=324376718
RESEND_API_KEY=re_4QFpzJi7_H7KqLmvUvB84Gdn1nudVbbrr
```

## Next Steps (优先级排序)

1. **部署到 Vercel** — 用户需先注册 vercel.com 账号
2. **Google Analytics** — 创建 GA4 property → 获得 Measurement ID (G-XXXXXXXXXX) → 填入 .env.local 的 NEXT_PUBLIC_GA_ID
3. **Google Search Console** — 提交 sitemap，验证站点
4. **写更多内容** — Ancient City Walking Guide, 5-Day Shanxi Route
5. **Email 系统完善** — Resend 集成发送欢迎邮件 + PDF lead magnet
6. **付费产品** — 深度攻略 PDF / 定制行程服务（流量起来后）

## User Notes

- 用户不是技术人员，所有操作通过 Claude Code 完成
- 用户老婆做投放（Google Ads / Pinterest / Instagram 等），网站是广告承接页
- 用户有本地知识（大同人 or 熟悉大同），英文内容由 Claude 协助翻译和 SEO 优化
- GitHub: sylarscs/datong-travel

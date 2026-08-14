---
title: تشغيل هذا المشروع
description: أوامر الإعداد والتشغيل لمستودع AI Project Flow.
---

## المتطلبات الأساسية

- تثبيت Node.js وnpm.

## تثبيت الاعتماديات

```bash
npm install
```

يثبّت هذا الاعتماديات المُعلنة في `package.json`، بما في ذلك Astro وStarlight.

## تشغيل خادم التطوير

```bash
npm run dev
```

يعمل خادم التطوير على `http://localhost:4321`. تظهر تغييرات المحتوى والأنماط مباشرة في المتصفح.

## بناء الموقع الثابت

```bash
npm run build
```

تُكتب المخرجات إلى `dist/`.

## معاينة الموقع المبني

```bash
npm run preview
```

يخدم هذا البناء الإنتاجي من `dist/` ليمكن مراجعته محلياً.

## ملاحظات البناء المتوقعة

يطبع البناء تحذيراً غير معطِّل بأن تكامل sitemap يتطلب رابط `site`. هذا متوقع حتى يُعرف نطاق النشر.

الأوامر ذات الصلة: [npm install](/ar/commands/npm-install/)، [npm run dev](/ar/commands/npm-run-dev/)، [npm run build](/ar/commands/npm-run-build/)، [npm run preview](/ar/commands/npm-run-preview/).

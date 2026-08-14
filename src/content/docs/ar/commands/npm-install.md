---
title: npm install
description: تثبيت اعتماديات المشروع المدرجة في package.json.
---

```bash
npm install
```

## ما يفعله الأمر

يثبّت الاعتماديات المُعلنة في `package.json` داخل مجلد `node_modules/` وينشئ أو يحدّث `package-lock.json`.

## الأجزاء المهمة

- `npm` — مدير حزم Node.js.
- `install` — الأمر الذي ينزّل الاعتماديات ويُعدّها.

## متى يُستخدم

- عند استنساخ مشروع أو فتحه لأول مرة.
- بعد إضافة اعتماد جديد أو تغييره.

## النتيجة المتوقعة

يظهر مجلد `node_modules/` وتصبح نصوص المشروع قابلة للتشغيل.

## هل يُعدّل الملفات؟

نعم — ينشئ `node_modules/` ويحدّث `package-lock.json`. شغّل `npm install` قبل `npm run dev` أو `npm run build`.

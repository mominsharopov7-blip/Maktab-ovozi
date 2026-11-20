# MAKTAB OVOZI — boshlang'ich platforma

Bu loyiha taqdimotdagi asosiy yo'nalishlarga mos MVP: ochiq bosh sahifa, media ruknlari, autentifikatsiya, shaxsiy kabinet va ijodiy ishlarni moderatsiya uchun yuborish. Hozirgi versiyada video faylni bevosita yuklash emas, video/rasm havolasini yuborish ishlaydi. Bu bepul saqlash limitlarini tejaydi.

## 1. Kerak bo'ladigan akkauntlar
- GitHub: https://github.com
- Supabase: https://supabase.com
- Vercel: https://vercel.com

## 2. Supabase bazasini yaratish
1. Supabase'da New project bosing.
2. Project nomini `maktab-ovozi` qiling va kuchli database parol o'rnating.
3. Chap menyudan SQL Editor -> New query ni oching.
4. `supabase/schema.sql` faylini to'liq ko'chirib SQL Editor'ga qo'ying va Run bosing.
5. Project Settings -> API (yoki Data API / API Keys) bo'limidan Project URL va publishable/anon key ni oling. `service_role` yoki secret keyni hech qachon brauzerga qo'ymang.

## 3. Ilovani kompyuterda ishga tushirish
Node.js 20.9 yoki undan yangi versiya kerak.
```bash
npm install
cp .env.example .env.local
```
`.env.local` fayliga Supabase URL va publishable/anon keyni kiriting:
```env
NEXT_PUBLIC_SUPABASE_URL=https://PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_PUBLISHABLE_OR_ANON_KEY
```
Keyin:
```bash
npm run dev
```
Brauzerda http://localhost:3000 ni oching.

## 4. Birinchi administratorni tayinlash
1. Saytning `/login` sahifasida o'zingiz uchun hisob yarating va emailingizni tasdiqlang.
2. Supabase -> SQL Editor'da quyidagi buyruqdagi emailni o'zingiznikiga almashtirib bajaring:
```sql
update public.profiles
set role = 'national_admin'
where id = (select id from auth.users where email = 'SIZNING_EMAILINGIZ');
```
3. Keyinchalik boshqa admin va maktab mas'ullarining rollarini faqat vakolatli administrator tayinlashi kerak. O'quvchi hech qachon o'z rolini o'zi oshira olmasligi lozim.

## 5. GitHub va Vercel orqali internetga chiqarish
1. GitHub'da yangi private yoki public repository oching va ushbu loyiha fayllarini yuklang.
2. Vercel'da Continue with GitHub orqali kiring, Add New -> Project ni tanlang va repository'ni import qiling.
3. Environment Variables bo'limiga `NEXT_PUBLIC_SUPABASE_URL` va `NEXT_PUBLIC_SUPABASE_ANON_KEY` qiymatlarini kiriting.
4. Deploy bosing. Vercel sizga `*.vercel.app` manzil beradi.
5. Supabase Authentication -> URL Configuration bo'limida Site URL va Redirect URLs'ga Vercel manzilingizni kiriting.

## 6. Muhim keyingi ishlar
- 500 ta maktabning rasmiy ro'yxatini hudud/tuman/maktab kodi bilan import qilish.
- Maktab, tuman va viloyat kesimida ruxsatlarni qat'iy ajratish. Hozirgi SQL siyosatlari boshlang'ich namuna; ishlab chiqarishga chiqishdan oldin hududiy scope va maktab mas'uli huquqlarini mustahkamlash zarur.
- Moderatsiya uchun admin panel: tasdiqlash/rad etish, izoh va audit jurnali.
- Video uchun YouTube/Telegram/Drive havolasi yoki alohida media CDN. Supabase Free storage 1 GB bilan 250 ta video saqlashni rejalashtirmang.
- O'quvchi shaxsiy ma'lumotlari, ota-ona roziligi, maxfiylik siyosati va foydalanish shartlarini tasdiqlash.
- Reyting, topshiriqlar, media darslar va iste'dodlar xaritasi modullarini keyingi bosqichda qo'shish.

## Xavfsizlik eslatmalari
- `.env.local` va maxfiy kalitlarni GitHub'ga yuklamang.
- `service_role` kalitini hech qachon `NEXT_PUBLIC_` bilan boshlanuvchi o'zgaruvchiga qo'ymang.
- Admin rollarini faqat ishonchli administrator tayinlasin.
- Ommaga chiqadigan barcha kontent moderatsiyadan o'tsin.

# FIXAD 프로젝트 SEO 세팅 분석 보고서

> 분석 대상: `fixadcompany-main` (Next.js 13 App Router)
> 작성일: 2026-06-29

---

## 1. 요약 (TL;DR)

이 프로젝트는 **Next.js 13 App Router**(`experimental.appDir`) 기반이며, SEO 관련 설정은 크게 **3개 영역**에 분산되어 있습니다.

| 영역 | 위치 | 역할 |
| --- | --- | --- |
| 메타 태그 (HTML head) | `src/app/layout.tsx`, `src/app/head.tsx` | title / description / OG / 네이버 인증 |
| 메타 상수 정의 | `src/shared/const/metaData.ts` | 제목·설명·OG 이미지 값 한 곳에서 관리 |
| 정적 SEO 파일 | `public/` | robots.txt, sitemap.xml, 검색엔진 인증 파일, OG 이미지, 파비콘 |

> **핵심 이슈:** 최신 Next.js App Router의 **Metadata API(`export const metadata` / `generateMetadata`)를 사용하지 않고**, 구버전 방식인 `head.tsx`와 `layout.tsx` 직접 `<head>` 작성을 혼용하고 있습니다. 또한 `sitemap.xml`이 다른 도메인(`bigg-ent.com`)을 가리키는 등 정합성 문제가 있습니다. (자세한 내용은 6번 참조)

---

## 2. SEO를 담당하는 폴더 / 파일 맵

```
fixadcompany-main/
├── next.config.js                 # appDir 활성화 (라우팅 기반)
├── public/                        # 정적 SEO 자산 (검색엔진이 직접 접근)
│   ├── robots.txt                 # 크롤러 허용 규칙
│   ├── sitemap.xml                # 사이트맵 (⚠ 도메인 불일치)
│   ├── naver35e892db9de451044167c195763a280a.html  # 네이버 사이트 소유 확인 파일
│   ├── thumbnail_rectangle.jpg    # OG(공유 미리보기) 이미지
│   └── favicon.ico                # 파비콘
└── src/
    ├── app/
    │   ├── layout.tsx             # ★ 루트 <head> : title/description/네이버 인증
    │   ├── head.tsx               # ★ OG 태그/viewport/favicon (구버전 방식)
    │   └── (service)/
    │       ├── (default)/
    │       │   ├── layout.tsx     # Header/Footer 구조 (메타 없음)
    │       │   └── page.tsx       # 한국어 홈
    │       └── [lang]/
    │           ├── layout.tsx     # 다국어 레이아웃 (메타 없음)
    │           └── page.tsx       # 다국어 홈 (lang 파라미터)
    └── shared/const/
        ├── metaData.ts            # ★ METADATA 상수 (title/desc/image/url)
        └── index.ts               # const 배럴 export
```

★ = SEO 핵심 파일

---

## 3. 파일별 상세 분석

### 3-1. `src/app/layout.tsx` (루트 레이아웃) — 가장 중요
실제로 렌더링되는 `<html>` / `<head>`를 정의합니다.

```7:16:src/app/layout.tsx
<title>픽스애드 - FIXAD</title>
<meta name="description" content="진심이 만든 전략, 오래 찾는 마케팅. ..." />
<meta name="naver-site-verification" content="632ee8d841c3e6fc51d7a0324d9671535e7f2ef3" />
```

- `<html lang="kr">` — 언어 속성 지정 (⚠ 표준 코드는 `ko`, `kr`은 비표준)
- `<title>`, `<meta description>` 직접 작성
- 네이버 사이트 인증 메타 태그 포함

### 3-2. `src/app/head.tsx` (구버전 head 컨벤션)
Open Graph / 뷰포트 / 파비콘을 담당합니다.

- `og:type`, `og:title`, `og:description`, `og:image`, `og:image:width/height`
- 값은 모두 `METADATA` 상수에서 가져옴
- `twitter:*` 카드 태그는 **전부 주석 처리됨** (비활성)
- viewport: `user-scalable=no` (확대 금지 — 접근성 측면 비권장)

> ⚠ `head.tsx`는 Next.js 13 초기 베타 컨벤션으로, **현재 App Router 정식 버전에서는 동작하지 않을 수 있습니다.** OG 태그가 실제로 출력되는지 검증 필요.

### 3-3. `src/shared/const/metaData.ts` (메타 상수)
SEO 값의 단일 출처(Single Source of Truth) 역할.

```16:24:src/shared/const/metaData.ts
export const METADATA = {
  TITLE: '픽스애드 - FIXAD',
  DESC: '진심이 만든 전략, 오래 찾는 마케팅, 픽스애드',
  IMAGE: '/thumbnail_rectangle.jpg',
  URL: '',                 // ⚠ 비어 있음
  IMAGE_WIDTH: '800',
  IMAGE_HEIGHT: '400',
}
```

- 상단에 `[TODO] 메타 데이터 입력 필요` 주석 존재 → 작업 미완료 상태
- `URL` 값이 빈 문자열 (canonical/og:url 미설정)

### 3-4. `public/robots.txt`
```
User-agent: *
Allow: /
```
- 모든 크롤러에 전체 허용 (단순)
- ⚠ `Sitemap:` 지시문 없음

### 3-5. `public/sitemap.xml`
```xml
<url>
  <loc>https://www.bigg-ent.com</loc>   <!-- ⚠ FIXAD 도메인이 아님 -->
  <lastmod>2023-06-24</lastmod>
</url>
```
- ⚠ **다른 회사 도메인(bigg-ent.com)을 가리킴** → 템플릿 재사용 잔재로 추정
- URL 1개만 등록, lastmod 2023년으로 오래됨

### 3-6. `public/naver35e892db9de451044167c195763a280a.html`
- 네이버 서치어드바이저 사이트 소유 확인용 HTML 파일
- `layout.tsx`의 `naver-site-verification` 메타와 **이중 인증** 구성

---

## 4. SEO 관련 정적 자산

| 파일 | 용도 |
| --- | --- |
| `public/favicon.ico` | 브라우저 탭 / 검색결과 아이콘 |
| `public/thumbnail_rectangle.jpg` | SNS 공유 OG 이미지 (800×400) |
| `public/naver...html` | 네이버 소유 확인 |

---

## 5. 콘텐츠/구조적 SEO 관찰

- **이미지 alt**: `next/image` 및 `alt` 속성이 다수 컴포넌트(LandingPage 하위)에서 사용됨 → 양호
- **시맨틱 헤딩**: `h1`/`h2`/`h3`가 LandingPage·Footer 등에서 사용되나, 페이지 단위 **`<h1>` 단일성 검증 필요**
- **더미 텍스트**: `HeaderSection.tsx`에 Lorem ipsum / "Support center" 영문 더미가 남아 있음 → 색인 시 노출 위험
- **분석/추적 스크립트**: GA4, GTM 등 **분석 태그 없음** (`next/script` 미사용)
- **다국어**: `[lang]` 동적 라우트는 존재하나 `hreflang` / `alternate` 태그 미설정, `generateStaticParams`도 없음

---

## 6. 개선 권장 사항 (우선순위 순)

### 높음 (P1)
1. **`sitemap.xml` 도메인 교정** — `bigg-ent.com` → 실제 FIXAD 도메인, 실제 경로들 추가
2. **`head.tsx` → Metadata API 마이그레이션** — `layout.tsx`에 `export const metadata` 사용으로 통합 (OG 미출력 리스크 해소 + title 중복 제거)
3. **`METADATA.URL` 채우기** — `og:url` / `canonical` 설정 가능해짐
4. **`robots.txt`에 `Sitemap:` 지시문 추가**

### 중간 (P2)
5. `<html lang="kr">` → `lang="ko"` 표준화
6. `HeaderSection.tsx` 더미 텍스트 제거/교체
7. Twitter 카드 메타 활성화 (현재 전부 주석)
8. GA4 / 네이버 애널리틱스 등 추적 스크립트 도입 검토

### 낮음 (P3)
9. `[lang]` 다국어용 `hreflang` 대체 링크 추가
10. viewport `user-scalable=no` 제거 (접근성)

---

## 7. 결론

SEO 설정은 **`src/app/layout.tsx` + `src/app/head.tsx` + `src/shared/const/metaData.ts` + `public/`** 4곳에 집중되어 있습니다. 기본적인 title·description·OG·검색엔진 인증은 갖춰져 있으나, **구버전 `head.tsx` 방식 사용, sitemap 도메인 불일치, URL 미설정, 더미 텍스트 잔존** 등 운영 전 반드시 정리해야 할 항목들이 있습니다. P1 항목부터 순차 적용을 권장합니다.

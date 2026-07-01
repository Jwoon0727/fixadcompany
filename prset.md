# FIXAD 프로젝트 폴더 구조 분석 보고서

> 분석 대상: `fixadcompany-main`
> 작성일: 2026-06-29
> 질문: "구성이 왜 이렇게 복잡한가? 각 폴더의 역할과 이게 정말 필요한가?"

---

## 1. 결론부터 (핵심 진단)

**이 프로젝트는 원래 `Teacher Cloud` 라는 회원가입·인증·관리자 기능이 있는 풀스택 SaaS 보일러플레이트였고, 그것을 그대로 가져와 `FIXAD` 회사 소개용 "랜딩페이지 1장"으로 개조한 것입니다.**

그래서 복잡합니다. 정확히는 — **복잡한 게 아니라, 안 쓰는 백엔드/회원 시스템 잔재가 그대로 남아 있어서 복잡해 보이는 것**입니다.

근거(움직이는 증거):
- `package.json`의 프로젝트 이름이 `teachercloud`
- `README.md` 제목이 `# Teacher Cloud`
- DB 모델(`prisma`)이 회원/프로필/관리자용인데, 실제 사이트는 회원 기능이 없음
- GraphQL 생성 스크립트가 가리키는 `src/pages/api/graphql` 폴더가 **존재하지 않음(삭제됨)**
- `recoil`, `react-query`, `graphql`, `prisma`가 **실제 화면 코드(`src/app`)에서 단 한 번도 import 되지 않음**
- 실제 렌더링되는 건 `LandingPage` 컴포넌트 묶음(Hero, CEO, Services, FAQ, Contact 등) 뿐

> 한 줄 요약: **실사용 코드는 `src/app` + `public`의 일부뿐이고, `prisma` / `graphql` / `recoil` / `react-query` 관련은 거의 다 죽은 코드(dead code)입니다.**

---

## 2. 폴더별 역할과 실제 필요성

### 📦 `prisma/` — DB 스키마 & 마이그레이션
| 항목 | 내용 |
| --- | --- |
| 역할 | PostgreSQL 데이터베이스 테이블 정의(`schema.prisma`)와 변경 이력(`migrations/`) |
| 내용 | `User`, `Profile`, `PreRegisteredUser`, `Log` 모델 — **회원가입/로그인/관리자 시스템용** |
| 실제 사용? | ❌ **사용 안 함.** FIXAD 사이트는 DB·회원 기능이 없는 정적 소개 페이지 |
| 필요성 | **불필요.** Teacher Cloud 보일러플레이트의 잔재 |

### 📦 `public/` — 정적 파일 (브라우저가 직접 접근)
| 하위 폴더 | 역할 | 필요성 |
| --- | --- | --- |
| `hero/`, `ceo/`, `services/`, `redesign/`, `4x/` | 랜딩페이지에 쓰는 사진/이미지 | ✅ 필요 (실사용) |
| `assets/`, `images/` | 아이콘·일러스트·로고 등 | △ 일부만 사용 (정리 여지) |
| `fonts/pretendard/` | 한글 웹폰트 | ✅ 필요 |
| `robots.txt`, `sitemap.xml`, `naver...html` | SEO/검색엔진 관련 | ✅ 필요 (단, 내용 교정 필요 — `seoset.md` 참조) |
| `favicon.ico`, `thumbnail_rectangle.jpg` | 파비콘·공유 이미지 | ✅ 필요 |

> `public`은 대체로 정상이나, 안 쓰는 이미지가 섞여 있어 용량/정리 측면에서 점검 권장.

### 📦 `src/` — 소스 코드 (핵심)

#### `src/app/` ✅ **이 프로젝트의 실제 본체**
Next.js 13 App Router. 라우팅과 화면을 담당.
```
app/
├── layout.tsx, head.tsx        # 전역 HTML/메타 (SEO)
├── (_components)/mediaQuery     # 반응형 유틸 컴포넌트
└── (service)/
    ├── (_components)/           # Header, Footer, NavBar, Pagination (공통 UI)
    ├── (default)/               # 한국어 홈
    │   └── (_components)/LandingPage/   # ★ 실제 페이지 내용 (13개 섹션 컴포넌트)
    │       Hero, CEO, Services, Process, FAQSection, Contact, Testimonial ...
    └── [lang]/                  # 다국어 홈 (lang 파라미터)
```
- 괄호 폴더 `(service)`, `(default)`, `(_components)`는 **Route Group** — URL 경로엔 영향 없이 폴더만 정리하는 Next.js 문법. 복잡해 보이지만 정상적인 그룹핑.
- **필요성: ✅ 핵심.** 단 `[lang]`(다국어)은 실제로 활용되는지 검토 필요.

#### `src/shared/` △ 공용 코드 (일부만 사용)
| 하위 | 역할 | 필요성 |
| --- | --- | --- |
| `const/` | METADATA, PATH, 정규식, 에러메시지 등 상수 | △ METADATA·일부만 사용, 회원/에러 관련은 잔재 |
| `utils/` | 번역(getTranslation), 스크롤, dayjs | △ 일부 사용 |
| `types/` | 타입 정의(recoil, error 등) | △ 일부 잔재 |
| `generated/` | **Nexus가 자동 생성한 GraphQL 스키마/타입** | ❌ 불필요 (백엔드 잔재) |

#### `src/client/` △ 클라이언트 전용 (대부분 잔재)
| 하위 | 역할 | 필요성 |
| --- | --- | --- |
| `recoil/` | 전역 상태관리(예제만 존재) | ❌ 불필요 (미사용) |
| `hooks/` | useQueryString, 관리자용 훅 | ❌ 대부분 회원/관리자 잔재 |
| `styles/` | globals.css, reset.css, variable.css | ✅ 필요 (전역 스타일) |

#### `src/hooks/` ✅ 소규모
- `use-scroll-animation.ts` — 스크롤 애니메이션 훅. ✅ 랜딩페이지에서 사용.

---

## 3. "필요한 것" vs "잔재" 한눈에

| 구분 | 폴더/파일 | 판정 |
| --- | --- | --- |
| ✅ 실사용 | `src/app/**`, `src/client/styles`, `src/hooks`, `public`(이미지/폰트/SEO) | 유지 |
| △ 부분 사용 | `src/shared/const`, `src/shared/utils`, `src/shared/types` | 정리 후 유지 |
| ❌ 잔재(미사용) | `prisma/`, `src/shared/generated`, `src/client/recoil`, `src/client/hooks/admin` | 제거 후보 |
| ❌ 의존성 잔재 | `package.json`의 prisma·nexus·graphql·recoil·react-query·jsonwebtoken·bcryptjs·nodemailer 등 | 제거 후보 |

---

## 4. 왜 이런 상태가 되었나 (추정 시나리오)

1. 개발자가 기존 SaaS 프로젝트(Teacher Cloud)를 **템플릿처럼 복제**
2. 백엔드(GraphQL API: `src/pages/api/graphql`)와 페이지 라우터는 **삭제**
3. 화면만 App Router(`src/app`)로 새로 만들어 FIXAD 랜딩페이지로 교체
4. 하지만 `package.json`, `prisma`, `generated`, `recoil` 등 **설정·잔재는 지우지 않음**

→ 결과: "랜딩페이지 1장짜리 사이트인데 풀스택 SaaS 의존성을 끌고 다니는" 무거운 구조.

---

## 5. 권장 정리 방안 (선택)

### 즉시 가능 (안전, P1)
- `prisma/` 폴더 삭제 (DB 미사용 확인됨)
- `src/shared/generated/` 삭제 (GraphQL 잔재)
- `src/client/recoil/`, `src/client/hooks/admin/` 삭제
- `package.json` 스크립트에서 `generate`, `generate:prisma`, `generate:nexus`, `migrate` 제거
  (특히 `generate:nexus`는 존재하지 않는 `src/pages/api/graphql`을 가리켜 실행 시 실패)

### 의존성 다이어트 (P2)
- 제거 후보: `@prisma/client`, `prisma`, `nexus`, `apollo-server-micro`, `graphql*`, `recoil`,
  `@tanstack/react-query`, `jsonwebtoken`, `bcryptjs`, `nodemailer`, `micro*`, `express`
- → 빌드 속도·보안 취약점·번들 크기 모두 개선

### 문서/메타 정리 (P3)
- `README.md`를 Teacher Cloud → FIXAD 내용으로 교체
- `package.json`의 `name`을 `fixad`로 변경
- 미사용 `public` 이미지 정리

> ⚠ 정리 전 반드시 `npm run build`로 빌드 통과를 확인하고, git 브랜치를 따로 두고 진행하세요. (실제 import 여부를 한 번 더 검증 권장)

---

## 6. 최종 요약

**복잡한 이유 = 회원/인증/관리자 기능이 있던 SaaS 보일러플레이트를 랜딩페이지로 재활용하면서 백엔드 잔재를 정리하지 않았기 때문.**

실제로 동작에 필요한 것은 **`src/app`(화면) + `src/client/styles`(스타일) + `src/hooks` + `public`(에셋/SEO)** 뿐이며, `prisma` · `graphql` · `recoil` · `react-query` 계열은 모두 제거해도 사이트는 정상 동작합니다. 정리하면 구조가 절반 이하로 단순해집니다.

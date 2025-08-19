# MoYe Studio - 모두의예체능

예체능 유학 준비를 위한 전문 교육 플랫폼 웹앱입니다.

## 🎨 주요 기능

### 🎯 핵심 서비스
- **검증된 전문 강사진**: 하버드, 예일, 파슨스, MIT 등 명문대 출신 강사
- **실기 + 어학 통합 교육**: 전공 실기와 언어 능력 동시 향상
- **맞춤형 1:1 교육**: 개인 목표와 수준에 맞는 완전 맞춤형 프로그램

### 📚 교육 프로그램
1. **방학 집중 과정** (2-4주)
   - 하루 4-6시간 집중 수업
   - 포트폴리오 개발 중심
   - 이중 언어 수업 진행

2. **종합 유학 준비** (3-6개월)
   - 포트폴리오 완성 지원
   - 면접 코칭 및 에세이 지도
   - 입학 과정 전체 지원

## 🚀 기술 스택

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Next.js with static export
- **Process Manager**: PM2
- **Linting**: ESLint

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 18+ 
- npm

### 개발 환경 실행
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 프로덕션 빌드 및 배포
```bash
# 프로덕션 빌드
npm run build

# PM2로 프로덕션 서버 실행
npx pm2 start ecosystem.config.js

# 서버 상태 확인
npx pm2 status

# 로그 확인
npx pm2 logs --nostream
```

## 🏗️ 프로젝트 구조

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # 전역 스타일
│   ├── layout.tsx      # 루트 레이아웃
│   └── page.tsx        # 홈페이지
├── components/         # 재사용 가능한 컴포넌트
│   ├── Header.tsx      # 헤더 네비게이션
│   ├── Hero.tsx        # 메인 히어로 섹션
│   ├── FeaturedInstructors.tsx # 추천 강사 섹션
│   └── Footer.tsx      # 푸터
├── types/              # TypeScript 타입 정의
│   └── index.ts        # 공통 타입
└── lib/                # 유틸리티 함수
```

## 🌍 배포된 서비스

서비스 URL: https://3000-iqxan33umawndpdl0aeei-6532622b.e2b.dev

## 🎯 주요 특징

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 환경 최적화
- **SEO 최적화**: Next.js의 SSG 기능을 활용한 검색엔진 최적화
- **성능 최적화**: 이미지 최적화, 코드 스플리팅, 캐싱 전략
- **접근성**: WCAG 2.1 가이드라인 준수
- **다국어 지원**: 한국어 우선, 영어 지원 가능

## 🔧 개발 가이드

### 컴포넌트 작성 규칙
- 모든 컴포넌트는 TypeScript로 작성
- Props 인터페이스는 `types/index.ts`에 정의
- 스타일링은 Tailwind CSS 클래스 활용
- 반응형 디자인 필수 적용

### 코딩 컨벤션
- ESLint 규칙 준수
- 컴포넌트명은 PascalCase
- 파일명은 PascalCase (.tsx) 또는 kebab-case (.css)
- 함수형 컴포넌트 사용

## 📱 반응형 디자인

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: Blue-600 (#2563eb)
- **Secondary**: Gray-900 (#111827)
- **Accent**: Orange-500, Purple-500
- **Background**: Gray-50 (#f9fafb)

### 타이포그래피
- **Font Family**: Inter (Google Fonts)
- **Headings**: 2xl - 6xl, font-bold
- **Body**: base - lg, font-normal
- **Small**: sm - xs, font-medium

## 🚀 향후 개발 계획

- [ ] 강사 상세 페이지 구현
- [ ] 수업 예약 시스템
- [ ] 사용자 인증 시스템
- [ ] 결제 시스템 연동
- [ ] 실시간 채팅 기능
- [ ] 화상 수업 기능

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 👨‍💻 개발팀

MoYe Studio Development Team

---

**Made with ❤️ for 예체능 유학 준비생들**
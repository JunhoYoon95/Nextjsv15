# 짐코딩 블로그

Next.js 15, Tailwind CSS, shadcn/ui를 사용해서 만든 개인 블로그입니다.

## 기술 스택

- **Framework**: [Next.js 15](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)
- **Language**: TypeScript

## 시작하기

### 1. 의존성 설치

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. 개발 서버 실행

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어서 결과를 확인하세요.

### 3. 프로젝트 구조

```
app/
├── layout.tsx          # 루트 레이아웃
├── page.tsx           # 홈 페이지
├── about/             # 소개 페이지
└── blog/              # 블로그 페이지
components/
├── layouts/           # 레이아웃 컴포넌트
│   ├── Header.tsx     # 헤더 네비게이션
│   └── Footer.tsx     # 푸터
└── ui/                # shadcn/ui 컴포넌트
```

## 개발 정보

페이지를 수정하려면 `app/page.tsx` 파일을 편집하세요. 파일을 저장하면 자동으로 페이지가 업데이트됩니다.

## shadcn/ui 컴포넌트 추가

새로운 UI 컴포넌트를 추가하려면:

```bash
npx shadcn@latest add [component-name]
```

## Learn More

Next.js에 대해 더 자세히 알아보려면:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js 기능과 API에 대해 학습
- [Learn Next.js](https://nextjs.org/learn) - 인터랙티브 Next.js 튜토리얼
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Tailwind CSS 사용법
- [shadcn/ui Documentation](https://ui.shadcn.com) - shadcn/ui 컴포넌트

## 배포

가장 쉬운 배포 방법은 Next.js 개발진이 만든 [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 사용하는 것입니다.

자세한 배포 정보는 [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)을 참조하세요.

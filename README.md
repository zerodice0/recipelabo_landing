# 레시피 라보 랜딩 페이지

레시피 라보 앱의 공식 랜딩 페이지입니다.

## 🍳 레시피 라보란?

레시피 라보는 요리를 사랑하는 모든 사람들을 위한 완벽한 레시피 관리 솔루션입니다.

### ✨ 주요 기능

- **📝 레시피 관리**: 나만의 레시피를 체계적으로 저장하고 관리
- **🔍 재료 기반 검색**: 보유한 재료로 만들 수 있는 레시피 검색
- **📔 요리 로그**: 실제 요리 과정과 메모 기록
- **🔄 레시피 버전 관리**: 레시피를 개선해나가며 여러 버전 관리
- **📚 개인 재료 라이브러리**: 자주 사용하는 재료들을 카테고리별로 관리
- **✨ 직관적인 인터페이스**: 깔끔하고 사용하기 쉬운 디자인

## 🚀 기술 스택

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## 🛠️ 개발 환경 설정

1. 저장소 클론
```bash
git clone [repository-url]
cd recipe-labo-landing
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 📦 빌드 및 배포

### 로컬 빌드
```bash
npm run build
npm start
```

### Vercel 배포
1. [Vercel](https://vercel.com)에 계정 생성
2. GitHub 저장소 연결
3. 자동 배포 설정 완료

## 📱 다운로드

- **iOS**: App Store에서 다운로드 (준비중)
- **Android**: [Google Play에서 다운로드](https://play.google.com/store/apps/details?id=com.zerodice0.recipick_flutter)

## 🌍 다국어 지원

레시피 라보 랜딩 페이지는 3개 언어를 완전 지원합니다:

### 지원 언어
- **한국어** (기본): 기본 언어로 설정
- **영어**: ?lang=en
- **일본어**: ?lang=jp (또는 ?lang=ja)

### URL 쿼리 파라미터
- `?lang=en` - 영어로 표시
- `?lang=jp` - 일본어로 표시  
- `?lang=ja` - 일본어로 표시 (jp와 동일)
- 파라미터 없음 - 한국어로 표시 (기본값)

### 사용 예시
```
https://recipe-labo.vercel.app/          # 한국어
https://recipe-labo.vercel.app/?lang=en  # 영어
https://recipe-labo.vercel.app/?lang=jp  # 일본어
```

### 기능
- **동적 언어 변경**: 페이지 새로고침 없이 실시간 언어 변경
- **URL 동기화**: 언어 변경 시 자동으로 URL 업데이트
- **SEO 최적화**: 언어별 메타데이터 동적 업데이트
- **브라우저 히스토리**: 뒤로가기/앞으로가기 지원

## 🎨 디자인 시스템

- **메인 컬러**: Orange (#FF6B35)
- **폰트**: Geist Sans, Geist Mono
- **반응형 디자인**: Mobile-first approach
- **다국어 UI**: 언어별 최적화된 텍스트 길이 고려

## 📧 문의

레시피 라보에 대한 문의사항이 있으시면 언제든 연락해주세요.

---

© 2025 레시피 라보. All rights reserved.
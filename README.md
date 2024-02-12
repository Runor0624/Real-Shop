# 개인 프로젝트 - 쇼핑몰 프로젝트
- **개인 학습 목적의 프로젝트 입니다.**
- Next.js를 사용해보기 위한 목적의 프로젝트 입니다

# Skill
- FE : Next.js 14.1.0, Typescript, TailwindCSS
- BE : Express.js, Prisma, MySQL

## 왜 백엔드를 분리하는가?
- 그동안 백엔드 개발을 Express.js로 많이 진행하였음.
- 서버쪽을 Express.js로 하고 나중에 여유가 된다면 일부 API를 api 폴더를 통해 시도해볼 예정.

# 우선 순위
1. 일단 쇼핑몰에 들어갈 기능을 먼저 구현
2. 이후 리팩토링 과정에서 기존 코드를 개선 -> 예시 : SSR을 적용하지 않던 부분을 SSR 적용하는 등.
3. 이후 컴포넌트 덩어리로 세분화가 가능한 부분에 대해 세분화 실시.

요약 : 일단 기능먼저 완성시키고 세분화는 이후에 진행한다, 전체적으로 완성부터 시키고 보자

# Favicon 출처
https://www.flaticon.com/kr/free-icon/computer-science_9401652?term=computer&page=1&position=38&origin=search&related_id=9401652


# [추후 제거 필요] - 이후 진행할 내용
- [ x ] 백엔드 배포서버 준비 (별도 백엔드 개발중)
- [ ] 방명록 관련 기능 추가 필요 + 백엔드 통신 (익명 방명록 개념 - 예시 : DC인사이드)
- [ ] 로그인의 경우 Zustand로 전역 상태관리 필요
- [ ] 이후 전반적인 API와 연동하는 개발 단계 필요함 - 상품 등록 등.
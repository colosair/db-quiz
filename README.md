# SSAFY 9회차 DB 모의고사

> SSAFY 15기 9회차 Back+DB 과목평가(객관식 30문항) 대비용 인터랙티브 모의고사

5회차 × 30문항(총 150문항) · 즉시 채점 · 오답노트 자동 저장

🔗 **[db-quiz.colosair.dev](https://db-quiz.colosair.dev)**

---

## 📚 출제 범위

9회차 평가 범위에 맞춰 7개 영역으로 구성했습니다.

| # | 영역 | 주요 키워드 |
|---|---|---|
| 1 | SQL 기본 및 연산자 | 명령어 분류, TRUNCATE vs DELETE, 문자열 타입, 검색 연산자, 조건 제어문 |
| 2 | 함수 및 데이터 그룹화 | 단일행/집계 함수, GROUP BY, HAVING |
| 3 | JOIN 및 집합 연산 | JOIN 종류, ANSI 문법(ON/USING), UNION/INTERSECT |
| 4 | 서브쿼리 및 뷰 | 위치별 서브쿼리, 단일/다중 행 연산자, 논리적 실행 순서, VIEW |
| 5 | DB 개념 및 모델링 | 독립성, 모델링 단계/ERD, 정규화 |
| 6 | 인덱스 및 성능 분석 | 카디널리티, 복합 인덱스, EXPLAIN/EXPLAIN ANALYZE |
| 7 | 트랜잭션 및 동시성 제어 | ACID, 격리 수준, 이상 현상, InnoDB MVCC |

> JDBC는 9회차 범위에서 제외되어 다루지 않습니다.

## ✨ 주요 기능

### 즉시 채점
선택지를 클릭하면 정답/오답이 즉시 표시되고, 핵심 해설이 함께 펼쳐집니다. 결과 페이지까지 가지 않아도 풀이 흐름 안에서 학습할 수 있습니다.

### 회차별 누적 점수
홈 화면에서 각 회차의 최고 점수를 확인할 수 있습니다. 동일 회차를 다시 풀어 점수가 갱신되면 자동으로 반영됩니다.

### 틀린 문제만 다시 풀기
결과 화면에서 오답이 있을 경우, 그 문항만 모아 새 시험을 시작할 수 있습니다. 틀린 문제를 새로 맞히면 원본 회차의 누적 점수도 함께 갱신됩니다.

### 오답노트 자동 저장
틀린 문항은 즉시 오답노트에 누적되고, 다시 맞히면 자동으로 제거됩니다. "남아있는 오답 = 아직 잡지 못한 약점"이라는 직관적인 학습 모델입니다.
- 카테고리 칩으로 영역별 필터링
- 모두 다시 풀기 / 전체 비우기 지원
- 사용자가 골랐던 오답 + 정답 + 해설을 한 번에 표시

### 영역별 정답률 분석
결과 화면에서 7개 영역별로 정답률 막대 그래프가 표시됩니다. 약한 영역을 즉시 식별할 수 있습니다.

### 페이지 단위 라우팅
브라우저 뒤로가기 버튼으로 회차 → 결과 → 홈을 자연스럽게 이동할 수 있습니다. `history.pushState` 기반의 SPA 라우팅을 직접 구현했습니다.

### 다크 모드
헤더 우측 토글로 라이트/다크 테마 전환. 설정은 `localStorage`에 저장되어 다음 방문 시에도 유지됩니다.

### 모바일 최적화
좁은 화면에서도 글자 깨짐 없이 자연스럽게 줄바꿈되도록 한글 단어 경계(`word-break: keep-all`)를 활용한 반응형 레이아웃입니다.

## 🛠 기술 스택

의도적으로 **빌드 도구 없이** 정적 파일 두 개로만 구현했습니다.

- **Vanilla HTML / CSS / JavaScript** — 프레임워크 의존성 0
- **CSS Variables** — 라이트/다크 테마 전환
- **localStorage** — 점수, 오답노트, 테마 설정 영속화
- **history API** — 페이지 단위 SPA 라우팅
- **IBM Plex Sans KR / JetBrains Mono** — Google Fonts

### 왜 빌드 도구가 없는가

이 프로젝트는 다음을 우선순위로 설계했습니다.

1. **즉시 띄울 수 있어야 한다** — `index.html`을 더블클릭만 해도 동작
2. **로딩이 빨라야 한다** — 시험 직전 모바일에서 빠르게 열려야 함
3. **유지보수가 단순해야 한다** — 데이터(`data.js`)만 수정해서 문항을 추가/교체

React/Vue 같은 프레임워크는 이 규모에서 오버엔지니어링이라 판단했습니다.

## 🚀 배포

| 항목 | 내용 |
|---|---|
| 호스팅 | [Vercel](https://vercel.com) (Hobby Plan, 무료) |
| 도메인 | [colosair.dev](https://colosair.dev) (Cloudflare 관리) |
| DNS | Cloudflare CNAME → `cname.vercel-dns.com` (DNS only) |
| SSL | Vercel 자동 발급 (Let's Encrypt) |
| CI/CD | GitHub push → Vercel 자동 빌드/배포 |

`main` 브랜치에 push하면 30초~1분 내에 [db-quiz.colosair.dev](https://db-quiz.colosair.dev)에 자동 반영됩니다.

## 💻 로컬에서 실행

```bash
git clone https://github.com/colosair/ssafy-db-quiz.git
cd ssafy-db-quiz

# 방법 1: 그냥 더블클릭
open index.html

# 방법 2: 로컬 서버 (CORS 안전)
python3 -m http.server 8000
# → http://localhost:8000
```

별도 빌드/설치 단계가 없습니다.

## 📁 구조

```
ssafy-db-quiz/
├── index.html       # UI, 라우팅, 채점 로직 전부
├── data.js          # 5회차 × 30문항 = 150문항 데이터
└── README.md
```

### 문항 데이터 형식

```javascript
const QUIZ_SETS = [
  {
    title: "1회차 — 기초 다지기",
    desc: "SQL 명령어 분류, 기본 연산, 단일행/집계함수 중심",
    questions: [
      {
        q: "다음 중 DDL에 해당하는 명령어는?",
        opts: ["INSERT", "CREATE", "SELECT", "GRANT"],
        a: 1,                   // 정답 인덱스 (0-based)
        cat: "1.SQL기본",       // 카테고리(영역)
        exp: "<b>정답: B</b><br>CREATE는 객체를 생성하는 DDL입니다..."
      },
      // ...
    ]
  },
  // ...
];
```

문항 추가/수정은 `data.js`만 손보면 되며, `exp` 필드는 HTML을 그대로 받기 때문에 `<b>`, `<code>`, `<pre>` 등을 자유롭게 쓸 수 있습니다.

## 🗺 회차 구성

| 회차 | 컨셉 |
|---|---|
| 1회차 | 기초 다지기 — 명령어 분류, 기본 연산, 단일행/집계함수 중심 |
| 2회차 | 함정 패턴 적응 — WHERE/HAVING, NULL 처리, 인덱스 트레이드오프 중심 |
| 3회차 | 응용 종합 1 — 조인/서브쿼리 응용, 정규화 실전, MVCC 심화 |
| 4회차 | 응용 종합 2 — 복합 시나리오, 실행 계획 해석, 동시성 시뮬레이션 |
| 5회차 | 실전 마무리 — 함정 위주 종합 점검 + 자주 틀리는 포인트 복습 |

각 카테고리 균형 분포(영역당 3~6문항)로 구성되어 한 회차만 풀어도 7개 영역을 모두 커버할 수 있습니다.

## 🤝 기여

오류, 오타, 더 나은 해설 제안 등은 [Issue](https://github.com/colosair/ssafy-db-quiz/issues) 또는 PR로 환영합니다.

특히 다음 영역에서 도움이 됩니다.
- 문항 오류/오타 제보
- 해설 보강 (예제 코드, 함정 포인트 추가)
- 새로운 회차/문항 제안
- 모바일 UI 개선

## 📝 라이선스

MIT License. 자유롭게 학습/개선/배포에 활용하세요.

---

Made for SSAFY 15기 동기들 · by [colosair](https://github.com/colosair)

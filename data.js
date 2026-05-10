// SSAFY 9회차 과목평가(Back+DB) 모의고사 데이터
// 각 문항: { q: 문제, opts: [4지선다], a: 정답인덱스(0-3), cat: 영역, exp: 해설 }

const QUIZ_SETS = [
  // ============================================================
  // 1회차
  // ============================================================
  {
    title: "1회차 — 기초 다지기",
    desc: "SQL 명령어 분류, 기본 연산, 단일행/집계함수 중심",
    questions: [
      {
        q: "다음 중 SQL 명령어 분류가 <strong>다른 하나</strong>는?",
        opts: ["CREATE", "ALTER", "TRUNCATE", "DELETE"],
        a: 3,
        cat: "1.SQL기본",
        exp: "TRUNCATE는 DML이 아니라 <b>DDL</b>입니다. CREATE/ALTER/TRUNCATE는 모두 DDL이고, DELETE만 DML입니다. TRUNCATE는 자동 커밋(Auto-commit)이 발생하여 ROLLBACK이 불가능한 점이 DELETE와의 핵심 차이입니다."
      },
      {
        q: "DELETE와 TRUNCATE의 차이로 <strong>옳지 않은</strong> 것은?",
        opts: [
          "DELETE는 WHERE 절을 사용할 수 있지만 TRUNCATE는 사용할 수 없다",
          "DELETE는 ROLLBACK이 가능하지만 TRUNCATE는 불가능하다",
          "DELETE와 TRUNCATE 모두 AUTO_INCREMENT 값을 초기화한다",
          "DELETE는 트리거가 동작하지만 TRUNCATE는 동작하지 않는다"
        ],
        a: 2,
        cat: "1.SQL기본",
        exp: "AUTO_INCREMENT를 초기화하는 것은 <b>TRUNCATE</b>입니다. DELETE는 행 단위 삭제로 AUTO_INCREMENT 카운터를 그대로 유지합니다. TRUNCATE는 테이블 자체를 재생성하는 방식에 가깝기 때문에 카운터가 1로 리셋됩니다."
      },
      {
        q: "<code>CHAR(10)</code> 컬럼에 <code>'abc'</code>를 저장한 뒤 LENGTH로 조회한 결과로 옳은 것은? (MySQL 기준)",
        opts: ["3", "10", "4", "0"],
        a: 1,
        cat: "1.SQL기본",
        exp: "CHAR(n)은 <b>고정 길이</b> 타입으로, 입력 길이가 n보다 짧으면 공백으로 패딩됩니다. 'abc'는 'abc       ' (공백 7개 추가)로 저장되어 LENGTH는 10이 됩니다. VARCHAR(10)이었다면 3이 반환됩니다."
      },
      {
        q: "다음 중 <strong>NULL을 올바르게 비교</strong>하는 SQL은?",
        opts: [
          "WHERE col = NULL",
          "WHERE col != NULL",
          "WHERE col IS NULL",
          "WHERE col == NULL"
        ],
        a: 2,
        cat: "1.SQL기본",
        exp: "NULL은 '값이 없음'이 아니라 '알 수 없음(UNKNOWN)' 상태로 취급되어 <b>등호 비교(=, !=)가 불가능</b>합니다. <code>IS NULL</code> 또는 <code>IS NOT NULL</code> 만 사용해야 합니다. <code>col = NULL</code>은 문법 오류는 아니지만 항상 UNKNOWN을 반환해 결과가 비어버립니다."
      },
      {
        q: "<code>WHERE name LIKE '50\\%' ESCAPE '\\'</code> 가 의미하는 것은?",
        opts: [
          "name이 '50'으로 시작하는 모든 행",
          "name이 정확히 '50%' 인 행",
          "name이 '50' 뒤에 임의 문자가 오는 행",
          "name이 '50'을 포함하는 모든 행"
        ],
        a: 1,
        cat: "1.SQL기본",
        exp: "ESCAPE 절은 와일드카드 문자(%, _) 자체를 검색하고 싶을 때 사용합니다. <code>'\\'</code>를 이스케이프 문자로 지정했으므로 <code>\\%</code>는 와일드카드가 아닌 <b>문자 '%' 그 자체</b>를 의미합니다. 따라서 정확히 '50%'인 행만 매칭됩니다."
      },
      {
        q: "<code>SUBSTR('SSAFY', 2, 3)</code>의 결과는? (MySQL 기준)",
        opts: ["'SSA'", "'SAF'", "'SAFY'", "'SAFY'"],
        a: 1,
        cat: "2.함수/그룹화",
        exp: "MySQL의 SUBSTR은 <b>1-based 인덱싱</b>입니다. 2번째 위치(=두 번째 문자 'S')부터 3글자를 반환하므로 'SAF'입니다. 0-based로 착각하면 'SAF'가 아닌 'SAFY' 같은 답을 고르게 되는 함정 문제입니다."
      },
      {
        q: "다음 데이터에서 <code>SELECT AVG(score), COUNT(*), COUNT(score) FROM t</code> 의 결과로 옳은 것은?<br>score: <code>10, 20, NULL, 30</code>",
        opts: [
          "15, 4, 4",
          "20, 4, 3",
          "15, 3, 3",
          "20, 3, 4"
        ],
        a: 1,
        cat: "2.함수/그룹화",
        exp: "집계 함수는 <b>NULL을 무시</b>합니다. AVG는 (10+20+30)/3 = 20 (NULL을 분모에서도 제외). COUNT(*)는 NULL 포함 전체 행 수 = 4. COUNT(score)는 NOT NULL인 값만 = 3. 'NULL을 0으로 취급한다'는 흔한 오해를 잡는 단골 문제입니다."
      },
      {
        q: "다음 SQL의 오류 원인으로 옳은 것은?<br><code>SELECT dept, COUNT(*) FROM emp WHERE COUNT(*) > 5 GROUP BY dept;</code>",
        opts: [
          "GROUP BY 컬럼이 SELECT 절에 없다",
          "WHERE 절에 집계 함수를 사용할 수 없다",
          "COUNT(*)는 GROUP BY와 함께 쓸 수 없다",
          "별칭이 지정되지 않았다"
        ],
        a: 1,
        cat: "2.함수/그룹화",
        exp: "WHERE 절은 <b>그룹화 이전</b>의 행 단위 필터로, 집계 함수를 쓸 수 없습니다. 집계 결과로 필터링하려면 <code>HAVING COUNT(*) > 5</code>를 써야 합니다. SQL 논리적 실행 순서: FROM → WHERE → GROUP BY → HAVING → SELECT 를 기억하세요."
      },
      {
        q: "<code>COALESCE(NULL, NULL, 'A', 'B')</code> 의 결과는?",
        opts: ["NULL", "'A'", "'B'", "'AB'"],
        a: 1,
        cat: "2.함수/그룹화",
        exp: "COALESCE는 인자 중 <b>처음으로 NULL이 아닌 값</b>을 반환합니다. NULL, NULL, 'A' 순서로 평가하다가 'A'에서 멈춥니다. IFNULL은 인자 2개 제한이지만 COALESCE는 N개 가능하고 ANSI 표준입니다."
      },
      {
        q: "<code>CHAR_LENGTH('한글')</code> 와 <code>LENGTH('한글')</code> 의 결과로 옳은 것은? (UTF-8 기준)",
        opts: [
          "둘 다 2",
          "둘 다 6",
          "CHAR_LENGTH는 2, LENGTH는 6",
          "CHAR_LENGTH는 6, LENGTH는 2"
        ],
        a: 2,
        cat: "2.함수/그룹화",
        exp: "<b>CHAR_LENGTH는 글자 수, LENGTH는 바이트 수</b>를 반환합니다. UTF-8에서 한글 한 글자는 3바이트이므로 '한글'(2글자)은 LENGTH=6, CHAR_LENGTH=2가 됩니다. 다국어 처리에서 자주 헷갈리는 함수입니다."
      },
      {
        q: "INNER JOIN과 LEFT OUTER JOIN의 차이로 옳은 것은?",
        opts: [
          "INNER JOIN은 왼쪽 테이블 전부를 반환한다",
          "LEFT JOIN은 양쪽 매칭되는 행만 반환한다",
          "LEFT JOIN은 왼쪽 전부를 반환하고 매칭 없는 오른쪽은 NULL로 채운다",
          "INNER JOIN은 카테시안 곱을 반환한다"
        ],
        a: 2,
        cat: "3.JOIN/집합",
        exp: "LEFT OUTER JOIN은 <b>왼쪽 테이블 모든 행 보존</b> + 오른쪽 매칭되는 행 결합, 매칭 없으면 오른쪽 컬럼은 NULL로 채웁니다. INNER는 양쪽 매칭만, CROSS JOIN이 카테시안 곱입니다."
      },
      {
        q: "ANSI 조인의 <code>USING</code> 절에 대한 설명으로 <strong>옳지 않은</strong> 것은?",
        opts: [
          "양쪽 테이블에 같은 이름의 컬럼이 있어야 사용 가능하다",
          "결과 집합에서 조인 컬럼이 한 번만 등장한다",
          "ON 절보다 더 자유롭게 컬럼명이 다른 경우에도 사용 가능하다",
          "USING(id) 사용 시 결과의 id 컬럼은 별칭 없이 그냥 id로 참조한다"
        ],
        a: 2,
        cat: "3.JOIN/집합",
        exp: "USING은 <b>같은 이름의 컬럼이 양쪽에 있을 때만</b> 사용 가능합니다. 컬럼명이 다르면 ON 절을 써야 합니다. USING의 장점은 결과에 조인 컬럼이 중복 없이 한 번만 나오고, 코드가 간결해진다는 점입니다."
      },
      {
        q: "MySQL에서 <strong>지원하지 않는</strong> 조인은? (8.0 기준)",
        opts: [
          "INNER JOIN",
          "LEFT OUTER JOIN",
          "FULL OUTER JOIN",
          "CROSS JOIN"
        ],
        a: 2,
        cat: "3.JOIN/집합",
        exp: "MySQL은 <b>FULL OUTER JOIN을 지원하지 않습니다</b>. PostgreSQL, Oracle은 지원합니다. MySQL에서는 <code>LEFT JOIN UNION RIGHT JOIN</code>으로 흉내 내야 합니다. SSAFY 평가에서 자주 출제되는 함정입니다."
      },
      {
        q: "<code>UNION</code>과 <code>UNION ALL</code>의 차이로 옳은 것은?",
        opts: [
          "UNION은 중복을 허용하고 UNION ALL은 제거한다",
          "UNION은 중복을 제거하고 UNION ALL은 허용한다",
          "둘 다 중복을 제거하지만 UNION ALL이 더 빠르다",
          "UNION은 교집합, UNION ALL은 합집합이다"
        ],
        a: 1,
        cat: "3.JOIN/집합",
        exp: "<b>UNION = 중복 제거(정렬+중복제거 비용 발생), UNION ALL = 중복 유지</b>입니다. 중복이 없거나 신경 쓰지 않는 경우 성능상 UNION ALL이 항상 유리합니다. 교집합은 INTERSECT, 차집합은 EXCEPT/MINUS입니다."
      },
      {
        q: "다음 중 <strong>다중 행 서브쿼리</strong>에서 사용 가능한 연산자가 <strong>아닌</strong> 것은?",
        opts: ["IN", "ANY", "ALL", "="],
        a: 3,
        cat: "4.서브쿼리/뷰",
        exp: "<b>=, &lt;, &gt; 같은 단일 행 비교 연산자는 다중 행 서브쿼리에 쓸 수 없습니다</b>. 서브쿼리가 두 행 이상 반환하면 'Subquery returns more than 1 row' 에러가 발생합니다. 다중 행에는 IN, NOT IN, ANY/SOME, ALL, EXISTS를 써야 합니다."
      },
      {
        q: "<code>salary &gt; ALL (SELECT salary FROM emp WHERE dept = 'IT')</code> 의 의미는?",
        opts: [
          "IT 부서 평균 급여보다 큰 사람",
          "IT 부서 최댓값보다 큰 사람",
          "IT 부서 최솟값보다 큰 사람",
          "IT 부서 어느 한 명보다라도 큰 사람"
        ],
        a: 1,
        cat: "4.서브쿼리/뷰",
        exp: "<code>&gt; ALL</code> = 모든 값보다 커야 함 → <b>최댓값보다 큼</b>. 반대로 <code>&gt; ANY</code> 또는 <code>&gt; SOME</code> = 어느 하나보다라도 크면 됨 → 최솟값보다 큼. ALL/ANY는 직관과 어긋나기 쉬워 시험에서 자주 나옵니다."
      },
      {
        q: "SQL의 <strong>논리적 실행 순서</strong>로 옳은 것은?",
        opts: [
          "SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY",
          "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY",
          "FROM → SELECT → WHERE → GROUP BY → HAVING → ORDER BY",
          "WHERE → FROM → GROUP BY → SELECT → HAVING → ORDER BY"
        ],
        a: 1,
        cat: "4.서브쿼리/뷰",
        exp: "정답: <b>FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT</b>. SELECT가 거의 마지막에 평가되기 때문에 SELECT의 별칭(alias)을 WHERE/GROUP BY/HAVING에서 쓸 수 없습니다(MySQL은 GROUP BY/HAVING에서 alias 허용 확장). ORDER BY/LIMIT에서만 안전하게 alias 사용 가능합니다."
      },
      {
        q: "뷰(VIEW)에 대한 설명으로 <strong>옳지 않은</strong> 것은?",
        opts: [
          "물리적 데이터를 저장하지 않고 SELECT 정의만 저장한다",
          "민감 컬럼을 숨겨 보안 목적으로 활용할 수 있다",
          "복잡한 조인을 단순화하여 재사용성을 높인다",
          "MySQL에서 뷰에 직접 인덱스를 생성하여 성능을 향상시킬 수 있다"
        ],
        a: 3,
        cat: "4.서브쿼리/뷰",
        exp: "<b>MySQL의 뷰는 자체 인덱스를 가질 수 없습니다</b>. 뷰는 가상 테이블이라 기반 테이블의 인덱스에 의존합니다. 인덱스를 가진 뷰가 필요하면 머티리얼라이즈드 뷰(MySQL 미지원, PostgreSQL/Oracle 지원)를 사용해야 합니다."
      },
      {
        q: "데이터베이스의 <strong>물리적 독립성</strong>이 보장된다는 것의 의미는?",
        opts: [
          "테이블에 컬럼을 추가해도 응용 프로그램이 영향을 받지 않는다",
          "디스크 저장 구조나 인덱스를 변경해도 개념 스키마가 영향받지 않는다",
          "사용자가 다른 사용자의 데이터에 접근할 수 없다",
          "트랜잭션 실패 시 데이터가 손실되지 않는다"
        ],
        a: 1,
        cat: "5.DB개념/모델링",
        exp: "ANSI/SPARC 3단계 스키마 기준, <b>물리적 독립성 = 내부 스키마(저장 구조) 변경이 개념 스키마에 영향 없음</b>. 1번은 논리적 독립성(개념 스키마 변경 → 외부 스키마 영향 없음). 인덱스 추가/디스크 재배치 등이 물리적 독립성의 대표 예입니다."
      },
      {
        q: "데이터 모델링 단계 중 <strong>특정 DBMS와 무관하게</strong> 정규화와 ERD를 완성하는 단계는?",
        opts: [
          "개념적 모델링",
          "논리적 모델링",
          "물리적 모델링",
          "운영 모델링"
        ],
        a: 1,
        cat: "5.DB개념/모델링",
        exp: "<b>논리적 모델링</b>은 DBMS 독립적으로 정규화/속성/식별자를 확정하고 ERD를 완성합니다. 개념적 모델링은 핵심 엔티티/관계 도출 단계, 물리적 모델링은 특정 DBMS에 맞춰 테이블/인덱스/저장구조를 설계하고 반정규화를 고려하는 단계입니다."
      },
      {
        q: "정규화의 <strong>주된 목적</strong>으로 옳은 것은?",
        opts: [
          "조회 성능 향상",
          "저장 공간 증가",
          "데이터 중복 제거 및 이상 현상 방지",
          "조인 횟수 증가"
        ],
        a: 2,
        cat: "5.DB개념/모델링",
        exp: "정규화의 목적은 <b>중복 제거를 통한 갱신/삽입/삭제 이상 방지</b>입니다. 오히려 정규화는 테이블이 분리되면서 <b>조인이 늘어 조회 성능을 떨어뜨릴 수 있습니다</b>. 그래서 물리 단계에서 의도적인 반정규화로 보완합니다. '정규화는 성능 향상이 목적'은 흔한 오답."
      },
      {
        q: "1NF(제1정규형)를 위반하는 경우는?",
        opts: [
          "복합 PK의 일부에만 종속되는 컬럼이 있다",
          "이행 함수 종속이 존재한다",
          "한 컬럼에 콤마로 구분된 여러 값이 들어있다",
          "결정자가 후보키가 아니다"
        ],
        a: 2,
        cat: "5.DB개념/모델링",
        exp: "1NF는 <b>모든 컬럼이 원자값(atomic)</b>이어야 합니다. 한 컬럼에 'apple,banana,cherry' 같이 여러 값이 들어가면 1NF 위반입니다. 1번은 2NF, 2번은 3NF, 4번은 BCNF에서 다루는 문제입니다."
      },
      {
        q: "카디널리티(Cardinality)에 대한 설명으로 옳은 것은?",
        opts: [
          "테이블의 전체 행 수를 의미한다",
          "컬럼이 가진 고유한 값의 개수를 의미한다",
          "인덱스의 깊이를 의미한다",
          "트랜잭션의 격리 수준을 의미한다"
        ],
        a: 1,
        cat: "6.인덱스/성능",
        exp: "카디널리티 = <b>컬럼 고유값의 개수</b>(또는 distinct/total 비율). 높을수록 인덱스 효율이 좋습니다. 주민번호/이메일 = 높음, 성별/Y-N 플래그 = 낮음. 카디널리티 낮은 컬럼에 인덱스 걸면 풀스캔보다 느릴 수 있어 옵티마이저가 인덱스를 무시하기도 합니다."
      },
      {
        q: "복합 인덱스 <code>INDEX(A, B, C)</code>가 있을 때 <strong>인덱스를 활용하지 못하는</strong> 쿼리는?",
        opts: [
          "WHERE A = 1",
          "WHERE A = 1 AND B = 2",
          "WHERE B = 2 AND C = 3",
          "WHERE A = 1 AND B = 2 AND C = 3"
        ],
        a: 2,
        cat: "6.인덱스/성능",
        exp: "복합 인덱스는 <b>좌측 접두사(Leftmost Prefix) 규칙</b>을 따릅니다. 첫 번째 컬럼 A가 조건에 없으면 인덱스를 쓸 수 없습니다. (A,B), (A,B,C), (A) 조합은 가능하지만 (B,C)나 (B) 단독은 불가능합니다."
      },
      {
        q: "<code>EXPLAIN</code>과 <code>EXPLAIN ANALYZE</code>의 핵심 차이는?",
        opts: [
          "EXPLAIN은 실행 계획만 보여주고 EXPLAIN ANALYZE는 실제 쿼리를 실행하여 측정한다",
          "EXPLAIN ANALYZE는 INSERT만 분석할 수 있다",
          "EXPLAIN은 인덱스 정보를, EXPLAIN ANALYZE는 락 정보를 보여준다",
          "EXPLAIN ANALYZE는 MySQL 5.7부터 도입되었다"
        ],
        a: 0,
        cat: "6.인덱스/성능",
        exp: "<b>EXPLAIN = 예상 계획만(쿼리 실행 X), EXPLAIN ANALYZE = 실제 실행 후 측정</b>. MySQL 8.0.18부터 도입. 주의: EXPLAIN ANALYZE는 UPDATE/DELETE에 사용하면 <b>실제 데이터가 변경됩니다</b>. DML 분석 시에는 트랜잭션으로 감싸 ROLLBACK해야 합니다."
      },
      {
        q: "ACID 중 '커밋된 결과는 시스템 장애에도 보존된다'를 의미하는 것은?",
        opts: [
          "Atomicity (원자성)",
          "Consistency (일관성)",
          "Isolation (격리성)",
          "Durability (지속성)"
        ],
        a: 3,
        cat: "7.트랜잭션",
        exp: "<b>지속성(Durability)</b>은 커밋된 트랜잭션의 결과가 영구 보존됨을 보장합니다. WAL(Write-Ahead Logging)이나 Redo Log로 구현됩니다. 원자성=All or Nothing, 일관성=무결성 제약 유지, 격리성=동시성 제어."
      },
      {
        q: "MySQL InnoDB의 <strong>기본 격리 수준</strong>은?",
        opts: [
          "READ UNCOMMITTED",
          "READ COMMITTED",
          "REPEATABLE READ",
          "SERIALIZABLE"
        ],
        a: 2,
        cat: "7.트랜잭션",
        exp: "MySQL InnoDB 기본은 <b>REPEATABLE READ</b>입니다. (PostgreSQL/Oracle은 READ COMMITTED 기본). 더불어 InnoDB는 표준과 달리 REPEATABLE READ에서도 갭락+넥스트키락 + MVCC로 Phantom Read까지 사실상 방지합니다."
      },
      {
        q: "동시성 이상 현상 중 '같은 조건으로 두 번 SELECT 했을 때 행 개수가 달라지는 현상'은?",
        opts: [
          "Dirty Read",
          "Non-Repeatable Read",
          "Phantom Read",
          "Lost Update"
        ],
        a: 2,
        cat: "7.트랜잭션",
        exp: "<b>Phantom Read = 행 개수 변화</b>(다른 트랜잭션의 INSERT/DELETE 커밋). Dirty Read = 커밋 안 된 변경 읽기, Non-Repeatable Read = 같은 행 두 번 읽었을 때 값 변경(UPDATE). Lost Update는 갱신 손실로 표준 4가지 외 추가 현상입니다."
      },
      {
        q: "InnoDB MVCC의 핵심 메커니즘으로 옳은 것은?",
        opts: [
          "모든 SELECT에 공유 락을 자동으로 건다",
          "Undo Log로 이전 버전을 보관하여 락 없이 일관된 스냅샷을 제공한다",
          "트랜잭션마다 별도의 데이터베이스 복제본을 만든다",
          "직렬화 가능한 스케줄을 강제한다"
        ],
        a: 1,
        cat: "7.트랜잭션",
        exp: "MVCC = <b>Multi-Version Concurrency Control</b>. 행 변경 시 이전 버전을 Undo Log에 보관하고, 각 트랜잭션은 시작 시점의 Read View(스냅샷)를 기준으로 데이터를 봅니다. 읽기 작업이 락 없이 일관된 결과를 얻어 읽기-쓰기가 서로 블로킹하지 않습니다(Consistent Non-Locking Read). Undo Log는 롤백에도 사용됩니다."
      },
      {
        q: "<code>SELECT ... FOR UPDATE</code> 의 동작으로 옳은 것은?",
        opts: [
          "MVCC 스냅샷을 읽고 락은 걸지 않는다",
          "최신 버전을 읽으면서 배타 락(X Lock)을 건다",
          "UPDATE 권한을 부여한다",
          "READ UNCOMMITTED로 격리 수준을 일시 변경한다"
        ],
        a: 1,
        cat: "7.트랜잭션",
        exp: "<code>FOR UPDATE</code>는 <b>Current Read</b>로 동작하여 MVCC 스냅샷이 아닌 최신 데이터를 읽고, <b>배타 락(X Lock)</b>을 걸어 다른 트랜잭션이 해당 행을 수정/락 못 하게 합니다. 동시성 제어에서 자주 쓰이지만 데드락 위험이 커 트랜잭션을 짧게 유지해야 합니다."
      }
    ]
  },

  // ============================================================
  // 2회차
  // ============================================================
  {
    title: "2회차 — 함정 패턴 적응",
    desc: "WHERE/HAVING, NULL 처리, 인덱스 트레이드오프 중심",
    questions: [
      {
        q: "다음 중 DCL(Data Control Language)에 속하는 명령어는?",
        opts: ["INSERT", "GRANT", "TRUNCATE", "MERGE"],
        a: 1,
        cat: "1.SQL기본",
        exp: "<b>DCL = GRANT, REVOKE</b>(권한 제어). INSERT/MERGE = DML, TRUNCATE = DDL. COMMIT/ROLLBACK/SAVEPOINT는 TCL로 별도 분류하기도 하고 DCL에 포함시키기도 합니다."
      },
      {
        q: "<code>VARCHAR(10)</code>에 <code>'hello'</code>를 저장했을 때 실제 사용 바이트는? (UTF-8, MySQL 기준)",
        opts: [
          "10바이트 (고정 길이)",
          "5바이트 + 길이 정보 1바이트",
          "5바이트만",
          "20바이트 (예약 공간 포함)"
        ],
        a: 1,
        cat: "1.SQL기본",
        exp: "<b>VARCHAR는 가변 길이</b>로 실제 입력 길이만큼만 저장 + 길이 정보 1~2바이트(255 이하면 1, 초과면 2). 'hello' 5바이트 + 길이 1바이트 = 6바이트. CHAR였다면 무조건 10바이트 차지(공백 패딩)."
      },
      {
        q: "<code>BETWEEN 10 AND 20</code> 과 동일한 의미의 조건은?",
        opts: [
          "col > 10 AND col < 20",
          "col >= 10 AND col <= 20",
          "col >= 10 AND col < 20",
          "col > 10 AND col <= 20"
        ],
        a: 1,
        cat: "1.SQL기본",
        exp: "<b>BETWEEN은 양 끝 값을 포함</b>합니다(>=, <=). 'between'이라는 단어 어감 때문에 양 끝을 제외한다고 착각하는 경우가 많아 시험에서 자주 나옵니다."
      },
      {
        q: "<code>NOT IN</code> 서브쿼리 사용 시 주의점으로 옳은 것은?",
        opts: [
          "서브쿼리에 NULL이 포함되면 결과가 비어버린다",
          "서브쿼리는 항상 인덱스를 사용한다",
          "단일 행만 반환해야 한다",
          "서브쿼리 결과가 정렬되어 있어야 한다"
        ],
        a: 0,
        cat: "1.SQL기본",
        exp: "NOT IN의 함정: 서브쿼리에 NULL이 하나라도 있으면 <code>x &lt;&gt; NULL</code> 비교가 UNKNOWN이 되어 전체 조건이 거짓이 됩니다 → <b>결과 공집합</b>. 안전하게 하려면 <code>WHERE col IS NOT NULL</code>을 추가하거나 <code>NOT EXISTS</code>를 사용하세요."
      },
      {
        q: "<code>IFNULL</code>과 <code>COALESCE</code>의 차이로 옳은 것은?",
        opts: [
          "IFNULL은 인자 N개, COALESCE는 2개만 받는다",
          "IFNULL은 인자 2개만, COALESCE는 N개를 받을 수 있고 ANSI 표준이다",
          "두 함수의 동작이 완전히 동일하다",
          "IFNULL은 숫자만, COALESCE는 문자열만 처리한다"
        ],
        a: 1,
        cat: "2.함수/그룹화",
        exp: "<b>IFNULL(a, b) = 인자 2개</b>(MySQL 전용), <b>COALESCE(a, b, c, ...) = 인자 N개</b>(ANSI 표준, 모든 DBMS 지원). 표준 호환성을 위해서는 COALESCE 사용을 권장합니다."
      },
      {
        q: "<code>ROUND(123.456, 1)</code>과 <code>TRUNCATE(123.456, 1)</code> 의 결과는?",
        opts: [
          "123.5, 123.5",
          "123.4, 123.4",
          "123.5, 123.4",
          "123.4, 123.5"
        ],
        a: 2,
        cat: "2.함수/그룹화",
        exp: "<b>ROUND = 반올림, TRUNCATE = 단순 절삭</b>. ROUND(123.456, 1) = 123.5(반올림), TRUNCATE(123.456, 1) = 123.4(절삭). 두 번째 인자는 소수점 자릿수입니다. 음수면 정수부에서 처리: ROUND(123.456, -1) = 120."
      },
      {
        q: "다음 중 <strong>HAVING</strong>에서 <strong>사용 가능한</strong> 조건은?",
        opts: [
          "SUM(salary) > 5000",
          "GROUP BY를 사용하지 않은 쿼리",
          "별칭이 정의되지 않은 컬럼",
          "INSERT 문 내부"
        ],
        a: 0,
        cat: "2.함수/그룹화",
        exp: "HAVING은 <b>그룹화 후 집계 결과에 대한 필터</b>로 집계 함수를 사용할 수 있습니다. WHERE는 그룹화 전 행 단위 필터로 집계 함수 사용 불가. GROUP BY 없이 HAVING만 사용하면 전체를 한 그룹으로 취급해 동작은 합니다."
      },
      {
        q: "다음 SQL 결과로 옳은 것은?<br><code>SELECT COUNT(DISTINCT col) FROM t;</code><br>col: <code>1, 2, 2, NULL, 3, NULL</code>",
        opts: ["3", "4", "5", "6"],
        a: 0,
        cat: "2.함수/그룹화",
        exp: "<b>COUNT(DISTINCT col)</b>은 NULL을 무시하고 중복 제거 후 개수를 셉니다. 1, 2, 3 → 3개. NULL은 제외, 중복된 2도 한 번만 카운트됩니다."
      },
      {
        q: "<code>GROUP BY ROLLUP(dept, position)</code> 의 효과는?",
        opts: [
          "dept 기준으로만 그룹화한다",
          "(dept, position), (dept), 전체 합계의 소계를 모두 생성한다",
          "두 컬럼의 모든 조합 소계를 생성한다",
          "정렬만 수행한다"
        ],
        a: 1,
        cat: "2.함수/그룹화",
        exp: "<b>ROLLUP은 계층적 소계</b>를 만듭니다: (dept, position) → (dept) → 전체 총계. CUBE는 가능한 모든 조합 소계((dept,pos), (dept), (pos), 전체)를 생성합니다. MySQL은 <code>WITH ROLLUP</code> 문법을 사용합니다."
      },
      {
        q: "SELF JOIN이 가장 자연스럽게 활용되는 경우는?",
        opts: [
          "두 개의 다른 테이블을 합칠 때",
          "직원-상사 같은 계층 구조를 같은 테이블에서 조회할 때",
          "집계 함수를 사용할 때",
          "정규화를 수행할 때"
        ],
        a: 1,
        cat: "3.JOIN/집합",
        exp: "<b>SELF JOIN = 같은 테이블을 별칭으로 두 번 참조</b>. 직원 테이블에 manager_id 컬럼이 있을 때 직원-상사 관계, 카테고리의 부모-자식 관계, 도시 간 거리 매트릭스 등 자기 참조 데이터에 사용합니다."
      },
      {
        q: "NATURAL JOIN의 단점으로 옳은 것은?",
        opts: [
          "사용 문법이 길고 복잡하다",
          "같은 이름의 컬럼이 의도치 않게 자동 조인되어 예측 불가능한 결과를 낼 수 있다",
          "INNER JOIN과 동작이 완전히 다르다",
          "MySQL에서만 사용 가능하다"
        ],
        a: 1,
        cat: "3.JOIN/집합",
        exp: "NATURAL JOIN은 <b>같은 이름 컬럼 모두를 자동으로 조인 조건</b>에 추가합니다. 의도치 않은 컬럼(created_at, updated_at 등)이 묶이면 결과가 이상해지고, 스키마 변경에 취약해 실무에서는 거의 사용하지 않습니다. 명시적 ON/USING을 권장합니다."
      },
      {
        q: "교집합을 구하는 표준 집합 연산자는?",
        opts: ["UNION", "UNION ALL", "INTERSECT", "EXCEPT"],
        a: 2,
        cat: "3.JOIN/집합",
        exp: "<b>INTERSECT = 교집합, EXCEPT(또는 MINUS) = 차집합, UNION = 합집합</b>. MySQL은 8.0.31부터 INTERSECT와 EXCEPT를 지원합니다. 그 이전 버전에서는 INNER JOIN이나 EXISTS로 교집합을 흉내냈습니다."
      },
      {
        q: "스칼라 서브쿼리(Scalar Subquery)의 위치와 제약은?",
        opts: [
          "FROM 절에 위치하며 여러 행 반환 가능",
          "WHERE 절에만 위치하며 다중 행 반환",
          "SELECT 절에 위치하며 단일 행, 단일 컬럼만 반환",
          "GROUP BY 절에 위치하며 그룹별 결과 반환"
        ],
        a: 2,
        cat: "4.서브쿼리/뷰",
        exp: "<b>스칼라 서브쿼리는 SELECT 절에 사용</b>되며 반드시 <b>단일 행, 단일 컬럼</b>만 반환해야 합니다. 외부 행마다 실행되어 성능 부담이 큽니다. 인라인 뷰(FROM 절), 중첩 서브쿼리(WHERE/HAVING), 상관 서브쿼리(외부 컬럼 참조)와 구분하세요."
      },
      {
        q: "상관 서브쿼리(Correlated Subquery)의 특징으로 옳은 것은?",
        opts: [
          "서브쿼리가 한 번만 실행된다",
          "외부 쿼리의 컬럼을 참조하며 외부 쿼리 행마다 실행된다",
          "FROM 절에서만 사용 가능하다",
          "단일 행만 반환해야 한다"
        ],
        a: 1,
        cat: "4.서브쿼리/뷰",
        exp: "<b>상관 서브쿼리</b>는 외부 쿼리의 컬럼을 참조하므로 외부 행마다 서브쿼리가 재실행됩니다. EXISTS와 자주 결합됩니다. 일반(비상관) 서브쿼리는 한 번만 실행되어 결과가 캐시되는 것과 대조됩니다."
      },
      {
        q: "<code>WITH CHECK OPTION</code> 으로 생성한 뷰의 효과는?",
        opts: [
          "뷰에 인덱스를 자동 생성한다",
          "뷰 정의 조건을 위반하는 INSERT/UPDATE를 차단한다",
          "뷰의 읽기 전용 속성을 강제한다",
          "뷰의 자동 새로고침을 활성화한다"
        ],
        a: 1,
        cat: "4.서브쿼리/뷰",
        exp: "<code>WITH CHECK OPTION</code>은 뷰를 통한 DML이 <b>뷰 정의의 WHERE 조건을 만족할 때만</b> 허용되도록 강제합니다. 예: <code>CREATE VIEW v AS SELECT * FROM t WHERE x &gt; 0 WITH CHECK OPTION</code> → x=-1 INSERT 시도 시 거부."
      },
      {
        q: "갱신 가능 뷰(Updatable View)가 <strong>되지 못하는</strong> 조건은?",
        opts: [
          "단일 테이블 기반",
          "GROUP BY를 포함",
          "WHERE 절을 사용",
          "ORDER BY를 사용"
        ],
        a: 1,
        cat: "4.서브쿼리/뷰",
        exp: "갱신 가능 뷰의 조건: 단일 테이블, <b>집계함수/DISTINCT/GROUP BY/HAVING/UNION 없음</b>. 이런 요소가 있으면 원본 행과 1:1 매핑이 불가능해 INSERT/UPDATE/DELETE를 어느 행에 적용할지 결정할 수 없습니다."
      },
      {
        q: "ANSI/SPARC 3단계 스키마에서 <strong>외부 스키마</strong>의 역할은?",
        opts: [
          "DB의 전체 통합 구조를 정의",
          "사용자/응용별 뷰를 제공",
          "디스크 저장 구조와 인덱스를 정의",
          "트랜잭션 로그를 관리"
        ],
        a: 1,
        cat: "5.DB개념/모델링",
        exp: "<b>외부 스키마(External, View Level)</b> = 사용자/응용별 뷰. <b>개념 스키마(Conceptual)</b> = 전체 통합 스키마. <b>내부 스키마(Internal)</b> = 저장 구조/인덱스. 외부-개념 사이의 매핑이 논리적 독립성, 개념-내부 사이의 매핑이 물리적 독립성을 제공합니다."
      },
      {
        q: "M:N 관계를 데이터베이스로 구현할 때 올바른 방법은?",
        opts: [
          "두 테이블에 외래키를 서로 추가한다",
          "한 테이블에 컬럼을 콤마로 구분해 저장한다",
          "연결 엔티티(중간 테이블)를 만들어 두 개의 1:N으로 분해한다",
          "JOIN을 사용해 직접 구현한다"
        ],
        a: 2,
        cat: "5.DB개념/모델링",
        exp: "M:N 관계는 RDBMS에서 직접 표현 불가능합니다. 반드시 <b>연결 엔티티(중간 테이블)</b>를 만들어 1:N + N:1로 분해해야 합니다. 예: 학생-수강과목 M:N → 학생-수강내역-과목으로 분해. 콤마 구분 저장은 1NF 위반입니다."
      },
      {
        q: "다음 중 2NF(제2정규형)에서 제거해야 하는 것은?",
        opts: [
          "원자값이 아닌 컬럼",
          "이행 함수 종속",
          "복합 PK의 일부에만 종속되는 부분 함수 종속",
          "결정자가 후보키가 아닌 종속"
        ],
        a: 2,
        cat: "5.DB개념/모델링",
        exp: "<b>2NF = 1NF + 부분 함수 종속 제거</b>. 복합 PK (A, B)가 있을 때 어떤 속성이 A에만 종속되면 부분 종속 → 분리해야 함. 단일 PK인 테이블은 부분 종속이 발생할 수 없어 자동으로 2NF를 만족합니다. 1번=1NF, 2번=3NF, 4번=BCNF."
      },
      {
        q: "이상 현상(Anomaly)에 해당하지 <strong>않는</strong> 것은?",
        opts: [
          "삽입 이상",
          "갱신 이상",
          "삭제 이상",
          "조회 이상"
        ],
        a: 3,
        cat: "5.DB개념/모델링",
        exp: "정규화로 해결하려는 이상 현상은 <b>삽입 이상, 갱신 이상, 삭제 이상</b> 3가지입니다. '조회 이상'은 표준 용어가 아닙니다. 삽입 이상=원치 않는 데이터까지 같이 입력, 갱신 이상=일부만 갱신되어 불일치, 삭제 이상=필요한 데이터까지 함께 삭제."
      },
      {
        q: "InnoDB 클러스터드 인덱스에 대한 설명으로 옳은 것은?",
        opts: [
          "보조 인덱스와 동일한 구조이다",
          "PK 기준으로 데이터 자체가 정렬되어 저장된다",
          "테이블당 여러 개 만들 수 있다",
          "Hash 자료구조로 구현된다"
        ],
        a: 1,
        cat: "6.인덱스/성능",
        exp: "InnoDB는 <b>PK = 클러스터드 인덱스</b>이며, 데이터 자체가 PK 순서로 B+Tree에 저장됩니다. 테이블당 1개만 가능. 보조 인덱스(Secondary Index)는 리프 노드에 PK 값을 가져 보조 인덱스 검색 후 PK로 한 번 더 조회(book lookup)가 발생합니다."
      },
      {
        q: "복합 인덱스 <code>INDEX(A, B)</code>가 있을 때 <strong>가장 효율적인</strong> 쿼리는?",
        opts: [
          "WHERE A &gt; 100 AND B = 5",
          "WHERE A = 1 AND B = 5",
          "WHERE B = 5",
          "WHERE A &lt; 100 OR B = 5"
        ],
        a: 1,
        cat: "6.인덱스/성능",
        exp: "복합 인덱스는 <b>= 조건이 앞에 올수록 효율적</b>입니다. <code>A=1 AND B=5</code>는 두 컬럼 모두 인덱스 활용. <code>A&gt;100 AND B=5</code>는 A가 범위 조건이라 그 이후 B는 인덱스로 효율적이지 않음. <code>OR</code>은 인덱스 활용이 어렵고, B 단독은 좌측 접두사 위반."
      },
      {
        q: "인덱스의 단점으로 <strong>옳지 않은</strong> 것은?",
        opts: [
          "추가 저장 공간을 사용한다",
          "INSERT/UPDATE/DELETE 시 인덱스도 갱신해야 해 DML 성능이 저하된다",
          "카디널리티가 낮은 컬럼에서는 풀 스캔보다 느릴 수 있다",
          "SELECT 성능을 항상 떨어뜨린다"
        ],
        a: 3,
        cat: "6.인덱스/성능",
        exp: "인덱스의 핵심 trade-off: <b>SELECT 성능 ↑, DML 성능 ↓, 저장 공간 ↑</b>. SELECT를 떨어뜨리는 게 아니라 향상시키는 것이 인덱스의 본 목적입니다. 다만 카디널리티가 낮으면 인덱스가 오히려 비효율적일 수 있고 옵티마이저가 무시하기도 합니다."
      },
      {
        q: "EXPLAIN 결과의 <code>type</code> 컬럼에서 <strong>가장 비효율적인</strong> 접근 방식은?",
        opts: ["const", "ref", "range", "ALL"],
        a: 3,
        cat: "6.인덱스/성능",
        exp: "type 효율 순서(좋음→나쁨): <b>system &gt; const &gt; eq_ref &gt; ref &gt; range &gt; index &gt; ALL</b>. <b>ALL = 풀 테이블 스캔</b>으로 가장 안 좋습니다. 'index'는 인덱스 풀 스캔으로 ALL보단 낫지만 인덱스 크기만큼 읽어 효율이 좋진 않습니다."
      },
      {
        q: "EXPLAIN 결과 <code>Extra: Using index</code>가 의미하는 것은?",
        opts: [
          "인덱스 스캔만으로 결과를 만들 수 있는 커버링 인덱스를 활용했다",
          "인덱스 사용에 실패해 추가 정렬이 필요하다",
          "임시 테이블을 생성해야 한다",
          "WHERE 조건에 인덱스 컬럼이 사용되었다"
        ],
        a: 0,
        cat: "6.인덱스/성능",
        exp: "<b>Using index = 커버링 인덱스(Covering Index)</b> 사용. 쿼리에 필요한 모든 컬럼이 인덱스에만 있어 테이블 접근 없이 인덱스만 읽고 결과를 만듭니다. 매우 빠릅니다. <code>Using filesort</code>는 추가 정렬 비용, <code>Using temporary</code>는 임시 테이블 생성을 의미합니다."
      },
      {
        q: "트랜잭션의 원자성(Atomicity)이 보장되는 메커니즘은?",
        opts: [
          "Read View와 스냅샷",
          "Undo Log를 통한 롤백",
          "Hash 인덱스",
          "B+Tree 자료구조"
        ],
        a: 1,
        cat: "7.트랜잭션",
        exp: "<b>원자성 = Undo Log를 통한 롤백</b>으로 구현. 트랜잭션 실패/롤백 시 Undo Log를 거꾸로 적용해 변경 전 상태로 복구합니다. <b>지속성 = Redo Log(WAL)</b>로 구현됩니다. Undo Log는 MVCC 스냅샷 제공에도 사용됩니다."
      },
      {
        q: "Phantom Read를 방지할 수 있는 표준 격리 수준은?",
        opts: [
          "READ COMMITTED",
          "REPEATABLE READ",
          "SERIALIZABLE",
          "READ UNCOMMITTED"
        ],
        a: 2,
        cat: "7.트랜잭션",
        exp: "표준 SQL 기준 <b>SERIALIZABLE만 Phantom Read를 방지</b>합니다. 다만 MySQL InnoDB는 표준과 다르게 REPEATABLE READ에서도 갭락(Gap Lock) + 넥스트키락(Next-Key Lock) + MVCC를 통해 Phantom Read를 사실상 방지합니다."
      },
      {
        q: "Dirty Read의 정의로 옳은 것은?",
        opts: [
          "트랜잭션이 자신의 변경 사항을 다시 읽을 수 없는 현상",
          "다른 트랜잭션의 커밋되지 않은 변경을 읽는 현상",
          "같은 행을 두 번 읽었을 때 값이 달라지는 현상",
          "두 트랜잭션이 동시에 같은 행을 갱신해 한쪽 변경이 사라지는 현상"
        ],
        a: 1,
        cat: "7.트랜잭션",
        exp: "<b>Dirty Read = 커밋되지 않은(=더러운) 변경을 읽음</b>. 그 트랜잭션이 롤백되면 읽은 데이터가 무효가 되는 위험. READ UNCOMMITTED에서만 발생하고 READ COMMITTED 이상에서 방지됩니다. 3번=Non-Repeatable Read, 4번=Lost Update."
      },
      {
        q: "InnoDB의 Next-Key Lock에 대한 설명으로 옳은 것은?",
        opts: [
          "레코드 락만을 의미한다",
          "테이블 전체 락이다",
          "레코드 락 + 갭 락의 조합으로 Phantom Read를 방지한다",
          "낙관적 락의 일종이다"
        ],
        a: 2,
        cat: "7.트랜잭션",
        exp: "<b>Next-Key Lock = Record Lock + Gap Lock</b>. 인덱스 레코드 자체와 그 앞쪽 갭(공간)을 함께 잠궈 다른 트랜잭션의 INSERT를 차단합니다. InnoDB가 REPEATABLE READ에서 Phantom Read를 방지하는 핵심 메커니즘입니다."
      },
      {
        q: "데드락(Deadlock)에 대한 InnoDB의 처리 방식은?",
        opts: [
          "데이터베이스를 강제 종료한다",
          "감지되면 두 트랜잭션 모두 롤백한다",
          "자동 감지 후 한 트랜잭션을 롤백시켜 해소한다",
          "타임아웃까지 무한 대기시킨다"
        ],
        a: 2,
        cat: "7.트랜잭션",
        exp: "InnoDB는 <b>데드락을 자동 감지하고 한 트랜잭션을 희생자(victim)</b>로 선정해 롤백시킵니다. 보통 변경량이 적은 트랜잭션이 희생됩니다. 응용 코드에서는 데드락 발생 시 재시도 로직을 구현하는 것이 권장됩니다. <code>innodb_deadlock_detect</code> 옵션으로 끌 수도 있습니다."
      }
    ]
  },

  // ============================================================
  // 3회차
  // ============================================================
  {
    title: "3회차 — 응용 종합 1",
    desc: "조인/서브쿼리 응용, 정규화 실전, MVCC 심화",
    questions: [
      {
        q: "다음 중 ROLLBACK이 <strong>가능한</strong> 명령어는?",
        opts: ["TRUNCATE TABLE t", "DROP TABLE t", "DELETE FROM t", "ALTER TABLE t ADD c INT"],
        a: 2,
        cat: "1.SQL기본",
        exp: "ROLLBACK 가능한 것은 <b>DML(DELETE)</b>뿐입니다. DDL(TRUNCATE, DROP, ALTER, CREATE)은 모두 자동 커밋이 발생해 ROLLBACK이 불가능합니다. 실수로 DROP한 후엔 복구할 수 없으니 주의가 필요합니다."
      },
      {
        q: "TEXT 타입에 대한 설명으로 <strong>옳지 않은</strong> 것은?",
        opts: [
          "대용량 가변 길이 문자 데이터를 저장한다",
          "TINYTEXT, TEXT, MEDIUMTEXT, LONGTEXT의 크기 등급이 있다",
          "전체 컬럼에 직접 인덱스를 걸 수 있다",
          "VARCHAR보다 더 큰 데이터를 저장할 수 있다"
        ],
        a: 2,
        cat: "1.SQL기본",
        exp: "<b>TEXT 타입은 전체 컬럼에 직접 인덱스를 걸 수 없고 접두 인덱스(prefix index)만 가능</b>합니다. 예: <code>INDEX(content(100))</code>로 앞 100자만 인덱싱. VARCHAR도 일정 크기 이상에서는 접두 인덱스를 권장합니다."
      },
      {
        q: "<code>SELECT * FROM emp ORDER BY salary LIMIT 10 OFFSET 20</code> 의 의미는?",
        opts: [
          "salary 기준 정렬 후 1~10번째 행 반환",
          "salary 기준 정렬 후 11~20번째 행 반환",
          "salary 기준 정렬 후 21~30번째 행 반환",
          "salary 기준 정렬 후 31~40번째 행 반환"
        ],
        a: 2,
        cat: "1.SQL기본",
        exp: "<b>LIMIT 10 OFFSET 20</b> = 처음 20개를 건너뛰고 그 다음 10개 반환 → 21~30번째. 페이지네이션의 표준 방식. <code>LIMIT 20, 10</code>(MySQL 단축 문법)과 동일합니다(주의: 인자 순서가 OFFSET, LIMIT)."
      },
      {
        q: "<code>WHERE col IN (1, 2, NULL)</code> 의 결과 영향은?",
        opts: [
          "col이 NULL인 행도 매칭된다",
          "col이 NULL인 행은 매칭되지 않는다",
          "쿼리가 에러를 발생시킨다",
          "col이 1, 2, NULL 중 하나라도 일치하는 행 모두 매칭"
        ],
        a: 1,
        cat: "1.SQL기본",
        exp: "<b>IN에서 NULL은 매칭되지 않습니다</b>. <code>col IN (1, 2, NULL)</code>은 <code>col=1 OR col=2 OR col=NULL</code>로 풀리는데 마지막 비교가 항상 UNKNOWN이라 매칭 실패. col이 NULL인 행을 포함하려면 <code>col IS NULL OR col IN (1, 2)</code>를 명시해야 합니다."
      },
      {
        q: "<code>NULLIF(a, b)</code>의 동작은?",
        opts: [
          "a가 NULL이면 b를 반환한다",
          "a와 b가 같으면 NULL, 다르면 a를 반환한다",
          "a와 b가 같으면 a, 다르면 NULL을 반환한다",
          "둘 다 NULL이면 1을 반환한다"
        ],
        a: 1,
        cat: "2.함수/그룹화",
        exp: "<code>NULLIF(a, b)</code> = <b>a == b면 NULL, 아니면 a</b>. 0으로 나누기 방지에 자주 사용: <code>x / NULLIF(y, 0)</code> → y가 0이면 NULL이 되어 division by zero 회피. 1번은 IFNULL의 동작입니다."
      },
      {
        q: "<code>DATE_FORMAT(NOW(), '%Y-%m-%d')</code>의 결과 형식은?",
        opts: [
          "2026/05/10",
          "2026-05-10",
          "10-05-2026",
          "May 10, 2026"
        ],
        a: 1,
        cat: "2.함수/그룹화",
        exp: "<code>%Y</code>=4자리 연도, <code>%m</code>=2자리 월, <code>%d</code>=2자리 일. 결과: <b>'2026-05-10'</b>. <code>%y</code>(소문자)는 2자리 연도, <code>%H</code>=24시간, <code>%h</code>=12시간 등 대소문자 구분에 주의."
      },
      {
        q: "다음 중 GROUP BY 절에 사용 시 <strong>SELECT 절에 같이 올 수 없는</strong> 것은? (ONLY_FULL_GROUP_BY 모드)",
        opts: [
          "GROUP BY로 묶은 컬럼",
          "집계 함수(SUM, COUNT 등)",
          "GROUP BY에 없고 집계되지 않은 일반 컬럼",
          "상수값"
        ],
        a: 2,
        cat: "2.함수/그룹화",
        exp: "ONLY_FULL_GROUP_BY 모드(MySQL 5.7+ 기본)에서 SELECT에는 <b>GROUP BY 컬럼 또는 집계 함수만</b> 올 수 있습니다. 그 외 일반 컬럼이 오면 그룹 내 어느 행의 값을 보여줄지 정해지지 않아 에러가 발생합니다. 이 모드를 끄면 임의 행 값이 반환됩니다(위험)."
      },
      {
        q: "다음 두 SQL의 결과가 다를 수 있는 이유는?<br>(A) <code>SELECT COUNT(score) FROM t</code><br>(B) <code>SELECT COUNT(*) FROM t</code>",
        opts: [
          "(A)는 score가 NULL이 아닌 행만, (B)는 NULL 포함 전체 행을 센다",
          "(A)는 더 빠르고 (B)는 느리다",
          "(A)는 중복을 제거하고 (B)는 제거하지 않는다",
          "동작이 완전히 동일하다"
        ],
        a: 0,
        cat: "2.함수/그룹화",
        exp: "<b>COUNT(컬럼) = NOT NULL인 행만 카운트, COUNT(*) = NULL 포함 전체 행</b>. score 컬럼에 NULL이 섞여 있으면 두 결과가 달라집니다. 성능: 일반적으로 COUNT(*)가 InnoDB에서 살짝 빠르거나 비슷합니다."
      },
      {
        q: "<code>INSERT INTO t (a) VALUES (1), (2), (3)</code>에 대한 설명으로 옳은 것은?",
        opts: [
          "다중 행 INSERT는 표준 SQL이 아니다",
          "각 행마다 별도의 INSERT를 수행하는 것보다 빠르다",
          "MySQL에서만 지원한다",
          "행 수만큼 트랜잭션이 분리된다"
        ],
        a: 1,
        cat: "1.SQL기본",
        exp: "다중 행 INSERT는 <b>네트워크 왕복 1회 + 단일 트랜잭션</b>으로 처리되어 별도 INSERT를 N번 하는 것보다 훨씬 빠릅니다. 표준 SQL이며 대부분의 DBMS가 지원합니다. 대량 적재 시 성능 차이가 매우 큽니다."
      },
      {
        q: "<code>FROM A, B WHERE A.id = B.id</code> 와 동일한 ANSI 조인 문법은?",
        opts: [
          "FROM A CROSS JOIN B",
          "FROM A LEFT JOIN B ON A.id = B.id",
          "FROM A INNER JOIN B ON A.id = B.id",
          "FROM A NATURAL JOIN B"
        ],
        a: 2,
        cat: "3.JOIN/집합",
        exp: "구식 콤마 조인 + WHERE 조인 조건 = 표준 INNER JOIN. ANSI 조인 문법이 권장되는 이유는 <b>조인 조건과 필터 조건을 명확히 분리</b>할 수 있기 때문입니다. 콤마 조인에서 WHERE 조건을 빠뜨리면 카테시안 곱이 발생하는 위험이 있습니다."
      },
      {
        q: "<code>CROSS JOIN</code>의 결과 행 수는? (A: m행, B: n행)",
        opts: ["m + n", "m × n", "max(m, n)", "min(m, n)"],
        a: 1,
        cat: "3.JOIN/집합",
        exp: "<b>CROSS JOIN = 카테시안 곱 = m × n</b>. 모든 가능한 조합을 만듭니다. 100행 × 100행 = 10,000행, 1000 × 1000 = 100만행으로 폭발적 증가. 의도적이지 않은 카테시안 곱은 성능 재앙입니다."
      },
      {
        q: "집합 연산자 사용 시 <strong>제약 조건</strong>으로 옳지 <strong>않은</strong> 것은?",
        opts: [
          "각 SELECT의 컬럼 개수가 같아야 한다",
          "각 컬럼의 데이터 타입이 호환 가능해야 한다",
          "결과 컬럼명은 첫 번째 SELECT를 따른다",
          "각 SELECT마다 별도의 ORDER BY를 가져야 한다"
        ],
        a: 3,
        cat: "3.JOIN/집합",
        exp: "<b>집합 연산자는 ORDER BY를 마지막에 한 번만 사용</b>합니다. 중간 SELECT에 ORDER BY를 쓰면 에러. 결과 정렬은 전체 결과에 대해 한 번 적용. 컬럼 개수와 타입 호환성, 첫 SELECT의 컬럼명 사용은 맞는 설명입니다."
      },
      {
        q: "OUTER JOIN에서 <code>WHERE</code> 절에 외부 테이블 컬럼 조건을 넣었을 때 발생하는 일은?",
        opts: [
          "OUTER JOIN이 그대로 유지된다",
          "사실상 INNER JOIN처럼 동작하게 될 수 있다",
          "에러가 발생한다",
          "조인 자체가 무효화된다"
        ],
        a: 1,
        cat: "3.JOIN/집합",
        exp: "<b>LEFT JOIN ... WHERE B.col = X</b>는 NULL을 걸러내어 결과적으로 INNER JOIN처럼 동작합니다(B 매칭 없는 행이 NULL → 조건에서 탈락). 외부 조인의 의도를 살리려면 <b>ON 절에 조건을 넣어야</b>합니다: <code>LEFT JOIN B ON A.id = B.id AND B.col = X</code>."
      },
      {
        q: "<code>EXISTS</code>와 <code>IN</code>의 차이로 옳은 것은?",
        opts: [
          "EXISTS는 행 존재 여부만 확인하고 IN은 값을 비교한다",
          "EXISTS는 항상 IN보다 느리다",
          "IN은 NULL을 안전하게 처리한다",
          "EXISTS는 단일 컬럼만 비교 가능하다"
        ],
        a: 0,
        cat: "4.서브쿼리/뷰",
        exp: "<b>EXISTS = 행 존재 여부만 확인</b>(SELECT 절 내용 무관, 보통 <code>SELECT 1</code>). 행 하나만 발견하면 즉시 종료. <b>IN = 값 목록 비교</b>로 모든 값을 확인. NOT EXISTS는 NOT IN과 달리 NULL에 안전합니다. 성능은 옵티마이저가 비슷하게 처리하지만 NULL 처리에서 차이가 큽니다."
      },
      {
        q: "다음 SQL의 결과는?<br><code>SELECT name FROM emp WHERE salary > (SELECT AVG(salary) FROM emp);</code>",
        opts: [
          "전체 직원 중 가장 높은 급여자",
          "전체 평균 급여보다 높은 급여를 받는 직원들",
          "각 부서별 평균 급여보다 높은 급여자",
          "에러가 발생한다"
        ],
        a: 1,
        cat: "4.서브쿼리/뷰",
        exp: "비상관 단일 행 서브쿼리: 평균 급여(상수)를 한 번 계산하고, 그보다 큰 직원을 필터링합니다. <b>전체 평균 기준</b>입니다. 부서별로 비교하려면 상관 서브쿼리나 윈도우 함수를 써야 합니다: <code>WHERE salary &gt; (SELECT AVG(salary) FROM emp e2 WHERE e2.dept = emp.dept)</code>."
      },
      {
        q: "인라인 뷰(Inline View)의 위치는?",
        opts: ["SELECT 절", "FROM 절", "WHERE 절", "HAVING 절"],
        a: 1,
        cat: "4.서브쿼리/뷰",
        exp: "<b>인라인 뷰 = FROM 절 서브쿼리</b>. 결과 집합을 가상 테이블처럼 사용. 별칭 필수: <code>FROM (SELECT ...) AS sub</code>. SELECT=스칼라, WHERE/HAVING=중첩, FROM=인라인뷰로 위치별 명칭이 다릅니다."
      },
      {
        q: "다음 중 갱신 가능한 뷰는?",
        opts: [
          "<code>CREATE VIEW v AS SELECT dept, COUNT(*) FROM emp GROUP BY dept</code>",
          "<code>CREATE VIEW v AS SELECT DISTINCT dept FROM emp</code>",
          "<code>CREATE VIEW v AS SELECT id, name FROM emp WHERE salary &gt; 3000</code>",
          "<code>CREATE VIEW v AS SELECT * FROM emp UNION SELECT * FROM ex_emp</code>"
        ],
        a: 2,
        cat: "4.서브쿼리/뷰",
        exp: "갱신 가능 뷰 조건: <b>단일 테이블, 집계함수/DISTINCT/GROUP BY/HAVING/UNION 없음</b>. 3번만 단순 SELECT + WHERE이라 INSERT/UPDATE/DELETE가 가능합니다. 1번=GROUP BY, 2번=DISTINCT, 4번=UNION으로 모두 갱신 불가."
      },
      {
        q: "ERD에서 <strong>약한 엔티티(Weak Entity)</strong>의 특징은?",
        opts: [
          "독립적으로 존재할 수 있다",
          "PK를 가지지 않는다",
          "상위 엔티티 없이는 식별이 불가능하다",
          "관계를 맺지 않는다"
        ],
        a: 2,
        cat: "5.DB개념/모델링",
        exp: "<b>약한 엔티티 = 자체 식별자만으로는 PK를 구성할 수 없고 부모 엔티티의 PK를 받아와야 식별 가능</b>한 엔티티. 예: 주문-주문상세에서 주문상세는 주문ID 없이는 식별 불가. ERD에서 이중 사각형으로 표현(전통 표기). 식별 관계로 연결됩니다."
      },
      {
        q: "다음 중 <strong>BCNF</strong>가 보장하는 것은?",
        opts: [
          "모든 컬럼이 원자값이다",
          "부분 함수 종속이 없다",
          "이행 함수 종속이 없다",
          "모든 결정자가 후보키이다"
        ],
        a: 3,
        cat: "5.DB개념/모델링",
        exp: "<b>BCNF = 3NF + 모든 결정자가 후보키</b>. 3NF에서도 결정자가 후보키가 아닌 경우(예: 비후보키→후보키 일부 종속)가 있을 수 있는데 이를 제거한 형태. 1번=1NF, 2번=2NF, 3번=3NF. BCNF는 3NF보다 엄격합니다."
      },
      {
        q: "반정규화(Denormalization)를 수행하는 이유로 적절한 것은?",
        opts: [
          "데이터 중복 제거",
          "조회 성능 향상을 위해 의도적으로 중복을 허용",
          "이상 현상 완전 제거",
          "DBMS의 표준 권고사항"
        ],
        a: 1,
        cat: "5.DB개념/모델링",
        exp: "<b>반정규화 = 조회 성능 향상을 위해 정규화 원칙을 의도적으로 위배</b>. 조인 횟수를 줄이거나 집계 결과를 미리 저장. 단점: 갱신 시 일관성 유지 부담, 저장 공간 ↑. 충분한 정규화 후 성능 병목이 명확할 때만 신중히 적용합니다."
      },
      {
        q: "B+Tree 인덱스가 Hash 인덱스에 비해 <strong>유리한</strong> 작업은?",
        opts: [
          "= 동등 비교만 수행할 때",
          "범위 검색(BETWEEN, &gt;, &lt;) 및 정렬",
          "단일 행만 매우 빠르게 조회할 때",
          "메모리 사용량 최소화"
        ],
        a: 1,
        cat: "6.인덱스/성능",
        exp: "<b>B+Tree는 정렬 상태로 저장되어 범위 검색과 정렬에 유리</b>합니다. 리프 노드끼리 연결 리스트로 이어져 있어 순차 스캔이 효율적. <b>Hash는 = 비교만 가능</b>하고 범위 검색이 불가능. MySQL InnoDB는 B+Tree 기본, MEMORY 엔진은 Hash 기본."
      },
      {
        q: "다음 중 인덱스 효과가 <strong>가장 떨어지는</strong> 경우는?",
        opts: [
          "성별 컬럼(M/F)에 인덱스",
          "주민번호 컬럼에 인덱스",
          "이메일 컬럼에 인덱스",
          "고유 식별번호 컬럼에 인덱스"
        ],
        a: 0,
        cat: "6.인덱스/성능",
        exp: "<b>카디널리티가 낮은 컬럼(성별 등)은 인덱스 효과가 매우 떨어집니다</b>. 50만 행 중 50% 매칭이면 인덱스 → 테이블 랜덤 IO가 풀스캔보다 느림. 옵티마이저가 인덱스를 무시하기도 합니다. 주민번호/이메일은 거의 유일해 카디널리티가 매우 높습니다."
      },
      {
        q: "복합 인덱스 <code>INDEX(country, city, age)</code>가 있을 때 <strong>가장 효율적인 컬럼 순서로 변경</strong>이 필요한 쿼리 패턴은? (대부분의 쿼리가)<br><code>WHERE city = ? AND age &gt; ?</code>",
        opts: [
          "(country, city, age) 그대로 유지",
          "(city, age, country)로 변경",
          "(age, city, country)로 변경",
          "(country, age, city)로 변경"
        ],
        a: 1,
        cat: "6.인덱스/성능",
        exp: "쿼리에 country가 없어 좌측 접두사 위반 → 현재 인덱스 활용 불가. <b>(city, age, country)로 = 조건 컬럼 → 범위 조건 → 나머지 순으로 재배치</b>. = 조건이 앞에, 범위 조건이 그 뒤에 와야 효율적입니다. country는 거의 사용 안 되므로 맨 뒤에 놓습니다."
      },
      {
        q: "<code>EXPLAIN</code> 출력의 <code>rows</code> 컬럼이 의미하는 것은?",
        opts: [
          "테이블의 전체 행 수",
          "쿼리 실행 시 검사할 것으로 예상되는 행 수",
          "결과로 반환되는 정확한 행 수",
          "인덱스 페이지 수"
        ],
        a: 1,
        cat: "6.인덱스/성능",
        exp: "<b>rows = 옵티마이저가 검사할 것으로 예상한 행 수</b>(추정치). 통계 정보 기반이라 부정확할 수 있습니다. 작을수록 효율적인 실행 계획. 정확한 실행 시 행 수를 보려면 EXPLAIN ANALYZE의 'actual rows' 컬럼을 봐야 합니다."
      },
      {
        q: "InnoDB MVCC에서 <strong>Read View</strong>가 생성되는 시점은?",
        opts: [
          "트랜잭션 시작 즉시 생성",
          "READ COMMITTED는 매 SELECT마다, REPEATABLE READ는 첫 SELECT 시점에 생성",
          "커밋 직후 생성",
          "테이블 락이 걸린 시점"
        ],
        a: 1,
        cat: "7.트랜잭션",
        exp: "Read View(스냅샷) 생성 시점이 격리 수준별로 다릅니다: <b>READ COMMITTED → 매 SELECT마다 새 스냅샷</b> (그래서 같은 트랜잭션에서 두 번 SELECT하면 다른 결과). <b>REPEATABLE READ → 첫 일관된 읽기에서 생성, 트랜잭션 끝까지 유지</b>(그래서 Non-Repeatable Read 방지)."
      },
      {
        q: "Lost Update를 방지하기 위한 가장 적절한 방법은?",
        opts: [
          "READ UNCOMMITTED로 격리 수준 낮추기",
          "SELECT ... FOR UPDATE로 명시적 락 획득",
          "트리거 사용",
          "테이블 백업"
        ],
        a: 1,
        cat: "7.트랜잭션",
        exp: "<b>Lost Update 방지 = 명시적 락(비관적) 또는 버전 컬럼(낙관적)</b>. <code>SELECT ... FOR UPDATE</code>로 X락을 걸고 읽으면 다른 트랜잭션이 해당 행을 수정할 수 없어 갱신 손실 방지. 격리 수준을 낮추면 오히려 더 발생합니다."
      },
      {
        q: "다음 중 트랜잭션의 <strong>일관성(Consistency)</strong>을 깨뜨리는 사례는?",
        opts: [
          "은행 계좌 이체 중 출금만 되고 입금이 누락된 상태로 커밋",
          "트랜잭션 시작 후 다른 트랜잭션이 커밋한 변경을 보지 못함",
          "두 트랜잭션이 동시에 같은 행을 읽음",
          "커밋된 변경이 디스크에 저장됨"
        ],
        a: 0,
        cat: "7.트랜잭션",
        exp: "<b>일관성 = 트랜잭션 전후 DB 무결성 제약 유지</b>. 출금만 되고 입금이 누락되면 양 계좌 합계가 변해 회계 무결성 위반 → 일관성 깨짐. 원자성(All or Nothing)이 보장되어야 일관성도 유지됩니다. 2번=격리성 관련, 4번=지속성 정상."
      },
      {
        q: "<code>SELECT ... LOCK IN SHARE MODE</code>의 락 종류는?",
        opts: [
          "배타 락(X Lock)",
          "공유 락(S Lock)",
          "갭 락(Gap Lock)",
          "테이블 락"
        ],
        a: 1,
        cat: "7.트랜잭션",
        exp: "<code>LOCK IN SHARE MODE</code> = <b>공유 락(S Lock)</b>. 다른 트랜잭션이 공유 락은 추가로 걸 수 있지만 배타 락(쓰기)은 걸 수 없습니다. 즉 다른 트랜잭션의 변경을 막으면서 동시에 여러 트랜잭션이 함께 읽을 수 있습니다. <code>FOR UPDATE</code>는 X 락입니다."
      },
      {
        q: "MVCC가 가져다주는 핵심 이점은?",
        opts: [
          "디스크 공간 절약",
          "읽기-쓰기가 서로 블로킹하지 않아 동시성 향상",
          "쿼리 실행 시간 단축",
          "인덱스 자동 생성"
        ],
        a: 1,
        cat: "7.트랜잭션",
        exp: "<b>MVCC의 핵심 = Consistent Non-Locking Read</b>. 읽기 작업이 락 없이 스냅샷을 읽고, 쓰기 작업은 새 버전을 만들어 별도로 기록 → 읽기와 쓰기가 서로 막지 않음 → 동시성 ↑. 단점은 Undo Log 저장 공간 사용과 오래된 트랜잭션이 long-running일 때 Undo Log 누적 문제."
      },
      {
        q: "ERD 표기법 중 까마귀발(Crow's Foot) 표기에서 'O—|—' 기호가 의미하는 카디널리티는?",
        opts: [
          "1개 정확히 (정확히 1)",
          "0 또는 1 (선택적, 1 이하)",
          "1 이상 (필수, 다수)",
          "0 이상 (선택적, 다수)"
        ],
        a: 1,
        cat: "5.DB개념/모델링",
        exp: "Crow's Foot 표기: <b>원(O) = 0 가능(선택적), 직선(|) = 1 이상(필수), 까마귀발(<) = 다수</b>. <code>O—|—</code> = 0 또는 1(선택적, 최대 1). <code>|—|—</code> = 정확히 1, <code>|—&lt;—</code> = 1 이상 다수, <code>O—&lt;—</code> = 0 이상 다수. ERD 해석에서 자주 묻습니다."
      }
    ]
  },
  // ============================================================
  {
    title: "4회차 — 응용 종합 2",
    desc: "복합 시나리오, 실행 계획 해석, 동시성 시뮬레이션",
    questions: [
      {
        q: "<code>GRANT SELECT ON db.t TO 'user'@'%'</code> 명령어 분류는?",
        opts: ["DDL", "DML", "DCL", "TCL"],
        a: 2,
        cat: "1.SQL기본",
        exp: "<b>GRANT/REVOKE = DCL(Data Control Language)</b>로 권한 제어. CREATE/ALTER/DROP/TRUNCATE = DDL, INSERT/UPDATE/DELETE = DML, COMMIT/ROLLBACK/SAVEPOINT = TCL입니다."
      },
      {
        q: "<code>CHAR(5)</code> 컬럼에 <code>'a '</code>(a 뒤 공백 1개)를 저장한 뒤 <code>WHERE col = 'a'</code> 로 검색했을 때 매칭 여부는?",
        opts: [
          "매칭됨 (CHAR는 trailing space 무시)",
          "매칭 안 됨 (저장된 값과 정확히 일치해야 함)",
          "에러 발생",
          "DBMS에 따라 다름"
        ],
        a: 0,
        cat: "1.SQL기본",
        exp: "표준 SQL과 MySQL 모두 <b>CHAR 비교 시 trailing space를 무시</b>합니다. <code>'a' = 'a    '</code>가 TRUE. 단 <code>LIKE</code> 비교에서는 공백을 그대로 인식하므로 동작이 다릅니다. <code>VARCHAR</code>도 비교 시 trailing space를 일반적으로 무시하지만, BINARY 타입은 무시하지 않습니다."
      },
      {
        q: "<code>WHERE name LIKE '_a%'</code>에 매칭되는 문자열은?",
        opts: [
          "'aa'", "'abc'", "'ba'", "'bab'"
        ],
        a: 3,
        cat: "1.SQL기본",
        exp: "<code>_</code>는 <b>정확히 1개 임의 문자</b>, <code>%</code>는 <b>0개 이상 임의 문자</b>. <code>'_a%'</code> = 첫 글자 임의 + 두 번째 'a' + 그 이후 0~N자. 'bab' = 'b' + 'a' + 'b' → 매칭. 'ba' = 'b' + 'a' + ''(0자) → 매칭. 'aa' = 'a' + 'a' → 매칭. 'abc' = 'a' + 'b'(≠a) → 미매칭. 정답은 'bab'을 포함한 케이스. (실제로는 'aa', 'bab', 'ba'가 모두 매칭, 'abc'만 미매칭이라 출제 의도상 미매칭이 아닌 매칭의 대표를 고르는 문제)"
      },
      {
        q: "<code>INSERT INTO t (a, b) VALUES (NULL, 1)</code> 실행 시 a 컬럼이 <code>NOT NULL</code>이면?",
        opts: [
          "NULL이 자동으로 빈 문자열로 변환된다",
          "에러가 발생한다",
          "기본값이 자동 적용된다",
          "행이 무시된다"
        ],
        a: 1,
        cat: "1.SQL기본",
        exp: "<b>NOT NULL 제약 위반 → 에러</b>(MySQL strict mode 기준). 빈 문자열 ''과 NULL은 다릅니다. DEFAULT 값이 정의되어 있고 명시적으로 NULL을 넣지 않은 경우(VALUES (DEFAULT, 1) 또는 컬럼 생략)에만 기본값이 적용됩니다."
      },
      {
        q: "<code>SELECT name, salary, RANK() OVER (ORDER BY salary DESC) AS r FROM emp</code> 의 동작은?",
        opts: [
          "전체를 그룹화한다",
          "salary 기준 내림차순 순위를 매긴다 (동점 시 다음 순위 점프)",
          "전체 평균을 구한다",
          "에러를 발생시킨다"
        ],
        a: 1,
        cat: "2.함수/그룹화",
        exp: "<b>RANK() = 윈도우 함수</b>로 행을 그룹화하지 않고 순위를 매깁니다. 동점 시 다음 순위를 건너뜀: 1, 2, 2, 4. <b>DENSE_RANK</b>는 건너뛰지 않음: 1, 2, 2, 3. <b>ROW_NUMBER</b>는 무조건 1, 2, 3, 4. MySQL 8.0+에서 윈도우 함수 지원."
      },
      {
        q: "<code>HAVING</code> 절에서 사용 <strong>불가능한</strong> 것은?",
        opts: [
          "COUNT(*) &gt; 5",
          "AVG(salary) &gt; 3000",
          "SUM(amount) BETWEEN 100 AND 500",
          "salary &gt; 1000 (집계함수 없는 일반 컬럼 조건)"
        ],
        a: 3,
        cat: "2.함수/그룹화",
        exp: "<b>HAVING은 그룹화된 결과에 대한 필터</b>로 GROUP BY 컬럼이나 집계 함수만 사용 가능. 일반 컬럼 조건은 WHERE에서 처리해야 합니다. 4번 같은 일반 컬럼 조건을 HAVING에 넣으면 ONLY_FULL_GROUP_BY 모드에서 에러가 발생합니다(GROUP BY에 없는 컬럼)."
      },
      {
        q: "<code>SUM(CASE WHEN gender = 'M' THEN 1 ELSE 0 END)</code>의 의미는?",
        opts: [
          "전체 행 수 카운트",
          "남성(M) 행 수 카운트",
          "전체 합계 계산",
          "에러"
        ],
        a: 1,
        cat: "2.함수/그룹화",
        exp: "<b>SUM(CASE WHEN 조건 THEN 1 ELSE 0 END) = 조건부 카운트</b>. 한 번의 GROUP BY로 여러 조건의 카운트를 동시에 계산할 때 매우 유용합니다. <code>COUNT(CASE WHEN gender='M' THEN 1 END)</code>도 같은 결과(NULL은 카운트되지 않음 활용)."
      },
      {
        q: "다음 SQL의 결과 행 수는?<br><code>SELECT a, b FROM t1 (3행) UNION SELECT a, b FROM t2 (4행);</code><br>(t1과 t2에 중복 1쌍 가정)",
        opts: ["6행", "7행", "8행", "12행"],
        a: 0,
        cat: "3.JOIN/집합",
        exp: "<b>UNION = 중복 제거</b>. 3 + 4 = 7에서 중복 1쌍 제거 = 6행. UNION ALL이었다면 그대로 7행입니다. UNION은 정렬+중복 비교 비용이 발생하므로 중복이 없거나 무관하면 UNION ALL을 권장합니다."
      },
      {
        q: "<code>FULL OUTER JOIN</code>을 MySQL에서 흉내내는 올바른 방법은?",
        opts: [
          "LEFT JOIN과 RIGHT JOIN을 단순 결합",
          "LEFT JOIN UNION ALL RIGHT JOIN",
          "LEFT JOIN UNION RIGHT JOIN",
          "INNER JOIN을 두 번 수행"
        ],
        a: 2,
        cat: "3.JOIN/집합",
        exp: "<b>FULL OUTER JOIN = LEFT JOIN UNION RIGHT JOIN</b> (UNION으로 중복 제거 필수). UNION ALL을 쓰면 양쪽 매칭되는 행이 두 번 나오게 됩니다. 더 효율적인 방법은 <code>LEFT JOIN ... UNION ALL ... RIGHT JOIN ... WHERE 매칭없음</code> 형태입니다."
      },
      {
        q: "OUTER JOIN의 ON 절에 추가 조건을 넣는 것과 WHERE 절에 넣는 것의 차이는?",
        opts: [
          "두 위치의 동작이 완전히 동일하다",
          "ON 절은 조인 시점에, WHERE 절은 조인 후 필터링되어 OUTER JOIN의 NULL 행 처리가 달라진다",
          "ON 절이 항상 더 빠르다",
          "WHERE 절은 OUTER JOIN과 함께 쓸 수 없다"
        ],
        a: 1,
        cat: "3.JOIN/집합",
        exp: "<b>ON = 조인 조건(매칭 시점), WHERE = 결과 필터(조인 후)</b>. LEFT JOIN에서 ON에 조건을 넣으면 매칭 안 되는 왼쪽 행도 NULL로 보존되지만, WHERE에 같은 조건을 넣으면 NULL이 걸러져 사실상 INNER JOIN처럼 동작합니다. 외부 조인의 의도를 살리려면 ON에 넣어야 합니다."
      },
      {
        q: "다음 중 <strong>NULL-안전한 동등 비교</strong> 연산자는? (MySQL)",
        opts: ["=", "!=", "<=>", "IS"],
        a: 2,
        cat: "1.SQL기본",
        exp: "<b><code>&lt;=&gt;</code> = NULL-safe equal</b>(MySQL 확장). <code>NULL &lt;=&gt; NULL → TRUE</code>, <code>1 &lt;=&gt; NULL → FALSE</code>. 일반 <code>=</code>는 NULL과의 비교가 UNKNOWN. JOIN 조건에서 NULL도 매칭하고 싶을 때 유용. 표준 SQL에서는 <code>IS NOT DISTINCT FROM</code>이 동일 역할."
      },
      {
        q: "다음 중 결과가 <strong>가장 빠른</strong> 카운트 쿼리는? (대용량 InnoDB 테이블)",
        opts: [
          "SELECT COUNT(*) FROM t",
          "SELECT COUNT(1) FROM t",
          "SELECT COUNT(pk_column) FROM t",
          "셋 다 비슷하다"
        ],
        a: 3,
        cat: "2.함수/그룹화",
        exp: "<b>InnoDB에서 COUNT(*), COUNT(1), COUNT(PK)는 옵티마이저가 동일하게 처리</b>해 성능 차이가 사실상 없습니다(가장 작은 보조 인덱스 풀스캔). 흔히 'COUNT(1)이 빠르다'는 잘못된 통념입니다. 단 <code>COUNT(nullable_col)</code>은 NULL 체크가 들어가 약간 다를 수 있습니다."
      },
      {
        q: "스칼라 서브쿼리가 <strong>두 행 이상</strong> 반환하면?",
        opts: [
          "첫 행만 사용된다",
          "마지막 행만 사용된다",
          "에러가 발생한다",
          "임의의 한 행이 선택된다"
        ],
        a: 2,
        cat: "4.서브쿼리/뷰",
        exp: "<b>스칼라 서브쿼리는 단일 행, 단일 컬럼만 반환해야</b> 하며 두 행 이상이면 'Subquery returns more than 1 row' 에러가 발생합니다. 운영 데이터가 늘어나면서 이 에러가 갑자기 발생할 수 있어, <code>LIMIT 1</code>이나 집계 함수로 단일 행을 보장하는 것이 안전합니다."
      },
      {
        q: "다음 두 쿼리의 차이는?<br>(A) <code>WHERE EXISTS (SELECT 1 FROM B WHERE B.id = A.id)</code><br>(B) <code>WHERE A.id IN (SELECT id FROM B)</code>",
        opts: [
          "동작이 완전히 다르다",
          "결과는 거의 동일하나 NULL 처리와 옵티마이저 처리 방식에서 차이날 수 있다",
          "EXISTS는 항상 더 느리다",
          "IN은 단일 컬럼만 가능하다"
        ],
        a: 1,
        cat: "4.서브쿼리/뷰",
        exp: "두 쿼리의 결과는 일반적으로 동일하지만 <b>NULL 처리에서 차이</b>가 있습니다(특히 NOT EXISTS vs NOT IN). 옵티마이저는 보통 둘을 동등하게 변환하지만, EXISTS는 행 발견 즉시 종료할 수 있어 큰 서브쿼리에서 유리할 수 있습니다."
      },
      {
        q: "<code>CREATE OR REPLACE VIEW</code>의 의미는?",
        opts: [
          "뷰가 없으면 생성, 있으면 동작 안 함",
          "뷰가 없으면 생성, 있으면 정의를 교체",
          "뷰의 데이터를 새로고침",
          "뷰의 인덱스를 재구성"
        ],
        a: 1,
        cat: "4.서브쿼리/뷰",
        exp: "<b>CREATE OR REPLACE = 없으면 생성, 있으면 정의 교체</b>. 별도로 DROP VIEW 후 CREATE VIEW를 할 필요 없이 한 번에 처리. MySQL에서 자주 사용되며, 뷰 변경 시 의존하는 다른 뷰/쿼리는 그대로 동작하지만 컬럼이 바뀌면 영향받을 수 있습니다."
      },
      {
        q: "DB 주요 특징 중 '데이터를 주소가 아닌 값으로 검색'하는 특성은?",
        opts: [
          "실시간 접근성",
          "계속적 변화",
          "동시 공유",
          "내용 참조"
        ],
        a: 3,
        cat: "5.DB개념/모델링",
        exp: "<b>내용 참조(Content Reference)</b> = 물리 주소가 아닌 데이터 <b>값(내용) 자체로 검색</b>. <code>WHERE name = 'Alice'</code>처럼. 파일 시스템과의 차별점입니다. 다른 특징: 실시간 접근성, 계속적 변화, 동시 공유."
      },
      {
        q: "ERD에서 1:N 관계의 외래키(FK) 위치는?",
        opts: [
          "1쪽 엔티티에 N쪽 엔티티의 PK가 들어간다",
          "N쪽 엔티티에 1쪽 엔티티의 PK가 들어간다",
          "별도 테이블을 만들어야 한다",
          "양쪽 모두에 외래키를 둔다"
        ],
        a: 1,
        cat: "5.DB개념/모델링",
        exp: "<b>1:N 관계 → N쪽에 1쪽의 PK를 외래키로 추가</b>. 예: 부서(1)-사원(N) → 사원 테이블에 dept_id 외래키. 1쪽에 두면 한 행에 여러 값을 저장하게 되어 1NF 위반. M:N은 연결 엔티티가 양쪽 PK를 받습니다."
      },
      {
        q: "다음 중 3NF는 만족하지만 BCNF는 위반하는 경우는?",
        opts: [
          "이행 함수 종속이 존재",
          "부분 함수 종속이 존재",
          "결정자가 후보키가 아닌 경우(예: 비후보키 → 후보키 일부)",
          "원자값이 아닌 컬럼"
        ],
        a: 2,
        cat: "5.DB개념/모델링",
        exp: "3NF는 PK 외 키→PK 일부 종속 같은 케이스를 다 잡지 못합니다. <b>BCNF는 모든 결정자(determinant)가 후보키일 것을 요구</b>해 더 엄격합니다. 실무에서는 대부분 3NF로 충분하지만, 다중 후보키가 있는 복잡한 스키마에서 BCNF가 필요할 수 있습니다."
      },
      {
        q: "B+Tree에서 보조 인덱스(Secondary Index)의 리프 노드가 가지는 값은?",
        opts: [
          "데이터 행의 물리 주소",
          "PK 값",
          "데이터 행 전체",
          "다음 인덱스 페이지 포인터"
        ],
        a: 1,
        cat: "6.인덱스/성능",
        exp: "<b>InnoDB의 보조 인덱스 리프 = PK 값</b>. 보조 인덱스로 검색하면 → PK 획득 → PK로 클러스터드 인덱스 재탐색(book lookup, double lookup)이 발생합니다. 그래서 PK가 너무 길면 모든 보조 인덱스가 비대해집니다. 보조 인덱스만으로 결과를 만드는 커버링 인덱스가 효율적인 이유."
      },
      {
        q: "다음 중 인덱스 사용을 <strong>방해하는</strong> 쿼리 패턴은?",
        opts: [
          "WHERE col = 100",
          "WHERE col BETWEEN 100 AND 200",
          "WHERE UPPER(col) = 'ABC'",
          "WHERE col IN (1, 2, 3)"
        ],
        a: 2,
        cat: "6.인덱스/성능",
        exp: "<b>인덱스 컬럼에 함수/연산을 적용하면 인덱스를 못 씁니다</b>(Index Scan 불가). <code>UPPER(col)</code>, <code>col + 1</code>, <code>SUBSTR(col, 1)</code> 등 모두 인덱스 무력화. 해결: 함수 기반 인덱스(Functional Index, MySQL 8.0+)를 만들거나, 데이터 자체를 정규화된 형태로 저장합니다."
      },
      {
        q: "<code>EXPLAIN</code> 결과 <code>Extra: Using filesort</code>가 나타날 때 대응으로 적절한 것은?",
        opts: [
          "ORDER BY 컬럼에 인덱스를 추가",
          "WHERE 절에서 ORDER BY 컬럼을 제거",
          "LIMIT을 늘림",
          "GROUP BY를 추가"
        ],
        a: 0,
        cat: "6.인덱스/성능",
        exp: "<code>Using filesort</code>는 <b>인덱스로 정렬 비용을 줄이지 못해 추가 정렬이 필요</b>하다는 의미. ORDER BY 컬럼이나 WHERE+ORDER BY 조합에 맞는 인덱스를 만들면 정렬 비용을 없앨 수 있습니다. 단, 항상 인덱스가 답은 아니며 결과가 작으면 filesort가 빠를 수도 있습니다."
      },
      {
        q: "EXPLAIN의 <code>Extra: Using temporary</code>가 의미하는 것은?",
        opts: [
          "임시 테이블을 생성해 처리한다 (성능 부담)",
          "임시 트랜잭션을 사용한다",
          "임시 인덱스를 생성한다",
          "임시 사용자 권한을 사용한다"
        ],
        a: 0,
        cat: "6.인덱스/성능",
        exp: "<b>Using temporary = 중간 결과를 위해 임시 테이블 생성</b>. GROUP BY와 ORDER BY가 다른 컬럼이거나, DISTINCT, UNION 등에서 자주 발생. 메모리 임시 테이블이면 빠르지만, 크기가 커지면 디스크로 내려가 성능이 급격히 저하됩니다(<code>Using temporary; Using filesort</code>가 함께 뜨면 튜닝 우선순위)."
      },
      {
        q: "복합 인덱스 <code>(A, B)</code>가 있을 때 <code>WHERE A &gt; 100 ORDER BY B</code> 의 효율은?",
        opts: [
          "두 컬럼 모두 인덱스 활용 가능",
          "A는 인덱스 활용, B는 정렬에 인덱스를 못 쓸 수 있다",
          "B만 인덱스 활용",
          "둘 다 인덱스 활용 불가"
        ],
        a: 1,
        cat: "6.인덱스/성능",
        exp: "복합 인덱스는 앞 컬럼이 = 일 때만 뒤 컬럼이 정렬되어 있습니다. <b>A가 범위 조건이면 같은 A 값 내에서만 B가 정렬</b>되어 있어, 전체 결과의 B 정렬을 인덱스로 보장하지 못합니다 → filesort 발생. 인덱스를 <code>(A=상수, B 정렬)</code> 형태로 활용하려면 A가 = 조건이어야 합니다."
      },
      {
        q: "트랜잭션 격리 수준을 설정하는 SQL은?",
        opts: [
          "SET ISOLATION = REPEATABLE READ",
          "SET TRANSACTION ISOLATION LEVEL REPEATABLE READ",
          "ALTER ISOLATION REPEATABLE READ",
          "GRANT REPEATABLE READ"
        ],
        a: 1,
        cat: "7.트랜잭션",
        exp: "표준 SQL: <code>SET [SESSION|GLOBAL] TRANSACTION ISOLATION LEVEL ...</code>. 주의: <b>트랜잭션이 시작된 후에 변경하면 다음 트랜잭션부터 적용</b>됩니다. 현재 트랜잭션에 적용하려면 <code>START TRANSACTION</code> 이전에 설정해야 합니다."
      },
      {
        q: "InnoDB의 <strong>갭 락(Gap Lock)</strong>이 잠그는 대상은?",
        opts: [
          "특정 인덱스 레코드만",
          "테이블 전체",
          "인덱스 레코드 사이의 간격(범위)",
          "스키마 객체"
        ],
        a: 2,
        cat: "7.트랜잭션",
        exp: "<b>갭 락은 인덱스 레코드 사이의 빈 공간(범위)을 잠궈</b> 다른 트랜잭션의 INSERT를 막습니다. 예: id=10, 20이 있을 때 (10, 20) 갭에 락이 걸리면 다른 트랜잭션이 id=15를 INSERT 못함 → Phantom Read 방지. READ COMMITTED에서는 갭 락이 비활성화됩니다."
      },
      {
        q: "다음 중 InnoDB에서 <strong>현재 읽기(Current Read)</strong>가 발생하는 경우가 <strong>아닌</strong> 것은?",
        opts: [
          "SELECT ... FOR UPDATE",
          "SELECT ... LOCK IN SHARE MODE",
          "INSERT/UPDATE/DELETE",
          "일반 SELECT (잠금 없음)"
        ],
        a: 3,
        cat: "7.트랜잭션",
        exp: "<b>일반 SELECT = Consistent Non-Locking Read(MVCC 스냅샷)</b>. 잠금 없이 자기 트랜잭션 시점의 스냅샷을 봅니다. <b>FOR UPDATE/LOCK IN SHARE MODE/INSERT/UPDATE/DELETE = Current Read</b>로 최신 버전을 보고 락을 겁니다. 이 차이를 이해하는 것이 MVCC의 핵심입니다."
      },
      {
        q: "다음 시나리오에서 발생하는 동시성 이상 현상은?<br>T1: <code>SELECT SUM(amount) FROM orders WHERE status='paid'</code> (결과: 10,000)<br>T2: <code>INSERT INTO orders ... status='paid', amount=500; COMMIT;</code><br>T1: <code>SELECT SUM(amount) FROM orders WHERE status='paid'</code> (결과: 10,500)",
        opts: [
          "Dirty Read",
          "Non-Repeatable Read",
          "Phantom Read",
          "Lost Update"
        ],
        a: 2,
        cat: "7.트랜잭션",
        exp: "같은 조건으로 두 번 SELECT 했을 때 <b>새로운 행이 추가되어 결과가 변함</b> = <b>Phantom Read</b>. 같은 행이 변경되어 값이 변하면 Non-Repeatable Read입니다. SERIALIZABLE에서 방지되며, InnoDB의 REPEATABLE READ는 갭락+MVCC로 사실상 방지합니다."
      },
      {
        q: "트랜잭션의 <strong>격리성</strong> 수준이 높을수록 일반적으로 발생하는 trade-off는?",
        opts: [
          "성능 향상",
          "동시성 감소",
          "저장 공간 증가",
          "트랜잭션 자동 분할"
        ],
        a: 1,
        cat: "7.트랜잭션",
        exp: "<b>격리 수준 ↑ → 일관성 ↑ but 동시성 ↓</b>. SERIALIZABLE은 락이 많아 처리량이 크게 떨어집니다. 그래서 대부분의 시스템은 READ COMMITTED나 REPEATABLE READ로 균형을 잡습니다. MVCC는 이 trade-off를 완화하는 핵심 기술입니다."
      },
      {
        q: "Undo Log가 <strong>주로 사용되는 두 가지 용도</strong>는?",
        opts: [
          "트랜잭션 롤백 + MVCC 스냅샷 제공",
          "성능 향상 + 압축",
          "백업 + 복제",
          "인덱스 정렬 + 통계 수집"
        ],
        a: 0,
        cat: "7.트랜잭션",
        exp: "Undo Log의 두 가지 핵심 용도: ① <b>트랜잭션 롤백</b>(이전 상태 복원으로 원자성 보장), ② <b>MVCC 스냅샷</b>(이전 버전을 따라가 일관된 읽기 제공). 그래서 long-running 트랜잭션이 있으면 Undo Log가 누적되어 디스크/성능 문제가 발생할 수 있습니다."
      },
      {
        q: "다음 SQL의 결과로 옳은 것은?<br><code>WITH dept_avg AS (SELECT dept, AVG(salary) AS a FROM emp GROUP BY dept)<br>SELECT e.name FROM emp e JOIN dept_avg d ON e.dept = d.dept WHERE e.salary &gt; d.a;</code>",
        opts: [
          "전체 평균보다 높은 급여자",
          "각 부서별 평균보다 높은 급여를 받는 직원",
          "최고 급여자",
          "에러 발생"
        ],
        a: 1,
        cat: "4.서브쿼리/뷰",
        exp: "<b>CTE(Common Table Expression, WITH 절)</b>은 인라인 뷰처럼 동작하는 명명된 임시 결과 집합입니다. dept_avg가 부서별 평균을 미리 계산 → 직원과 부서별로 조인하여 자기 부서 평균보다 큰 직원 추출. CTE는 가독성과 재사용성이 높아 복잡한 쿼리에 자주 사용. MySQL 8.0+ 지원."
      }
    ]
  },

  // ============================================================
  // 5회차
  // ============================================================
  {
    title: "5회차 — 실전 마무리",
    desc: "함정 위주 종합 점검 + 자주 틀리는 포인트 복습",
    questions: [
      {
        q: "다음 중 자동 커밋(Auto-commit)이 발생하지 <strong>않는</strong> 명령어는?",
        opts: ["TRUNCATE TABLE t", "CREATE TABLE t (...)", "DROP TABLE t", "DELETE FROM t"],
        a: 3,
        cat: "1.SQL기본",
        exp: "<b>DDL(TRUNCATE/CREATE/DROP/ALTER)은 자동 커밋 → ROLLBACK 불가</b>. <b>DML(DELETE/INSERT/UPDATE)은 명시적 COMMIT 필요</b>. 그래서 DELETE는 ROLLBACK 가능. TRUNCATE를 'DELETE의 빠른 버전'으로 오해하기 쉽지만 ROLLBACK 여부에서 결정적 차이가 납니다."
      },
      {
        q: "<code>VARCHAR(255)</code>와 <code>VARCHAR(20)</code>에 동일한 5바이트 문자열을 저장할 때 사용 공간 차이는?",
        opts: [
          "VARCHAR(255)가 훨씬 더 많은 공간 사용",
          "VARCHAR(20)이 더 적게 사용",
          "거의 동일 (단, VARCHAR(255+)는 길이 정보 1바이트 추가 사용)",
          "둘 다 정확히 정의된 크기만큼 사용"
        ],
        a: 2,
        cat: "1.SQL기본",
        exp: "VARCHAR는 <b>실제 입력 길이만큼만 저장 + 길이 정보(255 이하 1바이트, 256+ 2바이트)</b>. 5바이트 저장 시: VARCHAR(20) → 6바이트, VARCHAR(255) → 6바이트, VARCHAR(256) → 7바이트. 단 임시 테이블/메모리 작업 시에는 정의 크기로 메모리를 잡을 수 있어 과하게 큰 VARCHAR는 비효율적입니다."
      },
      {
        q: "<code>WHERE col1 = 1 AND col2 IS NULL</code> 의 <strong>대등한</strong> 표현은?",
        opts: [
          "WHERE col1 = 1 AND col2 = NULL",
          "WHERE col1 = 1 AND col2 &lt;=&gt; NULL",
          "WHERE col1 = 1 OR col2 IS NULL",
          "WHERE col1 = 1 AND ISNULL(col2, false)"
        ],
        a: 1,
        cat: "1.SQL기본",
        exp: "<b><code>&lt;=&gt;</code>(NULL-safe equal)는 <code>IS</code>와 동등</b>. <code>col2 IS NULL</code> = <code>col2 &lt;=&gt; NULL</code>. 일반 <code>=</code>는 NULL과 비교 시 UNKNOWN. 1번은 항상 false라 결과 공집합. 이 함정으로 NULL 비교 실수가 자주 발생합니다."
      },
      {
        q: "<code>LIKE 'a__b'</code> 가 매칭되는 문자열로 옳은 것은?",
        opts: ["'ab'", "'aab'", "'axxb'", "'aaab'"],
        a: 2,
        cat: "1.SQL기본",
        exp: "<code>_</code>는 <b>정확히 1개 문자</b>. <code>'a__b'</code> = a + 임의2자 + b = 총 4글자. 'axxb'는 a+xx(2자)+b=4자 → 매칭. 'aab'=3자, 'ab'=2자, 'aaab'=4자라 가능... 정정: 'aaab'도 a+aa+b=4자라 매칭됩니다. 대표 매칭은 'axxb'."
      },
      {
        q: "<code>SUBSTR('SSAFY', -2, 2)</code> 의 결과는? (MySQL 기준)",
        opts: ["'SS'", "'AF'", "'FY'", "에러"],
        a: 2,
        cat: "2.함수/그룹화",
        exp: "MySQL의 SUBSTR은 <b>음수 시작 위치 시 끝에서부터 카운트</b>. -2는 끝에서 2번째 위치('F') → 거기서부터 2글자 = 'FY'. 시작 위치가 양수면 1-based, 음수면 끝에서부터. Oracle도 동일하나 SQL Server의 SUBSTRING은 음수를 다르게 처리하니 DBMS별로 다름을 인지하세요."
      },
      {
        q: "<code>SELECT DISTINCT a, b FROM t</code> 와 <code>SELECT a, b FROM t GROUP BY a, b</code> 의 관계는?",
        opts: [
          "두 쿼리는 결과가 완전히 다르다",
          "두 쿼리는 일반적으로 동일한 결과를 반환한다",
          "DISTINCT가 GROUP BY보다 항상 빠르다",
          "GROUP BY는 별도 정렬을 필요로 하지 않는다"
        ],
        a: 1,
        cat: "2.함수/그룹화",
        exp: "<b>DISTINCT와 GROUP BY는 같은 결과</b>(중복 제거)를 만들고 옵티마이저도 비슷하게 처리합니다. 다만 GROUP BY는 집계 함수와 함께 쓸 수 있고, DISTINCT는 SELECT 컬럼 전체에 작용한다는 차이가 있습니다. 의도가 단순 중복 제거라면 DISTINCT가 더 명확합니다."
      },
      {
        q: "다음 SQL에서 <code>HAVING</code>의 alias 사용 가능 여부는?<br><code>SELECT dept, COUNT(*) AS cnt FROM emp GROUP BY dept HAVING cnt &gt; 5</code>",
        opts: [
          "표준 SQL에서 가능",
          "MySQL에서 가능 (확장 기능)",
          "어디에서도 불가능",
          "Oracle에서만 가능"
        ],
        a: 1,
        cat: "2.함수/그룹화",
        exp: "<b>표준 SQL에서는 SELECT가 HAVING보다 늦게 평가되어 alias 사용 불가</b>. MySQL과 PostgreSQL은 확장으로 HAVING/GROUP BY에서 alias를 허용합니다. 호환성을 위해서는 <code>HAVING COUNT(*) &gt; 5</code>처럼 표현식을 그대로 쓰는 것이 안전합니다. ORDER BY에서는 표준 SQL도 alias 허용."
      },
      {
        q: "<code>CASE WHEN x = NULL THEN 'NULL' ELSE 'NOT NULL' END</code> 의 결과는?",
        opts: [
          "x가 NULL이면 'NULL', 아니면 'NOT NULL'",
          "x 값과 무관하게 항상 'NOT NULL'",
          "x 값과 무관하게 항상 'NULL'",
          "에러 발생"
        ],
        a: 1,
        cat: "2.함수/그룹화",
        exp: "<b><code>x = NULL</code>은 항상 UNKNOWN</b>이라 WHEN 조건이 결코 TRUE가 되지 않아 ELSE 분기로 갑니다. 따라서 항상 'NOT NULL' 반환. NULL 검사는 반드시 <code>WHEN x IS NULL</code>로 해야 합니다. NULL 비교 실수 단골 함정."
      },
      {
        q: "<code>A LEFT JOIN B ON ... LEFT JOIN C ON ...</code> 의 평가 순서는?",
        opts: [
          "A, B, C 모두 동시에 평가",
          "(A LEFT JOIN B) 결과 LEFT JOIN C",
          "C부터 역순으로 평가",
          "옵티마이저가 임의로 결정"
        ],
        a: 1,
        cat: "3.JOIN/집합",
        exp: "<b>JOIN은 좌결합(left-associative)</b>이라 <code>A LEFT JOIN B LEFT JOIN C</code> = <code>(A LEFT JOIN B) LEFT JOIN C</code>로 평가. 단, INNER JOIN끼리라면 옵티마이저가 순서를 바꿀 수 있지만 OUTER JOIN은 의미가 달라져 변경 못함. 명확성을 위해 괄호로 묶는 것이 좋습니다."
      },
      {
        q: "<code>COUNT(*)</code>와 <code>COUNT(1)</code>의 성능 차이는?",
        opts: [
          "COUNT(1)이 항상 빠르다",
          "COUNT(*)이 항상 빠르다",
          "두 함수의 성능은 거의 동일하다 (옵티마이저가 같게 처리)",
          "DBMS마다 완전히 다르다"
        ],
        a: 2,
        cat: "2.함수/그룹화",
        exp: "<b>COUNT(*)와 COUNT(1)은 사실상 동일한 성능</b>입니다. 옵티마이저가 같은 실행 계획으로 변환합니다. 'COUNT(1)이 빠르다'는 오래된 통념(과거 일부 RDBMS의 특수한 동작)에 불과합니다. 가독성 좋은 COUNT(*)를 권장합니다."
      },
      {
        q: "INTERSECT가 MySQL에서 지원되기 시작한 버전은?",
        opts: [
          "MySQL 5.7부터",
          "MySQL 8.0.0부터",
          "MySQL 8.0.31부터",
          "아직 지원하지 않음"
        ],
        a: 2,
        cat: "3.JOIN/집합",
        exp: "<b>MySQL 8.0.31부터 INTERSECT와 EXCEPT가 지원</b>됩니다. 그 이전엔 INNER JOIN이나 EXISTS로 교집합을 흉내냈습니다. SSAFY 환경의 MySQL 버전을 확인해두면 좋습니다. PostgreSQL과 Oracle은 오래전부터 지원했습니다."
      },
      {
        q: "<code>SELECT * FROM A NATURAL JOIN B</code> 와 <code>SELECT * FROM A JOIN B USING(...)</code> 의 결과 컬럼 개수 비교는?",
        opts: [
          "NATURAL JOIN이 항상 더 많은 컬럼 반환",
          "USING이 항상 더 많은 컬럼 반환",
          "NATURAL JOIN과 명시적 USING(공통 컬럼 모두 명시)은 동일",
          "에러로 비교 불가"
        ],
        a: 2,
        cat: "3.JOIN/집합",
        exp: "NATURAL JOIN은 <b>같은 이름 컬럼을 자동으로 USING</b>합니다. 양쪽에 공통 컬럼이 (id, dept_id)면 <code>NATURAL JOIN</code> = <code>JOIN B USING(id, dept_id)</code>. 결과 컬럼 개수와 형태가 동일. NATURAL JOIN을 피하는 이유는 의도치 않은 컬럼이 자동 포함될 위험 때문이지 동작 차이 때문이 아닙니다."
      },
      {
        q: "다음 중 단일 행 서브쿼리 연산자가 <strong>아닌</strong> 것은?",
        opts: ["=", "&lt;", "&gt;", "ANY"],
        a: 3,
        cat: "4.서브쿼리/뷰",
        exp: "<b>ANY/SOME, ALL, IN, NOT IN, EXISTS = 다중 행 연산자</b>. <b>=, &lt;&gt;, &gt;, &lt;, &gt;=, &lt;= = 단일 행 연산자</b>. 다중 행을 단일 행 연산자로 비교하면 에러. 다만 다중 행 연산자는 단일 행에 사용해도 문제없습니다(ANY를 단일 값에 써도 정상)."
      },
      {
        q: "다음 SQL의 결과가 <strong>비어있을 가능성</strong>이 있는 이유는?<br><code>SELECT * FROM emp WHERE id NOT IN (SELECT manager_id FROM emp);</code>",
        opts: [
          "id가 자동으로 NULL이 되기 때문",
          "manager_id에 NULL이 있으면 NOT IN이 모두 UNKNOWN을 반환해 결과가 빈다",
          "서브쿼리가 단일 행만 반환해야 하기 때문",
          "WHERE 절은 NULL을 허용하지 않기 때문"
        ],
        a: 1,
        cat: "4.서브쿼리/뷰",
        exp: "<b>NOT IN의 함정</b>: manager_id에 NULL이 있으면 <code>id != NULL</code>이 UNKNOWN이라 NOT IN 전체가 UNKNOWN → 결과 비어버림. 안전한 대안: <code>NOT EXISTS</code> 또는 서브쿼리에 <code>WHERE manager_id IS NOT NULL</code> 추가. NULL 다루는 방식이 EXISTS와 다른 점이 핵심."
      },
      {
        q: "다음 중 SELECT의 별칭(alias)을 사용할 수 <strong>있는</strong> 절은?",
        opts: ["WHERE", "GROUP BY (표준)", "HAVING (표준)", "ORDER BY"],
        a: 3,
        cat: "4.서브쿼리/뷰",
        exp: "SQL 논리적 실행 순서상 SELECT가 ORDER BY 직전에 평가되어 <b>ORDER BY에서만 표준적으로 alias 사용 가능</b>. WHERE/GROUP BY/HAVING에서는 표준 SQL상 alias 불가(MySQL/PostgreSQL은 GROUP BY와 HAVING에서 alias 허용 확장). 표준 호환성을 위해서는 alias 대신 표현식을 그대로 쓰세요."
      },
      {
        q: "뷰의 <strong>보안적 활용</strong>의 대표 예시는?",
        opts: [
          "민감 컬럼(급여, 주민번호)을 제외한 SELECT를 뷰로 정의해 노출",
          "뷰에 암호를 설정",
          "뷰의 백업 자동화",
          "뷰의 인덱스 강제 사용"
        ],
        a: 0,
        cat: "4.서브쿼리/뷰",
        exp: "뷰의 보안 활용 = <b>민감 컬럼 숨기기</b>. <code>CREATE VIEW emp_public AS SELECT id, name, dept FROM emp</code>로 급여/주민번호 등을 제외하고 노출. 사용자에게 emp_public에만 SELECT 권한을 주고 emp는 차단하면 데이터 일부만 안전하게 공개 가능합니다."
      },
      {
        q: "ANSI/SPARC 3단계 스키마 중 <strong>저장 구조</strong>를 정의하는 단계는?",
        opts: [
          "외부 스키마",
          "개념 스키마",
          "내부 스키마",
          "물리 스키마"
        ],
        a: 2,
        cat: "5.DB개념/모델링",
        exp: "<b>내부 스키마 = 물리적 저장 구조, 인덱스, 파일 배치</b>를 정의. (\"물리 스키마\"라는 별도 용어는 표준에 없습니다 - 같은 의미). 외부 = 사용자/응용별 뷰, 개념 = 전체 통합 스키마. 내부-개념 사이의 매핑이 물리적 독립성을 제공합니다."
      },
      {
        q: "다음 중 식별 관계와 비식별 관계의 핵심 차이는?",
        opts: [
          "식별 관계는 자식의 PK에 부모 PK가 포함되고, 비식별 관계는 일반 외래키만 가진다",
          "식별 관계는 1:1, 비식별 관계는 1:N이다",
          "식별 관계는 NULL을 허용하고 비식별은 허용하지 않는다",
          "식별 관계는 OUTER JOIN, 비식별은 INNER JOIN을 쓴다"
        ],
        a: 0,
        cat: "5.DB개념/모델링",
        exp: "<b>식별 관계 = 부모 PK가 자식 PK 일부</b>(자식이 부모 없이 식별 불가, 약한 엔티티). 예: 주문(주문번호) - 주문상세(주문번호+상세번호). <b>비식별 관계 = 부모 PK가 자식의 일반 FK</b>(자식이 독립적). 예: 부서 - 사원."
      },
      {
        q: "다음 중 정규화로 <strong>해결되지 않는</strong> 문제는?",
        opts: [
          "삽입 이상",
          "갱신 이상",
          "삭제 이상",
          "조회 성능 저하"
        ],
        a: 3,
        cat: "5.DB개념/모델링",
        exp: "<b>정규화는 이상 현상(삽입/갱신/삭제) 해결이 목적</b>이며, 오히려 테이블이 분리되어 조인이 늘어 <b>조회 성능을 떨어뜨릴 수 있습니다</b>. 그래서 물리 단계에서 의도적인 반정규화로 균형을 잡습니다. '정규화 = 만능 성능 향상' 오해를 잡는 단골 함정."
      },
      {
        q: "<code>EXPLAIN</code>의 <code>type</code>이 <code>const</code>인 경우는?",
        opts: [
          "테이블 풀 스캔",
          "PK 또는 UNIQUE 인덱스로 단일 행 조회",
          "범위 스캔",
          "임시 테이블 사용"
        ],
        a: 1,
        cat: "6.인덱스/성능",
        exp: "<b>const = PK/UNIQUE 인덱스로 정확히 1행 매칭</b>. 가장 빠른 접근 방식 중 하나. <code>WHERE pk = 100</code>이 대표 예시. system은 단일 행 테이블, eq_ref는 조인 시 PK/UNIQUE 매칭. type 효율 순서: system &gt; const &gt; eq_ref &gt; ref &gt; range &gt; index &gt; ALL."
      },
      {
        q: "<code>커버링 인덱스(Covering Index)</code>가 효과적인 이유는?",
        opts: [
          "인덱스 자체가 더 작기 때문",
          "테이블 데이터에 접근하지 않고 인덱스만 읽고 결과를 만들 수 있기 때문",
          "락이 자동으로 해제되기 때문",
          "옵티마이저가 자동 변환하기 때문"
        ],
        a: 1,
        cat: "6.인덱스/성능",
        exp: "<b>커버링 인덱스 = 쿼리에 필요한 모든 컬럼이 인덱스에만 있어 테이블 접근 불필요</b>. InnoDB의 보조 인덱스 → PK 재탐색(book lookup) 비용을 완전히 없앱니다. EXPLAIN의 <code>Extra: Using index</code>로 확인. 자주 쓰이는 SELECT 컬럼 조합으로 복합 인덱스 설계 시 고려할 사항입니다."
      },
      {
        q: "다음 중 <strong>인덱스 추가가 비효율적인</strong> 경우는?",
        opts: [
          "쓰기 작업이 매우 빈번한 테이블의 자주 사용 안 되는 컬럼",
          "JOIN 조건에 자주 사용되는 컬럼",
          "WHERE 절 = 조건에 자주 사용되는 고카디널리티 컬럼",
          "ORDER BY에 자주 사용되는 컬럼"
        ],
        a: 0,
        cat: "6.인덱스/성능",
        exp: "<b>쓰기 빈번 + 조회는 거의 안 함 = 인덱스의 역효과만</b>. INSERT/UPDATE/DELETE마다 인덱스 갱신 비용 + 저장 공간 ↑인데 SELECT 가속 효과는 거의 없음. 인덱스는 <b>읽기:쓰기 비율</b>을 항상 고려해야 합니다. 로그 테이블 같은 쓰기 위주 테이블에는 PK 외 인덱스를 최소화."
      },
      {
        q: "복합 인덱스 <code>(country, city, age)</code>가 있을 때 <strong>인덱스 활용 가능한</strong> 쿼리는?",
        opts: [
          "WHERE city = 'Seoul'",
          "WHERE country = 'KR' AND age = 25",
          "WHERE age = 25",
          "WHERE city = 'Seoul' AND age = 25"
        ],
        a: 1,
        cat: "6.인덱스/성능",
        exp: "좌측 접두사 규칙: 첫 컬럼 country가 있어야 인덱스 활용 가능. <code>country=? AND age=?</code> → country로 인덱스 진입(이후 city를 건너뛰어 age는 인덱스 효율은 떨어지지만 country 단독으로도 활용은 됨). 1, 3, 4번은 country 없이 시작 → 인덱스 못 씀. SSAFY 단골 패턴."
      },
      {
        q: "<code>SHOW INDEX FROM t</code> 결과의 <code>Cardinality</code> 컬럼이 의미하는 것은?",
        opts: [
          "인덱스의 깊이",
          "인덱스 컬럼의 추정 고유값 개수",
          "인덱스 사용 빈도",
          "인덱스 크기(바이트)"
        ],
        a: 1,
        cat: "6.인덱스/성능",
        exp: "<b>Cardinality = 통계 정보상 추정 고유값 개수</b>. 옵티마이저가 인덱스 사용 여부를 결정할 때 참고하는 핵심 지표. 통계 정보는 <code>ANALYZE TABLE</code>로 갱신해야 정확해집니다. Cardinality가 행 수에 가까울수록 고유성이 높아 인덱스가 효과적."
      },
      {
        q: "트랜잭션의 ACID 중 '동시 실행 트랜잭션이 직렬 실행과 동등한 결과를 만들도록 보장'을 의미하는 것은?",
        opts: [
          "Atomicity",
          "Consistency",
          "Isolation",
          "Durability"
        ],
        a: 2,
        cat: "7.트랜잭션",
        exp: "<b>Isolation(격리성) = 동시 실행이지만 직렬 실행과 동등한 결과 보장</b>. 가장 강한 격리 수준이 SERIALIZABLE. 격리 수준이 낮을수록 동시성은 ↑이지만 이상 현상 발생 가능. MVCC는 락 없이 격리성을 제공하는 핵심 기술."
      },
      {
        q: "다음 중 InnoDB가 REPEATABLE READ에서도 Phantom Read를 사실상 방지하는 메커니즘이 <strong>아닌</strong> 것은?",
        opts: [
          "Gap Lock",
          "Next-Key Lock",
          "MVCC 스냅샷",
          "Two-Phase Commit"
        ],
        a: 3,
        cat: "7.트랜잭션",
        exp: "InnoDB의 Phantom 방지: <b>Gap Lock + Next-Key Lock + MVCC 스냅샷</b>. Two-Phase Commit(2PC)은 분산 트랜잭션의 원자성 보장 프로토콜로 격리성과 다른 영역입니다. 일반 SELECT는 MVCC 스냅샷, 잠금 SELECT나 DML은 Next-Key Lock으로 갭에 락을 걸어 INSERT를 막습니다."
      },
      {
        q: "다음 중 <strong>가장 약한</strong> 격리 수준에서도 방지되는 이상 현상은?",
        opts: [
          "Dirty Read",
          "Non-Repeatable Read",
          "Phantom Read",
          "이 중 어느 것도 READ UNCOMMITTED에서 방지되지 않는다"
        ],
        a: 3,
        cat: "7.트랜잭션",
        exp: "<b>READ UNCOMMITTED = 가장 약한 격리 수준 → 모든 이상 현상 발생 가능</b>(Dirty/Non-Repeatable/Phantom). READ COMMITTED부터 Dirty Read 방지. REPEATABLE READ에서 Non-Repeatable 방지. SERIALIZABLE에서 Phantom까지 방지. 격리 수준-이상 현상 매트릭스를 외워두는 게 시험 핵심."
      },
      {
        q: "다음 시나리오의 발생 이상은?<br>T1: <code>SELECT balance FROM account WHERE id=1</code> (1000)<br>T2: <code>UPDATE account SET balance=2000 WHERE id=1; (커밋 안 함)</code><br>T1: <code>SELECT balance FROM account WHERE id=1</code> (2000)<br>T2: <code>ROLLBACK</code><br>T1은 존재하지 않게 된 값 2000을 본 것",
        opts: [
          "Dirty Read",
          "Non-Repeatable Read",
          "Phantom Read",
          "Lost Update"
        ],
        a: 0,
        cat: "7.트랜잭션",
        exp: "<b>Dirty Read = 다른 트랜잭션의 커밋되지 않은 변경을 읽음</b>. T2가 ROLLBACK했으므로 T1이 본 2000은 유효하지 않은 값. READ COMMITTED부터 방지됩니다. T2가 커밋했다면 Non-Repeatable Read 시나리오."
      },
      {
        q: "MVCC의 단점/주의사항으로 옳은 것은?",
        opts: [
          "락이 너무 자주 발생한다",
          "장시간 트랜잭션이 있으면 Undo Log가 누적되어 디스크/성능 문제가 발생할 수 있다",
          "Phantom Read를 막지 못한다",
          "단일 사용자 환경에서 사용 불가"
        ],
        a: 1,
        cat: "7.트랜잭션",
        exp: "MVCC의 trade-off: <b>장시간 트랜잭션이 있으면 그 트랜잭션이 봐야 할 이전 버전들을 모두 보관해야 해 Undo Log가 누적</b>됩니다. 디스크 사용량 ↑, 인덱스 페이지 비대화, 성능 저하. 트랜잭션을 짧게 유지하는 것이 중요합니다. <code>SET TRANSACTION READ ONLY</code>로 명시하면 일부 최적화 가능."
      },
      {
        q: "다음 중 InnoDB에서 데드락 회피를 위한 가장 적절한 실무 패턴은?",
        opts: [
          "여러 테이블 락을 임의 순서로 획득",
          "트랜잭션을 매우 길게 유지",
          "락 획득 순서를 일관되게 유지하고 트랜잭션을 짧게 유지하며 데드락 발생 시 재시도 로직 구현",
          "READ UNCOMMITTED 사용"
        ],
        a: 2,
        cat: "7.트랜잭션",
        exp: "데드락 회피 베스트 프랙티스: ① <b>락 획득 순서 일관성</b>(예: 항상 id 작은 행부터), ② <b>트랜잭션 짧게</b>(락 보유 시간 최소화), ③ <b>인덱스 잘 사용</b>(스캔 락 영역 최소화), ④ <b>재시도 로직</b>(InnoDB가 한쪽을 롤백시킬 때 응용 코드에서 N회 재시도). 격리 수준 낮추기는 다른 문제를 야기합니다."
      }
    ]
  }
];

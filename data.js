// ============================================================
// 4·5세대 대표곡 뮤비 월드컵 후보 데이터 (v1)
// ============================================================
// 이 배열 안의 항목을 자유롭게 추가 / 삭제 / 수정하세요.
// 앱 로직(script.js)은 절대 건드릴 필요 없이, 이 파일만 고치면 됩니다.
//
// [필드 설명]
//   id        : 다른 항목과 겹치지 않는 고유 값
//   name      : 화면에 표시될 이름 (그룹명)
//   group     : 데뷔년도 (표시용)
//   song      : 곡 제목 (표시용)
//   gender    : "female"(여돌) 또는 "male"(남돌) — 이 값으로 구분합니다
//   youtubeId : 유튜브 영상 주소의 v= 뒤에 오는 11자리 코드
//   start     : 영상이 몇 초부터 재생될지 (기본 0)
//
// 사용자가 지정한 여돌 16팀(4세대 10팀 + 5세대 6팀) · 남돌 16팀(4세대 6팀 + 5세대 10팀),
// 팀당 대표곡 2곡 = 총 64곡으로 구성했습니다.
// 전부 공식 뮤직비디오(official MV) 기준으로 채웠고, 각 영상은 유튜브 oEmbed로
// title/author_name이 실제 그룹·곡과 일치하는지 확인했습니다.
// 예외(정식 MV가 없어 다른 영상으로 대체한 경우)는 항목 끝 주석에 표시했습니다.
// ============================================================

const CANDIDATES = [
  // ---- 여돌 (female) — 16팀 · 32곡 ----
  // -- 4세대 (10팀) --
  { id: "f27", name: "(여자)아이들 ((G)I-DLE)", group: "2018년 데뷔", song: "퀸카 (Queencard)", gender: "female", youtubeId: "7HDeem-JaSY", start: 0 },
  { id: "f28", name: "(여자)아이들 ((G)I-DLE)", group: "2018년 데뷔", song: "TOMBOY", gender: "female", youtubeId: "Jh4QFaPmdss", start: 0 },
  { id: "f01", name: "ITZY (있지)", group: "2019년 데뷔", song: "WANNABE", gender: "female", youtubeId: "fE2h3lGlOsk", start: 0 },
  { id: "f02", name: "ITZY (있지)", group: "2019년 데뷔", song: "SNEAKERS", gender: "female", youtubeId: "Hbb5GPxXF1w", start: 0 },
  { id: "f03", name: "aespa", group: "2020년 데뷔", song: "Supernova", gender: "female", youtubeId: "phuiiNCxRMg", start: 0 },
  { id: "f04", name: "aespa", group: "2020년 데뷔", song: "Next Level", gender: "female", youtubeId: "4TWR90KJl84", start: 0 },
  { id: "f05", name: "STAYC", group: "2020년 데뷔", song: "ASAP", gender: "female", youtubeId: "NsY-9MCOIAQ", start: 0 },
  { id: "f06", name: "STAYC", group: "2020년 데뷔", song: "Teddy Bear", gender: "female", youtubeId: "SxHmoifp0oQ", start: 0 },
  { id: "f07", name: "IVE", group: "2021년 데뷔", song: "LOVE DIVE", gender: "female", youtubeId: "Y8JFxS1HlDo", start: 0 },
  { id: "f08", name: "IVE", group: "2021년 데뷔", song: "I AM", gender: "female", youtubeId: "6ZUIwj3FgUY", start: 0 },
  { id: "f09", name: "NewJeans", group: "2022년 데뷔", song: "Ditto", gender: "female", youtubeId: "pSUydWEqKwE", start: 0 },
  { id: "f10", name: "NewJeans", group: "2022년 데뷔", song: "Super Shy", gender: "female", youtubeId: "ArmDp-zijuc", start: 0 },
  { id: "f11", name: "LE SSERAFIM", group: "2022년 데뷔", song: "ANTIFRAGILE", gender: "female", youtubeId: "pyf8cbqyfPs", start: 0 },
  { id: "f12", name: "LE SSERAFIM", group: "2022년 데뷔", song: "Perfect Night", gender: "female", youtubeId: "hLvWy2b857I", start: 0 },
  { id: "f13", name: "NMIXX", group: "2022년 데뷔", song: "Love Me Like This", gender: "female", youtubeId: "EDnwWcFpObo", start: 0 },
  { id: "f14", name: "NMIXX", group: "2022년 데뷔", song: "DICE", gender: "female", youtubeId: "p1bjnyDqI9k", start: 0 },
  { id: "f15", name: "FIFTY FIFTY", group: "2022년 데뷔", song: "Cupid", gender: "female", youtubeId: "Qc7_zRjH808", start: 0 },
  { id: "f16", name: "FIFTY FIFTY", group: "2022년 데뷔", song: "Lovin' Me", gender: "female", youtubeId: "4PnFuEbzxos", start: 0 },
  { id: "f29", name: "fromis_9 (프로미스나인)", group: "2018년 데뷔", song: "DM", gender: "female", youtubeId: "4gXmClk8rKI", start: 0 },
  { id: "f30", name: "fromis_9 (프로미스나인)", group: "2018년 데뷔", song: "Supersonic", gender: "female", youtubeId: "0LiQp7y8Wwc", start: 0 },
  // -- 5세대 (6팀) --
  { id: "f17", name: "ILLIT", group: "2024년 데뷔", song: "NOT CUTE ANYMORE", gender: "female", youtubeId: "x_RYZsOfpKY", start: 0 },
  { id: "f18", name: "ILLIT", group: "2024년 데뷔", song: "Cherish (My Love)", gender: "female", youtubeId: "tbDGl7jEazA", start: 0 },
  { id: "f19", name: "BABYMONSTER", group: "2023년 데뷔", song: "SHEESH", gender: "female", youtubeId: "2wA_b6YHjqQ", start: 0 },
  { id: "f20", name: "BABYMONSTER", group: "2023년 데뷔", song: "DRIP", gender: "female", youtubeId: "Zp-Jhuhq0bQ", start: 0 },
  { id: "f21", name: "Hearts2Hearts (하츠투하츠)", group: "2025년 데뷔", song: "RUDE!", gender: "female", youtubeId: "F7sGJVUrkjQ", start: 0 },
  { id: "f22", name: "Hearts2Hearts (하츠투하츠)", group: "2025년 데뷔", song: "STYLE", gender: "female", youtubeId: "n7kFRxFIPrI", start: 0 },
  { id: "f23", name: "KiiiKiii (키키)", group: "2025년 데뷔", song: "404 (New Era)", gender: "female", youtubeId: "zhHB4dZTChw", start: 0 },
  { id: "f24", name: "KiiiKiii (키키)", group: "2025년 데뷔", song: "DANCING ALONE", gender: "female", youtubeId: "u5wMLWs6LSs", start: 0 },
  { id: "f25", name: "MEOVV (미야오)", group: "2024년 데뷔", song: "HANDS UP", gender: "female", youtubeId: "sL0pCS6K9bc", start: 0 },
  { id: "f26", name: "MEOVV (미야오)", group: "2024년 데뷔", song: "BURNING UP", gender: "female", youtubeId: "hlULtigNNao", start: 0 },
  { id: "f31", name: "리센느 (RESCENE)", group: "2024년 데뷔", song: "LOVE ATTACK", gender: "female", youtubeId: "9XttLI0oH0I", start: 0 },
  { id: "f32", name: "리센느 (RESCENE)", group: "2024년 데뷔", song: "Deja Vu", gender: "female", youtubeId: "ZbO9PBdFRdc", start: 0 },

  // ---- 남돌 (male) — 16팀 · 32곡 ----
  // -- 4세대 (6팀) --
  { id: "m01", name: "Stray Kids", group: "2018년 데뷔", song: "Chk Chk Boom", gender: "male", youtubeId: "0P0aQreFs8w", start: 0 },
  { id: "m02", name: "Stray Kids", group: "2018년 데뷔", song: "MANIAC", gender: "male", youtubeId: "OvioeS1ZZ7o", start: 0 },
  { id: "m03", name: "ATEEZ", group: "2018년 데뷔", song: "BOUNCY (K-HOT CHILI PEPPERS)", gender: "male", youtubeId: "U0G5OA6ZH5w", start: 0 },
  { id: "m04", name: "ATEEZ", group: "2018년 데뷔", song: "BAD", gender: "male", youtubeId: "-q_S27LbNKU", start: 0 },
  { id: "m05", name: "TXT (투모로우바이투게더)", group: "2019년 데뷔", song: "0X1=LOVESONG (I Know I Love You)", gender: "male", youtubeId: "d5bbqKYu51w", start: 0 },
  { id: "m06", name: "TXT (투모로우바이투게더)", group: "2019년 데뷔", song: "Sugar Rush Ride", gender: "male", youtubeId: "P9tKTxbgdkk", start: 0 },
  { id: "m07", name: "ENHYPEN", group: "2020년 데뷔", song: "Bite Me", gender: "male", youtubeId: "wXFLzODIdUI", start: 0 },
  { id: "m08", name: "ENHYPEN", group: "2020년 데뷔", song: "Drunk-Dazed", gender: "male", youtubeId: "Fc7-Oe0tj5k", start: 0 },
  { id: "m09", name: "P1Harmony (피원하모니)", group: "2020년 데뷔", song: "때깔 (Killin' It)", gender: "male", youtubeId: "FlNxa-XD11U", start: 0 },
  { id: "m10", name: "P1Harmony (피원하모니)", group: "2020년 데뷔", song: "SAD SONG", gender: "male", youtubeId: "uHJDposrTMw", start: 0 }, // 기존 링크(so7sEFjpEJI)는 쇼츠였음 — 정식 MV로 교체
  { id: "m11", name: "TREASURE", group: "2020년 데뷔", song: "HELLO", gender: "male", youtubeId: "aPd9exmH17o", start: 0 },
  { id: "m12", name: "TREASURE", group: "2020년 데뷔", song: "JIKJIN (직진)", gender: "male", youtubeId: "ZJaKdBBzUYk", start: 0 },
  // -- 5세대 (10팀) --
  { id: "m13", name: "ZEROBASEONE", group: "2023년 데뷔", song: "ICONIK", gender: "male", youtubeId: "HnYtDIW7elY", start: 0 },
  { id: "m14", name: "ZEROBASEONE", group: "2023년 데뷔", song: "GOOD SO BAD", gender: "male", youtubeId: "V5ACuj_jOnc", start: 0 },
  { id: "m15", name: "RIIZE", group: "2023년 데뷔", song: "Love 119", gender: "male", youtubeId: "0TAAUWHo4Ec", start: 0 },
  { id: "m16", name: "RIIZE", group: "2023년 데뷔", song: "Boom Boom Bass", gender: "male", youtubeId: "78lNnCitcBM", start: 0 },
  { id: "m17", name: "BOYNEXTDOOR", group: "2023년 데뷔", song: "오늘만 I LOVE YOU (If I Say, I Love You)", gender: "male", youtubeId: "B4mLKcVIERs", start: 0 },
  { id: "m18", name: "BOYNEXTDOOR", group: "2023년 데뷔", song: "Earth, Wind & Fire", gender: "male", youtubeId: "u9nP3qXQA4o", start: 0 },
  { id: "m19", name: "TWS (투어스)", group: "2024년 데뷔", song: "내가 S면 넌 나의 N이 되어줘 (If I'm S, Can You Be My N?)", gender: "male", youtubeId: "NRgZuuwD2WY", start: 0 },
  { id: "m20", name: "TWS (투어스)", group: "2024년 데뷔", song: "OVERDRIVE", gender: "male", youtubeId: "TzbGBkEh9ms", start: 0 },
  { id: "m21", name: "NCT WISH", group: "2024년 데뷔", song: "Ode to Love", gender: "male", youtubeId: "1o5O2YvV3HU", start: 0 },
  { id: "m22", name: "NCT WISH", group: "2024년 데뷔", song: "Steady", gender: "male", youtubeId: "IKlkZZv76Ho", start: 0 },
  { id: "m23", name: "PLAVE (플레이브)", group: "2023년 데뷔", song: "WAY 4 LUV", gender: "male", youtubeId: "Ms6EOeh0NWg", start: 0 },
  { id: "m24", name: "PLAVE (플레이브)", group: "2023년 데뷔", song: "Dash", gender: "male", youtubeId: "b3GoZMfHJT4", start: 0 },
  { id: "m25", name: "ALPHA DRIVE ONE (알파드라이브원)", group: "2026년 데뷔", song: "OMG!", gender: "male", youtubeId: "cBfYIb1w1iw", start: 0 },
  { id: "m26", name: "ALPHA DRIVE ONE (알파드라이브원)", group: "2026년 데뷔", song: "BORN DIRE", gender: "male", youtubeId: "g9Q58A_k-HU", start: 0 },
  { id: "m27", name: "KickFlip (킥플립)", group: "2025년 데뷔", song: "응 그래 (Umm Great)", gender: "male", youtubeId: "L__ITOj-g8E", start: 0 },
  { id: "m28", name: "KickFlip (킥플립)", group: "2025년 데뷔", song: "처음 불러보는 노래", gender: "male", youtubeId: "eebhl4lGv_Y", start: 0 },
  { id: "m29", name: "&TEAM", group: "2022년 데뷔", song: "FIREWORK", gender: "male", youtubeId: "uY-lOn0XwBg", start: 0 },
  { id: "m30", name: "&TEAM", group: "2022년 데뷔", song: "Back to Life", gender: "male", youtubeId: "KqE0P1qMtQg", start: 0 },
  { id: "m31", name: "CORTIS (코르티스)", group: "2025년 데뷔", song: "REDRED", gender: "male", youtubeId: "U6BDbXIah-Y", start: 0 },
  { id: "m32", name: "CORTIS (코르티스)", group: "2025년 데뷔", song: "GO!", gender: "male", youtubeId: "WXS-o57VJ5w", start: 0 },
];

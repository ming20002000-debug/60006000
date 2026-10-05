# 4·5세대 대표곡 뮤비 월드컵 (여돌 vs 남돌)

4세대·5세대 여자 아이돌 대표곡 공식 뮤직비디오 vs 남자 아이돌 대표곡 공식 뮤직비디오로 진행되는 개인용 이상형 월드컵입니다.
순수 HTML/CSS/JS로만 만들어져 있어서 별도 설치 없이 GitHub Pages에 바로 올릴 수 있습니다.

## 파일 구성

```
index.html   화면 구조
style.css    디자인
config.js    사이트 제목 / 선택 가능한 강수 설정
data.js      후보(곡) 데이터  ← 보통 이 파일만 수정하면 됩니다
script.js    토너먼트 진행 로직 (건드릴 필요 없음)
```

## 후보 데이터 수정하기 (`data.js`)

`data.js`를 열면 아래와 같은 형태의 배열이 있습니다.

```js
{ id: "f01", name: "ITZY (있지)", group: "4세대 · 2019.02 데뷔", song: "WANNABE", gender: "female", youtubeId: "fE2h3lGlOsk", start: 0 },
```

| 필드 | 설명 |
|---|---|
| `id` | 다른 항목과 겹치지 않는 고유 값 |
| `name` | 화면에 표시될 이름 (그룹명) |
| `group` | 세대 · 데뷔년월 (표시용) |
| `song` | 곡 제목 (표시용) |
| `gender` | `"female"`(여돌) 또는 `"male"`(남돌) — 이 값으로 구분합니다 |
| `youtubeId` | 유튜브 영상 주소의 `v=` 뒤에 오는 11자리 코드 |
| `start` | 영상이 몇 초부터 재생될지 |

## 현재 들어있는 데이터

- 여돌 16팀(4세대 10팀 + 5세대 6팀) · 남돌 16팀(4세대 6팀 + 5세대 10팀), 팀당 대표곡 2곡 — 총 64곡
- 전부 **공식 뮤직비디오(official MV)** 기준으로 채웠습니다. 댄스 챌린지 숏츠나 퍼포먼스 영상이 아닙니다.
- 모든 영상은 유튜브 oEmbed(`title`/`author_name`)로 실제 그룹·곡과 일치하는지 확인한 뒤 넣었습니다.
- TREASURE는 "DARARI"(정식 MV 없음) 대신 "HELLO"로 교체해서 넣었습니다.
- P1Harmony "SAD SONG"은 기존 링크가 쇼츠(Shorts)로 확인되어 정식 MV 링크로 교체했습니다.
- 참고로 확인된 사항들:
  - BOYNEXTDOOR "오늘만 I LOVE YOU"의 영어 부제는 "If I Say, I Love You"입니다.
  - TWS "내가 S면 넌 나의 N이 되어줘"의 영어 부제는 "If I'm S, Can You Be My N?"입니다.
  - ALPHA DRIVE ONE·KickFlip·izna·MEOVV·tripleS·CORTIS는 모두 2023~2026년 사이에 데뷔한 신생 그룹으로, 소속사/데뷔일을 직접 검색해 확인했습니다 (예: izna는 MODHAUS가 아니라 WakeOne 소속).

## 설정 바꾸기 (`config.js`)

- `siteTitle`, `siteSubtitle` : 제목/부제목 문구
- `roundOptions` : 시작 화면에서 고를 수 있는 강수 목록 (기본 8/16/32/64)
- `defaultRound` : 시작 화면에 기본으로 선택되어 있는 강수

## 대결 매칭 방식

- 강수를 선택하면 후보 데이터 중 여돌/남돌 그룹에서 정확히 절반씩 무작위로 뽑아 대진을 만듭니다.
- 매 라운드마다 여돌 vs 남돌 매칭을 최대한 만들고, 인원이 안 맞을 경우에만 동성끼리 대결합니다. 홀수로 남으면 한 팀은 자동으로 다음 라운드에 진출합니다(부전승).
- 여돌 vs 남돌 매칭에서는 항상 화면 왼쪽 = 여돌, 오른쪽 = 남돌로 고정됩니다.

## GitHub Pages로 배포하기

1. 이 폴더 전체를 새 GitHub 저장소에 올립니다(push).
2. 저장소의 **Settings → Pages**로 들어갑니다.
3. **Branch**를 배포할 브랜치(보통 `main`)와 루트 폴더(`/`)로 지정하고 저장합니다.
4. 잠시 후 `https://<계정이름>.github.io/<저장소이름>/` 주소로 접속하면 바로 사용할 수 있습니다.

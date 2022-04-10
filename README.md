# payhere

Github API를 이용하여 등록한 Public Repository의 issue들을 모아서 보는 뷰어를 구현하는 프로젝트입니다.

### 📎 &nbsp;[과제 확인하러 가기](https://clever-kepler-a84405.netlify.app/)

### <br/>

###

## View

![payhere_view](https://user-images.githubusercontent.com/48751435/155750461-4504769d-3697-461b-b12f-7db291477cbf.gif)

### <br/>

###

## Implement

### Stack

`Javascript` `React` `Recoil` `Styled-Components`

### Features

- [x] Repository 검색창 구현
- [x] 검색 시 Skeleton 구현
- [x] Repository 등록 구현
- [x] Repository 등록을 최대 4개로 제한
- [x] 중복된 Repository 등록 제한
- [x] 등록한 Repository issue를 모아 볼 수 있는 뷰어 구현
- [x] 등록한 Repository 삭제 구현
- [x] Pagenation 구현

## Improvement

### Rendering optimization

React.memo를 사용하여 search input의 변화가 있을 때에만 렌더링이 일어나도록 최적화
![payhere_view](https://user-images.githubusercontent.com/48751435/155750461-4504769d-3697-461b-b12f-7db291477cbf.gif)

### UX/UI improvement

1. 사용자의 검색 방법 개선을 위하여 검색 버튼에서 디바운스를 이용한 검색으로 개선
2. 데이터를 가져오는 동안의 사용자의 화면을 개선하기 위해 로딩 적용 후 Skeleton으로 추가 개선

### <br/>

###

## Directory

```
├── public/
├── src/
│   ├── components/                   - page components
│   ├── recoil/                       - state 저장 및 관리
│   └── pages/                        - main page
│
├── App.js                            - 분리한 page components를 randering
├── index.js                          - entry point
├── README.md                         - 리드미(프리뷰, 배포링크, 코드컨벤션)
└── package.json                      - 사용 package 목록
```

### <br/>

###

## Code Convention

### Getting Started

1. `clone` the repository,

```
$ git clone "https://github.com/sareum-k/payhere.git"
```

2. `Install` dependencies,

```
$ npm install
```

3. `Setting` prettier,

```
$ npx prettier --write .
```

4. `start` the project,

```
$ npm start
```

### Commit Emoji

|   emoji    | commit message |       when to use it        |
| :--------: | :------------: | :-------------------------: |
|   :tada:   |     Start      |        프로젝트 시작        |
| :sparkles: |      Feat      |      새로운 기능 추가       |
|   :bug:    |      Fix       |          버그 수정          |
| :recycle:  |    Refactor    |        코드 리팩터링        |
| :lipstick: |     Style      |   스타일 추가 및 업데이트   |
| :package:  |     Chore      |   패키지 추가 및 업데이트   |
|  :books:   |      Docs      | 그 외 문서 추가 및 업데이트 |

### <br/>

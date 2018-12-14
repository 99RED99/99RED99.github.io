---
layout: post
title: SHAREMIND learnplayer DOCUMENT
date: 2018-09-10 21:00:00
tags: player EOSF videojs responsive
author: red
---

<style>
    main {max-width: 1024px !important;}
</style>

## 개요

learnplayer 는 오픈소스인 videojs 를 기반으로 하는 학습형 확장 플레이어입니다.<br/>
버전 1.0.0 의 최초 배포일(18.09.11.)을 기점으로 videojs 7.1.0 을 기초한 플러그인 타입으로 개발되었으며
기능 및 제공 범위는 videojs 에 종속적입니다.

> **note :** videojs <a href="https://videojs.com/">link</a>

## 버전별 다운로드

- v1.0.11 (18.12.14) <a href="/assets/learnplayer/dest/learnplayer.v1.0.11.zip" target="_blank">link</a>

  - 설정 > 북마크 항목 수정시에 전달되는 bookmarks.extraFunctions.modify 로 전달되는 수정정보에 키값 누락되는 오류 수정
  - 설정 > 플레이어 정보 노출되는 텍스트 수정
  - 설정 > 북마크 항목 추가시 지정한 북마크 영역 재생하는 기능 취소 처리


- v1.0.10 (18.11.19) <a href="/assets/learnplayer/dest/learnplayer.v1.0.10.zip" target="_blank">link</a>

  - 설정 > 북마크 입력 양식 변경
    - "00시00분00초"로 표시하고 입력창 포커스시에 숫자값으로 입력
    - 입력창 포커스후 5초뒤 커서 해제
    - 입력창 블러시 입력값 검증 및 "00시00분00초"양식으로 노출
    - 현재 재생시간 위치값을 입력창에 설정하는 기능 버튼 추가 (시작시간, 종료시간)
    - as-is 저장/수정 용 버튼을 "저장", "수정" 텍스트 버튼으로 변경
    - 브라우저의 가로넓이 499이하일때 시작, 종료 입력창 두줄로 노출 되도록 설정>북마크 영역 가로넓이 수정
  
  
  - 북마크 재생시 재생프로그래스 영역에 북마크 영역 표시
    - 북마크 노출 상태시 인근 프로그래스의 radius 없이 직각표시
    - 북마크 노출 상태시 재생프로그래스의 마우스 오버 핸들러 비노출
    - 재생프로그래스에서 마우스 클릭(영상위치 이동) 또는 단축키 이동 등등 영상의 구간이동을 통해 변경된 재생위치가 북마크 영역을 벗어날 경우 북마크 해제 처리
  
  
  - 단축키 또는 버튼 클릭시 브라우저 스크롤 이동 이슈 대응
  - 영상영역 마우스 오버시 active Element(focus) 처리하여 단축키 사용에 용의하도록 기능 수정
  - 재생프로그래스의 마우스 오버시 노출되는 마우스디스플레이 박스의 색상 변경
  - 플레이어 정보 노출시 버전 표시 옵션 추가
  
  
  - 이어보기 모달 노출 시기를 영상 재생전 노출로 변경
    - 영상에 포스터 정보가 있을시 배경은 포스터 이미지 노출
    - 자동재생이 아닌경우에(크롬 자동재생정책등) 대응하여 이어보기 모달의 버튼 "확인","취소" 에 사용자 클릭 액션으로 판단하여 재생되도록 기능 수정
  

  - 버그 수정 (18.11.21)
    - 북마크 저장버튼이 모바일 장비에서 하단으로 밀리는 현상 수정
    - 재생 프로그래스에 호버 효과로 밝게shadow 영역 노출되는 효과 제거
    - IE에서 저장버튼이 크게 노출되는 현상 수정
    - 북마크 재생중 인덱스 선택시 북마크 해제 처리
  

  - 수정 사항 (18.11.22)
    - 인덱스 목록의 닫기 버튼 옆에 강의명 삭제
        - => 초기화 전달 옵션 topbar.topbarText.isUse(기본값은 false) 에 영향을 받도록 수정함
    - 설정>북마크 영역의 안내 문구 글씨크기 사이즈 축소 요청
        - => 폰트사이즈 0.8em (=11.53px) 에서  0.7em(=10px) 로 변경
    - 설정>북마크 영역의 입력폼 포커스 유지시간 10초로 수정 요청
    - 자막 노출 단축키 'C' 지정 및 설정>단축키 항목 추가
    - 설정>단축키 IE 전체화면 안내 문구 글씨크기 사이즈 축소 요청
        - => 폰트사이즈 0.8em (=11.53px) 에서 0.6em(8.66px) 로 축소하여 한줄에 표시함
  
  
- v1.0.9 (18.10.12) <a href="/assets/learnplayer/dest/learnplayer.v1.0.9.zip" target="_blank">link</a>
  
  - 단축키 안내에 IE 에서 전체화면 단축키 불가한 내용 추가
  - 품질선정 로직 수정 (초기화 옵션 resolution.default 전달값)
    - 지정화질 선택 HD(1080) &#124; SD(480) &#124; LD(240) 등등 전달된 sources항목의 res 와 동일값 선택
    - high : 해상도 높은순 선택
    - low: 해상도 낮은순 선택
    - 지정화질 선택 상태에서 해당 화질이 없을시 low와 동일
    - 미지정시 low와 동일
  
  
- v1.0.8 (18.10.11) <a href="/assets/learnplayer/dest/learnplayer.v1.0.8.zip" target="_blank">link</a>
  
  - 학습도구영역>타이틀 초기화 옵션에 isUse 추가 (노출여부)
  - 학습도구영역>QNA 초기화 옵션에 isUse 추가 (노출여부)
  - 북마크 초기화 옵션에 isUse 추가(노출여부, 해당설정값에 따라 학습도구영역>북마크버튼, 설정>북마크 메뉴, 설정>단축키>단축키목록, 단축키 B 액션 에도 함께 대응함)
  - 인덱스 목록에 반응형 적용 (플레이어 가로기준 기본 : 30%, 499px 이하 : 70% )
  - 모바일에서 설정>단축키 메뉴 비노출 처리
  

- v1.0.7 (18.10.10) <a href="/assets/learnplayer/dest/learnplayer.v1.0.7.zip" target="_blank">link</a>
  
  - 북마크 항목 삭제후 기존 재생중인 북마크가 초기화 되지않는 오류 수정
  - 북마크 항목 삭제시 다음항목의 북마크가 재생되는 오류 수정
  - 북마크 메뉴 노출시 컨트롤 영역 고정기능이 모바일에서 미작동하는 상황 대응하여 수정
  - 모바일 전체화면 상태에서 자막영역 노출 유무에 따른 영상영역 사이즈 변경 처리(자막이 있으면 자막 영역만큼 영상 높이를 작게.. 없다면 전체화면에 가득차게 표현)
  - 인덱스 목록에 반응형 적용 (플레이어 가로기준 기본 : 30%, 499px 이하 : 60% )
  - 단축키 동작을 위한 플레이어 포커스를 잃어버리는 몇몇 상황에 대응
  

- v1.0.6 (18.10.09) <a href="/assets/learnplayer/dest/learnplayer.v1.0.6.zip" target="_blank">link</a>
  
  - 초기화 옵션 'playsinline' 항목삭제 iOS 의 버전여부에 따라 자동 부여 처리
  - 모바일에서 장치회전시(새로에서 가로) 전체화면 으로 노출되도록 수정(재생 중일때만 기능 동작함, iOS 는 버전 10 부터 기능 동작함)
  - 모바일에서 컨트롤 영역의 전체화면 버튼 클릭시 가로 전체화면으로 노출되도록 수정(iOS 는 가로고정 기능이 불가)
  - 모바일에서 전체화면(가로모드) 진입후 장치회전시 전체화면(가로모드) 유지 (iOS 는 가로고정 기능이 불가)
  - 모바일에서 영상재생 완료후 전체화면(가로모드) 유지 기능 취소 (iOS 는 가로고정 기능이 불가)
  - 모바일 iOS 에서 컨트롤 스킨 유치(버전 10 부터 기능 동작함)
  - hotkeys plugin 통합
  - 스크롤이 있는 목록영역 활성요소일때(mouseover) 볼륨휠 단축키 기능 비작동처리 하여 본동작인 스크롤 사용 처리(인덱스 목록, 북마크 목록)
  - 입력항목 INPUT 영역이 활성요소일때 단축키 기능 비작동처리
  - 북마크 입력항목 검증로직 기능 추가 (포커스, 문자열 초기화, 검증실패시 이전값 셋팅)
  - 학습도구영역>북마크 버튼, 단축키 북마크 호출, 설정> 북마크 메뉴 상의 기능 상이한 오류 수정
  - 북마크 항목의 삭제버튼 노출 기준을 mouseover 에서 기본 노출로 변경
  - 북마크 항목의 삭제버튼 모바일 터치 이벤트 미반응 오류 수정
  - 북마크 항목의 재생버튼의 모양을 재생(삼각형), 일반(불릿)으로 통일 (기존은 재생-원형삼각형 메인색, 정지-사각형, 일반-블릿, 호버-원형삼각형 흰색)
  

- v1.0.5 (18.10.07) <a href="/assets/learnplayer/dest/learnplayer.v1.0.5.zip" target="_blank">link</a>
  
  - 공통 : 영상 재생 중 영역상영내 일시정지(정지중에는 재생)버튼이 없어지지 않고 계속 노출됨
    - 컨트롤러 및 학습도구 영역과 함께 사라지도록 적용
  - 영상 컨트롤러 : CC 버튼의 경우 비활성화 회색/ 활성화 흰색으로 적용
    - CC 버튼 비활성화 흰색, 활성화시 보라색 버튼으로 적용
  - 인덱스 목록 : 목록에 마우스 오버시 커서가 노출됨
    - 목록에 마우스 오버시 손가락 모양의 포인터가 노출되도록 수정
  - 기타 : 1. 강의명이 가운데 정렬됨
    - 상속된 text-align 으로 예상되어 기본값을 left !important 로 강제 처리함
  - 기타 : 등록된 자막이 없는 경우 설정>자막언어 설정 노출시 뒤로가기 버튼과 메뉴명이 겹쳐 노출됨
    - 자막이 없는 경우 자막언어 메뉴 비노출
  - 기타 : 등록된 자막이 없는데 CC 버튼 노출됨
    - 자막이 등록된 경우만 CC 버튼 노출
  - 기본자막 선정 로직 수정(선호순위적용)
    - 1 순위 : 초기화 전달 옵션값에 default:true 가 있는 마지막 자막정보 (선택 및 자막 자동 노출 처리)
    - 2 순위 : 초기화 전달 옵션값에 default 가 없는 경우 지역언어정보(ko, en)과 동일한 마지막 자막정보 (선택 처리)
    - 3 순위 : 1,2 순위가 없을시 전달순서 중 'class: vtt' 우선 (선택 처리)
  - 인덱스 강의명이 학습도구영역과 동일하게 처리한 부분을 이전 기획과 같이 인덱스 레이어 영역에 말줄임으로 표시되도록 처리
  - 현재 재생 중인 시간만 메인색 적용
  - 화면에 오버되는 메뉴인 '배속','설정','인덱스'은 선택된 메뉴만 노출되도록 선택이외 메뉴는 비노출 처리
  

- v1.0.4 (18.10.05) <a href="/assets/learnplayer/dest/learnplayer.v1.0.4.zip" target="_blank">link</a>
  
  - 재생화질 초기화 전달 옵션값 변경 (1080,480 -> HD, SD, LD)
  - 재생화질 기본값 '일반화질'인 default: 'SD' 로 지정 처리
  - 자막파일별 유형변경 처리 기능 추가 (smi &#124; srt to vtt)
  - 자막파일별 유형변경 처리를 위해 초기화 전달 옵션값 class 추가 (vtt &#124; smi &#124; srt)
  - 인덱스 오브젝트 배열을 vtt chapter 유형으로 변경 기능 수정 ('Text Track parsing errors' 대응)
  - 인덱스 오브젝트 배열을 vtt chapter 유형으로 변경 처리를 위해 초기화 전달 옵션값 class 추가 (vtt &#124; object)
  - 초기화 전달 옵션값에 커스텀 데이터 'extraData' 추가
  
  
- v1.0.3 (18.10.03)<a  href="/assets/learnplayer/dest/learnplayer.v1.0.3.zip" target="_blank">link</a>
  
  - 인덱스 목록 항목에 위치값 노출 처리
  - 인덱스 목록 항목의 길이값 노출방법을 말줄임에서 줄바꿈으로 변경 처리
  - 초기화 옵션에 북마크 전달정보 추가 (서버 데이터 처리용 예시 함수 포함)
  - 학습도구 영역에 북마크 버튼 추가
  - 컨트롤바 영역의 설정메뉴에 북마크 항목 및 기능 추가
  - 단축키 추가 (B: 설정메뉴의 북마크 메뉴 노출)
  - 설정메뉴의 단축키 안내 내용 추가 (북마크, 배속)
  - 소소한 UI style 수정
  
  
- v1.0.2 (18.09.20) <a href="/assets/learnplayer/dest/learnplayer.v1.0.2.zip" target="_blank">link</a>
  
  
- v1.0.1 (18.09.17) <a href="/assets/learnplayer/dest/learnplayer.v1.0.1.zip" target="_blank">link</a>
  
  
- v1.0.0 (18.09.11) <a href="/assets/learnplayer/dest/learnplayer.v1.0.0.zip" target="_blank">link</a>

<hr  />

## 기본설정

### 설치

상위 최신버전을 다운로드한 후 압축해제하여 프로젝트의 web RESOURCE 경로에 복사하세요.

### 폴더 구조

<pre>
<code class="hljs stylus">learnplayer/ 
├── <span>css</span>
│&nbsp;&nbsp; ├── <span>learnplayer.min.css</span>
│&nbsp;&nbsp; └── <span>video-js.min.css</span>
├── <span>js</span>
│&nbsp;&nbsp; ├── <span>lang/</span> : 다중 언어 지원을 위한 언어셋
│&nbsp;&nbsp; ├── <span>test-data/</span> : 테스트용 데이터
│&nbsp;&nbsp; ├── <span>require.js</span> : 스크립트 종속성 관리
│&nbsp;&nbsp; ├── <span>app.js</span> : require.js의 스크립트 로딩 진입 설정
│&nbsp;&nbsp; ├── <span>video.min.js</span>
│&nbsp;&nbsp; ├── <span>learnplayer-config.min.js</span> 플레이어 환경 설정
│&nbsp;&nbsp; ├── <span>videojs-abloop.min.js</span> 구간반복 플러그인
│&nbsp;&nbsp; └── <span>videojs-learnplayer.min.js</span> 학습형 플러그인
└── manual.html
</code></pre>

<hr  />

## 시작하기

- 필수 JS 선언
  - requre.js 파일과 app.js 파일의 경로는 프로젝트의 context path 경로로 지정하세요.

```javascript
<script src="./js/require.js" data-main="./js/app" />
```

- 영상영역에 &lt;VIDEO&gt; 태그 선언

```javascript
<body>
  <div class="playerWap">
    <video id="playerEl" />
  </div>
</body>
```

- 모듈의 로드 완료시 커스텀 이벤트 "learnplayerReady" 를 통한 학습플레이어 준비상태에서 영상정보 전달과 함께 플레이어 초기화

```javascript
<script>
  var playerObj;
        document.addEventListener('learnplayerReady', function () {
            // arguments : element selector, options(object || null)
            playerObj = videojs('playerEl', {
                sources: [{
                        src: 'http://wstr.ebs.co.kr/ebsvod/elmt/2017/10026573/m05/20170222_143951_l.mp4',
                        type: 'video/mp4',
                        label: '일반화질',
                        res: 'SD'
                    },
                    {
                        src: 'http://wstr.ebs.co.kr/ebsvod/elmt/2017/10026573/m10/20170222_143951_m.mp4',
                        type: 'video/mp4',
                        label: '고화질',
                        res: 'HD'
                    },
                    {
                        src: 'http://wstr.ebs.co.kr/ebsvod/elmt/2017/10026573/m05/20170222_143951_l.mp4',
                        type: 'video/mp4',
                        label: '저화질',
                        res: 'LD'
                    }
                ], // 영상 품질 정보
                tracks: [{
                        src: 'track/subtitle.en.smi',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: '영어-smi',
                        default: false,
                        class: 'smi'
                    },
                    {
                        src: 'track/subtitle.en.srt', // 자막 경로
                        kind: 'subtitles', // 자막 유형 (captions | subtitles)
                        srclang: 'en',
                        label: '영어-srt', // 자막 메뉴에 노출할 text
                        default: false, // 기본 노출 여부 (true: 지정된 항목이 기본 노출 처리 )
                        class: 'srt' // 자막유형 (vtt | smi | srt)
                    },
                    {
                        src: 'track/captions.ko.LS0000000010646826.vtt', // 자막 경로
                        kind: 'captions', // 자막 유형 (captions | subtitles)
                        srclang: 'ko',
                        label: '한국어-vtt', // 자막 메뉴에 노출할 text
                        default: false, // 기본 노출 여부 (true: 지정된 항목이 기본 노출 처리 )
                        class: 'vtt' // 자막유형 (vtt | smi | srt)
                    },
                    {
                        src: 'track/captions.en.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: '영어-vtt',
                        default: false,
                        class: 'vtt'
                    },
                    {
                        src: [{
                                startTime: 0, // 인덱스 시작시간
                                endTime: 10, // 인덱스 종료시간 (플레이어의 현재시간에 따라 인덱스항목의 선택여부가 지정될수 있도록 개별인덱스 항목의 범윙를 위해 endTime을 지정함 )
                                text: '수동 인덱스 1' // 인덱스명
                            },
                            {
                                startTime: 11,
                                endTime: 15,
                                text: '수동 인덱스 2'
                            },
                            {
                                startTime: 16,
                                endTime: 22,
                                text: '수동 인덱스 3'
                            },
                            {
                                startTime: 22,
                                endTime: 55,
                                text: '수동 인덱스 444444444444444444444444444444  44444444444444444444444444444444444444444444'
                            },
                            {
                                startTime: 55,
                                endTime: 80,
                                text: '수동 인덱스 5'
                            },
                            {
                                startTime: 80,
                                endTime: 100,
                                text: '수동 인덱스 6'
                            },
                            {
                                startTime: 100,
                                endTime: 110,
                                text: '수동 인덱스 7'
                            },
                            {
                                startTime: 110,
                                endTime: 150,
                                text: '수동 인덱스 8'
                            },
                            {
                                startTime: 150,
                                endTime: 200,
                                text: '수동 인덱스 9'
                            },
                            {
                                startTime: 200,
                                endTime: 250,
                                text: '수동 인덱스 10'
                            }
                        ],
                        kind: 'chapters',
                        srclang: 'en',
                        label: 'English',
                        class: 'object' // 인덱스 유형 (vtt | object)
                    } // 인덱스 정보 (자막유형 chapters를 대신한 object data)
                ], // 언어별 자막(captions, subtitles) 및 인덱스(챕터) 정보
                poster: 'http://farm.resources.ebs.co.kr/course/2017/2/23/10026573/22831674803476036_course.jpg', // 영상 재생전에 우선 노출되는 포스트 이미지)
                topbar: {
                    topbarText: {
                        title: '강의명'
                    } // 학습도구 영역의 타이틀 정보 (통상 강의명이 노출)
                }, // 학습도구 영역 옵션
                bookmarks: {
                    items: [{
                            startTime: 0, // 시작시간
                            endTime: 120, // 종료시간
                            text: '북마크 1' // 북마크명
                        },
                        {
                            startTime: 110,
                            endTime: 500,
                            text: '북마크 2'
                        },
                        {
                            startTime: 510,
                            endTime: 1200,
                            text: '북마크 33'
                        },
                        {
                            startTime: 1200,
                            endTime: 1210,
                            text: '북마크명이 을 길게도 써보게 되지요'
                        }
                    ]
                }, // 북마크 전달정보
                // 추가적으로 전달할 정보
                extraData: {
                    courseId: 'CS001',
                    lectId: 'LS002',
                    etc: '..'
                }
            });
        });
</script>
```

- videojs()를 이용한 플레이어 초기화 호출 전 모듈의 로드 완료시 커스텀 이벤트 learnplayerReady

  - 해당이벤트는 플레이어 모듈의 로드가 완료된 시점에 발생하며 videojs 글로벌 함수의 호출 가능여부를 보장합니다.

- 플레이어의 초기화 이후 준비완료 상태시의 프로그래밍<br/>
  플레이어는 비동기로 로드되므로 (언제 준비될지 확정불가) 준비완료 상태의 콜벡을 다음의 3 가지 형태로 제공합니다.
  1. Anonymous function

```javascript
// element selector, options(object || null), ready callback Anonymous function
videojs("playerEl", {}, function() {
  this.addClass("my-example");
});
```

    2. player's ready method

```javascript
var playerObj = videojs("playerEl");
playerObj.ready(function() {
  this.addClass("my-example");
});
```

    3. player's ready event

```javascript
var playerObj = videojs("playerEl");
playerObj.on("ready", function() {
  this.addClass("my-example");
});
```

> **note :** videojs setup <a href="https://docs.videojs.com/tutorial-setup.html" target="_blank">link</a>

<hr  />

## 옵션

- 플레이어의 초기화 설정 및 전달정보를 포함하는 Object 정보로 다음의 3 가지 위치로 구분됩니다

  - 초기화시 전달 인자 옵션
  - 학습플레이어 기본 옵션
  - videojs 기본 옵션

- 전달되는 위치에 따라 구분되었을뿐 최종적으로는 상위의 기재된 순서로 deep-merge 되어 플레이어로 전달되어집니다.

- 용도에 따라 다음과 같이 사용할 수 있습니다.
  - 전달 인자 옵션 : 영상의 관련정보 및 추가정보의 전달 (영상경로, 자막, 강의명, 북마크 등등)
  - 학습플레이어 기본 옵션 : videojs 기본 옵션을 학습 플레이어 옵션으로 재구성 및 공통 함수(북마크 조회, 학습이력저장 등등) 선언

```javascript
// Default options for the learnplayer.
window.defaultOpts = {
    controls: true, // 하단 컨트롤러 사용 여부
    autoplay: true, // 자동 재생 사용 여부 [false | true | muted | play | any]
    preload: 'auto', // 비디오 데이터를 미리 다운로드할지 여부 [auto | true | metadata | none]
    // width: '600px', // 플레이어의 고정 가로 길이
    // height: '300px', // 플레이어의 고정 세로 길이
    // aspectRatio: '16:2', // 플레이어 고정 비율
    fluid: true, // 가로 새로 고정값이 아닌 부모 컨테이너에 맞게 유동 변경 여부
    learnMode: true, // width, heigh, fluid등의 크기 옵션을 무시하고 학습형 스타일을 사용할지 여부
    playsinline: true, // iOS대응 페이지내 재생 여부
    html5: {
        nativeTextTracks: false
    }, // playinline와 함께 사용되며 remoteTextTracks을 사용하기 위함
    language: 'ko', // 언어코드 lang 폴더와 관련
    textTrackSettings: false, // videojs의 기본옵션인 자막 스타일 변경 콤포넌트의 사용 여부
    persistTextTrackSettings: false, // videojs의 기본옵션인 자막 스타일 변경 콤포넌트의 변경값 저장기능의 사용 여부
    playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2], // 배속 목록
    children: [
        'topbarWrap',
        'mediaLoader',
        'posterImage',
        'textTrackCustomDisplay',
        'loadingSpinner',
        'bigPlay1Button',
        'resolutionOSDButton',
        'controlBar',
        'errorDisplay',
        'messageLayer',
        'resizeManager'
    ], // 플레이어의 자녀 콤포넌트 목록 정의
    controlBar: {
        volumePanel: {
            inline: false // 하단 컨트롤의 볼률 슬라이어 노출 방식 여부 (false: 새로노출)
        },
        children: [
            'playToggle',
            'volumePanel',
            'currentTimeDisplay',
            'timeDivider',
            'durationDisplay',
            'progressControl',
            // 'liveDisplay',
            // 'remainingTimeDisplay',
            'customControlSpacer',
            'playbackRateMenu1Button',
            'captionsToggleButton',
            // 'playbackRateMenuButton',
            // 'chaptersButton',
            // 'descriptionsButton',
            // 'subsCapsButton',
            // 'audioTrackButton',
            'fullscreenToggle',
            'SettingMenuButton'
        ]
        // 하단 컨트롤의 자녀 콤포넌트 목록 정의
    },
    contextmenu: {
        cancel: true,
        sensitivity: 10,
        wait: 500,
        disabled: false
    },
    // skin : ['learnplayer-blue.css'], //추가 스킨 목록 사용
    hotkey: {
        volumeStep: 0.1,
        seekStep: 5,
        enableMute: true, // 음소거 단축키 사용여부
        enableVolumeScroll: true, // 볼륨 조절바 마우스휠 사용여부
        enableFullscreen: true, // 전체화면 단축키 사용여부
        enableNumbers: true, // 단축키 0-9 사용여부 (총재생시간의 0% ~ 100% 위치로 이동)
    },
    touchoverlay: {
        fullscreen: {
            lockOnRotate: true,
            iOS: true
        },
        touchControls: {
            seekSeconds: 10,
            tapTimeout: 300,
            disableOnEnd: false
        }
    },
    continue: {
        time: 0, // 이어보기 위치
        isShowMessage: true, // 이어보기시에 알림 레이어 노출여부
        messageType: 'confirm', // [alert | confirm]
        message: '마지막 학습위치에서 재생하시겠습니까?<br/>&lt;br/&gt;태그로 여러줄을 입력하세요',
        title: '이어보기', // default '알림'
        pauseOnOpen: true
    }, // 이어보기 옵션
    resolution: {
        default: 'high', // 지정화질 선택 HD(1080) | SD(480) | LD(240) 등등, high : 해상도 높은순 선택, low: 해상도 낮은순 선택, 지정화질 선택상태에서 해당 화질이 없을시 low와 동일, 미지정시 low와 동일
        ui: false,
        dynamicLabel: false
    }, // 품질변경 옵션
    topbar: {
        topbarText: {
            isUse: false, // 노출여부
            title: '',
        },
        qnaButton: {
            isUse: false, // 노출여부
            extraFunction: '', // ex) goQNApopup
            href: 'manual.html?ddd=dd&dkdjf=22#first', // ex) manual.html?ddd=dd&dkdjf=22#first
            target: '_blank',
            isPlayStop: true, // 재생 정지 여부
            messageType: 'confirm', // [alert | confirm]
            message: 'QNA 페이지로 이동 하시겠습니까?',
            title: '' // default '알림'
        } // QNA 전달정보
    }, // 학습도구 영역 옵션
    bookmarks: {
        isUse: true, // 노출여부
        items: [],
        extraFunctions: {
            add: addBookmark,
            modify: modifyBookmark,
            remove: deleteBookmark
        }
    }, // 북마크 전달정보
    playerInfo: {
        innerHtml: 'EBS SharePlayer', // text or tag Element
        isIncludeVersion: true
    }, // 플레이어 버전 정보
    debug: false // videojs의 로그 출력 여부
};
```

> **note :** videojs options <a href="https://docs.videojs.com/tutorial-options.html" target="_blank">link</a>

<hr  />

## 함수

- 초기화된 player 의 함수

  - dispose() 생성된 플레이어를 삭제합니다. (event, element)
  - volume() 음량 반환 및 변경 합니다.
  - muted() 음소거 여부 반환 및 변경 합니다.
  - isFullscreen() 전체화면 상태 여부 반환 및 상태 여부 변경 합니다.
  - requestFullscreen() 전체화면으로 요청합니다.
  - exitFullscreen() 전체화면 해제를 요청합니다.
  - play() 재생합니다.
  - pause() 일시 정지합니다.
  - paused() 일시 정지 상태 여부를 반환합니다.
  - currentTime() 현재 재생위치의 시간값을 반환 및 시간값을 변경합니다.
  - duration() 영상의 총재생 시간값을 반환 및 시간값을 변경합니다.
  - remainingTime() 총재생 시간을 기준으로 남은 시간값을 반환합니다.
  - buffered() 버퍼링된 시간범위 객체를 반환합니다.
  - bufferedPercent() 버퍼링된 시간객체를 총재생 시간 기준의 백분율을 반환합니다.
  - src() 영상정보 경로 정보의 반환 및 변경합니다.
    <br/> _ 학습플레이어는 품질변경을 위한 정보변경 함수가 존재합니다. updateSrc()
    <br/> _ 일관된 개발을 위해 src() 조회 용도로만 사용 바랍니다.
  - poster() 포스트 정보의 반환 및 변경합니다.
  - 작성중..

  > **note :** videojs player-workflows <a href="https://docs.videojs.com/tutorial-player-workflows.html" target="_blank">link</a>

  > **note :** Media elements <a href="https://html.spec.whatwg.org/multipage/media.html#media-elements" target="_blank">link</a>

- 학습 플레이어 함수
  - updateSrc() 선택된 품질의 영상경로를 반환 또는 변경(전체품질의 배열)합니다.
  - currentResolution() 선택된 품질의 영상정보를 반환 또는 품질 label 로 변경합니다.
  - changeSouece() 초기화시 전달되는 영상정보와 동일하게 플레이어의 정보를 변경합니다.
  - getTimeInfo() 사용자의 학습정보를 반환합니다.
  - 작성중..

<hr  />

## 이벤트

- 작성중

> **note :** Media elements <a href="https://html.spec.whatwg.org/multipage/media.html#mediaevents" target="_blank">link</a>

<hr  />

## 자막

- 학습플레이어에서는 3 가지 파일유형을 자막으로 제공할수 있습니다.
- 유형의 종류는 vtt, smi, srt 이며 smi 와 srt 의 경우 vtt 유형으로 내용변경하여 제공합니다.

■ vtt 문법

```javascript
WEBVTT

Introduction
00:00:01.000 --> 00:01:10.000
Wikipedia is a great adventure. It may have
its shortcomings, but it is the largest collective
knowledge construction endevour

Disclaimer
00:01:10.000 --> 00:02:10.000
This is just a track demo using VTT
```

■ smi 문법

```html
<SAMI>
<HEAD>
<TITLE>프로젝트명</TITLE>
<STYLE TYPE="text/css">
<!--
P { margin-left:16pt; margin-right:16pt; margin-bottom:16pt; margin-top:16pt;
    font-size:18pt; text-align:center; font-family:arial; font-weight:bold; color:#f0f0f0;
  }
.KRCC { Name:한국어; lang:ko-KR; SAMIType:CC; }

#STDPrn { Name::Standard Print; }
#LargePrn { Name:Large Print (22pt); font-size:22pt; }
#SmallPrn { Name:Small Print (14pt); font-size:14pt; }
-->
</STYLE>
</HEAD>

<!--
This is generated by ATS of IAndT
http://ats.iandt.tv
-->

<BODY>
<SYNC Start=0><P Class=KRCC>
<SYNC Start=366><P Class=KRCC>11 This painting by Paul Cezanne is called
“Still Life withApples and Fruit Bowl”
<SYNC Start=5533><P Class=KRCC>Take a look at the apples
in the painting.
<SYNC Start=7933><P Class=KRCC>Cezanne drew apples
that are near the viewer larger
<SYNC Start=10700><P Class=KRCC>and the apples
that were far away smaller.
<SYNC Start=129033><P Class=KRCC>Well done!
<SYNC Start=131966><P Class=KRCC>
<SYNC Start=999999><P Class=KRCC>
</BODY>
</SAMI>
```

■ srt 문법

```javascript
1
00:00:00,366 --> 00:00:05,533
22 This painting by Paul Cezanne is called
“Still Life withApples and Fruit Bowl”

2
00:00:05,533 --> 00:00:07,933
Take a look at the apples
in the painting.

3
00:00:07,933 --> 00:00:10,700
Cezanne drew apples
that are near the viewer larger

4
00:00:10,700 --> 00:00:12,733
and the apples
that were far away smaller.
```

<hr  />

## 북마크

- 학습플레이어 내에 기존에 생성된 북마크 정보를 전달하여 북마크 목록을 노출하고 플레이어내의 입력폼을 통한 북마크 항목을 추가, 수정 및 기존 항목을 삭제할 수 있습니다.
- 북마크 관련 액션인 추가, 수정, 삭제시 서버사이드와의 연동를 위해 플레이어 초기화 전달정보에서 확장함수를 제공합니다.


- 북마크 목록 노출을 위한 정보 전달
    - 학습플레이어를 초기화 할때에 해당 강좌의 북마크 정보를 하위의 '관련 초기화 전달정보 및 함수 예시' 와 같이 전달합니다.
    - 학습플레이어에서 필수 항목은 시작시간, 종료시간, 북마크명이며 서버사이드에서 필요한 일련의 작업(DB DATA insert, update등등)를 위한 키값들(강의아이디, 북마크아이디 등등)을 북마크 정보와 함께 전달할 수 있습니다.


- 북마크 항목 추가
    - 학습플레이어에서 새로운 북마크가 추가될 경우 초기화 전달정보 bookmarks.extraFunctions.add에 지정한 확장함수를 학습플레이어에서 호출합니다.
    - 학습플레이어가 확장함수 호출시 사용자가 추가한 항목의 정보(시작시간, 종료시간, 북마크명)를 첫번째 파라미터로 전달합니다.
    - 학습플레이어가 확장함수 호출시 재생중인 플레이어의 오브젝트정보를 두번째 파라미터로 전달합니다.<br/>
        - 전달된 오브젝트로 최초 전달된 초기화 정보나 현재 상태를 확인할 수 있습니다.<br/>
        - 예1 : player.options_.bookmarks.items 으로 플레이어의 북마크 목록 전체 정보를 가져올 수 있습니다.
        - 예2 : player.options_.extraData.lectId 으로 플레이어로 전달한 확장데이터를 가져올 수 있습니다.
    - 학습플레이어가 확장함수 호출시 서버사이드에서의 일련의 작업(DB DATA insert등등) 후 가공된 data를 학습플레이어로 전달하기 위한 콜백함수를 세번째 파라미터로 전달합니다.<br/>
        학습플레이어의 콜백함수를 호출하여 가공된 data로 변경하여야 이후 추가된 해당 항목의 수정 및 삭제시 서버사이드에서 필요한 키값을 전달받을 수 있습니다.


- 북마크 항목 수정
    - 학습플레이어에서 북마크를 수정할 경우 초기화 전달정보 bookmarks.extraFunctions.modify에 지정한 확장함수를 학습플레이어에서 호출합니다.
    - 학습플레이어가 확장함수 호출시 사용자가 수정한 항목의 수정정보(시작시간, 종료시간, 북마크명) 및 서버사이드용 키값 정보를 첫번째 파라미터로 전달합니다.
    - 학습플레이어가 확장함수 호출시 재생중인 플레이어의 오브젝트정보를 두번째 파라미터로 전달합니다.
    - 학습플레이어가 확장함수 호출시 서버사이드에서의 일련의 작업(DB DATA update등등) 후 가공된 data를 학습플레이어로 전달하기 위한 콜백함수를 세번째 파라미터로 전달합니다.<br/>
        항목 수정시에는 이미 서버사이드에서 가공된 data를 보유중이므로 콜백함수의 호출은 필수는 아닙니다.
    

- 북마크 항목 삭제
    - 학습플레이어에서 북마크를 수정할 경우 초기화 전달정보 bookmarks.extraFunctions.remove에 지정한 확장함수를 학습플레이어에서 호출합니다.
    - 학습플레이어가 확장함수 호출시 사용자가 수정한 항목의 정보(시작시간, 종료시간, 북마크명)를 첫번째 파라미터로 전달합니다.
    - 학습플레이어가 확장함수 호출시 재생중인 플레이어의 오브젝트정보를 두번째 파라미터로 전달합니다.

 
■ 관련 초기화 전달정보 및 함수 예시
```javascript
    bookmarks: {
        isUse: true, // 노출여부
        items: [{
                    startTime: 0, // 시작시간
                    endTime: 120, // 종료시간
                    text: '북마크 1', // 북마크명
                    dbSeq: 10000001 // DB unique key
                },
                {
                    startTime: 110,
                    endTime: 500,
                    text: '북마크 2',
                    dbSeq: 10000002
                },
                {
                    startTime: 510,
                    endTime: 1200,
                    text: '북마크 33',
                    dbSeq: 10000003
                },
                {
                    startTime: 1200,
                    endTime: 1210,
                    text: '북마크명이 을 길게도 써보게 되지요',
                    dbSeq: 10000003
                }
        ], // 기존에 생성된 북마크 정보
        extraFunctions: {
            add: addBookmark,
            modify: modifyBookmark,
            remove: deleteBookmark
        }
    },

    /**
    * 옵션 bookmarks.extraFunctions.add
    * 플레이어에 추가된 북마크 아이템의 정보를 전달합니다.
    * @param {Object} [item]
    * @param {Object} [player]
    * @param {Component~ReadyCallback} callbackFunction
    *  서버로 raw 데이터 전송후 가공된 데이터를 플레이어에 전달할 목적으로 사용됩니다.
    */
    function addBookmark() {
        var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var player = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var callbackFunction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
        item.dbSeq = parseInt(Math.random() * 10000);
        callbackFunction(item);
    }

    /**
    * 옵션 bookmarks.extraFunctions.modify
    * 플레이어에 수정된 북마크 아이템의 정보를 전달합니다.
    * @param {Object} [item]
    * @param {Object} [player]
    * @param {Component~ReadyCallback} callbackFunction
    *  서버로 raw 데이터 전송후 가공된 데이터를 플레이어에 전달할 목적으로 사용됩니다.
    */
    function modifyBookmark() {
        var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var player = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var callbackFunction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    }

    /**
    * 옵션 bookmarks.extraFunctions.modify
    * 플레이어에 삭제된 북마크 아이템의 정보를 전달합니다.
    * @param {Object} [item]
    * @param {Object} [player]
    */
    function deleteBookmark() {
        var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var player = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    }
```

<hr  />

## 데모

- 단일 프로그래밍 타입 재생 <a href="https://99red99.github.io./assets/learnplayer/manual.html" target="_blank">link</a>

<hr  />

## 이슈

- 자동재생

  - Chrome's autoplay policies

    - <a href="https://developers.google.com/web/updates/2017/09/autoplay-policy-changes" target="_blank">link</a>
    - <a href="https://blog.naver.com/dragmove/221301904012" target="_blank">번역 link</a>

  - Autoplay Best Practices with Video.js <a href="https://blog.videojs.com/autoplay-best-practices-with-video-js/" target="_blank">link</a>

  - iOS 환경에서 비디오 자동재생 사용하기 <a href="https://iropke.com/archive/video-autoplay.html" target="_blank">link</a>

  - Auto-Play Policy Changes for macOS <a href="https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/" target="_blank">link</a>

  - New &lt;video&gt; Policies for iOS (autoplay, playsInline) <a href="https://webkit.org/blog/6784/new-video-policies-for-ios/" target="_blank">link</a>

- Media controls customization
  - CHrome 58 update <a href="https://developers.google.com/web/updates/2017/03/chrome-58-media-updates#controlslist" target="_blank">link</a>
  - HTMLMediaElement controlsList explained <a href="https://github.com/WICG/controls-list/blob/gh-pages/explainer.md" target="_blank">link</a>

<hr  />

## 테스트 케이스

- 작성중

<hr  />

## 추가될 기능들

<hr  />

## Credits

- 학습플레이어는 많은 위대한 프로그래머들의 기술요소에 영감을 받았습니다.
  - videojs : Apache License 2.0
  - videjs.hotkeys : Apache License 2.0
  - videojs-abloop : MIT License
  - videojs-resolution-switcher : Apache License 2.0
  - videojs-dock : Apache License 2.0
  - videojs-mobile-ui : MIT License
  - videojs-landscape-fullscreen : MIT License

<hr  />

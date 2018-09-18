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
버전 1.0.0 의 배포일(18.09.11.)을 기준으로 videojs 7.1.0 을 기반으로 플러그인 타입으로 개발되었으며
기능 및 제공 범위는 videojs 를 기반으로 합니다.

> **note :** videojs <a href="https://videojs.com/">link</a>

## 버전별 다운로드

- <a  href="/assets/learnplayer/dest/learnplayer.v1.0.1.zip" target="_blank">v1.0.1 (18.09.17)</a>
- <a  href="/assets/learnplayer/dest/learnplayer.v1.0.0.zip" target="_blank">v1.0.0 (18.09.11)</a>

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
│&nbsp;&nbsp; ├── <span>app.js</span> : require.js의 스크립트 로딩 진입 설정
│&nbsp;&nbsp; ├── <span>learnplayer-config.min.js</span> 플레이어 환경 설정
│&nbsp;&nbsp; ├── <span>require.js</span> : 스크립트 종속성 관리
│&nbsp;&nbsp; ├── <span>video.min.js</span>
│&nbsp;&nbsp; ├── <span>videojs.hotkeys.min.js</span> 단축키 플러그인
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
    // 학습 플레이어 모듈에 종속하여 플레이어 초기화
    document.addEventListener('learnplayerReady', function () {
        // arguments : element selector, options(object || null)
        playerObj = videojs('playerEl', {
            // 영상 품질 정보
            sources: [{
                src: 'http://wstr.ebs.co.kr/ebsvod/elmt/2017/10026573/m10/20170222_143951_m.mp4',
                type: 'video/mp4',
                label: '고화질',
                res: '1080'
            }, {
                src: 'http://wstr.ebs.co.kr/ebsvod/elmt/2017/10026573/m05/20170222_143951_l.mp4',
                type: 'video/mp4',
                label: '일반화질',
                res: '480'
            }],
            // 언어별 자막(captions, subtitles) 및 인덱스(챕터) 정보
            tracks: [{
                    src: 'track/captions.ko.LS0000000010646826.vtt',
                    kind: 'captions',
                    srclang: 'ko',
                    label: '한국어'
                    // default: false
                },
                {
                    src: 'track/captions.en.vtt',
                    kind: 'subtitles',
                    srclang: 'en',
                    label: '영어'
                    // default: true
                },
                {
                    src: [{
                            startTime: 0,
                            endTime: 10,
                            text: '수동 인덱스 1'
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
                        }
                    ],
                    kind: 'chapters',
                    srclang: 'en',
                    label: 'English'
                }
                // ,
                // {
                //     src: 'track/chapters.en.vtt',
                //     kind: 'chapters',
                //     srclang: 'en',
                //     label: 'English'
                // }
            ],
            // 영상의 포스터 (자동재생 off시 우선 노출되는 이미지)
            poster: 'http://farm.resources.ebs.co.kr/course/2017/2/23/10026573/22831674803476036_course.jpg',
            // 학습도구 영역의 타이틀 정보 (통상 강의명이 노출)
            topbar: {
                topbarText: {
                    title: '강의제목이 노출 되는 위치 입니다.'
                }
            },
            // 추가적으로 전달할 정보
            extraData: {
                courseId: 'CS001',
                lectId: 'LS002'
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
  preload: "auto", // 비디오 데이터를 미리 다운로드할지 여부 [auto | true | metadata | none]
  // width: '600px', // 플레이어의 가로 길이
  // height: '300px', // 플레이어의 세로 길이
  fluid: true, // 가로 새로 고정값이 아닌 부모 컨테이너에 맞게 유동 변경 여부
  learnMode: true, // width, heigh, fluid등의 크기 옵션을 무시하고 학습형 스타일을 사용할지 여부
  // aspectRatio: '16:2',
  playsinline: true, // iOS대응 페이지내 재생 여부
  html5: {
    nativeTextTracks: false
  }, // playinline와 함께 사용되며 remoteTextTracks을 사용하기 위함
  language: "ko", // 언어코드 lang 폴더와 관련
  textTrackSettings: false, // videojs의 기본옵션인 자막 스타일 변경 콤포넌트의 사용 여부
  persistTextTrackSettings: false, // videojs의 기본옵션인 자막 스타일 변경 콤포넌트의 변경값 저장기능의 사용 여부
  playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2], // 배속 목록
  children: ["topbarWrap", "mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlay1Button", "resolutionOSDButton", "controlBar", "errorDisplay", "messageLayer", "resizeManager"], // 플레이어의 자녀 콤포넌트 목록 정의
  controlBar: {
    volumePanel: {
      inline: false
    }, // 하단 컨트롤의 볼률 슬라이어 노출 방식 여부 (inline:false => 새로노출)
    children: [
      "playToggle",
      "volumePanel",
      "currentTimeDisplay",
      "timeDivider",
      "durationDisplay",
      "progressControl",
      // 'liveDisplay',
      // 'remainingTimeDisplay',
      "customControlSpacer",
      "playbackRateMenu1Button",
      "captionsToggleButton",
      // 'playbackRateMenuButton',
      // 'chaptersButton',
      // 'descriptionsButton',
      // 'subsCapsButton',
      // 'audioTrackButton',
      "fullscreenToggle",
      "SettingMenuButton"
    ]
    // 하단 컨트롤의 자녀 콤포넌트 목록 정의
  },
  // skin : ['learnplayer-blue.css'], //추가 스킨 목록 사용
  hotkey: {
    volumeStep: 0.1,
    seekStep: 5,
    enableMute: true,
    enableVolumeScroll: true,
    enableFullscreen: true,
    enableNumbers: true,
    enableJogStyle: false,
    alwaysCaptureHotkeys: true,
    enableModifiersForNumbers: true,
    enableInactiveFocus: true,
    skipInitialFocus: false
  }, // 단축키 플러그인 옵션
  continue: {
    time: 0, // 이어보기 위치
    isShowMessage: true, // 이어보기시에 알림 레이어 노출여부
    messageType: "confirm", // [alert | confirm]
    message: "마지막 학습위치에서 재생하시겠습니까?<br/>&lt;br/&gt;태그로 여러줄을 입력하세요",
    title: "" // default '알림'
  }, // 이어보기 옵션
  resolution: {
    ui: false,
    default: "high",
    dynamicLabel: false
  }, // 품질변경 옵션
  topbar: {
    topbarText: {
      title: ""
    },
    qnaButton: {
      extraFunction: "", // ex) goQNApopup
      href: "manual.html?ddd=dd&dkdjf=22#first", // ex) manual.html?ddd=dd&dkdjf=22#first
      target: "_blank",
      isPlayStop: true, // 재생 정지 여부
      messageType: "confirm", // [alert | confirm]
      message: "QNA 페이지로 이동 하시겠습니까?",
      title: "" // default '알림'
    }
  }, // 학습도구 영역 옵션
  playerInfo: {
    innerHtml: "EOSF player 1.0" // text or tag Element
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

- 작성중

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

## 배포 노트

- 작성중

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

<hr  />

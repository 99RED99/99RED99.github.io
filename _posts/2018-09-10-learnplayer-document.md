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
learnplayer는 오픈소스인 videojs를 기반으로 하는 학습형 확장 플레이어입니다.<br/>
버전 1.0.0의 배포일(18.09.11.)을 기준으로 videojs 7.1.0을 기반으로 플러그인 타입으로 개발되었으며
기능 및 제공 범위는 videojs를 기반으로 합니다.
> **note :** <a href="https://videojs.com/">VIDEOJS</a>

## 최신버전 다운로드

-  <a  href="/assets/learnplayer/dest/learnplayer.v1.0.0.zip">v1.0.0 (18.09.11 21:14:00)</a>

<hr  />

## 설치
 다운로드한 파일을 압축해제후 프로젝트의 RESOURCE 경로에 복사해 주세요

<hr  />

  

## 기본설정
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

## 옵션
```javascript
// Default options for the learnplayer.
window.defaultOpts = {
    controls: true,
    autoplay: true,
    preload: 'auto',
    // width: '600px',
    // height: '300px',
    learnMode: true,
    fluid: true,
    // aspectRatio: '16:2',
    playsinline: true,
    html5: {
        nativeTextTracks: false
    },
    language: 'ko',
    textTrackSettings: false,
    persistTextTrackSettings: true,
    playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    children: [
        'topbarWrap',
        'mediaLoader',
        'posterImage',
        'textTrackDisplay',
        'loadingSpinner',
        'bigPlay1Button',
        'resolutionOSDButton',
        'controlBar',
        'errorDisplay',
        'messageLayer',
        'resizeManager'
    ],
    controlBar: {
        volumePanel: {
            inline: false
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
    },
    // skin : ['learnplayer-blue.css'],
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
        skipInitialFocus: false,
    },
    continue: {
        time: 0,
        isShowMessage: true,
        messageType: 'confirm', // [alert | confirm]
        message: '마지막 학습위치에서 재생하시겠습니까?<br/>&lt;br/&gt;태그로 여러줄을 입력하세요',
        title: '' // default '알림'
    },
    resolution: {
        ui: false,
        default: 'high',
        dynamicLabel: false
    },
    topbar: {
        topbarText: {
            title: '',
        },
        qnaButton: {
            extraFunction: '', // ex) goQNApopup
            href: 'manual.html?ddd=dd&dkdjf=22#first', // ex) manual.html?ddd=dd&dkdjf=22#first
            target: '_blank',
            isPlayStop: true, // 재생 정지 여부
            messageType: 'confirm', // [alert | confirm]
            message: 'QNA 페이지로 이동 하시겠습니까?',
            title: '' // default '알림'
        }
    },
    playerInfo: {
        innerHtml: 'EOSF player 1.0' // text or tag Element
    },
    debug: true
};
```

<hr  />
  

## 기능

<hr  />
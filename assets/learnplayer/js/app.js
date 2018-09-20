var MIN_TEXT = '';
MIN_TEXT = '.min';
var VJS_MODULE = ['video' + MIN_TEXT];
var VJS_CONFIG = ['learnplayer-config' + MIN_TEXT];
var VJS_LANGS = ['lang/ko', 'lang/en'];
var VJS_PLUGINS = ['videojs.hotkeys' + MIN_TEXT, 'videojs-abloop' + MIN_TEXT, 'videojs-learnplayer' + MIN_TEXT];
var VJS_CSS = ['video-js' + MIN_TEXT, 'learnplayer' + MIN_TEXT];
var SHIMS = {};
VJS_CONFIG.concat(VJS_LANGS, VJS_PLUGINS).forEach(function (item, index) {
    SHIMS[item] = {
        deps: ['preSetting'].concat(VJS_MODULE)
    }
});
require.config({
    path: {
        'lang/ko': 'lang'
    },
    shim: SHIMS
});

define('preSetting', VJS_MODULE, function (vjs) {
    vjs.options.autoSetup = false;
    window.HELP_IMPROVE_VIDEOJS = false;
    window.videojs = vjs;
});

require(['preSetting'].concat(VJS_MODULE, VJS_CONFIG), function () {});

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
    contextmenu: {
        cancel: true,
        sensitivity: 10,
        wait: 500,
        disabled: false
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

/**
 * topbar > qnaButton callback function
 * href 경로 지정을 무효하고 함수에서 기능을 구현합니다.
 */
function goQNApopup() {
    alert('QNA 팝업을 직접 처리합니다.');
}
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
        alwaysCaptureHotkeys: false,
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
    bookmarks: {
        items:[],
        isUse: true,
        extraFunctions:{
            add: addBookmark,
            modify: modifyBookmark,
            remove: deleteBookmark
        }
    },
    playerInfo: {
        innerHtml: 'EBS sharePlayer' // text or tag Element
    },
    debug: true
};

/** ****************
 * ## README ##
 * defaultOpts이나 플레이어 초기화 옵션에 지정하여 사용할 함수정의 입니다
 * 현파일에 구현하여 글로벌 공통함수로 사용하거나 특정 페이지에 별도 또는 재정의 하여 사용하여도 됩니다.
 * 비사용시 삭제하여도 무방합니다.
 */

 /**
 * 옵션 bookmarks.extraFunctions.add
 * 플레이어에 추가된 북마크 아이템의 정보를 전달합니다.
 * @param {Object} [item]
 * @param {Component~ReadyCallback} callbackFunction
 *  서버로 raw 데이터 전송후 가공된 데이터를 플레이어에 전달할 목적으로 사용됩니다.
 */
function addBookmark() {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callbackFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    item.dbSeq = parseInt( Math.random() * 10000 );
    callbackFunction(item);
}

/**
 * 옵션 bookmarks.extraFunctions.modify
 * 플레이어에 수정된 북마크 아이템의 정보를 전달합니다.
 * @param {Object} [item]
 * @param {Component~ReadyCallback} callbackFunction
 *  서버로 raw 데이터 전송후 가공된 데이터를 플레이어에 전달할 목적으로 사용됩니다.
 */
function modifyBookmark() {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callbackFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
}

/**
 * 옵션 bookmarks.extraFunctions.modify
 * 플레이어에 삭제된 북마크 아이템의 정보를 전달합니다.
 * @param {Object} [item]
 */
function deleteBookmark() {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
}

/**
 * 옵션 topbar.qnaButton.extraFunction
 * topbar.qnaButton.href 경로 지정을 무효하고 함수에서 기능을 구현합니다.
 */
function goQNApopup() {
    alert('QNA 팝업을 직접 처리합니다.');
}
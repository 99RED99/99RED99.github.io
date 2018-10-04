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
        'textTrackDisplay',
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
        time: 0, // 이어보기 위치
        isShowMessage: true, // 이어보기시에 알림 레이어 노출여부
        messageType: 'confirm', // [alert | confirm]
        message: '마지막 학습위치에서 재생하시겠습니까?<br/>&lt;br/&gt;태그로 여러줄을 입력하세요',
        title: '' // default '알림'
    }, // 이어보기 옵션
    resolution: {
        ui: false,
        default: 'high',
        dynamicLabel: false
    }, // 품질변경 옵션
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
        } // QNA 전달정보
    }, // 학습도구 영역 옵션
    bookmarks: {
        items: [],
        isUse: true,
        extraFunctions: {
            add: addBookmark,
            modify: modifyBookmark,
            remove: deleteBookmark
        }
    }, // 북마크 전달정보
    playerInfo: {
        innerHtml: 'EBS sharePlayer' // text or tag Element
    }, // 플레이어 버전 정보
    debug: false // videojs의 로그 출력 여부
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
    item.dbSeq = parseInt(Math.random() * 10000);
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
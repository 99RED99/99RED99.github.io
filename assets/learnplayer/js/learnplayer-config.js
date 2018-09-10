define(['video.js', 'lang/ko', 'lang/en', 'videojs.hotkeys', 'videojs-abloop', 'videojs-resolution-switcher', 'videojs-learnplayer'], function () {
    'use strict';

    // css load
    var loadCss = function (list, idx) {
        if (typeof idx === 'undefined') {
            idx = 0;
        }
        if (idx < list.length) {
            var css = document.createElement('link');
            css.setAttribute('href', requirejs.s.contexts._.config.baseUrl + '../css/' + list[idx]);
            css.setAttribute('rel', 'stylesheet');
            document.getElementsByTagName('head')[0].appendChild(css);
            loadCss(list, idx + 1);
        }
    };

    loadCss(['video-js.css', 'videojs-resolution-switcher.css', 'learnplayer.css']);

    /**
     * Set up any tags that have a data-setup `attribute` when the player is started.
     */
    var autoSetup = function autoSetup() {
        var vids = Array.prototype.slice.call(document.getElementsByTagName('video'));
        var audios = Array.prototype.slice.call(document.getElementsByTagName('audio'));
        var divs = Array.prototype.slice.call(document.getElementsByTagName('video-js'));
        var mediaEls = vids.concat(audios, divs);

        // Check if any media elements exist
        if (mediaEls && mediaEls.length > 0) {
            for (var i = 0, e = mediaEls.length; i < e; i++) {
                var mediaEl = mediaEls[i];
                if (mediaEl && mediaEl.getAttribute) {
                    if (mediaEl.player === undefined) {
                        var options = mediaEl.getAttribute('data-setup');
                        if (options !== null) {
                            videojs(mediaEl);
                        }
                    }
                }
            }
        }
    };

    videojs.hook('beforesetup', function (videoEl, options) {
        if (videojs.browser.IS_IOS || videojs.browser.IS_ANDROID) {
            defaultOpts.isMobile = true;
        }
        options = videojs.mergeOptions(defaultOpts, options);
        if (options.skin !== undefined && options.skin.length > 0) {
            loadCss(Array.isArray(options.skin) ? options.skin : [options.skin]);
        }
        return options;
    });

    videojs.hook('setup', function (player) {
        player.hotkeys(player.options_.hotkey); // 단축키 setting
        player.abLoopPlugin(); // 구간반복 setting
        if (videojs.getPlugin('videoJsResolutionSwitcher') && player.options_.sources && player.options_.sources.length > 1 && player.options_.sources[0].res) {
            player.videoJsResolutionSwitcher(player.options_.resolution); // 품질변경 setting
        }
        player.learnPlugin(player); // 학습 setting
    });
    autoSetup();
});
requirejs.config({
    baseUrl: '/assets/js/lib',
    paths: {},
    shim: {
        'videojs-abloop': {
            deps: ['video', 'add-video-js-in-global-scope', 'videojs.hotkeys']
        },
        'videojs.hotkeys': {
            deps: ['video']
        },
        'videojs-resolution-switcher': {
            deps: ['video']
        }
    }
});

define('add-video-js-in-global-scope', ['video'], function (vjs) {
    //console.log('add-video-js-in-global-scope');
    window.HELP_IMPROVE_VIDEOJS = false;
    vjs.options.autoSetup = false;
    window.videojs = vjs;
});

define('ebsplayer', ['video', 'videojs.hotkeys', 'videojs-abloop', 'videojs-resolution-switcher'], function (vjs, vjshotkey, vjsabloop) {
    "use strict";
    // css load
    var loadCss = function (list, idx) {
        if (typeof idx === 'undefined') {
            idx = 0;
        }
        if (idx < list.length) {
            var css = document.createElement('link');
            css.setAttribute('href', list[idx]);
            css.setAttribute('rel', 'stylesheet');
            document.getElementsByTagName('head')[0].appendChild(css);
            loadCss(list, idx + 1);
        }
    };

    loadCss(['/assets/js/lib/video-js.css', '/assets/js/lib/videojs-resolution-switcher.css', '/assets/js/app.video.css']);

    console.log(222);

    var defaultOpts = {
        controls: true,
        preload: 'auto',
        autoplay: 'play',
        fluid: true,
        playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
        controlBar: {
            volumePanel: {
                inline: false
            },
            outer: false
        }

    };

    videojs.hook('beforesetup', function (videoEl, options) {
        console.log(22211);
        options = vjs.mergeOptions(defaultOpts, options);
        console.log(options.controlBar.outer);

        if (options.controlBar.outer === true) {
            videoEl.className += ' vjs-controlBar-outer';
        }
        //options.playbackRates = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
        //options.controlBar.volumePanel.inline = false;
        //console.log( options.controlBar );
        /* controlBar: {
            // CurrentTimeDisplay: true,
            // muteToggle: false
            volumePanel: {inline: false}
        } */
        //options.flash.swf = 'js/lib/video-js.swf';
        return options;
    });

    videojs.hook('setup', function (player) {
        player.hotkeys();
        player.abLoopPlugin();
        player.videoJsResolutionSwitcher({
            ui: true,
            default: 'low', // Default resolution [{Number}, 'low', 'high'],
            dynamicLabel: true // Display dynamic labels or gear symbol
        });
    });

    /* return {
        loadCss: loadCss
    } */
});

// requirejs(['video', 'videojs-hotkeys', 'vjsabloop', 'ebsplayer'], function (vjs, vjsabloop, vjshotkey, ebsplayer) {

//     console.log( '11' );

// });

requirejs(['video', 'videojs.hotkeys', 'videojs-abloop', 'ebsplayer'], function (vjs, vjsh, vjsab, ep) {

    //console.log('11');
    //console.log(vjs);

});
---
layout: post
cover: 'assets/images/tree.jpg'
title: video test manual
date: 2018-08-09 04:00:00
tags: video
author: red
---

# 프로그램 타입으로 호출한 플레이어
#### 태그 자동 셋팅이 아닝 스크립트로 호출

<script src="/assets/js/lib/require.js" data-main="/assets/js/app.video.js"></script>
<video id="video1" class="video-js vjs-default-skin" controls width="640" height="264" poster="http://d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png">
    <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that
        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
    </p>
</video>

<script type="text/javascript">
    var pTimer;
    
    pTimer = setInterval( function() {
        //console.log(111);
        if( typeof videojs == 'function' ) {
            videojs('video1', {
                sources: [{
                    src: 'https://d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4?1080',
                    type: 'video/mp4',
                    label: 'HD',
                    res: '1080'
                }, {
                    src: 'https://d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4?480',
                    type: 'video/mp4',
                    label: 'SD',
                    res: '480'
                }]
            });
            clearInterval(pTimer);
        }

    }, 1000);
</script>
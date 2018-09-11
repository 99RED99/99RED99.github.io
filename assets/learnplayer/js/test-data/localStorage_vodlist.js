window.localStorage.setItem('lectid_01', JSON.stringify({
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
    tracks: [{
            src: 'track/captions.en.vtt',
            kind: 'subtitles',
            srclang: 'en',
            label: '영어',
            default: true
        },
        {
            src: 'http://farm.resources.ebs.co.kr/lcms/caption/2017/5/30/LS0000000010645007/3558289295940114_subscript.smi',
            kind: 'subtitles',
            srclang: 'ko',
            label: '한국어'
            // default: false
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
    ],
    poster: 'http://farm.resources.ebs.co.kr/course/2017/2/23/10026573/22831674803476036_course.jpg',
    topbar: {
        topbarText: {
            title: '1강 9까지의 수(1)'
        }
    }
}));
window.localStorage.setItem('lectid_02', JSON.stringify({
    sources: [{
        src: 'http://wstr.ebs.co.kr/ebsvod/elmt/2017/10026573/m10/20170227_153931_m.mp4',
        type: 'video/mp4',
        label: '고화질',
        res: '1080'
    }, {
        src: 'http://wstr.ebs.co.kr/ebsvod/elmt/2017/10026573/m05/20170227_153931_l.mp4',
        type: 'video/mp4',
        label: '일반화질',
        res: '480'
    }],
    tracks: [{
            src: 'track/captions.en.vtt',
            kind: 'subtitles',
            srclang: 'en',
            label: '영어',
            default: true
        },
        {
            src: 'http://farm.resources.ebs.co.kr/lcms/caption/2017/5/30/LS0000000010646826/3558297174100556_subscript.smi',
            kind: 'subtitles',
            srclang: 'ko',
            label: '한국어'
            // default: false
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
    ],
    poster: 'http://farm.resources.ebs.co.kr/course/2017/2/23/10026573/22831674803476036_course.jpg',
    topbar: {
        topbarText: {
            title: '2강 9까지의 수(2)'
        }
    }
}));
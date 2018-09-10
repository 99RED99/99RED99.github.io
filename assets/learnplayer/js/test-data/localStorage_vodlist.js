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
            src: 'track/subtitle.en.srt',
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
            title: '강의제목이 노출 되는 위치 입니다. 길이가 길어지면 말줄임 표시가 되는 형식입니다.'
        }
    }
}));
window.localStorage.setItem('lectid_02', JSON.stringify({
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
            src: 'track/subtitle.en.srt',
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
            title: '강의제목이 노출 되는 위치 입니다. 길이가 길어지면 말줄임 표시가 되는 형식입니다.'
        }
    }
}));
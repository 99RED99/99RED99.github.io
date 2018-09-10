# 클립뱅크 자막 조회

http://farm.resources.ebs.co.kr/edrb/streaming/cc/201312/VOD_20131231_A0003_PT.smi

http://farm.resources.ebs.co.kr/edrb/streaming/cc/201312/VOD_20131231_A0003_ORG.smi

http://farm.resources.ebs.co.kr/edrb/streaming/cc/201312/VOD_20131231_A0003_PT.srt

http://farm.resources.ebs.co.kr/edrb/streaming/cc/201106/VOD_20110610_00001_RU.srt

http://farm.resources.ebs.co.kr/edrb/streaming/cc/201106/VOD_20110610_00001_AR.smi

(function() {
  var player = videojs('player');
	var track = player.addTextTrack("captions", "English", "en");
  console.log(track);
	track.addCue(new VTTCue(1, 18, "This caption should be visible in Safari."));
	track.mode = "showing";
	player.play();
})();

var aa = videojs.getAllPlayers()[0]
var track = aa.textTracks()[2]
track.addCue(new VTTCue(1, 18, "This caption should be visible in Safari."));


VOD_20131231_A0003_PT.smi
VOD_20131231_A0003_ORG.smi
VOD_20131231_A0003_PT.srt
VOD_20110610_00001_RU.srt
VOD_20110610_00001_AR.smi
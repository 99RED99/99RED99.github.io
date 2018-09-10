(function () {
	'use strict';
	var videojs = null;
	if (typeof window.videojs === 'undefined' && typeof require === 'function') {
		videojs = require('video.js');
	} else {
		videojs = window.videojs;
	}

	(function (window, videojs) {

		/**
		 * Uppercase the first letter of a string.
		 */
		function toTitleCase(string) {
			if (typeof string !== 'string') {
				return string;
			}

			return string.charAt(0).toUpperCase() + string.slice(1);
		}

		/**
		 * Compares the TitleCase versions of the two strings for equality.
		 */
		function titleCaseEquals(str1, str2) {
			return toTitleCase(str1) === toTitleCase(str2);
		}

		/**
		 * volume settings CONST
		 */
		var LOCAL_VOLUME_STORAGE_KEY = 'vjs-volume-settings';

		/**
		 * Restore volume settings from localStorage
		 */
		function restoreVolumeSettings() {
			var value = void 0;
			try {
				value = window.localStorage.getItem(LOCAL_VOLUME_STORAGE_KEY);
			} catch (err) {
				videojs.log.warn(err);
			}
			if (!value) {
				value = 1;
			}
			return value;
		}

		/**
		 * Save volume settings from localStorage
		 */
		function saveVolumeSettings(value) {
			try {
				if (typeof value === 'number') {
					window.localStorage.setItem(LOCAL_VOLUME_STORAGE_KEY, value);
				} else {
					window.localStorage.removeItem(LOCAL_VOLUME_STORAGE_KEY);
				}
			} catch (err) {
				videojs.log.warn(err);
			}
		}

		/**
		 * super class check
		 */
		var classCallCheck = function (instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		};

		/**
		 * super class inherits
		 */
		var inherits = function (subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {
				constructor: {
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		};

		/**
		 * super class constructor call
		 */
		var possibleConstructorReturn = function (self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}

			return call && (typeof call === "object" || typeof call === "function") ? call : self;
		};

		var Component = videojs.getComponent('Component');
		var Button = videojs.getComponent('Button');
		var Menu = videojs.getComponent('Menu');
		var MenuButton = videojs.getComponent('MenuButton');
		var MenuItem = videojs.getComponent('MenuItem');
		var ModalDialog = videojs.getComponent('ModalDialog');
		var TextTrackMenuItem = videojs.getComponent('TextTrackMenuItem');
		var PlaybackRateMenuButton = videojs.getComponent('PlaybackRateMenuButton');
		var BigPlayButton = videojs.getComponent('BigPlayButton');

		/**
		 * TopbarText
		 */
		var TopbarText = function (_Component) {
			inherits(TopbarText, _Component);

			function TopbarText(player, options) {
				classCallCheck(this, TopbarText);
				var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
				return _this;
			}

			TopbarText.prototype.createEl = function () {
				var el = _Component.prototype.createEl.call(this, 'div', {
					className: 'vjs-topbar-text',
					dir: 'ltr',
					innerHTML: '<span>' + this.options_.playerOptions.topbar.topbarText.title + '</span>'
				});
				return el;
			};

			return TopbarText;
		}(Component);
		Component.registerComponent('TopbarText', TopbarText);

		/**
		 * BookButton
		 */
		var BookButton = function (_Button) {
			inherits(BookButton, _Button);

			function BookButton(player, options) {
				classCallCheck(this, BookButton);
				var _this = possibleConstructorReturn(this, _Button.call(this, player, options));
				_this.controlText(options && options.controlText || _this.localize('Bookmark'));
				return _this;
			}

			BookButton.prototype.buildCSSClass = function buildCSSClass() {
				return 'vjs-icon-book ' + _Button.prototype.buildCSSClass.call(this);
			};

			BookButton.prototype.handleClick = function handleClick(event) {
				alert('북마크 목록을 보여줍니다(설정메뉴)');
				this.trigger({
					type: 'bookmark',
					bubbles: false
				});
			};

			return BookButton;
		}(Button);
		Component.registerComponent('BookButton', BookButton);

		/**
		 * QnaButton
		 */
		var QnaButton = function (_Button) {
			inherits(QnaButton, _Button);

			function QnaButton(player, options) {
				classCallCheck(this, QnaButton);
				var _this = possibleConstructorReturn(this, _Button.call(this, player, options));
				_this.controlText(options && options.controlText || _this.localize('QNA'));

				if ((options.playerOptions.topbar.qnaButton.href && options.playerOptions.topbar.qnaButton.href.length != 0) || typeof (options.playerOptions.topbar.qnaButton.callback) == "function") {
					_this.show();
				} else {
					_this.hide();
				}
				return _this;
			}

			QnaButton.prototype.buildCSSClass = function buildCSSClass() {
				return 'vjs-icon-qna ' + _Button.prototype.buildCSSClass.call(this);
			};

			QnaButton.prototype.handleClick = function handleClick(event) {
				this.options_.playerOptions.topbar.qnaButton.callback = videojs.bind(this, function (e) {
					if (this.options_.playerOptions.topbar.qnaButton.isPlayStop === true) {
						var player = this.player();
						player.pause();
					}
					if (typeof (this.options_.playerOptions.topbar.qnaButton.extraFunction) == "function") {
						this.options_.playerOptions.topbar.qnaButton.extraFunction();
					} else if (this.options_.playerOptions.topbar.qnaButton.href && this.options_.playerOptions.topbar.qnaButton.href.length != 0) {
						var _url = videojs.parseUrl(this.options_.playerOptions.topbar.qnaButton.href);
						if (this.options_.playerOptions.topbar.qnaButton.target && this.options_.playerOptions.topbar.qnaButton.target == '_blank') {
							window.open(_url.protocol + "//" + _url.host + _url.pathname + _url.search + _url.hash);
						} else {
							window.location.href = _url.protocol + "//" + _url.host + _url.pathname + _url.search + _url.hash;
						}
					}
				});
				this.options_.playerOptions.topbar.qnaButton.pauseOnOpen = false;
				this.player().trigger('messageLayer', this.options_.playerOptions.topbar.qnaButton);
			};
			return QnaButton;
		}(Button);
		Component.registerComponent('QnaButton', QnaButton);

		/**
		 * IndexTrackItem
		 */
		var IndexTrackItem = function (_MenuItem) {
			inherits(IndexTrackItem, _MenuItem);

			function IndexTrackItem(player, options) {
				classCallCheck(this, IndexTrackItem);

				var track = options.track;
				var cue = options.cue;
				var currentTime = player.currentTime();
				options.selectable = true;
				options.multiSelectable = false;
				options.label = cue.text;
				options.selected = cue.startTime <= currentTime && currentTime < cue.endTime;
				var _this = possibleConstructorReturn(this, _MenuItem.call(this, player, options));
				_this.track = track;
				_this.cue = cue;
				track.addEventListener('cuechange', videojs.bind(_this, _this.update));
				return _this;
			}
			IndexTrackItem.prototype.createEl = function createEl(type, props, attrs) {
				this.nonIconControl = true;

				return _MenuItem.prototype.createEl.call(this, 'li', Object.assign({
					className: 'vjs-menu-item',
					innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + '</span>',
					tabIndex: -1
				}, props), attrs);
			};
			IndexTrackItem.prototype.handleClick = function handleClick(event) {
				_MenuItem.prototype.handleClick.call(this);
				this.player_.currentTime(this.cue.startTime);
				this.update(this.cue.startTime);
			};
			IndexTrackItem.prototype.update = function update(event) {
				var cue = this.cue;
				var currentTime = this.player_.currentTime();
				this.selected(cue.startTime <= currentTime && currentTime < cue.endTime);
			};

			return IndexTrackItem;
		}(MenuItem);
		Component.registerComponent('IndexTrackItem', IndexTrackItem);

		/**
		 * IndexLayer
		 */
		var IndexLayer = function (_ModalDialog) {
			inherits(IndexLayer, _ModalDialog);

			function IndexLayer(player, options, indexButton) {
				classCallCheck(this, IndexLayer);
				options.pauseOnOpen = false;
				options.temporary = false;
				var _this = possibleConstructorReturn(this, _ModalDialog.call(this, player, options));

				var tracks = player.textTracks();
				var updateHandler = videojs.bind(_this, _this.updateTrack);
				tracks.addEventListener('removetrack', updateHandler);
				tracks.addEventListener('addtrack', updateHandler);
				player.on('ready', updateHandler);
				player.on('dispose', function () {
					tracks.removeEventListener('removetrack', updateHandler);
					tracks.removeEventListener('addtrack', updateHandler);
				});

				_this.indexButton = indexButton;
				_this.hasBeenOpened_ = _this.hasBeenFilled_ = true;
				if (this.options_.playerOptions.topbar.topbarText.title) {
					var title = videojs.dom.createEl('div', {
						className: 'vjs-menu-title',
						innerHTML: this.options_.playerOptions.topbar.topbarText.title,
						tabIndex: -1
					});
					videojs.dom.prependTo(title, _this.el());
				}
				_this.endDialog = videojs.dom.createEl('p', {
					className: 'vjs-control-text',
					textContent: _this.localize('End of dialog window.')
				});
				_this.el().appendChild(_this.endDialog);
				return _this;
			}
			IndexLayer.prototype.updateTrack = function update(event) {
				if (!this.track_ || event && (event.type === 'addtrack' || event.type === 'removetrack')) {
					this.setTrack(this.findChaptersTrack());
				}

				if (event && event.type === 'load' && event.target && event.target.src && Array.isArray(event.target.src)) {
					for (var i in event.target.src) {
						event.target.track.addCue(new VTTCue(event.target.src[i].startTime, event.target.src[i].endTime, event.target.src[i].text));
						//event.target.track.mode = "showing";
					}
				}
				var menu = this.createMenu();
				if (this.menu) {
					this.menu.dispose();
					this.removeChild(this.menu);
				}

				this.menu = menu;
				this.menuEl_ = menu.el_;
				this.fill();
				this.buttonPressed_ = false;

				if (this.items && this.items.length <= this.hideThreshold_) {
					menu.hide();
				} else {
					menu.show();
					this.indexButton.show();
				}
			};
			IndexLayer.prototype.setTrack = function setTrack(track) {
				if (this.track_ === track) {
					return;
				}
				if (!this.updateHandler_) {
					this.updateHandler_ = this.updateTrack.bind(this);
				}
				if (this.track_) {
					var remoteTextTrackEl = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
					if (remoteTextTrackEl) {
						remoteTextTrackEl.removeEventListener('load', this.updateHandler_);
					}
					this.track_ = null;
				}
				this.track_ = track;
				if (this.track_) {
					this.track_.mode = 'hidden';
					var _remoteTextTrackEl = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
					if (_remoteTextTrackEl) {
						_remoteTextTrackEl.addEventListener('load', this.updateHandler_);
					}
				}
			};
			IndexLayer.prototype.findChaptersTrack = function findChaptersTrack() {
				var tracks = this.player_.textTracks() || [];
				for (var i = tracks.length - 1; i >= 0; i--) {
					var track = tracks[i];
					if (track.kind === 'chapters') {
						return track;
					}
				}
			};
			IndexLayer.prototype.createMenu = function createMenu() {
				videojs.log("IndexLayer.prototype.createMenu()");
				var menu = new Menu(this.player_);
				this.items = this.createItems();
				if (this.items) {
					for (var i = 0; i < this.items.length; i++) {
						menu.addItem(this.items[i]);
					}
				}
				return menu;
			};
			IndexLayer.prototype.createItems = function createItems() {
				var items = [];
				if (!this.track_) {
					return items;
				}
				var cues = this.track_.cues;
				if (!cues) {
					return items;
				}
				for (var i = 0, l = cues.length; i < l; i++) {
					var cue = cues[i];
					var mi = new IndexTrackItem(this.player_, {
						track: this.track_,
						cue: cue
					});
					items.push(mi);
				}
				return items;
			};
			IndexLayer.prototype.open = function open() {
				this.player().topbarWrap.toggleClass('vjs-zeroOpacity');
				// var _topbarChildren = this.player().topbarWrap.children_;
				// for (var i in _topbarChildren) {
				// 	_topbarChildren[i].toggleClass('vjs-invisible');
				// }

				_ModalDialog.prototype.open.call(this);
				this.player().controls(true);
			}
			IndexLayer.prototype.close = function close() {
				videojs.log("IndexLayer.prototype.close()");
				this.player().topbarWrap.toggleClass('vjs-zeroOpacity');
				// var _topbarChildren = this.player().topbarWrap.children_;
				// for (var i in _topbarChildren) {
				// 	_topbarChildren[i].toggleClass('vjs-invisible');
				// }
				this.indexButton.unpressButton();
				_ModalDialog.prototype.close.call(this);
			}

			IndexLayer.prototype.dispose = function dispose() {
				this.endDialog = null;
				_ModalDialog.prototype.dispose.call(this);
			};

			IndexLayer.prototype.content = function content() {
				return this.menuEl_;
			};

			IndexLayer.prototype.buildCSSClass = function buildCSSClass() {
				return _ModalDialog.prototype.buildCSSClass.call(this) + ' vjs-index-layer';
			};
			IndexLayer.prototype.conditionalBlur_ = function conditionalBlur_() {
				this.previouslyActiveEl_ = null;
				this.off(document, 'keydown', this.handleKeyDown);
				this.player_.$('.vjs-icon-index').focus();
			};

			return IndexLayer;
		}(ModalDialog);
		Component.registerComponent('IndexLayer', IndexLayer);

		/**
		 * IndexButton
		 */
		var IndexButton = function (_Button) {
			inherits(IndexButton, _Button);

			function IndexButton(player, options) {
				classCallCheck(this, IndexButton);
				var _this = possibleConstructorReturn(this, _Button.call(this, player, options));
				_this.controlText(options && options.controlText || _this.localize('Index'));
				_this.el_.setAttribute('aria-haspopup', 'true');
				_this.hide();
				_this.enabled_ = true;
				_this.on('tap', _this.handleClick);
				_this.on('click', _this.handleClick);
				_this.on('focus', _this.handleFocus);
				_this.on('blur', _this.handleBlur);
				_this.on('keydown', _this.handleSubmenuKeyPress);
				_this.indexLayer = new IndexLayer(player, options, _this);
				player.addChild(_this.indexLayer);
				return _this;
			}

			IndexButton.prototype.buildCSSClass = function buildCSSClass() {
				return 'vjs-icon-index ' + _Button.prototype.buildCSSClass.call(this);
			};

			IndexButton.prototype.handleClick = function handleClick(event) {
				if (this.buttonPressed_) {
					this.unpressButton();
				} else {
					this.pressButton();
				}
			};
			IndexButton.prototype.handleFocus = function handleFocus() {
				this.on(document, 'keydown', videojs.bind(this, this.handleKeyPress));
			};
			IndexButton.prototype.handleBlur = function handleBlur() {
				this.off(document, 'keydown', videojs.bind(this, this.handleKeyPress));
			};
			IndexButton.prototype.handleKeyPress = function handleKeyPress(event) {
				if (event.which === 27 || event.which === 9) {
					if (this.buttonPressed_) {
						this.unpressButton();
					}
					if (event.which !== 9) {
						event.preventDefault();
						this.el_.focus();
					}
				} else if (event.which === 38 || event.which === 40) {
					if (!this.buttonPressed_) {
						this.pressButton();
						event.preventDefault();
					}
				}
			};
			IndexButton.prototype.handleSubmenuKeyPress = function handleSubmenuKeyPress(event) {
				if (event.which === 27 || event.which === 9) {
					if (this.buttonPressed_) {
						this.unpressButton();
					}
					if (event.which !== 9) {
						event.preventDefault();
						this.el_.focus();
					}
				}
			};
			IndexButton.prototype.pressButton = function pressButton() {
				if (this.enabled_) {
					this.buttonPressed_ = true;
					// this.indexLayer.lockShowing();
					// this.el_.setAttribute('aria-expanded', 'true');
					if (videojs.browser.IS_IOS && videojs.dom.isInFrame()) {
						return;
					}
					this.indexLayer.open();
				}
			};
			IndexButton.prototype.unpressButton = function unpressButton() {
				if (this.enabled_) {
					this.buttonPressed_ = false;
					// this.indexLayer.unlockShowing();
					this.el_.setAttribute('aria-expanded', 'false');
				}
			};
			IndexButton.prototype.disable = function disable() {
				this.unpressButton();
				this.enabled_ = false;
				this.addClass('vjs-disabled');
			};
			IndexButton.prototype.enable = function enable() {
				this.enabled_ = true;
				this.removeClass('vjs-disabled');
			};

			return IndexButton;
		}(Button);
		Component.registerComponent('IndexButton', IndexButton);

		/**
		 * TopbarWrap
		 */
		var TopbarWrap = function (_Component) {
			inherits(TopbarWrap, _Component);

			function TopbarWrap(player, options) {
				classCallCheck(this, TopbarWrap);
				var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
				return _this;
			}

			TopbarWrap.prototype.createEl = function createEl$$1() {
				var el = _Component.prototype.createEl.call(this, 'div', {
					className: 'vjs-topbar-wrap',
					dir: 'ltr'
				});
				var _this = this;
				setTimeout(function () {
					_this.player_.el_.insertBefore(el, _this.player_.el_.getElementsByTagName('video')[0]);
				}, 1);
				return el;
			};
			TopbarWrap.prototype.options_ = {
				// children: ['topbarText', 'bookButton', 'qnaButton', 'IndexButton']
				children: ['topbarText', 'qnaButton', 'IndexButton']
			};

			return TopbarWrap;
		}(Component);
		Component.registerComponent('TopbarWrap', TopbarWrap);

		/**
		 * BigPlay1Button
		 */
		var BigPlay1Button = function (_BigPlayButton) {
			inherits(BigPlay1Button, _BigPlayButton);

			function BigPlay1Button(player, options) {
				classCallCheck(this, BigPlay1Button);
				var _this = possibleConstructorReturn(this, _BigPlayButton.call(this, player, options));
				return _this;
			}
			BigPlay1Button.prototype.handleClick = function handleClick(event) {
				if (!this.player_.paused()) {
					this.player_.pause();
				} else {
					_BigPlayButton.prototype.handleClick.call(this, event);
				}
			};

			return BigPlay1Button;
		}(BigPlayButton);
		Component.registerComponent('BigPlay1Button', BigPlay1Button);

		/**
		 * ResolutionButton
		 */
		var ResolutionButton = function (_Component) {
			inherits(ResolutionButton, _Component);

			function ResolutionButton(player, options) {
				classCallCheck(this, ResolutionButton);
				var _this = possibleConstructorReturn(this, _Component.call(this, player, options));
				player.on('updateSources', videojs.bind(this, this.createResolutionMenu));
				return _this;
			}
			ResolutionButton.prototype.createEl = function () {
				return _Component.prototype.createEl.call(this, 'div', {
					className: 'vjs-resolution-button'
				});
			};
			ResolutionButton.prototype.createResolutionMenu = function () {
				var menu = new Menu(this.player());
				videojs.dom.addClass(menu.contentEl().parentNode, 'quality-menu');
				this.sources = this.player_.getGroupedSrc();
				var labels = (this.sources && this.sources.label) || {};
				for (var key in labels) {
					if (labels.hasOwnProperty(key)) {
						menu.addChild(new ResolutionMenuItem(
							this.player_, {
								label: key,
								src: labels[key],
								selected: key === (this.currentSelection ? this.currentSelection.label : false)
							}));
					}
				}
				this.addChild(menu);
			};

			return ResolutionButton;
		}(Component);
		Component.registerComponent('ResolutionButton', ResolutionButton);

		/**
		 * CaptionsToggleButton
		 */
		var CaptionsToggleButton = function (_Button) {
			inherits(CaptionsToggleButton, _Button);

			function CaptionsToggleButton(player, options) {
				videojs.log("CaptionsToggleButton");
				classCallCheck(this, CaptionsToggleButton);
				var _this = possibleConstructorReturn(this, _Button.call(this, player, options));
				_this.controlText(options && options.controlText || _this.localize('captions toggle'));
				_this.selected = false;
				_this._tracks = player.textTracks();
				var updateHandler = videojs.bind(_this, _this.updateTrack);
				_this._tracks.addEventListener('change', updateHandler);
				// _this.on('touchstart', videojs.bind(this, function (event) {
				// 	this.toggleCaptions();
				// 	event.preventDefault();
				// }));
				return _this;
			}

			CaptionsToggleButton.prototype.updateTrack = function update(event) {
				this.selected = false;
				for (var i = 0; i < this._tracks.length; i++) {
					videojs.log(this._tracks[i].kind + " : " + this._tracks[i].mode + " : " + this._tracks[i].default);
					if ((this._tracks[i].kind === 'captions' || this._tracks[i].kind === 'subtitles') && this._tracks[i].mode == 'showing') {
						this.selected = true;
						this.player_.cache_.track = this._tracks[i];
						break;
					}
				}
				if (this.selected) {
					this.addClass('vjs-selected');
				} else {
					this.removeClass('vjs-selected');
				}
			};

			CaptionsToggleButton.prototype.toggleCaptions = function () {
				videojs.log('CaptionsToggleButton.prototype.toggleCaptions()');
				for (var i = 0; i < this._tracks.length; i++) {
					if (this.selected) {
						this._tracks[i].mode = 'disabled';
					} else {
						if (this.player_.cache_.track) {
							if (this._tracks[i].kind == this.player_.cache_.track.kind && this._tracks[i].language == this.player_.cache_.track.language && this._tracks[i].label == this.player_.cache_.track.label) {
								this._tracks[i].mode = 'showing';
								break;
							}
						} else {
							this.preselectTrack();
							break;
						}
					}
				}
			};
			CaptionsToggleButton.prototype.preselectTrack = function preselectTrack() {
				videojs.log('CaptionsToggleButton.prototype.preselectTrack()');
				var trackList = this.player_.textTracks();
				var preferredTrack = void 0;
				for (var i = trackList.length - 1; i >= 0; i--) {
					var track = trackList[i];
					if (track.kind === 'captions' || track.kind === 'subtitles') {
						preferredTrack = track;
						if (this.player_.language_ === track.language) {
							break;
						}
					}
				}
				if (preferredTrack) {
					preferredTrack.mode = 'showing';
				}
			};
			CaptionsToggleButton.prototype.buildCSSClass = function buildCSSClass() {
				return 'vjs-captions-button ' + _Button.prototype.buildCSSClass.call(this);
			};
			CaptionsToggleButton.prototype.handleClick = function handleClick(event) {
				this.toggleCaptions();
			};

			return CaptionsToggleButton;
		}(Button);
		Component.registerComponent('CaptionsToggleButton', CaptionsToggleButton);

		/*
		 * PlaybackRateMenu1 Button
		 */
		var PlaybackRateMenu1Button = function (_PlaybackRateMenuButton) {
			inherits(PlaybackRateMenu1Button, _PlaybackRateMenuButton);

			function PlaybackRateMenu1Button(player, options) {
				classCallCheck(this, PlaybackRateMenu1Button);
				var _this = possibleConstructorReturn(this, _PlaybackRateMenuButton.call(this, player, options));
				return _this;
			}
			PlaybackRateMenu1Button.prototype.handleClick = function (event) {
				this.one(this.menu.contentEl(), 'mouseleave', videojs.bind(this, function (e) {
					this.unpressButton();
					this.el_.blur();
				}));
				if (this.buttonPressed_) {
					this.unpressButton();
				} else {
					this.pressButton();
				}
			};

			return PlaybackRateMenu1Button;
		}(PlaybackRateMenuButton);
		Component.registerComponent('PlaybackRateMenu1Button', PlaybackRateMenu1Button);

		/*
		 * Resolution menu item
		 */
		var ResolutionMenuItem = function (_MenuItem) {
			inherits(ResolutionMenuItem, _MenuItem);

			function ResolutionMenuItem(player, options) {
				classCallCheck(this, ResolutionMenuItem);
				options.selectable = true;
				var _this = possibleConstructorReturn(this, _MenuItem.call(this, player, options));
				this.src = options.src;
				player.on('resolutionchange', videojs.bind(this, this.update));
				return _this;
			}
			ResolutionMenuItem.prototype.handleClick = function (event) {
				MenuItem.prototype.handleClick.call(this, event);
				if (this.options_.parentObj !== undefined) {
					this.options_.parentObj.selectedMenuName = 'basic-menu';
					this.options_.parentObj.pressButton();
				}
				this.player_.currentResolution(this.options_.label);
			};
			ResolutionMenuItem.prototype.update = function () {
				var selection = this.player_.currentResolution();
				this.selected(this.options_.label === selection.label);
			};

			return ResolutionMenuItem;
		}(MenuItem);

		Component.registerComponent('ResolutionMenuItem', ResolutionMenuItem);

		/*
		 * Resolution menu button
		 */
		var ResolutionMenuButton = function (_MenuButton) {
			inherits(ResolutionMenuButton, _MenuButton);

			function ResolutionMenuButton(player, options) {
				classCallCheck(this, ResolutionMenuButton);
				this.label = document.createElement('span');
				options.label = 'Quality';
				var _this = possibleConstructorReturn(this, _MenuButton.call(this, player, options));
				this.el().setAttribute('aria-label', 'Quality');
				this.controlText('Quality');
				var vjsDom = videojs.dom || videojs;
				if (options.dynamicLabel) {
					vjsDom.addClass(this.label, 'vjs-resolution-button-label');
					this.el().appendChild(this.label);
				} else {
					var staticLabel = document.createElement('span');
					vjsDom.addClass(staticLabel, 'vjs-menu-icon');
					this.el().appendChild(staticLabel);
				}
				player.on('updateSources', videojs.bind(this, this.update));
				return _this;
			}
			ResolutionMenuButton.prototype.createItems = function () {
				var menuItems = [];
				var labels = (this.sources && this.sources.label) || {};

				// FIXME order is not guaranteed here.
				for (var key in labels) {
					if (labels.hasOwnProperty(key)) {
						menuItems.push(new ResolutionMenuItem(
							this.player_, {
								label: key,
								src: labels[key],
								selected: key === (this.currentSelection ? this.currentSelection.label : false)
							}));
					}
				}
				return menuItems;
			};
			ResolutionMenuButton.prototype.update = function () {
				this.sources = this.player_.getGroupedSrc();
				this.currentSelection = this.player_.currentResolution();
				this.label.innerHTML = this.currentSelection ? this.currentSelection.label : '';
				return MenuButton.prototype.update.call(this);
			};
			ResolutionMenuButton.prototype.buildCSSClass = function () {
				return 'vjs-resolution-button ' + MenuButton.prototype.buildCSSClass.call(this);
			};
			ResolutionMenuButton.prototype.buildWrapperCSSClass = function buildWrapperCSSClass() {
				return 'vjs-resolution-button ' + MenuButton.prototype.buildWrapperCSSClass.call(this);
			};

			return ResolutionMenuButton;

		}(MenuButton);
		Component.registerComponent('ResolutionMenuButton', ResolutionMenuButton);

		/*
		 * Captions menu item
		 */
		var CaptionsMenuItem = function (_TextTrackMenuItem) {
			inherits(CaptionsMenuItem, _TextTrackMenuItem);

			function CaptionsMenuItem(player, options) {
				classCallCheck(this, CaptionsMenuItem);
				options.selectable = true;
				var _this = possibleConstructorReturn(this, _TextTrackMenuItem.call(this, player, options));
				return _this;
			}
			CaptionsMenuItem.prototype.handleClick = function (event) {
				_TextTrackMenuItem.prototype.handleClick.call(this, event);
				this.options_.parentObj.selectedMenuName = 'basic-menu';
				this.options_.parentObj.pressButton();
			};

			return CaptionsMenuItem;
		}(TextTrackMenuItem);
		Component.registerComponent('CaptionsMenuItem', CaptionsMenuItem);

		/*
		 * Hotkeys menu item
		 */
		var HotkeysMenuItem = function (_MenuItem) {
			inherits(HotkeysMenuItem, _MenuItem);

			function HotkeysMenuItem(player, options) {
				classCallCheck(this, HotkeysMenuItem);
				var _this = possibleConstructorReturn(this, _MenuItem.call(this, player, options));
				return _this;
			}
			HotkeysMenuItem.prototype.createEl = function createEl(type, props, attrs) {
				this.nonIconControl = true;

				this.tabIndex_ = -1;
				var el = videojs.dom.createEl('li', {
					className: 'vjs-menu-item',
					innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.labelObj.name) + '</span>' + '<span class="vjs-menu-item-text">' + this.localize(this.options_.labelObj.description) + '</span>',
					tabIndex: -1
				});
				_MenuItem.prototype.createControlTextEl.call(this, el);
				return el;
			};
			HotkeysMenuItem.prototype.handleClick = function (event) {
				_MenuItem.prototype.handleClick.call(this, event);
				this.options_.parentObj.selectedMenuName = 'basic-menu';
				this.options_.parentObj.pressButton();
			};

			return HotkeysMenuItem;
		}(MenuItem);
		Component.registerComponent('HotkeysMenuItem', HotkeysMenuItem);

		/*
		 * Info menu item
		 */
		var InfoMenuItem = function (_MenuItem) {
			inherits(InfoMenuItem, _MenuItem);

			function InfoMenuItem(player, options) {
				classCallCheck(this, InfoMenuItem);
				var _this = possibleConstructorReturn(this, _MenuItem.call(this, player, options));
				return _this;
			}
			InfoMenuItem.prototype.handleClick = function (event) {
				_MenuItem.prototype.handleClick.call(this, event);
				this.options_.parentObj.selectedMenuName = 'basic-menu';
				this.options_.parentObj.pressButton();
			};

			return InfoMenuItem;
		}(MenuItem);
		Component.registerComponent('InfoMenuItem', InfoMenuItem);

		/**
		 * SettingMenuItem
		 */
		var SettingMenuItem = function (_MenuItem) {
			inherits(SettingMenuItem, _MenuItem);

			function SettingMenuItem(player, options) {
				classCallCheck(this, SettingMenuItem);
				var _this = possibleConstructorReturn(this, _MenuItem.call(this, player, options));
				return _this;
			}
			SettingMenuItem.prototype.handleClick = function (event) {
				_MenuItem.prototype.handleClick.call(this, event);
				this.options_.parentObj.selectedMenuName = this.options_.label.replace(' ', '_') + '-menu';
				this.options_.parentObj.pressButton();
			};

			return SettingMenuItem;
		}(MenuItem);
		Component.registerComponent('SettingMenuItem', SettingMenuItem);

		/**
		 * SettingMenuButton
		 */
		var SettingMenuButton = function (_MenuButton) {
			inherits(SettingMenuButton, MenuButton);

			function SettingMenuButton(player, options) {
				classCallCheck(this, SettingMenuButton);
				this.menuList = {};
				this.selectedMenuName = 'basic-menu';
				var _this = possibleConstructorReturn(this, MenuButton.call(this, player, options));
				//_this.addClass('basic-menu');
				player.on('updateSources', videojs.bind(this, this.createResolutionMenu));
				var tracks = player.textTracks();
				tracks.one('change', videojs.bind(_this, _this.createCaptionsMenu));
				this.createHotkeysMenu();
				this.createInfoMenu();
				return _this;
			}
			SettingMenuButton.prototype.createMenu = function () {
				//var menuLabels = ['Bookmark', 'Quality', 'Captions Language', 'Hotkeys', 'Info'];
				var menuLabels = ['Quality', 'Captions Language', 'Hotkeys', 'Info'];
				var menu = new Menu(this.player_, {
					menuButton: this
				});
				videojs.dom.addClass(menu.contentEl().parentNode, 'basic-menu');

				for (var i = 0, l = menuLabels.length; i < l; i++) {
					menu.addChild(new SettingMenuItem(this.player_, {
						label: menuLabels[i],
						parentObj: this
					}));
				}

				this.menuList['basic-menu'] = menu;

				return menu;
			};
			// SettingMenuButton.prototype.createBookmarkMenu = function () {
			// };
			SettingMenuButton.prototype.createResolutionMenu = function () {
				videojs.log("SettingMenuButton.prototype.createResolutionMenu()");
				var menu = new Menu(this.player());
				videojs.dom.addClass(menu.contentEl().parentNode, 'quality-menu');

				var title = videojs.dom.createEl('li', {
					className: 'vjs-menu-title',
					innerHTML: toTitleCase(this.localize('Quality')),
					tabIndex: -1
				});
				this.on(title, 'click', videojs.bind(this, function (e) {
					this.selectedMenuName = 'basic-menu';
					this.pressButton();
				}));
				menu.children_.unshift(title);
				videojs.dom.prependTo(title, menu.contentEl());

				this.sources = this.player_.getGroupedSrc();
				var labels = (this.sources && this.sources.label) || {};
				for (var key in labels) {
					if (labels.hasOwnProperty(key)) {
						menu.addChild(new ResolutionMenuItem(
							this.player_, {
								label: key,
								src: labels[key],
								selected: key === (this.currentSelection ? this.currentSelection.label : false),
								parentObj: this
							}));
					}
				}
				this.addChild(menu);
				this.menuList['Quality-menu'] = menu;
			};
			SettingMenuButton.prototype.createCaptionsMenu = function () {
				var menu = new Menu(this.player());
				videojs.dom.addClass(menu.contentEl().parentNode, 'captions-menu');

				var title = videojs.dom.createEl('li', {
					className: 'vjs-menu-title',
					innerHTML: toTitleCase(this.localize('Captions Language')),
					tabIndex: -1
				});
				this.on(title, 'click', videojs.bind(this, function (e) {
					this.selectedMenuName = 'basic-menu';
					this.pressButton();
				}));
				menu.children_.unshift(title);
				videojs.dom.prependTo(title, menu.contentEl());

				var tracks = this.player_.textTracks();
				var kinds_ = ['captions', 'subtitles'];
				for (var i = 0; i < tracks.length; i++) {
					var track = tracks[i];
					if (kinds_.indexOf(track.kind) > -1) {
						var item = new CaptionsMenuItem(this.player_, {
							track: track,
							parentObj: this
						});
						item.addClass('vjs-' + track.kind + '-menu-item');
						menu.addChild(item);
					}
				}

				this.addChild(menu);
				this.menuList['Captions_Language-menu'] = menu;
			};
			SettingMenuButton.prototype.createHotkeysMenu = function () {
				var menuLabels = [{
						name: 'Space Bar',
						description: '재생 / 일시정지'
					},
					{
						name: 'Enter | F',
						description: '전체화면 / 일반화면'
					},
					{
						name: 'Esc',
						description: '일반화면'
					},
					// {
					// 	name: 'B',
					// 	description: '북마크'
					// },
					{
						name: '&#8593;', // ↑
						description: '볼륨 증가'
					},
					{
						name: '&#8595;', // ↓
						description: '볼륨 감소'
					},
					{
						name: '&#8592;', // ←
						description: '배속 증가'
					},
					{
						name: '&#8594;', // →
						description: '배속 감소'
					}
				];
				var menu = new Menu(this.player());
				videojs.dom.addClass(menu.contentEl().parentNode, 'hotkeys-menu');

				var title = videojs.dom.createEl('li', {
					className: 'vjs-menu-title',
					innerHTML: toTitleCase(this.localize('Hotkeys')),
					tabIndex: -1
				});
				this.on(title, 'click', videojs.bind(this, function (e) {
					this.selectedMenuName = 'basic-menu';
					this.pressButton();
				}));
				menu.children_.unshift(title);
				videojs.dom.prependTo(title, menu.contentEl());

				for (var i = 0, l = menuLabels.length; i < l; i++) {
					menu.addChild(new HotkeysMenuItem(this.player_, {
						label: 'Hotkeys',
						labelObj: menuLabels[i],
						parentObj: this
					}));
				}
				this.addChild(menu);
				this.menuList['Hotkeys-menu'] = menu;
			};
			SettingMenuButton.prototype.createInfoMenu = function () {
				var menu = new Menu(this.player());

				videojs.dom.addClass(menu.contentEl().parentNode, 'info-menu');
				var title = videojs.dom.createEl('li', {
					className: 'vjs-menu-title',
					innerHTML: toTitleCase(this.localize('Info')),
					tabIndex: -1
				});
				this.on(title, 'click', videojs.bind(this, function (e) {
					this.selectedMenuName = 'basic-menu';
					this.pressButton();
				}));
				menu.children_.unshift(title);
				videojs.dom.prependTo(title, menu.contentEl());

				var item = new InfoMenuItem(this.player_, {
					label: this.options_.playerOptions.playerInfo.innerHtml || 'EOSF player',
					parentObj: this
				});
				menu.addChild(item);
				this.addChild(menu);
				this.menuList['Info-menu'] = menu;
			};
			SettingMenuButton.prototype.handleClick = function (event) {
				videojs.log("SettingMenuButton.prototype.handleClick()::" + event);
				if (this.buttonPressed_) {
					this.unpressButton();
				} else {
					this.pressButton();
				}
			};
			SettingMenuButton.prototype.pressButton = function pressButton() {
				videojs.log("SettingMenuButton.prototype.pressButton()");
				if (this.enabled_) {
					this.buttonPressed_ = true;
					this.menuButton_.el_.setAttribute('aria-expanded', 'true');
					if (videojs.browser.IS_IOS && videojs.dom.isInFrame()) {
						return;
					}

					var menuList = this.menuList;
					var selectedMenuName = this.selectedMenuName;
					Object.keys(menuList).forEach(function (menuName) {
						var menu = menuList[menuName];
						if (selectedMenuName === menuName) {
							menu.lockShowing();
							// menu.focus();
						} else {
							menu.unlockShowing();
						}
					});

				}
			};
			SettingMenuButton.prototype.unpressButton = function unpressButton() {
				videojs.log("SettingMenuButton.prototype.unpressButton()");
				if (this.enabled_) {
					this.buttonPressed_ = false;
					this.menuButton_.el_.setAttribute('aria-expanded', 'false');
					var menuList = this.menuList;
					Object.keys(menuList).forEach(function (menuName) {
						var menu = menuList[menuName];
						menu.unlockShowing();
					});
				}
			};
			SettingMenuButton.prototype.buildCSSClass = function () {
				return 'vjs-icon-cog vjs-setting ' + _MenuButton.prototype.buildCSSClass.call(this);
			};
			SettingMenuButton.prototype.buildWrapperCSSClass = function () {
				return 'vjs-icon-cog vjs-setting ' + _MenuButton.prototype.buildWrapperCSSClass.call(this);
			};
			SettingMenuButton.prototype.controlText_ = 'Setting';

			return SettingMenuButton;
		}(MenuButton);
		Component.registerComponent('SettingMenuButton', SettingMenuButton);

		/**
		 * MessageLayer
		 */
		var MessageLayer = function (_ModalDialog) {
			inherits(MessageLayer, _ModalDialog);

			function MessageLayer(player, options) {
				classCallCheck(this, MessageLayer);
				this.messageOptions = {};
				options.temporary = false;
				options.uncloseable = true;
				var _this = possibleConstructorReturn(this, _ModalDialog.call(this, player, options));
				_this.on(player, 'messageLayer', _this.openWithOption);
				return _this;
			}
			MessageLayer.prototype.openWithOption = function (event, data) {
				videojs.log("MessageLayer.prototype.openWithOption");
				videojs.log(data);
				videojs.log(this);

				this.messageOptions = {};
				if (data) {
					this.options_.pauseOnOpen = data.pauseOnOpen;
					this.messageOptions = data;
					this.open();
				}
			};
			MessageLayer.prototype.buildCSSClass = function () {
				return 'vjs-message-display ' + _ModalDialog.prototype.buildCSSClass.call(this);
			};
			MessageLayer.prototype.content = function () {
				var _box = videojs.dom.createEl('div', {
					className: 'vjs-modal-dialog-box'
				});
				var _title = videojs.dom.createEl('div', {
					className: 'vjs-modal-dialog-title',
					innerHTML: this.messageOptions.title || '알림'
				});
				videojs.dom.appendContent(_box, _title);
				if (this.messageOptions.message && this.messageOptions.message.length != 0) {
					var _message = videojs.dom.createEl('div', {
						className: 'vjs-modal-dialog-message',
						innerHTML: this.messageOptions.message
					});
					videojs.dom.appendContent(_box, _message);
				}
				if (this.messageOptions.info && this.messageOptions.info.length != 0) {
					var _info = videojs.dom.createEl('div', {
						className: 'vjs-modal-dialog-info',
						innerHTML: this.messageOptions.info
					});
					videojs.dom.appendContent(_box, _info);
				}
				var _buttonWrap = videojs.dom.createEl('div', {
					className: 'vjs-modal-dialog-buttonWrap'
				});
				var _btn_ok = videojs.dom.createEl('button', {
					className: 'vjs-modal-dialog-btn_ok',
					textContent: '확인'
				});
				videojs.dom.appendContent(_buttonWrap, _btn_ok);
				this.on(_btn_ok, 'click', videojs.bind(this, function (e) {
					if (typeof this.messageOptions.callback == 'function') {
						this.messageOptions.callback();
					}
					this.close();
				}));

				if (this.messageOptions.messageType && this.messageOptions.messageType == 'confirm') {
					var _btn_cancel = videojs.dom.createEl('button', {
						className: 'vjs-modal-dialog-btn_cancel',
						textContent: '취소'
					});
					videojs.dom.appendContent(_buttonWrap, _btn_cancel);
					this.on(_btn_cancel, 'click', this.close);
				}
				videojs.dom.appendContent(_box, _buttonWrap);

				return _box;
			};

			return MessageLayer;
		}(ModalDialog);
		Component.registerComponent('MessageLayer', MessageLayer);

		var ContinuePlay = function (playerObj) {
			if (this.options_.continue.time > 0) {
				if (this.options_.continue.isShowMessage === true) {
					this.options_.continue.info = videojs.formatTime(this.options_.continue.time);
					this.options_.continue.callback = videojs.bind(this, function (e) {
						this.currentTime(this.options_.continue.time);
						this.options_.continue.time = 0;
					});
					this.trigger('messageLayer', this.options_.continue);
				} else {
					this.currentTime(this.options_.continue.time);
					this.options_.continue.time = 0;
				}
			}
		};

		var TimeInfo = function (playerObj) {
			var player = playerObj;
			var secondStatsArray;
			var firstPlayingTimer;
			var actedPlayedTime = 0;
			var currentTime = 0;
			var timeupdateCurrentTime = 0;

			// call anyTime lms
			var getTimeInfo = function () {
				if (!player.paused()) {
					setStop();
				}
				var _stayedTime = Math.floor((Date.now() - firstPlayingTimer) / 1000);
				var _durationTime = player.duration();
				var _playedTimeRanges = player.played();
				var _playedTime = 0;
				var _playedTimeRangesStart;
				var _playedTimeRangesEnd;
				for (var i = 0; i < _playedTimeRanges.length; i++) {
					_playedTimeRangesStart = _playedTimeRanges.start(i);
					_playedTimeRangesEnd = _playedTimeRanges.end(i);
					if (_playedTimeRangesEnd > _durationTime) {
						_playedTimeRangesEnd = _durationTime;
					}

					_playedTime += _playedTimeRangesEnd - _playedTimeRangesStart;
				}
				if (Array.isArray(secondStatsArray)) {
					for (var i = 0; i < secondStatsArray.length; i++) {
						if (secondStatsArray[i] == undefined) {
							secondStatsArray[i] = {
								second: i,
								count: 0
							};
						}
					}
				}
				return {
					stayedTime: _stayedTime || 0,
					actedPlayedTime: actedPlayedTime,
					playedTime: _playedTime,
					durationTime: _durationTime,
					lastTimePosition: player.currentTime(),
					secondStatsArray: secondStatsArray || []
				};
			};
			// call playing event once
			var setFirstPlaying = function () {
				firstPlayingTimer = Date.now();
				secondStatsArray = new Array(Math.floor(player.duration()));
			};
			// call playing event each
			var setPlay = function () {
				currentTime = timeupdateCurrentTime = player.currentTime();
			};
			var setTimeupdate = function () {
				var _currentTime = player.currentTime();
				// check seeking
				if (Math.abs(_currentTime - timeupdateCurrentTime) > 0.3) {
					return;
				}
				timeupdateCurrentTime = _currentTime;
			};
			// call not plaing event each ['ended', 'pause', 'waiting']
			var setStop = function (stopedCurrentTime) {
				var _stopedCurrentTime = timeupdateCurrentTime;
				var _stopedCurrentTimeInt = Math.floor(_stopedCurrentTime);
				var _currentTimeInt = Math.floor(currentTime);
				var _calculateTime = _stopedCurrentTime - currentTime;
				if (_calculateTime <= 0) {
					return;
				}
				actedPlayedTime += _calculateTime;
				currentTime = _stopedCurrentTime;
				if (_stopedCurrentTimeInt - _currentTimeInt == 0) {
					return;
				}
				for (var i = _currentTimeInt; i <= _stopedCurrentTimeInt; i++) {
					var _item = secondStatsArray[i];
					if (_item == undefined) {
						secondStatsArray[i] = {
							second: i,
							count: 1
						};
					} else {
						secondStatsArray[i].count++;
					}
				}

			}
			return {
				setFirstPlaying: setFirstPlaying,
				setPlay: setPlay,
				setTimeupdate: setTimeupdate,
				setStop: setStop,
				getTimeInfo: getTimeInfo
			};
		};

		/**
		 * LearnPlugin
		 */
		var LearnPlugin = function (player, options) {
			player.addClass('video-js');
			player.on('mouseleave', function () {
				player.userActive(false);
			});
			player.on('playerresize', function () {
				player.trigger('texttrackchange');
			});

			var beforeReadyTextTrackHide = function () {
				player.textTrackDisplay.hide();
			}
			if (player.options_.isMobile !== true) {
				player.on('volumechange', function () {
					saveVolumeSettings(player.muted() ? 0 : player.volume()); // 볼륨값 로컬 저장
				});
				player.one('ready', function () {
					var value = restoreVolumeSettings(); // 볼륨값 복원
					player.volume(value);
					if (value == 0) {
						player.muted(true);
					} else {
						player.muted(false);
					}
				});
			}
			player.on('texttrackchange', beforeReadyTextTrackHide);
			player.on('ready', function () {
				setTimeout(function () {
					player.off('texttrackchange', beforeReadyTextTrackHide);
					player.textTrackDisplay.show();
					player.trigger('texttrackchange');
				}, 400);
			});
			player.one('canplay', function () {
				if (player.options_.isMobile === true) {
					player.addClass('mobileMode'); // 모바일 setting
					player.controlBar.playToggle.hide() // 플레이 토글 버튼 숨김
					player.controlBar.volumePanel.volumeControl.hide() // 볼륨 컨트롤 슬라이더 숨김
					player.volume(1); // 볼륨 최대로
				}
				if (player.options_.learnMode === true) {
					player.addClass('learnMode'); // 학습모드 setting ( 학습도구영역, 자막영역)
				}
			});

			var timeInfo = new TimeInfo(player); // 학습 시간정보
			player.getTimeInfo = timeInfo.getTimeInfo;
			player.one('playing', timeInfo.setFirstPlaying);
			player.on('play', timeInfo.setPlay);
			player.on('timeupdate', timeInfo.setTimeupdate);
			player.on(['seeking', 'ended', 'pause', 'waiting'], timeInfo.setStop);
			player.one('playing', ContinuePlay); // 이어보기
		};

		videojs.registerPlugin('learnPlugin', LearnPlugin);
	})(window, videojs);
})();
window.__require=function t(e,n,i){function o(s,u){if(!n[s]){if(!e[s]){var r=s.split("/");if(r=r[r.length-1],!e[r]){var l="function"==typeof __require&&__require;if(!u&&l)return l(r,!0);if(a)return a(r,!0);throw new Error("Cannot find module '"+s+"'")}s=r}var c=n[s]={exports:{}};e[s][0].call(c.exports,function(t){return o(e[s][1][t]||t)},c,c.exports,t,e,n,i)}return n[s].exports}for(var a="function"==typeof __require&&__require,s=0;s<i.length;s++)o(i[s]);return o}({MenuConst:[function(t,e,n){"use strict";cc._RF.push(e,"9cd2aajheRPlZlk6torfR28","MenuConst"),Object.defineProperty(n,"__esModule",{value:!0}),n.MenuConst=void 0,n.MenuConst={MenuSetting:"menu.setting",AudioSetting:"menu.audio",ShakeSetting:"menu.shake"},cc._RF.pop()},{}],MenuEnum:[function(t,e,n){"use strict";cc._RF.push(e,"866c1rmU8JG9IATU4eGSF+4","MenuEnum"),Object.defineProperty(n,"__esModule",{value:!0}),n.ShakeStatus=n.AudioStatus=void 0,function(t){t[t.On=1]="On",t[t.Off=2]="Off"}(n.AudioStatus||(n.AudioStatus={})),function(t){t[t.On=1]="On",t[t.Off=2]="Off"}(n.ShakeStatus||(n.ShakeStatus={})),cc._RF.pop()},{}],MenuModel:[function(t,e,n){"use strict";cc._RF.push(e,"eb96bEGpMhMJ4SzvWvqZkLh","MenuModel"),Object.defineProperty(n,"__esModule",{value:!0}),n.MenuSettingModel=void 0;class i{fromJSON(t){return this.audioStatus=t.audioStatus,this.shakeStatus=t.shakeStatus,this}toJSON(){let t={};return Object.assign(t,this)}toJsonString(){return JSON.stringify(this.toJSON())}}n.MenuSettingModel=i,n.default=class extends i{},cc._RF.pop()},{}],MenuModule:[function(t,e,n){"use strict";cc._RF.push(e,"dc63ad/08hBx40NhgyYLdq2","MenuModule");var i=this&&this.__createBinding||(Object.create?function(t,e,n,i){void 0===i&&(i=n),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e};Object.defineProperty(n,"__esModule",{value:!0});const s=t("../../../../scripts/framework/gg"),u=t("./MenuConst"),r=t("./MenuEnum"),l=a(t("./MenuModel"));class c{static init(){this.data=new l.default,this.initMenuSetting()}static getAudioStatus(){return this.data.audioStatus=this.menuSettingModel.audioStatus,this.data.audioStatus}static setAudioStatus(t){this.data.audioStatus=t,this.menuSettingModel.audioStatus=t,this.saveMenuSetting()}static getShakeStatus(){return this.data.shakeStatus=this.menuSettingModel.shakeStatus,this.data.shakeStatus}static setShakeStatus(t){this.data.shakeStatus=t,this.menuSettingModel.shakeStatus=t,this.saveMenuSetting()}static initMenuSetting(){const t=s.gg.storage.getItem(u.MenuConst.MenuSetting);if(this.menuSettingModel=null,null==t||""==t)this.menuSettingModel=new l.MenuSettingModel,this.initAndSaveMenuSetting();else try{this.menuSettingModel=(new l.MenuSettingModel).fromJSON(JSON.parse(t))}catch(e){this.menuSettingModel=new l.MenuSettingModel,this.initAndSaveMenuSetting()}}static initAndSaveMenuSetting(){this.menuSettingModel.audioStatus=r.AudioStatus.On,this.menuSettingModel.shakeStatus=r.ShakeStatus.On,this.data.audioStatus=r.AudioStatus.On,this.data.shakeStatus=r.ShakeStatus.On,this.saveMenuSetting()}static saveMenuSetting(){this.menuSettingModel&&s.gg.storage.setItem(u.MenuConst.MenuSetting,this.menuSettingModel.toJsonString())}}n.default=c,c.data=null,c.menuSettingModel=null,cc._RF.pop()},{"../../../../scripts/framework/gg":void 0,"./MenuConst":"MenuConst","./MenuEnum":"MenuEnum","./MenuModel":"MenuModel"}],MenuPrefab:[function(t,e,n){"use strict";cc._RF.push(e,"769d4a7tthNGqT5KrxRZNDS","MenuPrefab");var i=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(s=(a<3?o(s):a>3?o(e,n,s):o(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},o=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,a){function s(t){try{r(i.next(t))}catch(e){a(e)}}function u(t){try{r(i.throw(t))}catch(e){a(e)}}function r(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(s,u)}r((i=i.apply(t,e||[])).next())})},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});const s=t("../../../../scripts/framework/gg"),u=t("../../../../scripts/HelperTools"),r=a(t("../../../../scripts/manager/AudioManager")),l=a(t("../../../../scripts/manager/GameSystemManager")),c=t("../../../../scripts/manager/LocalizeManager"),d=t("../../../../scripts/TweenEasing"),h=t("./MenuEnum"),p=a(t("./MenuModule")),{ccclass:S,property:m}=cc._decorator;let g=class extends cc.Component{constructor(){super(...arguments),this.btnMenu=null,this.buttonLayout=null,this.menuGroup=null,this.menuContent=null,this.logoutPopUp=null,this.labelMessage=null,this.modalDlgSpriteAtlas=null,this.main={btnMenu:null,btnBack:null,btnHelp:null,btnAudio:null,btnShake:null,btnLogout:null,menuGroup:null,menuContent:null,logoutPopUp:null,labelMessage:null,btnUISpriteAtlas:null,modalDlgSpriteAtlas:null,backURL:null,logoutURL:null}}onLoad(){this.cacheProperty(),this.cacheButtons(),this.setupMenuPrefab()}btnMenuClicked(){this.main.menuContent.active?this.hideMenu():this.showMenu()}btnBackClicked(){this.playClickSoundEffect(),window.location.href=this.main.backURL}btnHelpClicked(){this.playClickSoundEffect(),s.gg.eventManager.emit("MenuPrefab.OnShowHelpInformation"),this.hideMenu(),l.default.getInstance().setFPS(30)}btnAudioClicked(){p.default.getAudioStatus()===h.AudioStatus.On?(p.default.setAudioStatus(h.AudioStatus.Off),u.UItools.ChangeButtonSpriteFrame(this.main.btnAudio,this.main.btnUISpriteAtlas,{normalSprite:"SoundOff_01",pressedSprite:"SoundOff_02"}),r.default.getInstance().mute()):p.default.getAudioStatus()===h.AudioStatus.Off&&(p.default.setAudioStatus(h.AudioStatus.On),u.UItools.ChangeButtonSpriteFrame(this.main.btnAudio,this.main.btnUISpriteAtlas,{normalSprite:"SoundOn_01",pressedSprite:"SoundOn_02"}),r.default.getInstance().unMute(),this.playClickSoundEffect())}btnShakeClicked(){this.playClickSoundEffect(),p.default.getShakeStatus()===h.ShakeStatus.On?(p.default.setShakeStatus(h.ShakeStatus.Off),u.UItools.ChangeButtonSpriteFrame(this.main.btnShake,this.main.btnUISpriteAtlas,{normalSprite:"ShakeOff_01",pressedSprite:"ShakeOff_02"})):p.default.getShakeStatus()===h.ShakeStatus.Off&&(p.default.setShakeStatus(h.ShakeStatus.On),u.UItools.ChangeButtonSpriteFrame(this.main.btnShake,this.main.btnUISpriteAtlas,{normalSprite:"ShakeOn_01",pressedSprite:"ShakeOn_02"}))}btnLogoutClicked(){this.playClickSoundEffect(),this.main.logoutPopUp.active=!0,this.btnMenuClicked()}btnLogoutPopUpYes(){this.playClickSoundEffect(),window.location.href=this.main.logoutURL}btnLogoutPopUpNo(){this.playClickSoundEffect(),this.main.logoutPopUp.active=!1}start(){return o(this,void 0,void 0,function*(){yield this.loadMenuAssets(),this.setupMenuModule(),this.setupLocalize()})}showMenu(){this.registerEvent(),u.UItools.ChangeButtonSpriteFrame(this.main.btnMenu,this.main.btnUISpriteAtlas,{normalSprite:"MenuOut_01",pressedSprite:"MenuOut_02"}),this.showMenuContent()}hideMenu(){return o(this,void 0,void 0,function*(){this.removeEvent(),yield this.hideMenuContent(),u.UItools.ChangeButtonSpriteFrame(this.main.btnMenu,this.main.btnUISpriteAtlas,{normalSprite:"MenuBtn_01",pressedSprite:"MenuBtn_02"})})}showMenuContent(){this.main.menuContent.active=!0,cc.tween(this.main.menuGroup).set({position:cc.v3(777)}).to(.5,{position:cc.v3(520)},{easing:d.TweenEasing.sineOut}).start()}hideMenuContent(){return o(this,void 0,void 0,function*(){yield u.AsyncTask(t=>o(this,void 0,void 0,function*(){cc.tween(this.main.menuGroup).to(.5,{position:cc.v3(777)},{easing:d.TweenEasing.sineIn}).call(()=>{this.main.menuContent.active=!1,t()}).start()}))})}setupLocalize(){this.main.labelMessage.string=c.LocalizeText.Logout.ComfirmExitGame}registerEvent(){s.gg.eventManager.on("SlotEnginePrefab.OnSpinStarted",this.onSpinStarted,this),s.gg.eventManager.on("SlotEnginePrefab.OnSpinStartedByReel",this.onSpinStarteByReel,this)}removeEvent(){s.gg.eventManager.off("SlotEnginePrefab.OnSpinStarted",this.onSpinStarted,this),s.gg.eventManager.off("SlotEnginePrefab.OnSpinStartedByReel",this.onSpinStarteByReel,this)}setupMenuModule(){p.default.init(),this.initButtonUI()}initButtonUI(){p.default.getAudioStatus()===h.AudioStatus.On?u.UItools.ChangeButtonSpriteFrame(this.main.btnAudio,this.main.btnUISpriteAtlas,{normalSprite:"SoundOn_01",pressedSprite:"SoundOn_02"}):p.default.getAudioStatus()===h.AudioStatus.Off&&(u.UItools.ChangeButtonSpriteFrame(this.main.btnAudio,this.main.btnUISpriteAtlas,{normalSprite:"SoundOff_01",pressedSprite:"SoundOff_02"}),r.default.getInstance().mute())}cacheProperty(){this.main.menuContent=this.menuContent,this.main.menuGroup=this.menuGroup,this.main.logoutPopUp=this.logoutPopUp,this.main.labelMessage=this.labelMessage,this.main.modalDlgSpriteAtlas=this.modalDlgSpriteAtlas}cacheButtons(){this.main.btnMenu=this.btnMenu,this.main.btnBack=cc.find("BtnBack",this.buttonLayout).getComponent(cc.Button),this.main.btnHelp=cc.find("BtnHelp",this.buttonLayout).getComponent(cc.Button),this.main.btnAudio=cc.find("BtnAudio",this.buttonLayout).getComponent(cc.Button),this.main.btnShake=cc.find("BtnShake",this.buttonLayout).getComponent(cc.Button),this.main.btnLogout=cc.find("BtnLogout",this.buttonLayout).getComponent(cc.Button)}setupMenuPrefab(){const t=l.default.getInstance().getConfig();this.main.backURL=t.backURL,this.main.logoutURL=t.logoutURL;for(const e of t.menuConfig.buttons)if(!e.active)switch(e.name){case"btnBack":this.main.btnBack.node.active=!1;break;case"btnHelp":this.main.btnHelp.node.active=!1;break;case"btnAudio":this.main.btnAudio.node.active=!1;break;case"btnShake":this.main.btnShake.node.active=!1;break;case"btnLogout":this.main.btnLogout.node.active=!1}}playClickSoundEffect(){r.default.getInstance().play("Sfx_ButtonClicks")}onSpinStarted(){this.hideMenu()}onSpinStarteByReel(){this.hideMenu()}loadMenuAssets2(){return o(this,void 0,void 0,function*(){return new Promise(t=>{const e=l.default.getInstance().getLanguageCode();console.log(e);const n=`textures/${e}`,i=u.AsyncTask(t=>o(this,void 0,void 0,function*(){t()})),a=u.AsyncTask(t=>o(this,void 0,void 0,function*(){cc.resources.loadDir(n,()=>{cc.resources.load(`${n}/BtnPublic`,cc.SpriteAtlas,(e,n)=>{console.log(n),this.main.btnUISpriteAtlas=n,u.UItools.ChangeButtonSpriteFrame(this.main.btnBack,this.main.btnUISpriteAtlas,{normalSprite:"Back_01",pressedSprite:"Back_02"}),u.UItools.ChangeButtonSpriteFrame(this.main.btnHelp,this.main.btnUISpriteAtlas,{normalSprite:"MenuHelp_01",pressedSprite:"MenuHelp_02"}),u.UItools.ChangeButtonSpriteFrame(this.main.btnShake,this.main.btnUISpriteAtlas,{normalSprite:"ShakeOff_01",pressedSprite:"ShakeOff_02"}),u.UItools.ChangeButtonSpriteFrame(this.main.btnLogout,this.main.btnUISpriteAtlas,{normalSprite:"MenuExit_01",pressedSprite:"MenuExi_02"}),cc.find("SafeArea/MenuGroup/MenuContent/Background",this.node).getComponent(cc.Sprite).spriteFrame=n.getSpriteFrame("MenuBg"),t()});const i=cc.find("SafeArea/LogoutPopUp/Content/BtnYes",this.node),o=cc.find("SafeArea/LogoutPopUp/Content/BtnNo",this.node);let a="";switch(e){case"th":a="Thai";break;case"zh":a="CN";break;default:a="EN"}u.UItools.ChangeButtonSpriteFrame(i.getComponent(cc.Button),this.main.modalDlgSpriteAtlas,{normalSprite:"Yes"+a+"0",pressedSprite:"Yes"+a+"1"}),u.UItools.ChangeButtonSpriteFrame(o.getComponent(cc.Button),this.main.modalDlgSpriteAtlas,{normalSprite:"No"+a+"0",pressedSprite:"No"+a+"1"})})}));Promise.all([i,a]).then(()=>{t()})})})}loadMenuAssets(){return o(this,void 0,void 0,function*(){return new Promise(t=>{cc.assetManager.loadBundle("mega888-menu",(e,n)=>{if(e)return console.error(e);const i=l.default.getInstance().getLanguageCode(),a=`textures/${i}`,s=u.AsyncTask(t=>o(this,void 0,void 0,function*(){n.load(`${a}/BtnPublic`,cc.SpriteAtlas,(e,n)=>{this.main.btnUISpriteAtlas=n,u.UItools.ChangeButtonSpriteFrame(this.main.btnBack,this.main.btnUISpriteAtlas,{normalSprite:"Back_01",pressedSprite:"Back_02"}),u.UItools.ChangeButtonSpriteFrame(this.main.btnHelp,this.main.btnUISpriteAtlas,{normalSprite:"MenuHelp_01",pressedSprite:"MenuHelp_02"}),u.UItools.ChangeButtonSpriteFrame(this.main.btnShake,this.main.btnUISpriteAtlas,{normalSprite:"ShakeOff_01",pressedSprite:"ShakeOff_02"}),u.UItools.ChangeButtonSpriteFrame(this.main.btnLogout,this.main.btnUISpriteAtlas,{normalSprite:"MenuExit_01",pressedSprite:"MenuExi_02"}),cc.find("SafeArea/MenuGroup/MenuContent/Background",this.node).getComponent(cc.Sprite).spriteFrame=n.getSpriteFrame("MenuBg"),t()});const e=cc.find("SafeArea/LogoutPopUp/Content/BtnYes",this.node),o=cc.find("SafeArea/LogoutPopUp/Content/BtnNo",this.node);let s="";switch(i){case"th":s="Thai";break;case"zh":s="CN";break;default:s="EN"}u.UItools.ChangeButtonSpriteFrame(e.getComponent(cc.Button),this.main.modalDlgSpriteAtlas,{normalSprite:"Yes"+s+"0",pressedSprite:"Yes"+s+"1"}),u.UItools.ChangeButtonSpriteFrame(o.getComponent(cc.Button),this.main.modalDlgSpriteAtlas,{normalSprite:"No"+s+"0",pressedSprite:"No"+s+"1"})}));Promise.all([s]).then(()=>{t()})})})})}};i([m(cc.Button)],g.prototype,"btnMenu",void 0),i([m(cc.Node)],g.prototype,"buttonLayout",void 0),i([m(cc.Node)],g.prototype,"menuGroup",void 0),i([m(cc.Node)],g.prototype,"menuContent",void 0),i([m(cc.Node)],g.prototype,"logoutPopUp",void 0),i([m(cc.Label)],g.prototype,"labelMessage",void 0),i([m(cc.SpriteAtlas)],g.prototype,"modalDlgSpriteAtlas",void 0),g=i([S],g),n.default=g,cc._RF.pop()},{"../../../../scripts/HelperTools":void 0,"../../../../scripts/TweenEasing":void 0,"../../../../scripts/framework/gg":void 0,"../../../../scripts/manager/AudioManager":void 0,"../../../../scripts/manager/GameSystemManager":void 0,"../../../../scripts/manager/LocalizeManager":void 0,"./MenuEnum":"MenuEnum","./MenuModule":"MenuModule"}]},{},["MenuConst","MenuEnum","MenuModel","MenuModule","MenuPrefab"]);
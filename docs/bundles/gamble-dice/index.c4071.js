const a=['data','generateRangeNumber','getDicePanelStatus','setDiceResult','getLastDiceResults','getDiceResult','Shuffle','bigSmall','number','addLastDiceResult','betType','default','14b40h61EdPPqMlcHf02nRF','DicePanelPrefab','__decorate','getOwnPropertyDescriptor','object','decorate','done','__importDefault','../../../scripts/manager/GameSystemManager','./DicePanelEnum','_decorator','PanelComponent','currentDiceResult','btnTakeWin','diceAtlas','cupShakeAnimation','cupButtom','shaziSound','gameLooseSound','dummyPlayerBalanceManager','smallBettingGroup','start','loadDiceAssets','setupDiceModule','onShowed','hide','activeDicePanel','balance','getInstance','play','ClickSound','resetBettingUI','setDicePanelStatus','diceGroup','disableCommonButtons','disableBettingButtons','playCupShakeAimation','enableCommonButtons','active','inActiveDicePanel','placeBet','showDiceResult','playCupOpenAimation','winAmount','Delay','enableBettingButtons','updateBettingInfomation','updateBank','getDiceSpriteFrame','spriteFrame','bigDice','AsyncTask','ShaziSound','node','once','Animation','EventType','FINISHED','WrapMode','scheduleOnce','GameLooseSound','cupOpenAnimation','wrapMode','Reverse','cacheLabellayer','add','GameWinSound','gameWinSound','cacheBettingGroupButton','find','Buttons/SmallBettingGroup','children','getComponent','Button','Buttons/BigBettingGroup','bigBettingGroup','LabelLayer','labelLayer','getChildByName','LabelBank','Label','LabelMultiply2To','LabelMultiply6To','getSpriteFrame','History_','getDiceWithDifferentAngle','Result_','Pad','GetRandomInterger','enabled','string','BeautifyNumber','updateLastCardsResult','lastResults','Sprite','assetManager','gamble-dice','error','getLanguageCode','load','SafeArea/ActivateButtons/BtnDemoDice','UItools','ChangeButtonSpriteFrame','Gamble1','Gamble3','all','Node','prototype','SpriteAtlas','AudioClip','__require','split','length','function','exports','_RF','DicePanelConst','defineProperty','__esModule','game.cache','push','6286c6d8RJMi6WaeU58e+oq','DicePanelEnum','BetType','Active','Inactive','Status','One','Two','Three','Four','Five','Six','Big','Small','pop','0406cxEOr9BP6fMzplo4j7I','DicePanelEvent','OnResultUpdate','DicePanelEvent.OnResultUpdate','772b2lTAARA5o/ohff6e/5g','DicePanelModel','diceActive','diceResult','numbersForRandom','lastDiceResults','91994wdBfJG5rvyfPEb+jzS','DicePanelModule','__awaiter','throw','value','then','apply','next','./DicePanelModel','../../../scripts/HelperTools','Component','init'];(function(b,e){const f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x7a));const b=function(c,d){c=c-0x0;let e=a[c];return e;};window[b('0x0')]=function e(d,f,g){function h(m,p){if(!f[m]){if(!d[m]){var q=m[b('0x1')]('/');if(q=q[q[b('0x2')]-0x1],!d[q]){var v=b('0x3')==typeof __require&&__require;if(!p&&v)return v(q,!0x0);if(j)return j(q,!0x0);throw new Error('Cannot\x20find\x20module\x20\x27'+m+'\x27');}m=q;}var w=f[m]={'exports':{}};d[m][0x0]['call'](w[b('0x4')],function(x){return h(d[m][0x1][x]||x);},w,w['exports'],e,d,f,g);}return f[m][b('0x4')];}for(var j=b('0x3')==typeof __require&&__require,k=0x0;k<g[b('0x2')];k++)h(g[k]);return h;}({'DicePanelConst':[function(c,d,f){'use strict';cc[b('0x5')]['push'](d,'e2cb7S3jZVHmpPAyDQctn1R',b('0x6')),Object[b('0x7')](f,b('0x8'),{'value':!0x0}),f[b('0x6')]=void 0x0,f[b('0x6')]={'CacheKey':b('0x9')},cc[b('0x5')]['pop']();},{}],'DicePanelEnum':[function(c,d,f){'use strict';cc[b('0x5')][b('0xa')](d,b('0xb'),b('0xc')),Object[b('0x7')](f,b('0x8'),{'value':!0x0}),f[b('0xd')]=f['Status']=void 0x0,function(g){g[g[b('0xe')]=0x1]=b('0xe'),g[g[b('0xf')]=0x0]=b('0xf');}(f[b('0x10')]||(f[b('0x10')]={})),function(g){g[g[b('0x11')]=0x1]='One',g[g['Two']=0x2]=b('0x12'),g[g[b('0x13')]=0x3]=b('0x13'),g[g[b('0x14')]=0x4]=b('0x14'),g[g[b('0x15')]=0x5]=b('0x15'),g[g[b('0x16')]=0x6]=b('0x16'),g[g[b('0x17')]=0x7]=b('0x17'),g[g['Small']=0x8]=b('0x18');}(f['BetType']||(f['BetType']={})),cc[b('0x5')][b('0x19')]();},{}],'DicePanelEvent':[function(c,d,f){'use strict';cc[b('0x5')]['push'](d,b('0x1a'),b('0x1b')),Object[b('0x7')](f,b('0x8'),{'value':!0x0}),f[b('0x1b')]=void 0x0,(f['DicePanelEvent']||(f[b('0x1b')]={}))[b('0x1c')]=b('0x1d'),cc[b('0x5')]['pop']();},{}],'DicePanelModel':[function(c,d,f){'use strict';cc['_RF'][b('0xa')](d,b('0x1e'),'DicePanelModel'),Object['defineProperty'](f,b('0x8'),{'value':!0x0}),f['DicePanelModel']=void 0x0,f[b('0x1f')]=class{constructor(){this[b('0x20')]=!0x1,this[b('0x21')]=null,this[b('0x22')]=[],this[b('0x23')]=[];}},cc[b('0x5')][b('0x19')]();},{}],'DicePanelModule':[function(d,f,g){'use strict';cc['_RF'][b('0xa')](f,b('0x24'),b('0x25'));var h=this&&this[b('0x26')]||function(p,q,r,u){return new(r||(r=Promise))(function(v,w){function x(A){try{z(u['next'](A));}catch(B){w(B);}}function y(A){try{z(u[b('0x27')](A));}catch(B){w(B);}}function z(A){var B;A['done']?v(A['value']):(B=A[b('0x28')],B instanceof r?B:new r(function(C){C(B);}))[b('0x29')](x,y);}z((u=u[b('0x2a')](p,q||[]))[b('0x2b')]());});};Object[b('0x7')](g,b('0x8'),{'value':!0x0});const j=d(b('0x2c')),k=d('./DicePanelEnum'),l=d(b('0x2d'));class m extends cc[b('0x2e')]{static[b('0x2f')](){this[b('0x30')]=new j[(b('0x1f'))](),this[b('0x30')][b('0x22')]=this[b('0x31')](0x1,0x6);}static[b('0x32')](){return this[b('0x30')][b('0x20')];}static['setDicePanelStatus'](p){this['data'][b('0x20')]=Boolean(p);}static[b('0x33')](p){this[b('0x30')][b('0x21')]=p;}static[b('0x34')](){return this[b('0x30')][b('0x23')];}static['clearDiceResult'](){this[b('0x30')][b('0x21')]=null,this[b('0x30')]['lastDiceResults']=[];}static[b('0x35')](p,q){return h(this,void 0x0,void 0x0,function*(){return new Promise(r=>{const u=l[b('0x36')](this[b('0x30')][b('0x22')])[0x0],v={'number':u,'bigSmall':u<=0x3?k[b('0xd')]['Small']:k[b('0xd')][b('0x17')]};let w=0x0;switch(p){case k['BetType'][b('0x17')]:case k[b('0xd')]['Small']:p===v[b('0x37')]&&(w=0x2*q);break;case k[b('0xd')][b('0x11')]:case k[b('0xd')]['Two']:case k[b('0xd')][b('0x13')]:case k['BetType'][b('0x14')]:case k['BetType']['Five']:case k[b('0xd')]['Six']:p===v['number']&&(w=0x6*q);}const x={'betType':v[b('0x38')],'winAmount':w};this[b('0x33')](x),this[b('0x39')](x[b('0x3a')]),r(x);});});}static[b('0x39')](p){this[b('0x30')][b('0x23')][b('0x2')]>=0x8&&this[b('0x30')]['lastDiceResults']['shift'](),this['data'][b('0x23')]['push'](p);}static[b('0x31')](p,q){const r=[];for(let u=p;u<=q;u++)r['push'](u);return r;}}g[b('0x3b')]=m,m[b('0x30')]=null,cc[b('0x5')][b('0x19')]();},{'../../../scripts/HelperTools':void 0x0,'./DicePanelEnum':b('0xc'),'./DicePanelModel':'DicePanelModel'}],'DicePanelPrefab':[function(f,g,j){'use strict';cc[b('0x5')][b('0xa')](g,b('0x3c'),b('0x3d'));var k=this&&this[b('0x3e')]||function(F,G,H,I){var J,K=arguments['length'],L=K<0x3?G:null===I?I=Object[b('0x3f')](G,H):I;if(b('0x40')==typeof Reflect&&'function'==typeof Reflect[b('0x41')])L=Reflect[b('0x41')](F,G,H,I);else for(var M=F[b('0x2')]-0x1;M>=0x0;M--)(J=F[M])&&(L=(K<0x3?J(L):K>0x3?J(G,H,L):J(G,H))||L);return K>0x3&&L&&Object[b('0x7')](G,H,L),L;},q=this&&this[b('0x26')]||function(F,G,H,I){return new(H||(H=Promise))(function(J,K){function L(O){try{N(I[b('0x2b')](O));}catch(P){K(P);}}function M(O){try{N(I[b('0x27')](O));}catch(P){K(P);}}function N(O){var P;O[b('0x42')]?J(O[b('0x28')]):(P=O[b('0x28')],P instanceof H?P:new H(function(Q){Q(P);}))[b('0x29')](L,M);}N((I=I[b('0x2a')](F,G||[]))[b('0x2b')]());});},v=this&&this[b('0x43')]||function(F){return F&&F[b('0x8')]?F:{'default':F};};Object[b('0x7')](j,b('0x8'),{'value':!0x0});const w=f('../../../scripts/framework/lib/router/PanelComponent'),x=f(b('0x2d')),y=v(f('../../../scripts/manager/AudioManager')),z=v(f(b('0x44'))),A=f(b('0x45')),B=v(f('./DicePanelModule')),{ccclass:C,property:D}=cc[b('0x46')];let E=class extends w[b('0x47')]{constructor(){super(...arguments),this['diceGroup']=null,this[b('0x48')]=null,this[b('0x49')]=null,this['lastResults']=null,this[b('0x4a')]=null,this['cupOpenAnimation']=null,this[b('0x4b')]=null,this[b('0x4c')]=null,this[b('0x4d')]=null,this['gameWinSound']=null,this[b('0x4e')]=null,this[b('0x4f')]={'balance':0x0},this['labelLayer']={'LabelBank':null,'LabelMultiply2To':null,'LabelMultiply6To':null},this[b('0x50')]=[],this['bigBettingGroup']=[];}[b('0x51')](){return q(this,void 0x0,void 0x0,function*(){yield this[b('0x52')](),this[b('0x53')]();});}['show'](F){F[b('0x54')]();}[b('0x55')](F){F['onHided']();}[b('0x56')](){return q(this,void 0x0,void 0x0,function*(){this['dummyPlayerBalanceManager']['balance']<=0x0&&(this[b('0x4f')][b('0x57')]=13.31),y[b('0x3b')][b('0x58')]()[b('0x59')](b('0x5a')),this[b('0x5b')](),B[b('0x3b')][b('0x5c')](A[b('0x10')]['Active']),this[b('0x5d')]['active']=!0x0,this[b('0x5e')](),this[b('0x5f')](),yield this[b('0x60')](),this[b('0x61')](),this['enableBettingButtons']();});}['inActiveDicePanel'](){B[b('0x3b')][b('0x5c')](A['Status'][b('0xf')]),this['diceGroup'][b('0x62')]=!0x1;}['takeWin'](){this[b('0x63')]();}[b('0x64')](F,G){return q(this,void 0x0,void 0x0,function*(){y['default']['getInstance']()[b('0x59')](b('0x5a')),this[b('0x5e')](),this[b('0x5f')]();const H=yield B[b('0x3b')]['getDiceResult'](Number(G),this['dummyPlayerBalanceManager']['balance']);this[b('0x65')](H),yield this[b('0x66')](H),this[b('0x4f')][b('0x57')]=H[b('0x67')],H[b('0x67')]>0x0?(yield x[b('0x68')](0.25),yield this[b('0x60')](),this[b('0x5b')]()):(yield x[b('0x68')](0x2),this[b('0x63')]());});}[b('0x5b')](){this[b('0x61')](),this[b('0x69')](),this[b('0x6a')](),this[b('0x6b')]();}[b('0x65')](F){const G=this[b('0x6c')](F[b('0x3a')]);this[b('0x48')][b('0x6d')]=G[b('0x6e')];}[b('0x60')](){return q(this,void 0x0,void 0x0,function*(){yield x[b('0x6f')](F=>{y[b('0x3b')][b('0x58')]()[b('0x59')](b('0x70')),this['cupButtom'][b('0x71')][b('0x62')]=!0x1,this[b('0x4b')]['node'][b('0x62')]=!0x0,this[b('0x4b')][b('0x59')](),this[b('0x4b')][b('0x72')](cc[b('0x73')][b('0x74')][b('0x75')],()=>{this[b('0x4c')][b('0x71')]['active']=!0x0,this[b('0x4b')][b('0x71')]['active']=!0x1,F();});});});}[b('0x66')](F){return q(this,void 0x0,void 0x0,function*(){yield x[b('0x6f')](G=>{this['cupOpenAnimation']['play']()['wrapMode']=cc[b('0x76')]['Normal'],this[b('0x77')](()=>{F[b('0x67')]>0x0?y[b('0x3b')]['getInstance']()['play']('GameWinSound'):y['default'][b('0x58')]()[b('0x59')](b('0x78'));},0.4),this[b('0x79')][b('0x72')](cc[b('0x73')][b('0x74')][b('0x75')],()=>q(this,void 0x0,void 0x0,function*(){yield x[b('0x68')](0x2),this['updateLastCardsResult'](),G();}));}),yield x['AsyncTask'](G=>{this[b('0x79')][b('0x59')]()[b('0x7a')]=cc[b('0x76')][b('0x7b')],this[b('0x79')][b('0x72')](cc[b('0x73')][b('0x74')][b('0x75')],()=>{G();});});});}[b('0x53')](){B['default']['init'](),this['cacheBettingGroupButton'](),this[b('0x7c')](),y['default'][b('0x58')]()[b('0x7d')](b('0x70'),this['shaziSound']),y[b('0x3b')]['getInstance']()[b('0x7d')](b('0x7e'),this[b('0x7f')]),y['default'][b('0x58')]()[b('0x7d')](b('0x78'),this['gameLooseSound']);}[b('0x80')](){const F=cc[b('0x81')](b('0x82'),this['diceGroup'])[b('0x83')];for(const H of F)this['smallBettingGroup']['push'](H[b('0x84')](cc[b('0x85')]));const G=cc[b('0x81')](b('0x86'),this['diceGroup'])[b('0x83')];for(const I of G)this[b('0x87')][b('0xa')](I[b('0x84')](cc['Button']));}['cacheLabellayer'](){const F=cc[b('0x81')](b('0x88'),this[b('0x5d')]);this[b('0x89')]['LabelBank']=F[b('0x8a')](b('0x8b'))[b('0x84')](cc[b('0x8c')]),this[b('0x89')]['LabelMultiply2To']=F[b('0x8a')](b('0x8d'))[b('0x84')](cc[b('0x8c')]),this[b('0x89')][b('0x8e')]=F[b('0x8a')](b('0x8e'))['getComponent'](cc['Label']);}[b('0x6c')](F){const G=this[b('0x4a')][b('0x8f')](b('0x90')+x['Pad'](F,0x2)),H=this[b('0x91')](F);return{'smallDice':G,'bigDice':this['diceAtlas'][b('0x8f')](b('0x92')+x[b('0x93')](H,0x2))};}[b('0x91')](F){const G=0x4*F,H=G-0x3;return x[b('0x94')](H,G);}[b('0x61')](){this[b('0x49')]['node'][b('0x62')]=!0x0;}[b('0x5e')](){this[b('0x49')]['node'][b('0x62')]=!0x1;}[b('0x69')](){for(const F of this[b('0x50')])F[b('0x95')]=!0x0;for(const G of this[b('0x87')])G['enabled']=!0x0;}[b('0x5f')](){for(const F of this[b('0x50')])F[b('0x95')]=!0x1;for(const G of this[b('0x87')])G[b('0x95')]=!0x1;}[b('0x6a')](){const F=this[b('0x4f')][b('0x57')];this[b('0x89')][b('0x8d')][b('0x96')]=x[b('0x97')](0x2*F,0x2),this[b('0x89')][b('0x8e')][b('0x96')]=x[b('0x97')](0x6*F,0x2);}[b('0x6b')](){this[b('0x89')]['LabelBank'][b('0x96')]=x['BeautifyNumber'](this['dummyPlayerBalanceManager'][b('0x57')],0x2);}[b('0x98')](){const F=B[b('0x3b')]['getLastDiceResults']();for(let G=0x0,H=F[b('0x2')];G<H;G++){const I=this[b('0x99')][b('0x83')][G],J=F[G],K=this[b('0x6c')](J);I[b('0x62')]=!0x0,I[b('0x84')](cc[b('0x9a')])[b('0x6d')]=K['smallDice'];}}[b('0x52')](){return q(this,void 0x0,void 0x0,function*(){return new Promise(F=>{cc[b('0x9b')]['loadBundle'](b('0x9c'),(G,H)=>{if(G)return console[b('0x9d')](G);const I='textures/'+z['default'][b('0x58')]()[b('0x9e')](),J=x[b('0x6f')](K=>q(this,void 0x0,void 0x0,function*(){H[b('0x9f')](I+'/Gamble',cc['SpriteAtlas'],(L,M)=>{const N=cc['find'](b('0xa0'),this[b('0x71')])[b('0x84')](cc['Button']);x[b('0xa1')][b('0xa2')](N,M,{'normalSprite':b('0xa3'),'pressedSprite':b('0xa4')}),K();});}));Promise[b('0xa5')]([J])['then'](()=>{F();});});});});}};k([D(cc[b('0xa6')])],E['prototype'],b('0x5d'),void 0x0),k([D(cc[b('0x9a')])],E[b('0xa7')],'currentDiceResult',void 0x0),k([D(cc['Button'])],E[b('0xa7')],'btnTakeWin',void 0x0),k([D(cc[b('0xa6')])],E[b('0xa7')],b('0x99'),void 0x0),k([D(cc[b('0xa8')])],E['prototype'],'diceAtlas',void 0x0),k([D(cc[b('0x73')])],E[b('0xa7')],b('0x79'),void 0x0),k([D(cc[b('0x73')])],E['prototype'],b('0x4b'),void 0x0),k([D(cc['Sprite'])],E['prototype'],b('0x4c'),void 0x0),k([D(cc[b('0xa9')])],E[b('0xa7')],b('0x4d'),void 0x0),k([D(cc['AudioClip'])],E[b('0xa7')],b('0x7f'),void 0x0),k([D(cc[b('0xa9')])],E['prototype'],b('0x4e'),void 0x0),E=k([C],E),j[b('0x3b')]=E,cc['_RF']['pop']();},{'../../../scripts/HelperTools':void 0x0,'../../../scripts/framework/lib/router/PanelComponent':void 0x0,'../../../scripts/manager/AudioManager':void 0x0,'../../../scripts/manager/GameSystemManager':void 0x0,'./DicePanelEnum':'DicePanelEnum','./DicePanelModule':'DicePanelModule'}]},{},[b('0x6'),'DicePanelEnum',b('0x1b'),b('0x1f'),b('0x25'),'DicePanelPrefab']);
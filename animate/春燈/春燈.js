(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"春燈_atlas_1", frames: [[0,769,333,315],[728,430,90,231],[728,0,79,428],[0,0,726,767]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["春燈_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["春燈_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["春燈_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["春燈_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.燈本體 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈本體
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈本體, new cjs.Rectangle(0,0,166.5,157.5), null);


(lib.燈下線 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈下線
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈下線, new cjs.Rectangle(0,0,45,115.5), null);


(lib.吊繩 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 吊繩
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.吊繩, new cjs.Rectangle(0,0,39.5,214), null);


(lib.小燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-69.45,-279.7,0.9999,0.9999,-50.8278,0,0,39.5,0.1);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(71.35,-114.15,0.9999,0.9999,-50.8278,0,0,86.5,0.5);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(191.1,-12.55,0.9999,0.9999,-50.8278,0,0,23.1,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:-50.8278,x:191.1,y:-12.55,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9999,scaleY:0.9999,rotation:-50.8278,x:71.35,y:-114.15}},{t:this.ikNode_1,p:{regX:39.5,scaleX:0.9999,scaleY:0.9999,rotation:-50.8278,x:-69.45,y:-279.7}}]}).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-47.4759,x:169.9,y:7.1,regX:23.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:-45.6486,x:59.75,y:-104.9}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-46.9104,x:-69.45,y:-279.7}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-44.1238,x:147.15,y:24.8,regX:23.2}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:-40.4722,x:47.6,y:-96.35}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-42.9937,x:-69.5,y:-279.75}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-40.7724,x:122.9,y:41,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:-35.2941,x:34.75,y:-88.75}},{t:this.ikNode_1,p:{regX:39.5,scaleX:0.9998,scaleY:0.9998,rotation:-39.0744,x:-69.55,y:-279.6}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-37.4201,x:97.65,y:55.05,regX:23.2}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:-30.1179,x:21.5,y:-82.05}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-35.1561,x:-69.45,y:-279.65}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-34.0679,x:71.25,y:67.15,regX:23.2}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:-24.9419,x:7.8,y:-76.25}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-31.2398,x:-69.45,y:-279.65}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-30.7156,x:43.85,y:77.15,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:-19.7638,x:-6.25,y:-71.5}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-27.323,x:-69.4,y:-279.65}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-27.3648,x:15.95,y:84.95,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:-14.586,x:-20.6,y:-67.65}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-23.4053,x:-69.35,y:-279.7}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-24.0129,x:-12.55,y:90.45,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:-9.4081,x:-35.2,y:-64.85}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-19.4861,x:-69.45,y:-279.6}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-20.6609,x:-41.4,y:93.7,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:-4.2308,x:-49.95,y:-62.95}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-15.5704,x:-69.4,y:-279.6}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-17.3083,x:-70.45,y:94.75,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:0.9418,x:-64.85,y:-62.15}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-11.6522,x:-69.4,y:-279.6}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-13.9563,x:-99.45,y:93.4,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:6.1203,x:-79.65,y:-62.3}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-7.735,x:-69.4,y:-279.6}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-10.6042,x:-128.25,y:89.8,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:11.2972,x:-94.5,y:-63.5}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-3.8171,x:-69.4,y:-279.55}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-7.2527,x:-156.65,y:83.9,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:16.4757,x:-109.2,y:-65.65}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:0.0962,x:-69.4,y:-279.55}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-3.9003,x:-184.5,y:75.8,regX:23.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:21.6532,x:-123.65,y:-69.05}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9999,scaleY:0.9999,rotation:4.0133,x:-69.35,y:-279.55}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-0.5483,x:-211.45,y:65.6,regX:23.2}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:26.8286,x:-138,y:-73.1}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:7.9311,x:-69.4,y:-279.55}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.7993,x:-237.75,y:53.15,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:32.0062,x:-151.9,y:-78.25}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:11.8498,x:-69.35,y:-279.45}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:6.1511,x:-262.8,y:38.8,regX:23.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:37.1842,x:-165.4,y:-84.5}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:15.7669,x:-69.45,y:-279.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:9.5023,x:-286.5,y:22.5,regX:23.2}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:42.3607,x:-178.6,y:-91.4}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:19.6846,x:-69.4,y:-279.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:12.8549,x:-309.1,y:4.5,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:47.5378,x:-191.15,y:-99.25}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:23.6018,x:-69.35,y:-279.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:16.2068,x:-329.95,y:-15.25,regX:23.2}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:52.716,x:-203.1,y:-108.1}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:27.5197,x:-69.4,y:-279.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:19.5594,x:-349.3,y:-36.65,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:57.8928,x:-214.6,y:-117.6}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:31.4362,x:-69.4,y:-279.45}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:22.9112,x:-366.75,y:-59.4,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:63.0705,x:-225.4,y:-127.8}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:35.3543,x:-69.4,y:-279.45}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:26.2631,x:-382.3,y:-83.45,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:68.2483,x:-235.35,y:-138.85}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:39.2715,x:-69.4,y:-279.45}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:29.6148,x:-395.9,y:-108.6,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:73.425,x:-244.6,y:-150.5}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:43.1886,x:-69.4,y:-279.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:32.9671,x:-407.5,y:-134.75,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:78.603,x:-252.95,y:-162.7}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:47.1065,x:-69.4,y:-279.45}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:36.3183,x:-417,y:-161.55,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:83.7801,x:-260.6,y:-175.6}},{t:this.ikNode_1,p:{regX:39.5,scaleX:0.9998,scaleY:0.9998,rotation:51.0243,x:-69.5,y:-279.55}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:39.6698,x:-424.25,y:-189,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:88.9568,x:-267.25,y:-188.9}},{t:this.ikNode_1,p:{regX:39.5,scaleX:0.9998,scaleY:0.9998,rotation:54.9424,x:-69.5,y:-279.55}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:43.0222,x:-429.25,y:-216.95,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:94.1308,x:-272.95,y:-202.6}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:58.8597,x:-69.5,y:-279.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:46.3735,x:-432.1,y:-245.05,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:99.3082,x:-277.75,y:-216.65}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:62.776,x:-69.45,y:-279.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:43.8665,x:-427.55,y:-224.15,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:95.0353,x:-271.45,y:-207.35}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:59.7219,x:-66.85,y:-281.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:41.3581,x:-421.45,y:-203.35,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:90.7634,x:-264.55,y:-198.2}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:56.6679,x:-64.15,y:-282.8}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:38.8513,x:-414,y:-182.8,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:86.4958,x:-257.15,y:-189.3}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:53.6142,x:-61.55,y:-284.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:36.3433,x:-405.15,y:-162.5,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:82.2226,x:-249.1,y:-180.7}},{t:this.ikNode_1,p:{regX:39.5,scaleX:0.9998,scaleY:0.9998,rotation:50.5594,x:-58.95,y:-286.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:33.8356,x:-394.75,y:-142.65,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:77.9509,x:-240.65,y:-172.4}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:47.5044,x:-56.25,y:-287.8}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:31.3282,x:-383.05,y:-123.2,regX:23.2}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:73.6782,x:-231.6,y:-164.4}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:44.4503,x:-53.55,y:-289.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:28.8225,x:-370.05,y:-104.45,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:69.406,x:-222.05,y:-156.85}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:41.3959,x:-50.9,y:-291.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:26.314,x:-355.6,y:-86.25,regX:23.2}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:65.1336,x:-212,y:-149.6}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:38.3424,x:-48.35,y:-292.75}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:23.8062,x:-340.05,y:-68.95,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:60.8613,x:-201.45,y:-142.7}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:35.2878,x:-45.65,y:-294.45}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:21.2987,x:-323.35,y:-52.4,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:56.5896,x:-190.55,y:-136.35}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:32.2338,x:-43.05,y:-296.15}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:18.7903,x:-305.35,y:-36.8,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:52.3181,x:-179.2,y:-130.35}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:29.1795,x:-40.45,y:-297.85}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:16.2834,x:-286.2,y:-22.15,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:48.0455,x:-167.4,y:-124.9}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:26.1243,x:-37.75,y:-299.45}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:13.776,x:-266.15,y:-8.7,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:43.7738,x:-155.25,y:-119.95}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:23.0707,x:-35.2,y:-301.2}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:11.2671,x:-245.05,y:3.75,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:39.5009,x:-142.75,y:-115.45}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:20.0163,x:-32.55,y:-302.85}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:8.7591,x:-223,y:14.85,regX:23.2}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:35.2284,x:-130.05,y:-111.5}},{t:this.ikNode_1,p:{regX:39.5,scaleX:0.9998,scaleY:0.9998,rotation:16.9626,x:-30.05,y:-304.55}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:6.2533,x:-200.4,y:24.8,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:30.9575,x:-117,y:-108.1}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:13.9077,x:-27.15,y:-306.25}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:3.7453,x:-176.95,y:33.45,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:26.6847,x:-103.7,y:-105.3}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:10.8534,x:-24.6,y:-307.9}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.2374,x:-152.7,y:40.75,regX:23.2}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:22.4134,x:-90.1,y:-103.25}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:7.7995,x:-21.9,y:-309.6}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-1.2654,x:-128.2,y:46.7,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:18.1399,x:-76.35,y:-101.35}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:4.7448,x:-19.3,y:-311.25}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-3.7733,x:-103.15,y:51.2,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:13.8679,x:-62.5,y:-100.4}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:1.6888,x:-16.7,y:-312.95}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-6.2813,x:-77.7,y:54.25,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:9.5962,x:-48.5,y:-99.95}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-1.3598,x:-14.05,y:-314.6}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-8.7882,x:-52.05,y:55.8,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:5.3241,x:-34.4,y:-100.15}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-4.415,x:-11.5,y:-316.3}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-11.2964,x:-26.2,y:56,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:1.0511,x:-20.25,y:-100.85}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-7.4695,x:-8.85,y:-317.95}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-13.8042,x:-0.1,y:54.5,regX:23.2}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:-3.2161,x:-5.95,y:-102.25}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-10.5233,x:-6.2,y:-319.65}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-16.3127,x:25.5,y:51.65,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:-7.4889,x:8.2,y:-104.25}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-13.5783,x:-3.55,y:-321.3}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-18.8193,x:51.25,y:47.45,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:-11.7604,x:22.4,y:-106.9}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-16.632,x:-0.85,y:-323}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-21.3269,x:76.8,y:41.55,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:-16.034,x:36.5,y:-110.1}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-19.6869,x:1.8,y:-324.65}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-23.834,x:102,y:34.3,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:-20.3046,x:50.5,y:-114}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-22.7419,x:4.35,y:-326.35}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-26.3425,x:126.8,y:25.6,regX:23.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:-24.5781,x:64.4,y:-118.35}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-25.7954,x:7,y:-328.1}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9998,scaleY:0.9998,rotation:-28.8503,x:151.15,y:15.5,regX:23.2}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:-28.8503,x:78.05,y:-123.5}},{t:this.ikNode_1,p:{regX:39.6,scaleX:0.9998,scaleY:0.9998,rotation:-28.8503,x:9.65,y:-329.7}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-529.4,-329.7,821.5,538.6);


(lib.大燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 大燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(75.4,-345.45,0.9998,0.9998,-12.8856,0,0,39.5,0.1);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(84.6,-128.2,0.9998,0.9998,-12.8858,0,0,86.4,0.5);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(116.55,25.3,0.9998,0.9998,-12.886,0,0,23,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{regX:23,scaleX:0.9998,scaleY:0.9998,rotation:-12.886,x:116.55,y:25.3,regY:3.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9998,scaleY:0.9998,rotation:-12.8858,x:84.6,y:-128.2,regX:86.4}},{t:this.ikNode_1,p:{rotation:-12.8856,x:75.4,y:-345.45,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]}).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:-10.8963,x:107.75,y:29.35,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:-11.4185,x:79.75,y:-125.25,regX:86.4}},{t:this.ikNode_1,p:{rotation:-12.0874,x:73.45,y:-342.5,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23,scaleX:0.9997,scaleY:0.9997,rotation:-8.9042,x:98.65,y:33.05,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:-9.9501,x:74.75,y:-122.15,regX:86.4}},{t:this.ikNode_1,p:{rotation:-11.2871,x:71.55,y:-339.55,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:-6.9148,x:89.7,y:36.65,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:-8.4822,x:69.7,y:-119.1,regX:86.4}},{t:this.ikNode_1,p:{rotation:-10.4865,x:69.55,y:-336.55,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-4.9233,x:80.65,y:40.05,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:-7.0151,x:64.65,y:-116.2,regX:86.4}},{t:this.ikNode_1,p:{rotation:-9.6863,x:67.5,y:-333.6,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-2.9335,x:71.55,y:43.35,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:-5.5468,x:59.6,y:-113.25,regX:86.4}},{t:this.ikNode_1,p:{rotation:-8.8852,x:65.45,y:-330.55,scaleX:0.9997,scaleY:0.9997,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:-0.941,x:62.6,y:46.5,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:-4.0803,x:54.6,y:-110.35,regX:86.4}},{t:this.ikNode_1,p:{rotation:-8.0868,x:63.45,y:-327.55,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:1.0451,x:53.55,y:49.5,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:-2.6121,x:49.5,y:-107.5,regX:86.4}},{t:this.ikNode_1,p:{rotation:-7.2865,x:61.45,y:-324.55,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:3.036,x:44.5,y:52.35,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:-1.1439,x:44.45,y:-104.65,regX:86.4}},{t:this.ikNode_1,p:{rotation:-6.4859,x:59.45,y:-321.55,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:5.0252,x:35.5,y:55.1,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:0.3183,x:39.55,y:-101.9,regX:86.5}},{t:this.ikNode_1,p:{rotation:-5.6864,x:57.5,y:-318.55,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:7.0172,x:26.4,y:57.65,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:1.7869,x:34.55,y:-99.2,regX:86.5}},{t:this.ikNode_1,p:{rotation:-4.8864,x:55.45,y:-315.55,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23,scaleX:0.9997,scaleY:0.9997,rotation:9.0069,x:17.35,y:60.1,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:3.2548,x:29.55,y:-96.45,regX:86.5}},{t:this.ikNode_1,p:{rotation:-4.0864,x:53.5,y:-312.55,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23,scaleX:0.9997,scaleY:0.9997,rotation:10.9998,x:8.35,y:62.35,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:4.7214,x:24.4,y:-93.9,regX:86.4}},{t:this.ikNode_1,p:{rotation:-3.2872,x:51.45,y:-309.55,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:12.989,x:-0.6,y:64.45,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:6.1894,x:19.4,y:-91.3,regX:86.4}},{t:this.ikNode_1,p:{rotation:-2.4869,x:49.45,y:-306.55,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:14.9799,x:-9.5,y:66.45,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:7.6579,x:14.35,y:-88.75,regX:86.4}},{t:this.ikNode_1,p:{rotation:-1.6871,x:47.4,y:-303.55,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:16.9713,x:-18.45,y:68.3,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:9.1236,x:9.5,y:-86.2,regX:86.5}},{t:this.ikNode_1,p:{rotation:-0.8868,x:45.4,y:-300.55,scaleX:0.9997,scaleY:0.9997,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:18.9618,x:-27.4,y:70.05,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:10.5927,x:4.4,y:-83.7,regX:86.4}},{t:this.ikNode_1,p:{rotation:-0.0866,x:43.45,y:-297.55,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:20.9524,x:-36.3,y:71.6,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:12.061,x:-0.65,y:-81.25,regX:86.4}},{t:this.ikNode_1,p:{rotation:0.7084,x:41.45,y:-294.55,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23,scaleX:0.9997,scaleY:0.9997,rotation:22.9442,x:-45.3,y:73,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:13.5278,x:-5.55,y:-78.85,regX:86.4}},{t:this.ikNode_1,p:{rotation:1.5078,x:39.6,y:-291.55,scaleX:0.9998,scaleY:0.9998,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:24.9347,x:-54,y:74.3,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:14.996,x:-10.55,y:-76.45,regX:86.4}},{t:this.ikNode_1,p:{rotation:2.3075,x:37.5,y:-288.6,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:26.9253,x:-62.8,y:75.45,regY:3.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9997,scaleY:0.9997,rotation:16.4642,x:-15.4,y:-74,regX:86.5}},{t:this.ikNode_1,p:{rotation:3.1077,x:35.55,y:-285.6,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:28.9154,x:-71.6,y:76.4,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:17.9308,x:-20.35,y:-71.9,regX:86.5}},{t:this.ikNode_1,p:{rotation:3.9094,x:33.5,y:-282.6,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:30.9057,x:-80.3,y:77.3,regY:3.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9997,scaleY:0.9997,rotation:19.3988,x:-25.45,y:-69.65,regX:86.4}},{t:this.ikNode_1,p:{rotation:4.7074,x:31.5,y:-279.6,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:32.8969,x:-88.95,y:78,regY:3}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:20.8679,x:-30.35,y:-67.55,regX:86.4}},{t:this.ikNode_1,p:{rotation:5.508,x:29.5,y:-276.6,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:34.8876,x:-97.55,y:78.65,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:22.3339,x:-35.25,y:-65.45,regX:86.4}},{t:this.ikNode_1,p:{rotation:6.3081,x:27.5,y:-273.6,scaleX:0.9997,scaleY:0.9997,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:36.879,x:-106.15,y:79.15,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:23.8021,x:-40.15,y:-63.3,regX:86.4}},{t:this.ikNode_1,p:{rotation:7.1077,x:25.5,y:-270.6,scaleX:0.9997,scaleY:0.9997,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:38.8688,x:-114.6,y:79.4,regY:3}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:25.2701,x:-45.05,y:-61.25,regX:86.4}},{t:this.ikNode_1,p:{rotation:7.9076,x:23.45,y:-267.6,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:40.8601,x:-123.1,y:79.6,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:26.7375,x:-50,y:-59.2,regX:86.4}},{t:this.ikNode_1,p:{rotation:8.7083,x:21.55,y:-264.6,scaleX:0.9998,scaleY:0.9998,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:42.8513,x:-131.4,y:79.65,regY:3}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:28.2055,x:-54.8,y:-57.25,regX:86.4}},{t:this.ikNode_1,p:{rotation:9.5082,x:19.5,y:-261.65,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:44.8411,x:-139.85,y:79.7,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:29.6734,x:-59.7,y:-55.3,regX:86.4}},{t:this.ikNode_1,p:{rotation:10.3073,x:17.45,y:-258.6,scaleX:0.9997,scaleY:0.9997,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:42.6525,x:-131.3,y:80.65,regY:3.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9997,scaleY:0.9997,rotation:27.9896,x:-55.25,y:-56.5,regX:86.4}},{t:this.ikNode_1,p:{rotation:9.269,x:18.25,y:-261.35,scaleX:0.9997,scaleY:0.9997,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:40.4644,x:-122.7,y:81.35,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:26.3058,x:-50.65,y:-58.05,regX:86.4}},{t:this.ikNode_1,p:{rotation:8.2318,x:19.1,y:-264.05,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:38.2738,x:-113.95,y:81.9,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:24.6229,x:-46.1,y:-59.55,regX:86.4}},{t:this.ikNode_1,p:{rotation:7.1931,x:20.05,y:-266.75,scaleX:0.9998,scaleY:0.9998,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23,scaleX:0.9997,scaleY:0.9997,rotation:36.0852,x:-105.35,y:82.25,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:22.9392,x:-41.45,y:-61.1,regX:86.4}},{t:this.ikNode_1,p:{rotation:6.1552,x:20.7,y:-269.45,scaleX:0.9997,scaleY:0.9997,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:33.8962,x:-96.5,y:82.45,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:21.2554,x:-36.9,y:-62.75,regX:86.4}},{t:this.ikNode_1,p:{rotation:5.1172,x:21.6,y:-272.2,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:31.7078,x:-87.5,y:82.55,regY:3.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9997,scaleY:0.9997,rotation:19.5722,x:-32.3,y:-64.3,regX:86.4}},{t:this.ikNode_1,p:{rotation:4.0811,x:22.4,y:-274.9,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:29.5184,x:-78.55,y:82.3,regY:3.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9997,scaleY:0.9997,rotation:17.8885,x:-27.5,y:-66.05,regX:86.5}},{t:this.ikNode_1,p:{rotation:3.0429,x:23.2,y:-277.6,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:27.3293,x:-69.45,y:81.85,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:16.2055,x:-22.95,y:-68,regX:86.4}},{t:this.ikNode_1,p:{rotation:2.0047,x:23.95,y:-280.3,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:25.1394,x:-60.35,y:81.25,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:14.5224,x:-18.35,y:-69.9,regX:86.4}},{t:this.ikNode_1,p:{rotation:0.9664,x:24.8,y:-283.05,scaleX:0.9997,scaleY:0.9997,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23,scaleX:0.9997,scaleY:0.9997,rotation:22.9501,x:-51.35,y:80.5,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:12.8382,x:-13.65,y:-71.9,regX:86.4}},{t:this.ikNode_1,p:{rotation:-0.0673,x:25.65,y:-285.75,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:20.7622,x:-42.05,y:79.5,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:11.1554,x:-8.9,y:-73.95,regX:86.4}},{t:this.ikNode_1,p:{rotation:-1.1054,x:26.5,y:-288.45,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:18.5721,x:-32.8,y:78.3,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:9.4711,x:-4.15,y:-76.05,regX:86.4}},{t:this.ikNode_1,p:{rotation:-2.1438,x:27.3,y:-291.2,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:16.3834,x:-23.55,y:76.85,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:7.7886,x:0.55,y:-78.2,regX:86.4}},{t:this.ikNode_1,p:{rotation:-3.1813,x:28.15,y:-293.9,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:14.1938,x:-14.2,y:75.25,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:6.1041,x:5.25,y:-80.45,regX:86.4}},{t:this.ikNode_1,p:{rotation:-4.2205,x:28.95,y:-296.6,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:12.0054,x:-4.9,y:73.45,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:4.4206,x:9.95,y:-82.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-5.2568,x:29.75,y:-299.3,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:9.8161,x:4.4,y:71.4,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:2.7373,x:14.85,y:-85.15,regX:86.5}},{t:this.ikNode_1,p:{rotation:-6.295,x:30.6,y:-302.05,scaleX:0.9997,scaleY:0.9997,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:7.6274,x:13.8,y:69.1,regY:3}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:1.0538,x:19.45,y:-87.6,regX:86.4}},{t:this.ikNode_1,p:{rotation:-7.3333,x:31.4,y:-304.75,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:5.438,x:23.05,y:66.8,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:-0.6244,x:24.2,y:-90.2,regX:86.4}},{t:this.ikNode_1,p:{rotation:-8.3714,x:32.15,y:-307.45,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:3.2496,x:32.35,y:64.1,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:-2.3084,x:28.95,y:-92.8,regX:86.4}},{t:this.ikNode_1,p:{rotation:-9.4097,x:33,y:-310.15,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:1.0591,x:41.8,y:61.3,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:-3.9927,x:33.75,y:-95.45,regX:86.4}},{t:this.ikNode_1,p:{rotation:-10.4466,x:33.8,y:-312.85,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-1.1255,x:51.15,y:58.25,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:-5.6751,x:38.5,y:-98.2,regX:86.4}},{t:this.ikNode_1,p:{rotation:-11.4845,x:34.65,y:-315.6,scaleX:0.9997,scaleY:0.9997,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:-3.3136,x:60.5,y:55,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:-7.359,x:43.25,y:-101,regX:86.4}},{t:this.ikNode_1,p:{rotation:-12.5232,x:35.5,y:-318.3,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:-5.5038,x:69.8,y:51.55,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:-9.0421,x:48,y:-103.9,regX:86.4}},{t:this.ikNode_1,p:{rotation:-13.5592,x:36.3,y:-321,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:-7.6924,x:79.1,y:47.7,regY:3}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:-10.7263,x:52.7,y:-106.85,regX:86.4}},{t:this.ikNode_1,p:{rotation:-14.5979,x:37.15,y:-323.75,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:-9.881,x:88.4,y:44,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:-12.4088,x:57.5,y:-109.9,regX:86.4}},{t:this.ikNode_1,p:{rotation:-15.6361,x:37.95,y:-326.45,scaleX:0.9997,scaleY:0.9997,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:-12.0699,x:97.6,y:39.9,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:-14.0916,x:62.25,y:-113,regX:86.5}},{t:this.ikNode_1,p:{rotation:-16.6748,x:38.75,y:-329.2,scaleX:0.9997,scaleY:0.9997,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:-14.2596,x:106.85,y:35.6,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:-15.7751,x:66.95,y:-116.2,regX:86.4}},{t:this.ikNode_1,p:{rotation:-17.7129,x:39.5,y:-331.85,scaleX:0.9998,scaleY:0.9998,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:-16.4473,x:116.05,y:31.1,regY:3.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9997,scaleY:0.9997,rotation:-17.4582,x:71.7,y:-119.3,regX:86.4}},{t:this.ikNode_1,p:{rotation:-18.7499,x:40.25,y:-334.6,scaleX:0.9997,scaleY:0.9997,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:-18.6366,x:125.1,y:26.4,regY:3.1}},{t:this.ikNode_2,p:{regY:0.5,scaleX:0.9997,scaleY:0.9997,rotation:-19.1421,x:76.35,y:-122.65,regX:86.4}},{t:this.ikNode_1,p:{rotation:-19.7882,x:41.1,y:-337.3,scaleX:0.9997,scaleY:0.9997,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9997,scaleY:0.9997,rotation:-20.8267,x:134.15,y:21.6,regY:3.1}},{t:this.ikNode_2,p:{regY:0.4,scaleX:0.9997,scaleY:0.9997,rotation:-20.8264,x:81.05,y:-126.2,regX:86.5}},{t:this.ikNode_1,p:{rotation:-20.8269,x:41.95,y:-340.1,scaleX:0.9997,scaleY:0.9997,regX:39.5}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-235.4,-345.5,447.1,538.1);


(lib.中燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 中燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(7.45,-329.05,0.9999,0.9999,-29.3428,0,0,39.5,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(77.75,-123.2,0.9999,0.9999,-29.3428,0,0,86.4,0.6);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(151.9,15.1,0.9999,0.9999,-29.3428,0,0,23,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{regX:23,scaleX:0.9999,scaleY:0.9999,rotation:-29.3428,x:151.9,y:15.1,regY:3.1}},{t:this.ikNode_2,p:{regX:86.4,scaleX:0.9999,scaleY:0.9999,rotation:-29.3428,x:77.75,y:-123.2,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-29.3428,x:7.45,y:-329.05,regY:0}}]}).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-27.4473,x:135.35,y:22.4,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-26.7438,x:67.6,y:-119.05,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-27.2138,x:4.75,y:-327.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-25.5525,x:118.45,y:29.25,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-24.1444,x:57.2,y:-115.15,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-25.0855,x:2.15,y:-325.7,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23,scaleX:0.9998,scaleY:0.9998,rotation:-23.6566,x:101.2,y:35.45,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-21.546,x:46.65,y:-111.5,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-22.9547,x:-0.55,y:-324,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-21.7615,x:84,y:41.1,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-18.9454,x:36,y:-108.4,regY:0.5}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-20.8256,x:-3.15,y:-322.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-19.8661,x:66.5,y:46,regY:3}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-16.3467,x:25.4,y:-105.2,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-18.6968,x:-5.8,y:-320.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-17.9712,x:48.95,y:50.6,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-13.7474,x:14.75,y:-102.5,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-16.567,x:-8.5,y:-318.85,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-16.0752,x:31.3,y:54.45,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-11.1475,x:4.05,y:-100.05,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-14.4379,x:-11.1,y:-317.15,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-14.1809,x:13.65,y:57.6,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-8.5487,x:-6.65,y:-97.9,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-12.3094,x:-13.8,y:-315.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-12.2852,x:-4.2,y:60.2,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-5.9499,x:-17.4,y:-96.15,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-10.1795,x:-16.4,y:-313.75,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-10.39,x:-22,y:62.15,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-3.3501,x:-28.05,y:-94.6,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-8.0503,x:-19.1,y:-312,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-8.4948,x:-39.85,y:63.55,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-0.7503,x:-38.85,y:-93.4,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-5.9217,x:-21.7,y:-310.15,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-6.6001,x:-57.65,y:64.25,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:1.8436,x:-49.45,y:-92.45,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-3.7916,x:-24.35,y:-308.55,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-4.7045,x:-75.4,y:64.35,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:4.4431,x:-60.2,y:-91.9,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-1.6625,x:-27.05,y:-306.85,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-2.8089,x:-93.15,y:63.8,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:7.043,x:-70.75,y:-91.6,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:0.4617,x:-29.7,y:-305.15,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-0.9129,x:-110.65,y:62.65,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:9.6416,x:-81.4,y:-91.5,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.591,x:-32.35,y:-303.45,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:0.9768,x:-128.1,y:60.95,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:12.2415,x:-91.9,y:-91.75,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:4.7212,x:-35,y:-301.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:2.8728,x:-145.45,y:58.6,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:14.8403,x:-102.25,y:-92.35,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:6.8502,x:-37.6,y:-300.1,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:4.7687,x:-162.55,y:55.6,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:17.4386,x:-112.55,y:-93.3,regY:0.5}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:8.9779,x:-40.3,y:-298.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:6.6633,x:-179.45,y:52.15,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:20.0382,x:-122.8,y:-94.3,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:11.1084,x:-42.9,y:-296.7,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:8.5586,x:-196.15,y:47.95,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:22.6372,x:-132.95,y:-95.7,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:13.2384,x:-45.55,y:-294.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:10.4542,x:-212.6,y:43.3,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:25.2377,x:-142.85,y:-97.4,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:15.3666,x:-48.2,y:-293.25,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:12.3489,x:-228.8,y:38.1,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:27.8361,x:-152.8,y:-99.3,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:17.4964,x:-50.9,y:-291.55,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:14.2443,x:-244.6,y:32.15,regY:3}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:30.4345,x:-162.5,y:-101.6,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:19.6263,x:-53.5,y:-289.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:16.1397,x:-260.15,y:25.9,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:33.0338,x:-172.05,y:-104.05,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:21.7559,x:-56.15,y:-288.1,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:18.0356,x:-275.4,y:19.05,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:35.6326,x:-181.45,y:-106.75,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:23.8837,x:-58.8,y:-286.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23,scaleX:0.9998,scaleY:0.9998,rotation:19.9311,x:-290.35,y:11.7,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:38.2328,x:-190.65,y:-109.75,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:26.0136,x:-61.45,y:-284.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:21.8258,x:-304.7,y:4,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:40.8324,x:-199.7,y:-113.05,regY:0.5}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:28.1432,x:-64.2,y:-282.9,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:23.7216,x:-318.8,y:-4.35,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:43.4323,x:-208.6,y:-116.4,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:30.271,x:-66.75,y:-281.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:25.6163,x:-332.35,y:-13.25,regY:3}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:46.0308,x:-217.3,y:-120.15,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:32.4004,x:-69.4,y:-279.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:23.5681,x:-319.05,y:-3.3,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:43.3024,x:-209.1,y:-115.65,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:30.1245,x:-67.7,y:-280.85,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:21.5205,x:-305.15,y:6,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:40.5739,x:-200.65,y:-111.45,regY:0.5}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:27.8529,x:-66,y:-282.1,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:19.4714,x:-290.9,y:14.7,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:37.8453,x:-192.1,y:-107.5,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:25.5783,x:-64.25,y:-283.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:17.4231,x:-276.15,y:22.95,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:35.1158,x:-183.3,y:-103.75,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:23.3038,x:-62.5,y:-284.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:15.3746,x:-261,y:30.55,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:32.3871,x:-174.25,y:-100.5,regY:0.5}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:21.0291,x:-60.85,y:-285.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23,scaleX:0.9998,scaleY:0.9998,rotation:13.3274,x:-245.5,y:37.6,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:29.6591,x:-165.15,y:-97.25,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:18.7552,x:-59.05,y:-287.1,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:11.2785,x:-229.6,y:44.1,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:26.9299,x:-155.85,y:-94.5,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:16.4796,x:-57.35,y:-288.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:9.2303,x:-213.4,y:49.95,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:24.2012,x:-146.3,y:-92,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:14.2053,x:-55.55,y:-289.7,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23,scaleX:0.9998,scaleY:0.9998,rotation:7.1822,x:-197.05,y:55.2,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:21.4729,x:-136.65,y:-89.9,regY:0.5}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:11.9314,x:-53.85,y:-290.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:5.1328,x:-180.2,y:59.75,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:18.7444,x:-126.9,y:-87.95,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:9.6565,x:-52.1,y:-292.3,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:3.0839,x:-163.2,y:63.65,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:16.0149,x:-117,y:-86.4,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:7.3814,x:-50.4,y:-293.45,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:1.0363,x:-146,y:66.9,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:13.2861,x:-107.05,y:-85.2,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:5.1082,x:-48.65,y:-294.65,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-1.0065,x:-128.7,y:69.5,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:10.5574,x:-96.95,y:-84.25,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.8343,x:-46.95,y:-295.9,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-3.055,x:-111.15,y:71.35,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:7.828,x:-86.8,y:-83.7,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:0.5588,x:-45.2,y:-297.2,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23,scaleX:0.9998,scaleY:0.9998,rotation:-5.1038,x:-93.55,y:72.6,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:5.0995,x:-76.55,y:-83.5,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-1.7106,x:-43.5,y:-298.45,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-7.1523,x:-75.75,y:73,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:2.3704,x:-66.25,y:-83.6,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-3.9845,x:-41.75,y:-299.75,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-9.2001,x:-57.95,y:72.8,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-0.3533,x:-55.95,y:-84.1,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-6.2602,x:-40.05,y:-300.95,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-11.2475,x:-40.2,y:71.95,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-3.0821,x:-45.6,y:-84.85,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-8.5346,x:-38.3,y:-302.25,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-13.2969,x:-22.3,y:70.35,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-5.8109,x:-35.35,y:-85.95,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-10.809,x:-36.6,y:-303.55,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23,scaleX:0.9998,scaleY:0.9998,rotation:-15.3447,x:-4.7,y:68.1,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-8.5391,x:-25,y:-87.5,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-13.0841,x:-34.9,y:-304.75,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-17.3929,x:13.2,y:65.1,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-11.2688,x:-14.65,y:-89.35,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-15.3577,x:-33.15,y:-306.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-19.4415,x:30.75,y:61.4,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-13.9979,x:-4.35,y:-91.5,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-17.6313,x:-31.35,y:-307.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-21.4903,x:48.25,y:57.1,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-16.7258,x:5.95,y:-94.1,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-19.9059,x:-29.7,y:-308.55,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-23.5372,x:65.55,y:52.1,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-19.4559,x:16.15,y:-96.9,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-22.1804,x:-27.95,y:-309.8,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-25.5854,x:82.75,y:46.35,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-22.1843,x:26.35,y:-100,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-24.4552,x:-26.25,y:-311.05,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-27.6351,x:99.65,y:39.9,regY:3}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-24.9129,x:36.4,y:-103.5,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-26.7301,x:-24.55,y:-312.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23,scaleX:0.9998,scaleY:0.9998,rotation:-29.6822,x:116.35,y:33.05,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-27.6421,x:46.35,y:-107.3,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-29.0041,x:-22.8,y:-313.6,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-31.7298,x:132.9,y:25.3,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-30.3675,x:56.1,y:-111.55,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-31.2769,x:-21,y:-314.85,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-33.7786,x:149,y:17,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-33.0976,x:65.95,y:-116,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-33.5509,x:-19.4,y:-316.2,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{regX:23.1,scaleX:0.9998,scaleY:0.9998,rotation:-35.8256,x:164.85,y:8.05,regY:3.1}},{t:this.ikNode_2,p:{regX:86.5,scaleX:0.9998,scaleY:0.9998,rotation:-35.8256,x:75.35,y:-120.8,regY:0.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-35.8256,x:-17.6,y:-317.35,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-401.8,-329,650.2,516.5);


// stage content:
(lib.春燈 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 春斷圖
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(91.3,49.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 筆畫一
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#332F1F").s().p("AjDDEQhvAQiDgXQhGgLifgsQAfgVBPgfICWg6QDFhNAqhBIAWgFIgBAXQASgFAKgYIF6hSIAAAQQAmgJBQgJQBkgKBGAFQDPAOiaCFQg1AuhHAhIh5AzIoMCNQAAgLgJANIgXASgAk/CoQh7ACARADQAkAIBaADQBpACADgTIiAABgAoSCiIgfgFQAVAIAKgDgADMBVQgCAHAMgKg");
	this.shape.setTransform(266.6348,136.2052);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 筆畫二
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#332F1F").s().p("Am0CMQh8gXAGgtQB6BSCSgJQh2gUg+gYQhggngwhJQBIgDCzABQCcgKBFg/IA+gIIgEATIAGgTIH8hAQB+ANAjA0QArBBh8BgQgnAfgsAOQgjAMguAEIo+AeQiDgDhVgQg");
	this.shape_1.setTransform(270.1019,176.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// 筆畫三
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#332F1F").s().p("AyiEUQgcgLgkgPQhJggAVgPQBtBpC7gkQBBgNBdghICTg2QkABOiAgGQjPgJhsi5QA0ArBCgKQhEgMBJgVQHcACDZiDIKmimQDeggDagHQDlgGDLAXQDeAYBrAoQDPBLjEB5QhcA3iOAEQhqACisgdQjDgjhegOQiigYhmANQh7AIhWAJQigAPhVAgIgJAEQhEAdgVApIkRAhQixAoBOgGQAagEAWgHIiMA/Qh1AphYAOQg4AJgyAAQg1AAgvgKgASHAdQAtgDAdgRQgoAQgiAEg");
	this.shape_2.setTransform(280.8847,222.7537);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// 筆畫四_no
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#332F1F").s().p("ApRH7QgwAihJhvQgegtgSgwQgSgxAEgaQAUiDCTiHQBohhCohdQBWgxDRhkQgKAFBVggQkKBvjKCLQjpCfhMCYQgSAlAHA9QAHA7AbA0QAdA4AnAXQAtAaAugZQENiQATgLQCYhbBshtQDPjOCVjNIGmj8IANAFIgQABQgxBegvBQIhuC0Qj1F1j8C1QjiCjjhAAQhkAAhkgggAlCF+QhhA1iFA+QB7gmBsg/QBwhBBnhWQhfBGh5BDgADPhTQgnAqgQAkQBAhJA5hJIhCBEg");
	this.shape_3.setTransform(169.0636,295.1796);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#332F1F").s().p("Ai3hPIgBgOQgGgIADgKQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAABQgBhzA8gDQBngNBZB6QBJBkAyCnIlNBKIgWicQgNhZgEgsIALEnIgKACQgGkqAFgLg");
	this.shape_4.setTransform(269.0609,72.8872);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// 筆劃五
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#332F1F").s().p("AIQG3QhygdkbhaQjjhIhBgIIgEgSQBwABBuAXQgOgHhUgKQhQgIgsgBQgNg5gTgpQA3BFBKAUIgfADIAqgBQA1ALA6gQQBKgEA7gtQgKAIgwAKQAWgMARgLQBBgsjOiLQhqhIiUhPQiuhcivgvQiogti9gIIABgGQB6AAAsgBQBLgBgCgGIBbAgQCIAYB/A2QhMgniggyQjIg/iQgNIAJgmQEAgQELAlQEgAnD2BdQJIDbC6G1QA4CEh6AUQgVADgbAAQhiAAixgugAg6hxQg+gogygcIAVAPIgVgPQishiiqgqIC+BHQCLA+B9BLIAAAAg");
	this.shape_5.setTransform(361.0917,279.0324);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// 筆畫六
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#332F1F").s().p("Ag/IkQg4h0gZjCQgWiyAIjKQAHjEAhieIA/guIgFAZIAKgcIDGiRIAGAOIADIuQgJCWgBBeIAMgFIACF5IgPgFQAOAqABAkIgCAIQgBAIACAGQgHBAg9AiQhdgNg+iCgAhemJQgIAfgDAZQAKgvAOg0IgNArg");
	this.shape_6.setTransform(228.8201,349.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// 筆畫七
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#332F1F").s().p("AAeLSQgbgagug9Qgug7gUgTIgdkSQA3ATBgALQALhBgLhTQgHg2gPg2IgFgTIgBgCIAph+IgXAGIASh3QgHASgNAaIALiIQAIAIAEAIQgGgWgDgXIAFg9IgJgBQABgyAQgvQAIgNAEgOQAMAdAFAjQgDgqgLghQADgZgUgOQgbgvgxgRQAlASAaAoQgygSiHAXQhcAPiWAoIARjCQDzhVCjALQDcAOBbC5IAAF0IBWAXQAXEegmDuQgxEqiIBrQgiAbgkAAQgzAAg3g2gAlUo1QBgguBlgVIAFgBQhaAJhwA7g");
	this.shape_7.setTransform(305.1301,342.1575);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// 筆劃八
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#332F1F").s().p("AjRCTIATjZQAZgECcgnQB3geA8gDIAoDfIgMARIjdAyIAEgHQADgBABgBQAAAAAAAAQgBAAgCABQgCABgDACQANgOAAgQQhkAmhRAAIgSAAgAgCBqIgGAOIAMgDQABgBACgEQgGgGgCAAIgBAAg");
	this.shape_8.setTransform(280.3,325.3965);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// 筆劃九
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#332F1F").s().p("AjAEiIABgPQA7AFA7gdQg7ASg6gBIAlmpQB4g4A5hMIAFABIgMAOIAMgOIClAPQg9BHhBA9QhEA+g5AlQAcgJA3gIIBmgOIhjEcQgLACgXALQguAUg7AoQghAGghAAIgQAAg");
	this.shape_9.setTransform(273.25,372.245);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// 筆畫十
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#332F1F").s().p("AgygFQAag9Arg3IA+BCQg6A3guAzQgtAygMAVQACg+AchBg");
	this.shape_10.setTransform(253.375,421.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// 小燈籠
	this.instance_1 = new lib.小燈籠();
	this.instance_1.setTransform(312.25,352.95,0.5907,0.5661,46.9716,0,0,99,-101.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 中燈籠
	this.instance_2 = new lib.中燈籠();
	this.instance_2.setTransform(200.15,211.7,0.6363,0.6649,35.6832,0,0,99.7,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 大燈籠
	this.instance_3 = new lib.大燈籠();
	this.instance_3.setTransform(448.8,280.4,1,1,-6.5275,0,0,99.2,-102.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 底稿顏色
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5F3F2").s().p("EgruAs5MAAAhZxMBXdAAAMAAABZxg");
	this.shape_11.setTransform(279.925,288.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(279.5,288.2,280.4,287.2);
// library properties:
lib.properties = {
	id: 'B647AC1373F5264E9B141C24FB813377',
	width: 559,
	height: 575,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/春燈_atlas_1.png?1640763876605", id:"春燈_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B647AC1373F5264E9B141C24FB813377'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
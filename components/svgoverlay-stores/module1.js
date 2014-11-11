var Reflux=Require("reflux");
var actions=Require("actions");
var tokenize=Require("ksana-document").tokenizers.simple; 
var nejing="昔在黃帝，生而神靈，弱而能言，幼而徇齊，長而敦敏，成而登天。乃問於天師曰：余聞上古之人，春秋皆度百歲，而動作不衰；今時之人，年半百而動作皆衰者，時世異耶？人將失之耶？\n"+
"岐伯對曰：上古之人，其知道者，法於陰陽，和於術數，食飲有節，起居有常，不妄作勞，故能形與神俱，而盡終其天年，度百歲乃去。今時之人不然也，以酒為漿，以妄為常，醉以入房，以欲竭其精，以耗散其真，不知持滿，不時御神，務快其心，逆於生樂，起居無節，故半百而衰也。\n"+
"夫上古聖人之教下也，皆謂之虛邪賊風，避之有時，恬淡虛無，真氣從之，精神內守，病安從來。是以志閑而少欲，心安而不懼，形勞而不倦，氣從以順，各從其欲，皆得所願。故美其食，任其服，樂其俗，髙下不相慕，其民故曰樸。是以嗜欲不能勞其目，淫邪不能惑其心，愚智賢不肖，不懼於物，故合於道。所以能年皆度百歲，而動作不衰者，以其德全不危也。";
var tokens=[];
var sourcetext = Reflux.createStore({
	listenables: actions,
    onGetText: function() {
      if (!tokens.length) tokens=tokenize(nejing).tokens;
      this.trigger(tokens);
    }
});
 var ns = "http://www.w3.org/2000/svg";
var createBound=function(rect) {
    var bounding=document.createElementNS(ns,"ellipse");
    var cx=rect.left+rect.width/2;
    var cy=rect.top+rect.height/2;

    bounding.setAttribute('cx',cx);
    bounding.setAttribute('cy',cy);
    bounding.setAttribute('rx',rect.width/1.5);
    bounding.setAttribute('ry',rect.height/1.5);
    bounding.setAttribute('fill','none');
    bounding.setAttribute('stroke', 'black');
    bounding.setAttribute('stroke-width', '1');
    return bounding;
}
var createArrow=function(rect1,rect2) {

}
var getRandomColor =function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var createRandomLink=function(){
	var n1=$("#thetext").children()[ Math.round(Math.random()*310) ];
    var n2=$("#thetext").children()[ Math.round(Math.random()*310)];
    createLink(n1,n2);
}
var createLink=function(n1,n2) {
	
	var from=$(n1).offset();
	var to=$(n2).offset();

	var fromx=from.left, fromy=from.top+$(n1).height();
	var tox=to.left, toy=to.top+$(n2).height();

	var midx=(fromx+tox)/2;
	var midy=(fromy+toy)/2 + 20;

    var path = document.createElementNS(ns, "path");
    path.setAttribute('marker-end', 'url(#head)');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', getRandomColor());
    path.setAttribute('d', 'M' + fromx + ',' + fromy + ' Q' + midx + ',' + midy + ' ' + tox + ',' + toy);

    var frombound=createBound(n1.getBoundingClientRect());
    var tobound=createBound(n2.getBoundingClientRect());
    var svg=$("#svgmarkups svg");
    svg.append(frombound);
    svg.append(tobound);
    svg.append(path);
}
var markups=Reflux.createStore({
	listenables: actions,
    onMakeLink: function(n1,n2) {
      createLink(n1,n2);
    },
    onMakeRandomLink: function() {
      createRandomLink();
    }	
})
var stores={sourcetext:sourcetext,markups:markups};

module.exports=stores;
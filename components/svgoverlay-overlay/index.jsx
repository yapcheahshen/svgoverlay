/** @jsx React.DOM */

/* to rename the component, change name of ./component.js and  "dependencies" section of ../../component.js */

//var othercomponent=Require("other"); 
var overlay = React.createClass({
  getInitialState: function() {
    return {};
  },
  markerstyle:function() {
    return "<marker id='head'"+
                "orient='auto' markerWidth='2' markerHeight='4' refX='0.1' "+
                "refY='2'><path id='headpoly' d='M0,0 V4 L2,2 Z' fill='black'"+
                "/></marker>";
  }, 
  render: function() {
    return ( 
        <div id='svgmarkups'>
          <svg xmlns='http://www.w3.org/2000/svg' style={{width:"100%",height:"100%"}}>
           <defs dangerouslySetInnerHTML={{__html:this.markerstyle()}}>
           </defs>
        </svg>
      </div>
    ); 
  }
});
module.exports=overlay;
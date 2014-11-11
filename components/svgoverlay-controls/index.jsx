/** @jsx React.DOM */

/* to rename the component, change name of ./component.js and  "dependencies" section of ../../component.js */

var actions=Require("actions"); 
var controls = React.createClass({
  getInitialState: function() {
    return {};
  },
  makelink:function() {
    var n1=$("#thetext").children()[2];
    var n2=$("#thetext").children()[20];
    //actions.makeLink(n1,n2);
    actions.makeRandomLink();
  },
  render: function() {
    return (
      <div>
        <button onClick={this.makelink}>make link</button>
      </div>
    );
  }
});
module.exports=controls;
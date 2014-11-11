/** @jsx React.DOM */

/* to rename the component, change name of ./component.js and  "dependencies" section of ../../component.js */

//var othercomponent=Require("other"); 
var textview = React.createClass({
  getInitialState: function() {
    return {};
  },
  renderToken:function(token,idx) {
    return <span key={"T"+idx}>{token}</span>
  },
  render: function() {
    return (
      <div id="thetext">
        {this.props.texts.map(this.renderToken)}
      </div>
    );
  }
});
module.exports=textview;
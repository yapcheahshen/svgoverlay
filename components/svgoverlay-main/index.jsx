var require_kdb=[];//{ filename:"svgoverlay.kdb"  , url:"http://ya.ksana.tw/kdb/svgoverlay.kdb" , desc:""}];  
var Fileinstaller=Require("fileinstaller");
var kde=Require("ksana-document").kde;
var kse=Require("ksana-document").kse;
var bootstrap=Require("bootstrap");
var Overlay=Require("overlay");
var Textview=Require("textview");
var Controls=Require("controls");
var stores=Require("stores");
var actions=Require("actions");
var main = React.createClass({
  getInitialState:function(){
    return {texts:[]}; 
  },
  onReady:function(usage,quota) {
    if (!this.state.db) kde.open("svgoverlay",function(db){
        this.setState({db:db});  
    },this);      
    this.setState({quota:quota,usage:usage});
  },
  componentDidMount:function(){
    this.unsubscribe1 = stores.sourcetext.listen(this.onTextChanged);
    this.unsubscribe2 = stores.markups.listen(this.onMarkupChanged);
    actions.getText();
  },
  componentWillUnmount:function() {
    this.unsubscribe1();
    this.unsubscribe2();
  },
  onTextChanged:function(texts){
    this.setState({texts:texts});
  },
  render: function() {
    return (
      <div className="main">
        <Controls/>
        <Overlay/>
        <Textview texts={this.state.texts}/>
      </div>
      );

  }
});
module.exports=main;
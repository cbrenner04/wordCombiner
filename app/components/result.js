var React = require('react');
var Result = React.createClass({
  render: function() {
    return(
      <div>
        <h2>{ this.props.firstCombination }</h2>
        <p>OR</p>
        <h2>{ this.props.secondCombination }</h2>
      </div>
    )
  }
});
module.exports = Result;

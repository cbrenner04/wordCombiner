var React = require('react');
var Form = React.createClass({
  handleChange: function(event) {
      var name = event.target.name;
      var obj = {};
      obj[name] = event.target.value;
      this.props.onUserInput(obj);
  },
  handleSubmit: function(event) {
      event.preventDefault();
      this.props.onFormSubmit();
  },
  render: function() {
    return (
      <form role="form" className='form'
            onSubmit={ function(event) {
                this.handleSubmit(event)
            }.bind(this) }>
        <div className="form-group">
            <label htmlFor="firstWord">Search Term:</label>
            <input type="text" className="form-control"
                   id="firstWord" name="firstWord"
                   value={ this.props.firstWord }
                   onChange={ function(event) {
                       this.handleChange(event)
                   }.bind(this) } />
        </div>
        <div className="form-group">
            <label htmlFor="secondWord">Search Term:</label>
            <input type="text" className="form-control"
                   id="secondWord" name="secondWord"
                   value={ this.props.secondWord }
                   onChange={ function(event) {
                       this.handleChange(event)
                   }.bind(this) } />
        </div>
        <button type="submit" className="btn btn-default" id="runSearch">
            Submit
        </button>
      </form>
    )
  }
});
module.exports = Form;

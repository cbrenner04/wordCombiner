var React = require('react');
var Form = require('./form');
var Result = require('./result');
var Main = React.createClass({
  getInitialState: function() {
    return {
      firstWord: '',
      secondWord: '',
      firstCombination: '',
      secondCombination: ''
    }
  },
  handleUserInput: function(object) {
      this.setState(object);
  },
  handleFormSubmit: function() {
    var firstWord = this.state.firstWord;
    var secondWord = this.state.secondWord;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var firstWordFirstVowelIndex;
    var secondWordFirstVowelIndex;

    firstWord.split('').some(function(character, index) {
      if (vowels.includes(character) && !vowels.includes(firstWord[index + 1])) {
        return firstWordFirstVowelIndex = index;
      }
    });

    secondWord.split('').some(function(character, index) {
      if (vowels.includes(character) && !vowels.includes(secondWord[index + 1])) {
        return secondWordFirstVowelIndex = index;
      }
    });

    this.setState({
      firstCombination: firstWord.slice(0, firstWordFirstVowelIndex) +
        secondWord.slice(secondWordFirstVowelIndex),
      secondCombination: secondWord.slice(0, secondWordFirstVowelIndex) +
        firstWord.slice(firstWordFirstVowelIndex),
      firstWord: '',
      secondWord: ''
    })
  },
  render: function() {
    return (
      <div>
        <Form firstWord={ this.state.firstWord }
              secondWord={ this.state.secondWord }
              onUserInput={ function(object) {
                  this.handleUserInput(object)
              }.bind(this) }
              onFormSubmit={ function() {
                  this.handleFormSubmit()
              }.bind(this) } />
        <Result firstCombination={ this.state.firstCombination }
                secondCombination={ this.state.secondCombination }/>
      </div>
    )
  }
});

module.exports = Main;

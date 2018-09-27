const APIUtil = require('./api_util.js');

class UsersSearch {
  constructor($el){
    this.el = $el;
    this.$input = $($el.children('input')[0]);
    this.ul = $el.children('ul')[0];
    this.$input.on('keyup', e => {
      this.handleInput(e);
    });
  }
  
  handleInput() {
    APIUtil.searchUsers(this.$input.val()); //json 
  }
  
  renderResults() {
    //make li s on a ul 
    
    
    
    // append that ul (with a bunch li ) onto the page 
    
    
  }
}

module.exports = UsersSearch;

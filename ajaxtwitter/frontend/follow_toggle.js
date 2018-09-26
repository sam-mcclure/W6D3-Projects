const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor($el) {
    this.userId = $el.data('user-id');
    this.followState = $el.data('initial-follow-state');
    this.$el = $el;
    this.render();
    this.$el.on('click', e => {
      this.handleClick(e);
    });
    
    console.log('End constructor')
    
    // .then(el) => console.log('YES'));
  }
  
  render() {
    if (this.followState === 'Unfollowing'){
      this.$el.text('Unfollowing...');
    } else if (this.followState === 'Following'){
      this.$el.text('Following...');
    } else if (this.followState) {
      return this.$el.text('Unfollow!');
    } else {
      return this.$el.text('Follow!');
    }
  }
  
  handleClick(e){
    e.preventDefault();
    
    // const follow = (this.followState) => new Promise(resolve => APIUtil.unfollowUser(this.userId),
    //   reject => APIUtil.followUser(this.userId));
    // follow(this.followState).then(resolveFollowStatus)
    
         
    if (this.followState) {
      APIUtil.unfollowUser(this.userId).then(() => changeFollowStatus());
      this.followState = 'Unfollowing';
    } else {
      APIUtil.followUser(this.userId).then(() => changeFollowStatus());
      this.followState = 'Following';
    }
  }
  
  resolveFollowStatus() {
    this.followState = !(this.followState);
    this.render();
  }
}

module.exports = FollowToggle;

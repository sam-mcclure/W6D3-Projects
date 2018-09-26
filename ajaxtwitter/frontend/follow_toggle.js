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
    // .then(el) => console.log('YES'));
  }
  
  render() {
  
    if (this.followState === 'Followed') {
      return this.$el.text('Unfollow!');
    } else if(this.followState === 'Following' || this.followState ==='Unfollowing') {
      return this.$el.text(`${this.followState}...`);
    } else {
      return this.$el.text('Follow!');
    }
  }
  
  handleClick(e){
    e.preventDefault();
    
    // const follow = (this.followState) => new Promise(resolve => APIUtil.unfollowUser(this.userId),
    //   reject => APIUtil.followUser(this.userId));
    // follow(this.followState).then(resolveFollowStatus)
    
    this.$el.attr('disabled', true);
         
    if (this.followState === 'Followed') {
      this.followState = 'Unfollowing';
      this.render();
      APIUtil.unfollowUser(this.userId).then(() => this.resolveFollowStatus());
      
    } else {
      this.followState = 'Following';
      this.render();
      APIUtil.followUser(this.userId).then(() => this.resolveFollowStatus());
      
    }
  }
  
  resolveFollowStatus() {
    this.followState === "Unfollowing" ? this.followState = "Unfollowed" : this.followState = "Followed";
    this.$el.attr('disabled', false);
    this.render();
  }
}

module.exports = FollowToggle;

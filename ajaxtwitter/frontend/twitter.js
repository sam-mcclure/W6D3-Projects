const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');
$( () => {
  const $followToggles = $('.follow-toggle');
  $followToggles.each((index, el) => {
    let $el = $(el);
    const followToggle = new FollowToggle($el);
  });
  
  const $usersSearch = $('.users-search');
  const usersSearch = new UsersSearch($usersSearch);
  
  
  
});
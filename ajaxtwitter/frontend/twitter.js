const FollowToggle = require('./follow_toggle.js');

$( () => {
  const $followToggles = $('.follow-toggle');
  $followToggles.each((index, el) => {
    let $el = $(el);
    const followToggle = new FollowToggle($el);
  });
  
  
});
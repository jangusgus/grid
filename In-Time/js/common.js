
$(function() {
 
  $('ul.nav-tabs').on('click', 'li:not(.is-active)', function() {
    $(this)
      .addClass('is-active').siblings().removeClass('is-active')
    .closest('div.tabs').find('div.tab-item').removeClass('is-active').eq($(this).index()).addClass('is-active');
  });
 
});
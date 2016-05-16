(function($) {
  $(document).on('dblclick', 'table', fillcolor);
})(jQuery);

function fillcolor() {
  var lines = $('.a3s')[0].innerHTML.split('\n');
  if (lines[0].indexOf('Commit') <= -1) return;
  var newBody = '';
  for (var i = 0; i <= lines.length; i++) {
    if (lines[i] === undefined) break;
    if (lines[i].charAt(0) == '+') {
      lines[i] = '<div style=\'background-color: #d0ffd0; width: 100%;\'>' + lines[i] + '</div>';
    } else if (lines[i].charAt(0) == '-') {
      lines[i] = '<div style=\'background-color: #ffd0d0; width: 100%;\'>' + lines[i] + '</div>';
    }
    newBody += lines[i];
  }
  $('.a3s')[0].innerHTML = newBody;
}

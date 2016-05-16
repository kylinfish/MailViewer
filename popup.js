(function($) {
  $(document).on('dblclick', 'table', fillcolor);
    $(document).on('keydown', function(e) {
        switch(e.keyCode) {
            case 37: // left
                $('.iG.J-J5-Ji > div.h0 > div:nth-child(2)').click();
                break;
            case 39: // right
                $('.iG.J-J5-Ji > div.h0 > div:nth-child(3)').click();
                break;
        }

        setTimeout(function(){
            fillcolor();
        }, 550);
    });
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

function initGame() {
  let $newPot = $('<div class="pot" id="pot"></div>').css({
    'bottom': '0px',
    'left': `${(window.innerWidth / 2 - 50)}px`
  }).appendTo('#game-field');

  $(document).keydown(function (e) {
    let pos = parseInt(($newPot).css('left'));
    if (e.keyCode === 37) {
      pos -= 100;
      if (pos > 50) {
      $($newPot).css({
        'left': `${pos}px`
      })
      }
    }
    if (e.keyCode === 39) {
      pos += 100;
      if (pos < (window.innerWidth - 100)) {
        $($newPot).css({
          'left': `${pos}px`
        })
      }
    }
    e.preventDefault();
  });
}


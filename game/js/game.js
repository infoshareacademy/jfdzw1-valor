function initGame() {
  let $newPot = $('<div class="pot" id="pot"></div>').css({
    'bottom': '0px',
    'left': `${(window.innerWidth / 2 - 50)}px`
  }).appendTo('#game-field');

  $(document).keydown(function (e) {
    let pos = parseInt(($newPot).css('left'));
    if (e.keyCode === 37) {
      $($newPot).css({
        'left': `${pos - 150}px`
      })
    }
    if (e.keyCode === 39) {
      $($newPot).css({
        'left': `${pos + 150}px`
      })
    }
    e.preventDefault();
  });
}


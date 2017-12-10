function initGame() {
  let $newPot = $('<div class="pot" id="pot"></div>').css({
    'left': `${(window.innerWidth / 2 - 50)}px`
  }).appendTo('#game-field');

  $(document).keydown(function (e) {
    let pos = parseInt(($newPot).css('left'));
    if (e.keyCode === 37) {
      pos -= 100;
      (pos < 10) ? pos =10 : pos;
      $($newPot).css({
        'left': `${pos}px`
      })
    }
    if (e.keyCode === 39) {
      pos += 100;
      (pos > (window.innerWidth - 110)) ? pos = (window.innerWidth - 130) : pos;
      $($newPot).css({
        'left': `${pos}px`
      })
    }
    e.preventDefault();
  });
}


function initGame() {
  let $newPot = $('<div class="pot" id="pot"></div>').css({
    'left': `385px`
  }).appendTo('#game-field');

  $(document).keydown(function (e) {
    let pos = parseInt(($newPot).css('left'));
    if (e.keyCode === 37) {
      pos -= 75;
      (pos < 10) ? pos =10 : pos;
      $($newPot).css({
        'left': `${pos}px`
      })
    }
    if (e.keyCode === 39) {
      pos += 75;
      (pos > 760) ? pos = 760 : pos;
      $($newPot).css({
        'left': `${pos}px`
      })
    }
    e.preventDefault();
  });

  setInterval(function () {
    let $height = 1;
    let $newCoin = $('<div class="coin-box" id="coin-box"></div>').css({
      'top': `${$height*50}px`,
      'left': `${Math.round(Math.random() * 775)}px`
    }).appendTo('#game-field');
  }, 1000);

}


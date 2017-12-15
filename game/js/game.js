function initGame() {
  let $newPot = $('<div class="pot" id="pot"></div>').css({
    'left': `385px`
  }).appendTo('#game-field');

  $(document).keydown(function (e) {
    let pos = parseInt(($newPot).css('left'));
    if (e.keyCode === 37) {
      pos -= 75;
      (pos < 10) ? pos = 10 : pos;
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


  let $life = 100;
  setInterval(function () {
    let $height = 1;

    let $newCoin = $('<div class="coin-box" id="coin-box"></div>').css({
      'top': `10px`,
      'left': `${Math.round(Math.random() * 775)}px`
    }).appendTo('#game-field');


    setInterval(function () {
      $newCoin.css({
        'top': `${$height += 50}px`
      });
    }, 1000);

    setTimeout(function () {
      $newCoin.css({
        'background-color': 'yellow'
      });
    }, 6000);

    setTimeout(function () {
      $newCoin.css({
        'background-color': 'red'
      });
    }, 9000);

    setTimeout(function () {
      $newCoin.remove();
      $('#life').css({
        'width': `${$life-=2}%`
      });
    }, 12000);

  }, 1000);

}


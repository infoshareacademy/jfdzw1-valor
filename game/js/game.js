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
    let points = ["leaf","tint","headphones", "heart", "glass", "usd", "flash"];


    let $newCoin = $('<div class="coin-box" id="coin-box">' +
      `<span class="glyphicon glyphicon-${points[Math.floor(Math.random()*points.length)]}" aria-hidden="true"></span></div>`).css({
      'top': `10px`,
      'left': `${Math.round(Math.random() * 775)}px`
    }).appendTo('#game-field');


    setInterval(function () {
      $newCoin.css({
        'top': `${$height += 50}px`
      });
      console.log(`pot ${$newPot.position().left}`);
      console.log(`coin ${$newCoin.position().left} ${$newCoin.position().top}`);

      if ($newCoin.position().top > 300 ) {
        $newCoin.css({
          'background-color': 'yellow'
        });
      }
      if ($newCoin.position().top > 450 ) {
        $newCoin.css({
          'background-color': 'red'
        });
      }
      if ($newCoin.position().top > 600 ) {
        $newCoin.remove();
        $('#life').css({
          'width': `${$life-=2}%`
        });
      }
    }, 1000);

  }, 1000);

}


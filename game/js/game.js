function initGame() {
  let $pot = $('<div class="pot" id="pot"></div>').css({
    'left': `385px`
  }).appendTo('#game-field');

  $(document).keydown(function (e) {
    let pos = parseInt(($pot).css('left'));
    if (e.keyCode === 37) {
      pos -= 75;
      (pos < 10) ? pos = 10 : pos;
      $($pot).css({
        'left': `${pos}px`
      })
    }
    if (e.keyCode === 39) {
      pos += 75;
      (pos > 760) ? pos = 760 : pos;
      $($pot).css({
        'left': `${pos}px`
      })
    }
    e.preventDefault();
  });


  let $life = 100;
  const interval = setInterval(function () {
    //clearInterval(interval)
    let $height = -50;
    let points = ["leaf","tint","headphones", "heart", "glass", "usd", "flash"];


    let $newCoin = $('<div class="coin-box" id="coin-box">' +
      `<span class="glyphicon glyphicon-${points[Math.floor(Math.random()*points.length)]}" aria-hidden="true"></span></div>`).css({
      'top': `-50px`,
      'left': `${Math.round(Math.random() * 775)}px`
    }).appendTo('#game-field');

    setInterval(function () {
      $newCoin.css({
        'top': `${$height += 1}px`
      });
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
      if ($newCoin.position().top > 551 ) {
        $newCoin.remove();
        $('#life').css({
          'width': `${$life-=2}%`
        });
      }
      checkCollision($newCoin)
    }, 20);
  }, 1000);

  function checkCollision(coin) {
    const cPos = coin.position();
    cPos.right = cPos.left + coin.width()
    const potPos = $pot.position();
    potPos.right = potPos.left + $pot.width()
    cPos.bottom = cPos.top + coin.height()
    if (cPos.bottom > potPos.top ) {
      //debugger
      if (cPos.left < potPos.left && cPos.right > potPos.left) {
        coin.remove();
      }
      if (cPos.left < potPos.right && cPos.right > potPos.right) {
        coin.remove();
      }
      if (cPos.left > potPos.left && cPos.right < potPos.right) {
        coin.remove();
      }
    }
  }
}


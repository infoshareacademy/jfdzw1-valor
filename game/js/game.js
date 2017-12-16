function initGame() {
  let score = 0;
  const points = [
    {name: "leaf", val: 2},
    {name: "tint", val: 2},
    {name: "headphones", val: 4},
    {name: "heart", val: 6},
    {name: "glass", val: 4},
    {name: "flash", val: 16},
    {name: "usd", val: 32}
  ];
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
    const coinType = points[Math.floor(Math.random() * points.length)];
    let $newCoin = $('<div class="coin-box" id="coin-box">' +
      `<span class="glyphicon glyphicon-${coinType.name}" aria-hidden="true"></span></div>`).css({
      'top': `-50px`,
      'left': `${Math.round(Math.random() * 775)}px`
    })
      .data({coinValue: coinType.val})
      .appendTo('#game-field');

    setInterval(function () {
      $newCoin.css({
        'top': `${$height += 1}px`
      });
      if ($newCoin.position().top > 300) {
        $newCoin.css({
          'background-color': 'yellow'
        });
      }
      if ($newCoin.position().top > 425) {
        $newCoin.css({
          'background-color': 'red'
        });
      }
      if ($newCoin.position().top > 551) {
        $('#life').css({
          'width': `${$life -= ($newCoin.data().coinValue) / 2}%`
        });
        $newCoin.remove();
      }
      checkCollision($newCoin)
    }, 20);
  }, 1000);

  function pointsUpdate(points) {
    score += points;
    $('#score').html(score);
  }

  function checkCollision(coin) {
    const cPos = coin.position();
    cPos.right = cPos.left + coin.width();
    const potPos = $pot.position();
    potPos.right = potPos.left + $pot.width();
    cPos.bottom = cPos.top + coin.height();
    if (cPos.bottom > potPos.top) {
      if (cPos.left < potPos.left && cPos.right > potPos.left) {
        pointsUpdate(coin.data().coinValue);
        if ($life <= 99) {
          $('#life').css({
            'width': `${$life += 1}%`
          });
        }
        coin.remove();
      }
      if (cPos.left < potPos.right && cPos.right > potPos.right) {
        pointsUpdate(coin.data().coinValue);
        if ($life <= 99) {
          $('#life').css({
            'width': `${$life += 1}%`
          });
        }
        coin.remove();
      }
      if (cPos.left > potPos.left && cPos.right < potPos.right) {
        pointsUpdate(coin.data().coinValue);
        if ($life <= 99) {
          $('#life').css({
            'width': `${$life += 1}%`
          });
        }
        coin.remove();
      }
    }
  }
}


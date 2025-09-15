function popomasertransforms() {
  $dataTroops[$gameTroop._troopId].members_bak =
    $dataTroops[$gameTroop._troopId].members_bak ||
    JSON.parse(JSON.stringify($dataTroops[$gameTroop._troopId].members));
  //先備份成員資料
  const troopd = $dataTroops[$gameTroop._troopId],
    arr = troopd.members;
  arr.length = 0;
  arr.concat_inplace(JSON.parse(JSON.stringify(troopd.members_bak)));
  for (let x = 0, xs = arr.length, candi = [12, 15, 18, 21, 24]; x !== xs; ++x)
    //把原本有的成員撈起來放進arr裡面 場上的怪隨機變身成上述種類隨機一個
    if (arr[x].enemyId === 2) arr[x].enemyId = candi.rnd1();
  //開關42困難模式判定
  if ($gameSwitches.value(42)) {
    for (let x = 0, xs = arr.length; x !== xs; ++x) {
      let curr = arr[x].enemyId;
      if (curr === 12) {
        //如果低於1%機率，11號怪有機率變成稀有怪
        if (Math.random() > 0.99) curr = 28;
      }
      arr[x].enemyId = curr;
    }
  }
  if ($gameSwitches.value(42)) {
    for (let x = 0, xs = arr.length; x !== xs; ++x) {
      let curr = arr[x].enemyId;
      if (curr === 12) {
        //如果低於1%機率，所有的怪都有機率變成菁英怪
        if (Math.random() > 0.99) curr = 31;
      } else if (curr === 15) {
        if (Math.random() > 0.99) curr = 31;
      } else if (curr === 18) {
        if (Math.random() > 0.99) curr = 31;
      } else if (curr === 21) {
        if (Math.random() > 0.99) curr = 31;
      } else if (curr === 24) {
        if (Math.random() > 0.99) curr = 31;
      }
      arr[x].enemyId = curr;
    }
  }

  if ($gameSwitches.value(42)) {
    for (let x = 0, xs = arr.length; x !== xs; ++x) {
      let curr = arr[x].enemyId;
      if (curr === 12) {
        if (Math.random() < 0.2) curr = 13;
        //如果出場怪物是12號，20%的機率變成比較強的版本，下面依此類推
      } else if (curr === 15) {
        if (Math.random() < 0.2) curr = 16;
      } else if (curr === 18) {
        if (Math.random() < 0.2) curr = 19;
      } else if (curr === 21) {
        if (Math.random() < 0.2) curr = 22;
      } else if (curr === 24) {
        if (Math.random() < 0.2) curr = 25;
      }
      arr[x].enemyId = curr;
    }
  }
  //43開關普通模式
  if ($gameSwitches.value(43)) {
    for (let x = 0, xs = arr.length; x !== xs; ++x) {
      let curr = arr[x].enemyId;
      if (curr === 12) {
        //如果低於1%機率，11號怪有機率變成稀有怪
        if (Math.random() > 0.99) curr = 27;
      }
      arr[x].enemyId = curr;
    }
  }
  if ($gameSwitches.value(43)) {
    for (let x = 0, xs = arr.length; x !== xs; ++x) {
      let curr = arr[x].enemyId;
      if (curr === 12) {
        //如果低於1%機率，所有的怪都有機率變成菁英怪
        if (Math.random() > 0.99) curr = 30;
      } else if (curr === 15) {
        if (Math.random() > 0.99) curr = 30;
      } else if (curr === 18) {
        if (Math.random() > 0.99) curr = 30;
      } else if (curr === 21) {
        if (Math.random() > 0.99) curr = 30;
      } else if (curr === 24) {
        if (Math.random() > 0.99) curr = 30;
      }
      arr[x].enemyId = curr;
    }
  }
  if ($gameSwitches.value(43)) {
    //開關43號打開的話
    for (let x = 0, xs = arr.length; x !== xs; ++x) {
      let curr = arr[x].enemyId;
      if (curr === 12) {
        if (Math.random() < 0.2) curr = Math.random() < 0.5 ? 13 : 11;
        //低於20%的話一半的機率變成比較弱的版本、一半的機率變成比較強的版本，以此類推
      } else if (curr === 15) {
        if (Math.random() < 0.2) curr = Math.random() < 0.5 ? 16 : 14;
      } else if (curr === 18) {
        if (Math.random() < 0.2) curr = Math.random() < 0.5 ? 19 : 17;
      } else if (curr === 21) {
        if (Math.random() < 0.2) curr = Math.random() < 0.5 ? 22 : 20;
      } else if (curr === 24) {
        if (Math.random() < 0.2) curr = Math.random() < 0.5 ? 25 : 23;
      }
      arr[x].enemyId = curr;
    }
  }

  //44開關簡單模式

  if ($gameSwitches.value(44)) {
    for (let x = 0, xs = arr.length; x !== xs; ++x) {
      let curr = arr[x].enemyId;
      if (curr === 11) {
        //如果低於1%機率，11號怪有機率變成稀有怪
        if (Math.random() > 0.99) curr = 26;
      }
      arr[x].enemyId = curr;
    }
  }

  if ($gameSwitches.value(44)) {
    //如果44開關打開
    for (let x = 0, xs = arr.length; x !== xs; ++x) {
      let curr = arr[x].enemyId;
      if (curr === 12) {
        if (Math.random() < 0.8) curr = 11;
        //如果低於80%機率，11變成13
      } else if (curr === 15) {
        if (Math.random() < 0.8) curr = 14;
      } else if (curr === 18) {
        if (Math.random() < 0.8) curr = 17;
      } else if (curr === 21) {
        if (Math.random() < 0.8) curr = 20;
      } else if (curr === 24) {
        if (Math.random() < 0.8) curr = 23;
      }
      arr[x].enemyId = curr;
    }
  }
}

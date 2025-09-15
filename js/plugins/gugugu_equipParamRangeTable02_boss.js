const 你的總表02_boss = [
  [1, 10], // 0
  [6, 24], // 1
];

//先抓陣列中的陣列，再抓陣列中的ID順序

function 裝備最小值的函式02_boss() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表02_boss[0][0];
  } else if ($gameVariables.value(119) >= 1) {
    return 你的總表02_boss[1][0];
  }
}

function 裝備最大值的函式02_boss() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表02_boss[0][1];
  } else if ($gameVariables.value(119) >= 1) {
    return 你的總表02_boss[1][1];
  }
}

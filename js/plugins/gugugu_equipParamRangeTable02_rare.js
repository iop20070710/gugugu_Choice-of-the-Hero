const 你的總表02_rare = [
  [1, 5], // 0
  [3, 12], // 1
  [6, 19], // 2
];

//先抓陣列中的陣列，再抓陣列中的ID順序

function 裝備最小值的函式02_rare() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表02_rare[0][0];
  } else if ($gameVariables.value(119) >= 1) {
    return 你的總表02_rare[1][0];
  }
}

function 裝備最大值的函式02_rare() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表02_rare[0][1];
  } else if ($gameVariables.value(119) >= 1) {
    return 你的總表02_rare[1][1];
  }
}

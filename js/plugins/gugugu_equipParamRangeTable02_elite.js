const 你的總表02_elite = [
  [1, 7], // 0
  [4, 17], // 1
];

//先抓陣列中的陣列，再抓陣列中的ID順序

function 裝備最小值的函式02_elite() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表02_elite[0][0];
  } else if ($gameVariables.value(119) >= 1) {
    return 你的總表02_elite[1][0];
  }
}

function 裝備最大值的函式02_elite() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表02_elite[0][1];
  } else if ($gameVariables.value(119) >= 1) {
    return 你的總表02_elite[1][1];
  }
}

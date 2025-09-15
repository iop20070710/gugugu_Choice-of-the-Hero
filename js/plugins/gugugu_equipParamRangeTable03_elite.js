const 你的總表03_elite = [
  [1, 7], // 0
  [4, 17], // 1
  [8, 26], // 2
];

//先抓陣列中的陣列，再抓陣列中的ID順序

function 裝備最小值的函式03_elite() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表03_elite[0][0];
  } else if ($gameVariables.value(119) === 1) {
    return 你的總表03_elite[1][0];
  } else if ($gameVariables.value(119) >= 2) {
    return 你的總表03_elite[2][0];
  }
}

function 裝備最大值的函式03_elite() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表03_elite[0][1];
  } else if ($gameVariables.value(119) === 1) {
    return 你的總表03_elite[1][1];
  } else if ($gameVariables.value(119) >= 2) {
    return 你的總表03_elite[2][1];
  }
}

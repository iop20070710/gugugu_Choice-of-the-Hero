const 你的總表03_rare = [
  [1, 5], // 0
  [3, 12], // 1
  [6, 19], // 2
];

//先抓陣列中的陣列，再抓陣列中的ID順序

function 裝備最小值的函式03_rare() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表03_rare[0][0];
  } else if ($gameVariables.value(119) === 1) {
    return 你的總表03_rare[1][0];
  } else if ($gameVariables.value(119) >= 2) {
    return 你的總表03_rare[2][0];
  }
}

function 裝備最大值的函式03_rare() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表03_rare[0][1];
  } else if ($gameVariables.value(119) === 1) {
    return 你的總表03_rare[1][1];
  } else if ($gameVariables.value(119) >= 2) {
    return 你的總表03_rare[2][1];
  }
}

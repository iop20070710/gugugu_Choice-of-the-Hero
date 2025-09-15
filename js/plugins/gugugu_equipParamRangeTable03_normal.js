const 你的總表03_normal = [
  [1, 3], // 0
  [3, 8], // 1
  [5, 12], // 2
];

//先抓陣列中的陣列，再抓陣列中的ID順序

function 裝備最小值的函式03_normal() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表03_normal[0][0];
  } else if ($gameVariables.value(119) === 1) {
    return 你的總表03_normal[1][0];
  } else if ($gameVariables.value(119) >= 2) {
    return 你的總表03_normal[2][0];
  }
}

function 裝備最大值的函式03_normal() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表03_normal[0][1];
  } else if ($gameVariables.value(119) === 1) {
    return 你的總表03_normal[1][1];
  } else if ($gameVariables.value(119) >= 2) {
    return 你的總表03_normal[2][1];
  }
}

const 你的總表06_rare = [
  [1, 5], // 0
  [3, 12], // 1
  [6, 19], // 2
  [9, 27], // 3
  [12, 34], // 4
  [14, 41], // 5
];

//先抓陣列中的陣列，再抓陣列中的ID順序

function 裝備最小值的函式06_rare() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表06_rare[0][0];
  } else if ($gameVariables.value(119) === 1) {
    return 你的總表06_rare[1][0];
  } else if ($gameVariables.value(119) === 2) {
    return 你的總表06_rare[2][0];
  } else if ($gameVariables.value(119) === 3) {
    return 你的總表06_rare[3][0];
  } else if ($gameVariables.value(119) === 4) {
    return 你的總表06_rare[4][0];
  } else if ($gameVariables.value(119) >= 5) {
    return 你的總表06_rare[5][0];
  }
}

function 裝備最大值的函式06_rare() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表06_rare[0][1];
  } else if ($gameVariables.value(119) === 1) {
    return 你的總表06_rare[1][1];
  } else if ($gameVariables.value(119) === 2) {
    return 你的總表06_rare[2][1];
  } else if ($gameVariables.value(119) === 3) {
    return 你的總表06_rare[3][1];
  } else if ($gameVariables.value(119) === 4) {
    return 你的總表06_rare[4][1];
  } else if ($gameVariables.value(119) >= 5) {
    return 你的總表06_rare[5][1];
  }
}

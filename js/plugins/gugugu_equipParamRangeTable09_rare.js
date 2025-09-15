const 你的總表09_rare = [
  [1, 5], // 0
  [3, 12], // 1
  [6, 19], // 2
  [9, 27], // 3
  [12, 34], // 4
  [14, 41], // 5
  [17, 48], // 6
  [20, 55], // 7
  [23, 63], // 8
];

//先抓陣列中的陣列，再抓陣列中的ID順序

function 裝備最小值的函式09_rare() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表09_rare[0][0];
  } else if ($gameVariables.value(119) === 1) {
    return 你的總表09_rare[1][0];
  } else if ($gameVariables.value(119) === 2) {
    return 你的總表09_rare[2][0];
  } else if ($gameVariables.value(119) === 3) {
    return 你的總表09_rare[3][0];
  } else if ($gameVariables.value(119) === 4) {
    return 你的總表09_rare[4][0];
  } else if ($gameVariables.value(119) === 5) {
    return 你的總表09_rare[5][0];
  } else if ($gameVariables.value(119) === 6) {
    return 你的總表09_rare[6][0];
  } else if ($gameVariables.value(119) === 7) {
    return 你的總表09_rare[7][0];
  } else if ($gameVariables.value(119) >= 8) {
    return 你的總表09_rare[8][0];
  }
}

function 裝備最大值的函式09_rare() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表09_rare[0][1];
  } else if ($gameVariables.value(119) === 1) {
    return 你的總表09_rare[1][1];
  } else if ($gameVariables.value(119) === 2) {
    return 你的總表09_rare[2][1];
  } else if ($gameVariables.value(119) === 3) {
    return 你的總表09_rare[3][1];
  } else if ($gameVariables.value(119) === 4) {
    return 你的總表09_rare[4][1];
  } else if ($gameVariables.value(119) === 5) {
    return 你的總表09_rare[5][1];
  } else if ($gameVariables.value(119) === 6) {
    return 你的總表09_rare[6][1];
  } else if ($gameVariables.value(119) === 7) {
    return 你的總表09_rare[7][1];
  } else if ($gameVariables.value(119) >= 8) {
    return 你的總表09_rare[8][1];
  }
}

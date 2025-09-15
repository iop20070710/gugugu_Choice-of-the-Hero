const 你的總表09_boss = [
  [1, 10], // 0
  [6, 24], // 1
  [10, 37], // 2
  [15, 51], // 3
  [20, 64], // 4
  [25, 78], // 5
  [30, 91], // 6
  [35, 105], // 7
  [39, 118], // 8
];

//先抓陣列中的陣列，再抓陣列中的ID順序

function 裝備最小值的函式09_boss() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表09_boss[0][0];
  } else if ($gameVariables.value(119) === 1) {
    return 你的總表09_boss[1][0];
  } else if ($gameVariables.value(119) === 2) {
    return 你的總表09_boss[2][0];
  } else if ($gameVariables.value(119) === 3) {
    return 你的總表09_boss[3][0];
  } else if ($gameVariables.value(119) === 4) {
    return 你的總表09_boss[4][0];
  } else if ($gameVariables.value(119) === 5) {
    return 你的總表09_boss[5][0];
  } else if ($gameVariables.value(119) === 6) {
    return 你的總表09_boss[6][0];
  } else if ($gameVariables.value(119) === 7) {
    return 你的總表09_boss[7][0];
  } else if ($gameVariables.value(119) >= 8) {
    return 你的總表09_boss[8][0];
  }
}

function 裝備最大值的函式09_boss() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表09_boss[0][1];
  } else if ($gameVariables.value(119) === 1) {
    return 你的總表09_boss[1][1];
  } else if ($gameVariables.value(119) === 2) {
    return 你的總表09_boss[2][1];
  } else if ($gameVariables.value(119) === 3) {
    return 你的總表09_boss[3][1];
  } else if ($gameVariables.value(119) === 4) {
    return 你的總表09_boss[4][1];
  } else if ($gameVariables.value(119) === 5) {
    return 你的總表09_boss[5][1];
  } else if ($gameVariables.value(119) === 6) {
    return 你的總表09_boss[6][1];
  } else if ($gameVariables.value(119) === 7) {
    return 你的總表09_boss[7][1];
  } else if ($gameVariables.value(119) >= 8) {
    return 你的總表09_boss[8][1];
  }
}

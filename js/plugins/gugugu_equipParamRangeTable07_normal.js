const 你的總表07_normal = [
  [1, 3], // 0
  [3, 8], // 1
  [5, 12], // 2
  [6, 17], // 3
  [8, 22], // 4
  [10, 26], // 5
  [12, 31], // 6
];

//先抓陣列中的陣列，再抓陣列中的ID順序

function 裝備最小值的函式07_normal() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表07_normal[0][0];
  } else if ($gameVariables.value(119) === 1) {
    return 你的總表07_normal[1][0];
  } else if ($gameVariables.value(119) === 2) {
    return 你的總表07_normal[2][0];
  } else if ($gameVariables.value(119) === 3) {
    return 你的總表07_normal[3][0];
  } else if ($gameVariables.value(119) === 4) {
    return 你的總表07_normal[4][0];
  } else if ($gameVariables.value(119) === 5) {
    return 你的總表07_normal[5][0];
  } else if ($gameVariables.value(119) >= 6) {
    return 你的總表07_normal[6][0];
  }
}

function 裝備最大值的函式07_normal() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表07_normal[0][1];
  } else if ($gameVariables.value(119) === 1) {
    return 你的總表07_normal[1][1];
  } else if ($gameVariables.value(119) === 2) {
    return 你的總表07_normal[2][1];
  } else if ($gameVariables.value(119) === 3) {
    return 你的總表07_normal[3][1];
  } else if ($gameVariables.value(119) === 4) {
    return 你的總表07_normal[4][1];
  } else if ($gameVariables.value(119) === 5) {
    return 你的總表07_normal[5][1];
  } else if ($gameVariables.value(119) >= 6) {
    return 你的總表07_normal[6][1];
  }
}

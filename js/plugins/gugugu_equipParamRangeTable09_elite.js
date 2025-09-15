const 你的總表09_elite = [
  [1, 7], // 0
  [4, 17], // 1
  [8, 26], // 2
  [11, 36], // 3
  [15, 46], // 4
  [19, 56], // 5
  [22, 65], // 6
  [26, 75], // 7
  [29, 85], // 8
];

//先抓陣列中的陣列，再抓陣列中的ID順序

function 裝備最小值的函式09_elite() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表09_elite[0][0];
  } else if ($gameVariables.value(119) === 1) {
    return 你的總表09_elite[1][0];
  } else if ($gameVariables.value(119) === 2) {
    return 你的總表09_elite[2][0];
  } else if ($gameVariables.value(119) === 3) {
    return 你的總表09_elite[3][0];
  } else if ($gameVariables.value(119) === 4) {
    return 你的總表09_elite[4][0];
  } else if ($gameVariables.value(119) === 5) {
    return 你的總表09_elite[5][0];
  } else if ($gameVariables.value(119) === 6) {
    return 你的總表09_elite[6][0];
  } else if ($gameVariables.value(119) === 7) {
    return 你的總表09_elite[7][0];
  } else if ($gameVariables.value(119) >= 8) {
    return 你的總表09_elite[8][0];
  }
}

function 裝備最大值的函式09_elite() {
  if ($gameVariables.value(119) === 0) {
    return 你的總表09_elite[0][1];
  } else if ($gameVariables.value(119) === 1) {
    return 你的總表09_elite[1][1];
  } else if ($gameVariables.value(119) === 2) {
    return 你的總表09_elite[2][1];
  } else if ($gameVariables.value(119) === 3) {
    return 你的總表09_elite[3][1];
  } else if ($gameVariables.value(119) === 4) {
    return 你的總表09_elite[4][1];
  } else if ($gameVariables.value(119) === 5) {
    return 你的總表09_elite[5][1];
  } else if ($gameVariables.value(119) === 6) {
    return 你的總表09_elite[6][1];
  } else if ($gameVariables.value(119) === 7) {
    return 你的總表09_elite[7][1];
  } else if ($gameVariables.value(119) >= 8) {
    return 你的總表09_elite[8][1];
  }
}

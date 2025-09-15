function gugugu_farm_grow() {
  if (!$gameSystem.種植物01_上次採集時間) return;
  const 植物生長資訊 = farm_grow[$gameMap._mapId].植物生長資訊;
  const 事件id和變數id組 = farm_grow[$gameMap._mapId].事件id和變數id組;

  // 再下面長一樣

  for (let x = 事件id和變數id組.length; x--; ) {
    const evtId = 事件id和變數id組[x][0];
    const 種下去的道具id = $gameVariables.value(事件id和變數id組[x][1]);
    const 經過時間 =
      Graphics.frameCount -
      $gameSystem.種植物01_上次採集時間[[$gameMap._mapId, evtId]];
    let 長完ㄌ = false;
    if (!種下去的道具id || !(經過時間 >= 0)) {
      // 沒有種東西
      $gameMap.event(evtId).setChrIdxName(7, "!Flame");
      $gameMap.event(evtId)._direction = 8;
      $gameSelfSwitches.setValue([$gameMap._mapId, evtId, "A"], false);
      continue;
    }
    let 階段 = 0;
    for (
      let 階段時間 = 經過時間;
      階段 < 植物生長資訊[種下去的道具id].各階段時間.length;
      ++階段
    ) {
      階段時間 -= 植物生長資訊[種下去的道具id].各階段時間[階段];
      if (!(階段時間 >= 0)) break;
    }
    if (階段 >= 植物生長資訊[種下去的道具id].各階段時間.length) {
      長完ㄌ = true;
      階段 = 植物生長資訊[種下去的道具id].各階段時間.length - 1;
    }
    const 圖片資訊 = 植物生長資訊[種下去的道具id].各階段圖[階段];
    $gameMap.event(evtId)._direction = 圖片資訊[1];
    $gameMap.event(evtId).setChrIdxName(圖片資訊[0], 圖片資訊[2]);
    $gameSelfSwitches.setValue([$gameMap._mapId, evtId, "B"], 長完ㄌ);
  }
}

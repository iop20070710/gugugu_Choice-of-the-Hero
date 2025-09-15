function 某個函式(){
  const 屬性轉icon表={
    1:256,
    2:257,
    3:258,
    4:68,
    5:67,
    6:64,
    7:65,
    8:66,
    9:69, 
    10:70, 
    11:71, 
 };
  const actor=SceneManager._scene._skillWindow?._actor||SceneManager._scene._actor;
  if(!actor) return "";
  const weapons=actor&&actor.equips().filter(x=>DataManager.isWeapon(x));
  const rtv=weapons.map(x=>x.traits.filter(t=>t.code===Game_BattlerBase.TRAIT_ATTACK_ELEMENT)).flat().map(x=>屬性轉icon表[x.dataId]).filter(Number).map(x=>"\\I["+x+"]").join();
  return rtv;
}
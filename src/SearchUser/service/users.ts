const fakeUsers = [
  'alice.zhao',
  'bob.qian',
  'carol.sun',
  'dave.li',
  'eve.zhou',
  'isaac.wu',
  'ivan.zheng',
  'justin.wang',
  'mallory.feng',
  'matilda.chen',
  'oscar.chu',
  'pat.wei',
  'victor.jiang',
  'plod.shen',
  'steve.han',
  'trent.yang',
  'trudy.zhu',
  'walter.qin',
  'zoe.you',
  'san.zhang',
  'si.li',
  'wu.wang',
];
/** Simulate fuzzy search */
export const searchForUser = async (hint: string) => {
  await new Promise((res) => setTimeout(res, Math.random() * 500 + 80));
  return fakeUsers.filter((it) => it.includes(hint));
};

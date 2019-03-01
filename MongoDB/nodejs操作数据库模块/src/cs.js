/*
 * @writer: 咕鸽仙人
 * @LastEditors: 咕鸽仙人
 * @Date: 2019-02-28 23:11:22
 * @LastEditTime: 2019-03-01 14:02:19
 * @MongoDB操作封装测试
 */
const db = require("./api/db");

// 增加测试
async function add() {
  let res = await db.insert("user", {
    userName: "椰大奶"
  });
  console.log(res.result);
}
// add();
//删除测试
async function remove_() {
  let res = await db.delete("user", {
    userName: "椰大奶"
  });
  console.log(res.result);
}

//修改测试
async function update() {
  let res = await db.update(
    "user", {
      userName: "椰大奶"
    }, {
      $set: {
        age: 18
      }
    }
  );
  console.log(res.result);
}
// update();

//查询测试
async function cx() {
  let res = await db.find("user", {
    age: 18
  });
  console.log(res);
}
cx();

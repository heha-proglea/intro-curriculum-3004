'use strict';

// 整数の配列を受け取り、全て足し合わせる
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

// npmパッケージにaddメソッドを追加(=関数をモジュール化した)(←module.exportsオブジェクトのプロパティとして関数を登録してる)
module.exports = {
    add: add
};

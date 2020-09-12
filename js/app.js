// 要素オブジェクトの取得
const getResultBtn = document.getElementById('getResultBtn');
const result = document.getElementById('result');

const mainInput  = document.getElementById("main");
const sideInput   = document.getElementById("side");
const soupInput = document.getElementById("soup");

const messageBox  = document.getElementById("display");



// おみくじボタン
getResultBtn.addEventListener('click', ()=> {
    let [res1, res2, res3] = omikuji.getResult();
 result.innerHTML =  `今夜の献立に「 ${res1} 」と「 ${res2} 」と「 ${res3} 」はいかがですか？`;
});

// おみくじオブジェクトの定義
let omikuji = {
    results1: ["ハンバーグ", "カレー", "ミートソーススパゲティ", "サバの味噌煮", "お好み焼き"],
    results2: ["トマトサラダ", "シーザーサラダ", "ほうれん草のおひたし", "タコの酢の物", "五目ひじき煮"],
    results3: ["ミネストローネ", "豆腐とわかめの味噌汁", "オニオンスープ", "ナスとみょうがのお吸い物", "わかめスープ"],
    getResult: function() {
        messageBox.innerHTML =　"";
        let results1 = this.results1;
        let results2 = this.results2;
        let results3 = this.results3;
        // return results1[Math.floor(Math.random() * results1.length)];
        let res1 = results1[Math.floor(Math.random() * results1.length)];
        let res2 = results2[Math.floor(Math.random() * results2.length)];
        let res3 = results3[Math.floor(Math.random() * results3.length)];
        // return res1;
        return [res1, res2, res3];
    }
}



function mainInsert() {
    let aaa = mainInput.value;
    addMainMenu(omikuji, aaa)
    
    clearAndShow();
   }

   function sideInsert() {
    let bbb = sideInput.value;
    addSideMenu(omikuji, bbb)
    
    clearAndShow();
   }

   function soupInsert() {
    let ccc = soupInput.value;
    addSoupMenu(omikuji, ccc)
    
    clearAndShow();
   }

function clearAndShow () {
    // Clear our fields
    mainInput.value = "";
    sideInput.value = "";
    soupInput.value = "";
    

    messageBox.innerHTML = "登録しました。おみくじボタンを押してみてください";
  }

// オブジェクト内の配列にpushする関数
function addMainMenu(omikujiObj, newMenu) {
    omikujiObj.results1.push(newMenu);
    return omikujiObj.results1;
}

function addSideMenu(omikujiObj, newMenu) {
    omikujiObj.results2.push(newMenu);
    return omikujiObj.results2;
    }

  function addSoupMenu(omikujiObj, newMenu) {
    omikujiObj.results3.push(newMenu);
    return omikujiObj.results3;
    }
  

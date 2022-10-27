const { Command } = require("commander");
const program = new Command();

const date = new Date();

function specify_calender(month) {
  const year = date.getFullYear();

  console.log(`       ${month}月 ${year}`);
  console.log(" 日 月 火 水 木 金 土");

  const firstDate = new Date(year, month - 1, 1); // 月の最初の日(monthは 0~11)
  const lastDate = new Date(year, month, 0); // 月の最後の日
  var firstDayNum = firstDate.getDay(); // 月の最初の曜日(数値)
  const lastDateNum = lastDate.getDate(); // 月の最後の日にち

  process.stdout.write('   '.repeat(firstDayNum));

  for(let i = 1; i < lastDateNum + 1; i++){
    process.stdout.write(i.toString().padStart(2) + " ");
    firstDayNum++;
    if (firstDayNum % 7 === 0) console.log("\n");
  }
  console.log("\n");
}

program.parse(process.argv);
let month = program.args[0]; // 月をcommander.args配列から取り出す

if (month === undefined) {
  month = date.getMonth();
  specify_calender(month + 1);
} else if(month >= 1 && month <= 12) {
  specify_calender(month);
} else if(month > 12) {
  console.log("1~12までの数字を指定しましょう");
}

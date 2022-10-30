const { Command } = require("commander");
const program = new Command();

const date = new Date();

function specify_calender(month) {
  const year = date.getFullYear();

  console.log(`       ${month}月 ${year}`);
  console.log(" 日 月 火 水 木 金 土");

  const startDate = new Date(year, month - 1, 1); // 月の最初の日(monthは 0~11)
  const endDate = new Date(year, month, 0); // 月の最後の日
  let startDayNum = startDate.getDay(); // 月の最初の曜日(数値)

  process.stdout.write('   '.repeat(startDayNum));

  for(let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)){
    process.stdout.write(date.getDate().toString().padStart(2) + " ");
    if (date.getDay() === 6) console.log("");
  }
  console.log("");
}

program.option("-m, --month <month>").parse(process.argv);
const options = program.opts();

if (options.month === undefined) {
  month = date.getMonth();
  specify_calender(month + 1);
} else if(options.month >= 1 && options.month <= 12) {
  specify_calender(options.month);
} else if(options.month > 12) {
  console.log("1~12までの数字を指定しましょう");
} else {
  console.log("正しくコマンドを打ちましょう")
}

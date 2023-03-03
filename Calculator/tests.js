import * as bigIntCalc  from "./BigIntCalculator.js";

console.log(bigIntCalc.sum("10", "10"));
console.log(bigIntCalc.sum("465468784654687583475634756347563475637456534756534756347568537567346573468573",
 "5645646645546645546654546564456644565644565645466454568456845485457346332153464"));
console.log(bigIntCalc.divide("123456789123456789", "100000"));
console.log(bigIntCalc.divide("1200000000100000", "-2222222222"));
console.log(bigIntCalc.divide("-123456789123456789", "2222222222"));
console.log(bigIntCalc.divide("-154333688111222345666", "-15764892"));
console.log(bigIntCalc.subtract("1020","1030"));
console.log(bigIntCalc.subtract("1000065468784654687583475634756347563475637456534756534756347568537567346573468573",
                               "11115645646645546645546654546564456644565644565645466454568456845485457346332153464"));
console.log(bigIntCalc.subtract("-10","-20"));
console.log(bigIntCalc.subtract("10","-20"));
console.log(bigIntCalc.subtract("-10","20"));
console.log(bigIntCalc.subtract("-1010","-1020"));
console.log(bigIntCalc.subtract("1010","-1020"));
console.log(bigIntCalc.subtract("-1010","1020"));

console.log(bigIntCalc.multiply("111111111111111111111111111111111111111", "1111111111111111111111111111111111111"));
console.log(bigIntCalc.multiply("-111111111111111111111111111111111111111", "1111111111111111111111111111111111111"));
console.log(bigIntCalc.multiply("111111111111111111111111111111111111111", "-1111111111111111111111111111111111111"));
console.log(bigIntCalc.multiply("-111111111111111111111111111111111111111", "-1111111111111111111111111111111111111"));

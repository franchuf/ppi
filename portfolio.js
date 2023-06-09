const fs = require ('fs')
let inArray=[]
let obj={}
function getFile(){
  let info = JSON.parse(fs.readFileSync("./input.json",'utf-8'))
  inArray.push(info)
  return inArray
}
function outFile(){
  getFile()
  let pesos=inArray[0].groupedAvailability[0].availability[0].amount
  let dolarDivisa=inArray[0].groupedAvailability[1].availability[0].amount
  let dolarBillete=inArray[0].groupedAvailability[2].availability[0].amount
  obj={pesos:pesos,
      dolarDivisa:dolarDivisa,
      dolarBillete:dolarBillete}
  return obj
  
}
getFile()
outFile()
console.log(obj)

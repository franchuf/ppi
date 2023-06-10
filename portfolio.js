const fs = require ('fs')
let inArray=[]
let obj={}


function getFile(){ //funcion que retorna toda la info en un arreglo llamado inArray
  let info = JSON.parse(fs.readFileSync("./input.json",'utf-8'))
  inArray.push(info)
  return inArray
}


function transformObject(){ 
  getFile()
  inArray[0].groupedAvailability.forEach(element => {
    obj[element.currency]= element.availability[0].amount
  }) 
  inArray[0].groupedInstruments.forEach(item => {
    var instrumentsObj = {};
    item.instruments.forEach(instrument => {
      instrumentsObj[instrument.ticker] = {
        amount: instrument.amount,
        units: Math.floor(instrument.amount / instrument.price)
      };
    });
    obj[item.name] = instrumentsObj;
  });

  return obj
}

console.log(JSON.stringify(transformObject()));

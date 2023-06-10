const fs = require ('fs')

let newObj={}


function getFile(){ //funcion que retorna toda la info en un arreglo llamado inArray
  let info = JSON.parse(fs.readFileSync("./input.json",'utf-8'))
  return info
}


function transformObject(originalObj){ 
  originalObj.groupedAvailability.forEach(element => {
    newObj[element.currency]= element.availability[0].amount
  }) 
  originalObj.groupedInstruments.forEach(item => {
    var instrumentsObj = {};
    item.instruments.forEach(instrument => {
      instrumentsObj[instrument.ticker] = {
        amount: instrument.amount,
        units: Math.floor(instrument.amount / instrument.price)
      };
    });
    newObj[item.name] = instrumentsObj;
  });

  return newObj
}


console.log (transformObject(getFile()))

this.house = {
    table : "my table"  //global Object
  }
  
  let johnRoom = {
    table : "john table",  //private table
  }
  
  this.table="window table";  //global table
  
  // const cleanTable = function(soap){
  //     console.log(`cleaning the ${this.table} using ${soap}`);
  //   }
  
  // const cleanTable = function(soap){ //using that=this [while innerfunction is used]
  //   let that = this;
  //   const innerfunction = function(_soap){
  //     console.log(`cleaning the ${that.table} using ${soap}`);
  //   }
  //   innerfunction(soap);
  // }
  
  // const cleanTable = function(soap){  // using call [while innerfunction is used]
  //   const innerfunction = function(_soap){
  //     console.log(`cleaning the ${this.table} using ${soap}`);
  //   }
  //   innerfunction.call(this , soap);
  // }
  
  // const cleanTable = function(soap){  // using bind [while innerfunction is used]
  //   const innerfunction = function(_soap){
  //     console.log(`cleaning the ${this.table} using ${soap}`);
  //   }
  //   innerfunction.bind(this)(soap);
  // }
  
  const cleanTable = function(soap){  //using arrow function [while innerfunction is used]
    const innerfunction = (_soap) => {
      console.log(`cleaning the ${this.table} using ${soap}`);
    }
    innerfunction(soap);
  }
  
  let createRoom = function(name){
    this.table = `${name}s room`
  }
  
  const kajal = new createRoom("kajal")
  console.log(kajal);
  
  cleanTable.call(this , 'nirma soap');
  cleanTable.call(johnRoom , 'nirma soap');
  cleanTable.call(this.house , 'nirma soap');
  
  
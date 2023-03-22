function multiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
      var product = num * i;
      console.log(num + " x " + i + " = " + product);
    }
  }
  multiplicationTable(1);
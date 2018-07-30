function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let range = Math.abs(parseInt(endBlock) - parseInt(startBlock));
    let rangeDifference = Math.abs(blockRange - range);
    if (range <= blockRange) {
      return `within range by ${rangeDifference}`;
    } else {
      return `${rangeDifference} blocks out of range`;
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}

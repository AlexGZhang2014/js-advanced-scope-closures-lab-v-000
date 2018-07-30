function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let distance = Math.abs(parseInt(endBlock) - parseInt(startBlock));
    let rangeDifference = blockRange - distance;
    if (rangeDifference > 0) {
      return `within range by ${rangeDifference}`;
    } else {
      return `${Math.abs(rangeDifference)} blocks out of range`;
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

const algoObject = {
  percentegeChange: function (oldValue, newValue) {
    const perchange = ((newValue - oldValue) / oldValue) * 100;
    if (oldValue === 0) {
      return Infinity;
    } else return `${parseFloat(perchange.toFixed(4))}%`;
  },

  factor: function (num = 10) {
    if (!Number.isInteger(num) || num < 1) {
      return undefined;
    } else if (num === 1) {
      return [1];
    }
    const fArray = [1];
    for (let i = 2; i < num / 2 + 1; i++) {
      if (num % i === 0) {
        fArray.push(i);
      }
    }
    fArray.push(num);
    return fArray;
  },

  randRange: function (min, max, condition = 0) {
    if (min > max) {
      return "Invalid";
    } else {
      if (condition === 1) {
        if (min === max) {
          return "Invalid";
        } else {
          return parseFloat(
            (
              Math.random() * (max - min) +
              min +
              (max - min) * 0.0000001
            ).toFixed(3)
          );
        }
      } else if (condition === 0) {
        if (min === max) {
          return "Invalid";
        }
        if (min < 0 && max < 0) {
          if (max - min === 1) {
            return "Invalid";
          } else {
            return parseInt(
              Math.floor(Math.random() * (max - min - 1)) + min + 1
            );
          }
        } else if (min < 0 && max >= 0) {
          if (min - max === -1) {
            return "Invalid";
          } else {
            return parseInt(
              Math.floor(Math.random() * (max - min - 1)) + min + 1
            );
          }
        } else if (min >= 0 && max > 0) {
          if (max - min === 1) {
            return "Invalid";
          } else {
            return parseInt(
              Math.floor(Math.random() * (max - min - 1)) + min + 1
            );
          }
        }
      } else {
        return "Invalid";
      }
    }
  },

  randInsert: function (length = 4, IndexValuepair = null) {
    if (IndexValuepair === null) {
      let number = "";
      for (let i = 0; i < length; i++) {
        number = number + Math.floor(Math.random() * 10);
      }
      return parseInt(number);
    } else {
      let number = "";
      let arr1 = [];
      let arr2 = [];
      let found = null;
      IndexValuepair.forEach(function (f) {
        arr1.push(f.index);
        arr2.push(f.value);
      });

      for (let i = 0; i < length; i++) {
        found = null;
        arr1.forEach(function (f, index) {
          if (f === i) {
            found = index;
          }
        });

        if (found === null) {
          number = number + Math.floor(Math.random() * 10);
        } else {
          number = number + arr2[found];
        }
      }

      return parseInt(number);
    }
  },

  isPrime: function (a) {
    if (a < 2) return false;
    for (let i = 2; i < a; i++) {
      if (a % i == 0) return false;
    }
    return true;
  },

  
  reverse: function (a) {
    let arr;
    let arr2 = [];
    if (typeof a === "object") {
      for (let i = 0; i < a.length ; i++) {
         arr2.unshift(a[i]);
      }
      return arr2;
    }
    
    else if (typeof a==="string") {
      arr = a.split("").reverse().join("");
      return arr;
    } 
    
    else if(typeof a==="number") {
      num = "" + a;
      arr = num.split("").reverse().join("");
      return parseInt(arr);
    }
    else{
      return("Invalid")
    }
    
  },
};

module.exports=algoObject


function unroll(squareArray) {
  let endArray = [];
  if (squareArray.length == 0) return endArray;

  let rowBegin = 0;
  let rowEnd = squareArray.length - 1;
  let columnBegin = 0;
  let columnEnd = squareArray[0].length - 1;

  while (rowBegin <= rowEnd && columnBegin <= columnEnd) {
    for (let i = columnBegin; i <= columnEnd; i++) {
      endArray.push(squareArray[rowBegin][i]);
    }
    rowBegin++;

    for (let i = rowBegin; i <= rowEnd; i++) {
      endArray.push(squareArray[i][columnEnd]);
    }
    columnEnd--;

    if (rowBegin <= rowEnd) {
      for (let i = columnEnd; i >= columnBegin; i--) {
        endArray.push(squareArray[rowEnd][i]);
      }
      rowEnd--;

      if (columnBegin <= columnEnd) {
        for (let i = rowEnd; i >= rowBegin; i--) {
          endArray.push(squareArray[i][columnBegin]);
        }
      }
      columnBegin++;
    }
  }
  return endArray;
}

module.exports = unroll;

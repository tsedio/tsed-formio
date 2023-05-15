export const swapElements = <T = any>(myArray: T[], index1: number, index2: number): T[] => {
  myArray = [...myArray];

  [myArray[index1], myArray[index2]] = [myArray[index2], myArray[index1]];

  return myArray;
};

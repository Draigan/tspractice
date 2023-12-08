function first(): number {
  return 4;
}

type SecondType = number;

function second(): SecondType {
  return 5;
}

function third(): { hello: "world" } {
  return { hello: "world" };
}

type FourthType<Method> = Method;

function fourth(): FourthType<number> {
  return 9;
}

const arrOne = [1, 2, 3, 4, 5];
const arrTwo = ["1", "2", "3", "4", "5"];

type ArrType<J> = J;
type ConvertFN<A, B> = {};

function convertFN(arr: ArrType<J>) {
  arr = arr.map((item) => parseInt(item));

  return arr;
}

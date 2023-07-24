import JavaScript from "./java-script";
import House from "./House";
function Assignment3() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2"];

  let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1,
  ];
  console.log("Working with Arrays");
  console.log("numberArray1 =" + numberArray1);
  console.log("stringArray1 =" + stringArray1);
  console.log("variableArray1 =" + variableArray1);

  const five = 2 + 3;
  const result1 = "2 + 3 = " + five;
  console.log(result1);

  const result2 = `2 + 3 = ${2 + 3}`;
  console.log(result2);

  const username = "alice";
  const greeting1 = `Welcome home ${username}`;
  console.log(greeting1);

  const loggedIn = false;
  const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
  console.log(greeting2);
  return (
    <div>
      <h1>Assignment 3</h1>
      <JavaScript />
      <h3>Template Literals</h3>
      result1 = {result1} <br />
      result2 = {result2} <br />
      greeting1 = {greeting1} <br />
      greeting2 = {greeting2} <br />
      <House />
    </div>
  );
}
export default Assignment3;

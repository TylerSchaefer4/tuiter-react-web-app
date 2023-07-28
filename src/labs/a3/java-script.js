import VariablesAndConstants from "./variables-and-constants";
import VariableTypes from "./variable-types";
import BooleanVariables from "./boolean-variables";
import IfElse from "./if-else";
import TernaryOperator from "./ternary-operator";
import WorkingWithFunctions from "./working-with-functions";
import WorkWithArrays from "./working-with-arrays";
import JSON from "./json-stringify";
import House from "./House";
import Spread from "./spread";
import Destructing from "./destructing";

function JavaScript() {
  console.log("Hello World!");
  return (
    <div>
      <h1>JavaScript</h1>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <WorkingWithFunctions />
      <WorkWithArrays />
      <JSON />
      <House />
      <Spread />
      <Destructing />
    </div>
  );
}
export default JavaScript;

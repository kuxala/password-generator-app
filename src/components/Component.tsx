import { useState } from "react";
import "./Component.css";
// import styled from "styled-components";

function Component() {
  const [value, setValue] = useState<number>(10);
  const [result, setResult] = useState<string>("");
  const [upperCaseChecked, setUpperCaseChecked] = useState<boolean>(false);
  const [lowerCaseChecked, setLowerCaseChecked] = useState<boolean>(false);
  const [numbersChecked, setNumbersChecked] = useState<boolean>(false);
  const [symbolsChecked, setSymbolsChecked] = useState<boolean>(false);
  const [copy, setCopy] = useState<boolean>(false);

  const generateString = (length: number) => {
    let characters = "";
    if (upperCaseChecked) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowerCaseChecked) characters += "abcdefghijklmnopqrstuvwxyz";
    if (numbersChecked) characters += "1234567890";
    if (symbolsChecked) characters += "!@#$%^&*()";

    let generatedResult = "";
    for (let i = 0; i < length; i++) {
      generatedResult += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setResult(generatedResult);
  };

  let strengthCheck = "TOO WEAK!";

  if (symbolsChecked && numbersChecked) {
    strengthCheck = "STRONG";
  } else if (
    numbersChecked &&
    symbolsChecked &&
    lowerCaseChecked &&
    upperCaseChecked
  ) {
    strengthCheck = "STRONG";
  } else if (numbersChecked && lowerCaseChecked) {
    strengthCheck = "MEDIUM";
  } else if (upperCaseChecked && numbersChecked) {
    strengthCheck = "MEDIUM";
  } else if (lowerCaseChecked && upperCaseChecked) {
    strengthCheck = "WEAK";
  }

  return (
    <div className="container">
      <header>Password Generator</header>
      <div className="top-col">
        <p>
          {!upperCaseChecked &&
          !lowerCaseChecked &&
          !numbersChecked &&
          !symbolsChecked
            ? "Generate Password"
            : result}
        </p>
        <div>
          {copy ? (
            <p
              style={{
                color: "#67db80 ",
                fontSize: "16px",
                paddingLeft: "100px",
              }}
            >
              Text copied
            </p>
          ) : null}
        </div>
        <img
          src="../assets/icon-copy.svg"
          onClick={() => {
            navigator.clipboard.writeText(result);

            result === "" ? null : setCopy(!copy);
          }}
        />
      </div>

      <div className="bottom-col">
        <div className="length">
          <p>Character Length</p>
          <span>{value}</span>
        </div>
        <div>
          <form>
            <input
              type="range"
              min="4"
              max="16"
              className="slider"
              value={value}
              onChange={(e) => setValue(parseInt(e.target.value))}
            />
          </form>
        </div>

        <div>
          <div className="checkboxs">
            {upperCaseChecked ? (
              <img
                src="../assets/check.svg"
                width="20px"
                onClick={() => {
                  setUpperCaseChecked(!upperCaseChecked);
                }}
              />
            ) : (
              <img
                src="../assets/icon.svg"
                width="20px"
                onClick={() => {
                  setUpperCaseChecked(!upperCaseChecked);
                }}
              />
            )}
            <p>Include Uppercase Letters</p>
          </div>
          <div className="checkboxs">
            {lowerCaseChecked ? (
              <img
                src="../assets/check.svg"
                width="20px"
                onClick={() => {
                  setLowerCaseChecked(!lowerCaseChecked);
                }}
              />
            ) : (
              <img
                src="../assets/icon.svg"
                width="20px"
                onClick={() => {
                  setLowerCaseChecked(!lowerCaseChecked);
                }}
              />
            )}
            <p>Include Lowercase Letters</p>
          </div>
          <div className="checkboxs">
            {numbersChecked ? (
              <img
                src="../assets/check.svg"
                width="20px"
                onClick={() => {
                  setNumbersChecked(!numbersChecked);
                }}
              />
            ) : (
              <img
                src="../assets/icon.svg"
                width="20px"
                onClick={() => {
                  setNumbersChecked(!numbersChecked);
                }}
              />
            )}
            <p>Include Numbers</p>
          </div>
          <div className="checkboxs">
            {symbolsChecked ? (
              <img
                src="../assets/check.svg"
                width="20px"
                onClick={() => {
                  setSymbolsChecked(!symbolsChecked);
                }}
              />
            ) : (
              <img
                src="../assets/icon.svg"
                width="20px"
                onClick={() => {
                  setSymbolsChecked(!symbolsChecked);
                }}
              />
            )}
            <p>Include Symbols</p>
          </div>
        </div>
        <div className="strength">
          <p>STRENGTH</p>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span>{strengthCheck}</span>
            <div style={{ display: "flex", alignItems: "center" }}>
              {symbolsChecked && numbersChecked ? (
                <img src="../assets/strong.svg" width="50px" />
              ) : numbersChecked &&
                symbolsChecked &&
                lowerCaseChecked &&
                upperCaseChecked ? (
                <img src="../assets/strong.svg" width="50px" />
              ) : numbersChecked && lowerCaseChecked ? (
                <img src="../assets/medium.svg" width="50px" />
              ) : upperCaseChecked && numbersChecked ? (
                <img src="../assets/medium.svg" width="50px" />
              ) : lowerCaseChecked && upperCaseChecked ? (
                <img src="../assets/weak.svg" width="50px" />
              ) : (
                <img src="../assets/SDASD.svg" width="50px" />
              )}
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            generateString(value);
          }}
        >
          GENERATE
          <img
            src="../assets/icon-arrow-right.svg"
            style={{ paddingLeft: "16px" }}
          />
        </button>
      </div>
    </div>
  );
}
export default Component;

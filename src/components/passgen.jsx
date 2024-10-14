import { useState } from "react";
import "./passgen.css";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export default function Password() {
  let [finalpass, setFinalpass] = useState("");
  let [passwordlen, setPasswordlen] = useState(12);
  let [uppercase, setUppercase] = useState(true);
  let [lowercase, setLowercase] = useState(true);
  let [digits, setDigits] = useState(true);
  let [symbol, setSymbol] = useState(false);
  let [passwords, setPasswords] = useState([]);
  useEffect(() => {
    createPassword();
  }, [uppercase, lowercase, digits, symbol, passwordlen]);

  let handleChange = (e) => {
    setPasswordlen(e.target.value);
  };

  let createPassword = () => {
    finalpass = "";
    let charSet = "";
    if (uppercase || lowercase || digits || symbol) {
      if (uppercase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (lowercase) charSet += "abcdefghijklmnopqrstuvwxyz";
      if (digits) charSet += "0123456789";
      if (symbol) charSet += "!@#$%^&*()_+-={}:<>?";

      for (let i = 0; i < passwordlen; i++) {
        finalpass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setPasswords([...passwords.slice(-4), finalpass]);
      // console.log(passwords);
      setFinalpass(finalpass);
    } else {
      toast.error("Plesase check one checkbox");
    }
  };

  let deletePass = (index) => {
    let newPass = passwords.filter((pass, i) => i != index);
    setPasswords(newPass);
  };
  return (
    <div className="container">
      <ToastContainer></ToastContainer>
      <div className="password-generator">
        <h1>Password </h1>
        <h1>Generator</h1>
        <div className="password-box">
          <div>
            <input
              type="text"
              id="generated-password"
              value={finalpass}
              readonly
            />
            <button
              className="copy-button"
              onClick={() => {
                navigator.clipboard.writeText(finalpass);
                toast.success("copied");
              }}
            >
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </div>
        </div>
        <div className="settings">
          <label>
            Uppercase
            <input
              type="checkbox"
              checked={uppercase}
              onChange={() => setUppercase(!uppercase)}
            />
          </label>
          <label>
            Lowercase
            <input
              type="checkbox"
              checked={lowercase}
              onChange={() => setLowercase(!lowercase)}
            />
          </label>
          <label>
            Digits
            <input
              type="checkbox"
              checked={digits}
              onChange={() => setDigits(!digits)}
            />
          </label>
          <label>
            Symbols
            <input
              type="checkbox"
              checked={symbol}
              onChange={() => setSymbol(!symbol)}
            />
          </label>
          <div className="slider">
            <input
              type="range"
              min="8"
              max="32"
              value={passwordlen}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="password-history">
        <h2>Password History</h2>
        {passwords.length != 0 ? (
          <ul>
            {passwords.map((pass, index) => {
              return (
                <li key={index} className="dlt-pass">
                  {pass}
                  {/* <FontAwesomeIcon icon="fa-solid fa-trash-can-arrow-up" /> */}
                  <div
                    className="delete"
                    onClick={() => deletePass(index)}
                  ></div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No password history</p>
        )}
        <button
          className="clear-history"
          onClick={() => {
            setPasswords([]);
          }}
        >
          Clear history
        </button>
      </div>
    </div>
  );
}

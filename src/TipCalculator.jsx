import { useEffect, useState } from "react";

function TipCalculator() {
  const [billValue, setBillValue] = useState(0);
  const [numOfPeople, setNumOfPeople] = useState(0);
  const [percentValue, setPercentValue] = useState(0);
  const [customInput, setCustomInput] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const { tipValue, setTipValue } = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  function calculateTipAmount() {
    if (billValue === 0 || numOfPeople === 0) {
      return;
    }

    setTipAmount(
      (parseInt(billValue) / parseInt(numOfPeople)) * (percentValue / 100)
    );
  }

  function calculateWithCustom() {
    if (
      (isNaN(numOfPeople) ||
        isNaN(billValue) ||
        isNaN(percentValue) ||
        billValue === 0 ||
        numOfPeople == 0,
      percentValue == 0) ||
      customInput === 0
    ) {
      return;
    }

    // tipAmountValue =
    //   (parseInt(billValue) / parseInt(numOfPeople)) * (customInput / 100);
    // setTipAmount(tipAmountValue.toFixed(2).toString());
    // totalTipAmount =
    //   parseInt(billValue) / parseInt(numOfPeople) + tipAmountValue;
    // setTotalAmount(totalTipAmount.toFixed(2).toString());
  }
  return (
    <div classNameName="main-div">
      <header>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="87"
          height="54"
          viewBox="0 0 87 54"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.264 17.112C8.512 17.352 7.664 17.472 6.72 17.472C5.616 17.472 4.644 17.316 3.804 17.004C2.964 16.692 2.264 16.26 1.704 15.708C1.144 15.156 0.72 14.508 0.432 13.764C0.144 13.02 0 12.208 0 11.328V10.608H3.168V11.184C3.168 12.192 3.46 12.996 4.044 13.596C4.628 14.196 5.536 14.496 6.768 14.496C7.728 14.496 8.44 14.288 8.904 13.872C9.368 13.456 9.6 12.96 9.6 12.384C9.6 12.112 9.552 11.852 9.456 11.604C9.36 11.356 9.192 11.132 8.952 10.932C8.712 10.732 8.384 10.552 7.968 10.392C7.552 10.232 7.024 10.096 6.384 9.984C5.536 9.84 4.76 9.652 4.056 9.42C3.352 9.188 2.74 8.88 2.22 8.496C1.7 8.112 1.296 7.632 1.008 7.056C0.72 6.48 0.576 5.776 0.576 4.944V4.8C0.576 4.112 0.716 3.476 0.996 2.892C1.276 2.308 1.668 1.8 2.172 1.368C2.676 0.936 3.284 0.6 3.996 0.36C4.708 0.12 5.504 0 6.384 0C7.376 0 8.256 0.14 9.024 0.42C9.792 0.7 10.436 1.08 10.956 1.56C11.476 2.04 11.868 2.592 12.132 3.216C12.396 3.84 12.528 4.496 12.528 5.184V6.048H9.36V5.472C9.36 4.8 9.1 4.216 8.58 3.72C8.06 3.224 7.328 2.976 6.384 2.976C5.584 2.976 4.952 3.14 4.488 3.468C4.024 3.796 3.792 4.24 3.792 4.8C3.792 5.088 3.848 5.348 3.96 5.58C4.072 5.812 4.268 6.02 4.548 6.204C4.828 6.388 5.196 6.552 5.652 6.696C6.108 6.84 6.688 6.976 7.392 7.104C9.152 7.424 10.496 7.96 11.424 8.712C12.352 9.464 12.816 10.576 12.816 12.048V12.336C12.816 13.12 12.676 13.828 12.396 14.46C12.116 15.092 11.712 15.632 11.184 16.08C10.656 16.528 10.016 16.872 9.264 17.112ZM28.72 10.8V17.136H25.552V0.336H32.128C32.992 0.336 33.744 0.476 34.384 0.756C35.024 1.036 35.556 1.404 35.98 1.86C36.404 2.316 36.724 2.836 36.94 3.42C37.156 4.004 37.264 4.6 37.264 5.208V5.784C37.264 6.408 37.156 7.02 36.94 7.62C36.724 8.22 36.404 8.756 35.98 9.228C35.556 9.7 35.024 10.08 34.384 10.368C33.744 10.656 32.992 10.8 32.128 10.8H28.72ZM31.816 7.776H28.72V3.36H31.816C32.52 3.36 33.076 3.552 33.484 3.936C33.892 4.32 34.096 4.816 34.096 5.424V5.712C34.096 6.32 33.892 6.816 33.484 7.2C33.076 7.584 32.52 7.776 31.816 7.776ZM61.28 14.112V17.136H50.48V0.336H53.648V14.112H61.28ZM86.16 17.136V14.112H82.128V3.36H86.16V0.336H74.928V3.36H78.96V14.112H74.928V17.136H86.16ZM8.064 39.36V53.136H4.896V39.36H0.432V36.336H12.528V39.36H8.064ZM32.752 53.136V39.36H37.216V36.336H25.12V39.36H29.584V53.136H32.752ZM61.376 50.112V53.136H50.48V36.336H61.088V39.36H53.648V43.2H60.8V46.224H53.648V50.112H61.376ZM78.12 53.136V46.8H81.768C82.232 46.8 82.564 46.92 82.764 47.16C82.964 47.4 83.064 47.712 83.064 48.096V53.136H86.232V47.328C86.232 46.768 86.068 46.304 85.74 45.936C85.412 45.568 84.968 45.352 84.408 45.288V44.856C85.176 44.536 85.744 44.076 86.112 43.476C86.48 42.876 86.664 42.232 86.664 41.544V40.968C86.664 40.328 86.548 39.728 86.316 39.168C86.084 38.608 85.748 38.116 85.308 37.692C84.868 37.268 84.32 36.936 83.664 36.696C83.008 36.456 82.248 36.336 81.384 36.336H74.952V53.136H78.12ZM78.12 43.776H81.144C81.912 43.776 82.496 43.596 82.896 43.236C83.296 42.876 83.496 42.368 83.496 41.712V41.424C83.496 40.864 83.296 40.38 82.896 39.972C82.496 39.564 81.912 39.36 81.144 39.36H78.12V43.776Z"
            fill="#3D6666"
          />
        </svg>
      </header>
      <main>
        <section className="main-section">
          <div className="middle-section">
            <div className="bill-bar">
              <span>Bill</span>
              <div className="bar enter-bill">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17">
                  <path
                    fill="#9EBBBD"
                    d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"
                  />
                </svg>

                <input
                  type="number"
                  placeholder="0"
                  id="bill-money"
                  onChange={(e) => {
                    e.preventDefault();
                    calculateTipAmount();
                    setBillValue(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="tip">
              <span className="select-tip">Select Tip %</span>
              <div className="boxes">
                <button
                  className={
                    percentValue === 5
                      ? "percent-box active-percent"
                      : "percent-box"
                  }
                  onClick={(e) => {
                    setPercentValue(5);

                    calculateTipAmount();
                  }}
                >
                  5%
                </button>
                <button
                  className={
                    percentValue === 10
                      ? "percent-box active-percent"
                      : "percent-box"
                  }
                  onClick={() => {
                    setPercentValue(10);
                    calculateTipAmount();
                  }}
                >
                  10%
                </button>

                <button
                  className={
                    percentValue === 15
                      ? "percent-box active-percent"
                      : "percent-box"
                  }
                  onClick={() => {
                    setPercentValue(15);
                    calculateTipAmount();
                  }}
                >
                  15%
                </button>
                <button
                  className={
                    percentValue === 25
                      ? "percent-box active-percent"
                      : "percent-box"
                  }
                  onClick={() => {
                    setPercentValue(25);
                    calculateTipAmount();
                  }}
                >
                  25%
                </button>
                <button
                  className={
                    percentValue === 50
                      ? "percent-box active-percent"
                      : "percent-box"
                  }
                  onClick={() => {
                    setPercentValue(50);
                    calculateTipAmount();
                  }}
                >
                  50%
                </button>
                <div className="custom" id="custom">
                  <input
                    type="number"
                    placeholder="Custom"
                    className="custom-input"
                    onClick={() => {
                      const btns = document.querySelectorAll("button");
                      btns.forEach((item) => {
                        item.classList.remove("active-percent");
                      });
                    }}
                    onChange={(e) => {
                      setCustomInput(e.target.value);
                      calculateWithCustom();
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="people">
              <div className="people-check">
                <span>Number of People</span>
                <span className="numcheck">Can't be zero</span>
              </div>

              <div className="bar numOfPeople people-border">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16">
                  <path
                    fill="#9EBBBD"
                    d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"
                  />
                </svg>
                <input
                  type="number"
                  placeholder="0"
                  className="num-people"
                  onChange={(e) => {
                    calculateTipAmount();
                    setNumOfPeople(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <section className="tip-info">
            <div className="about-tips">
              <div className="div-amount">
                <div className="tip-amount">
                  <span className="amount">Tip Amount</span>
                  <span>/ person</span>
                </div>
                <div className="price">
                  <span className="total-tip-amount">
                    {`$${tipAmount.toFixed(2).toString()}`}
                  </span>
                </div>
              </div>
              <div className="div-amount">
                <div className="tip-amount">
                  <span className="amount">Total</span>
                  <span>/ person</span>
                </div>
                <div className="price">
                  <span className="final-total">
                    {`$${totalAmount.toFixed(2).toString()}`}
                  </span>
                </div>
              </div>
            </div>

            <div className="reset">
              <span>RESET</span>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
export default TipCalculator;

import React, { useState } from "react";
import WeddingCoundown from "./WeddingCoundown";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import { useParams } from "react-router";

const guestList = require("../mock/guestList.json");
const Letter = () => {
  const [visibility, setVisibility] = useState(false);
  let { name } = useParams();
  let guestObj = guestList.find((obj) => obj.name === name);
  if (!!guestObj) {
    let splitString = guestObj.female ? "разделила" : "разделил";
    return (
      <div className="first-page">
        <div className="letter-wrapper">
          <Typist
            onTypingDone={() => {
              setVisibility(true);
            }}
          >
            <h2 className="letter-text">{guestObj.greeting}</h2>
            <Typist.Delay ms={1000} />
            <p className="letter-text small-text">
              {guestObj.plural
                ? `Мы хотим чтобы вы разделили `
                : `Мы хотим чтобы ты ${splitString} `}
              с нами один из самых важных дней в нашей жизни и поэтому счастливы
              пригласить {guestObj.plural ? "вас" : "тебя"} на христианскую речь
              в честь нашего бракосочетания. Она прозвучит 12-го декабря в
              14:00.
            </p>
            <p className="letter-text small-text text-right">
              Ваши Алексей и Лолита:)
            </p>
          </Typist>
          <hr />
          <div className={`hidden ${visibility ? "showed" : ""}`}>
            <p className="letter-text small-text countdown-text">
              Ссылка на конференцию появится ниже через:
            </p>
            <WeddingCoundown />
            <p className="letter-text tooltip">
              Больше информации{" "}
              {guestObj.plural ? "вы найдете " : "ты найдешь "}
              <Link className="info-link" to="/info">
                здесь
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="missing-id">
        <p>Упс... кажется с вашей ссылкой что-то не так. Попробуйте еще раз</p>
      </div>
    );
  }
};

export default Letter;

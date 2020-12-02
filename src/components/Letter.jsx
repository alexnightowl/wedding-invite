import React, { useState } from "react";
import WeddingCoundown from "./WeddingCoundown";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import { useParams } from "react-router";

const guestList = require("../mock/guestList.json");
console.log(guestList);

const Letter = () => {
  const [visibility, setVisibility] = useState(false);
  let { name } = useParams();
  let guestObj = guestList.find((obj) => obj.name === name);
  console.log("guestObj", guestObj);
  if (guestObj) {
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
                ? "Мы хотим чтобы вы разделили "
                : "Мы хотим чтобы ты разделил "}
              с нами один из самых важных дней в нашей жизни и поэтому
              приглашаем {guestObj.plural ? "вас" : "тебя"} на церемонию нашего
              бракосочитания, а также на христианскую речь в честь нашей
              свадьбы. Ссылка на конференцию появится ниже через:
            </p>
          </Typist>
          <div className={`hidden ${visibility ? "showed" : ""}`}>
            <WeddingCoundown />
            <p className="letter-text tooltip">
              Больше информации {guestObj.plural ? "вы найдете " : "ты найдешь "}
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

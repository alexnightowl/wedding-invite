import React, { useState } from "react";
import Expand from "react-expand-animated";

const Info = () => {
    const [isShowCredentioals, setVisibility] = useState(false)
    const toggle = () => {
        setVisibility(isShowCredentioals ? false : true)
    }
  return (
    <div className="second-page">
      <div className="letter-wrapper info-wrapper">
        <h4>Трансляция</h4>
        <p>
          В виду карантинных ограничений свадебная церемония будет проходить в
          онлайн формате. Основной частью программы будет 30-минутная свадебная
          речь
        </p>
        <p>
          Для того чтобы присоединиться к трансляции вам нужно заранее
          установить программу Zoom на компьютер или мобильное устройство.
          Можете сделать это <a target="_blank" href="https://zoom.us/download">здесь</a>
        </p>
        <p>
          Трансляция свадебной речи начнеться 12 декабря в 14:00, ссылка на неё
          будет доступна с 13:30. Пожалуйста не опаздывайте)
        </p>
        <hr />
        <h4>Наша группа в Telegram</h4>
        <p>
          Мы будем очень рады пообщаться с вами, поэтому присоединяйтесь к{" "}
          <a target="_blank" href="https://t.me/joinchat/FIJ-0B1cjJoRFCZmy3T66w">
            Telegram чату
          </a>
          , где вы сможете познакомиться с другими приглашенными
        </p>
        <hr />
        <h4>Для тех кто желает сделать подарок</h4>
        <p>
          Если вы хотите сделать свадебный подарок, можете воcпользоваться этими
          <a href="#props" onClick={toggle}> реквизитами</a>:
        </p>
        <Expand open={isShowCredentioals}>
          <ul id="props">
            <li>Монобанк: 5375 4141 0349 2863</li>
            <li>Приват банк: 5168 7425 0041 7385</li>
            <li>
              Новая почта: Колесник Алексей Иванович
              <br /> +380983293822
              <br /> г. Винница Отделение №6 ул. Зодчих, 16
            </li>
          </ul>
        </Expand>
      </div>
    </div>
  );
};

export default Info;

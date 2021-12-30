import React from "react";
import VaccineList from "../../common/VaccineList/VaccineList";
import Accordeon from "../../components/uikit/accordeon/Accordeon";
import SectionTitle from "../../components/uikit/SectionTitle/SectionTItle";
import style from "./Vaccines.module.css";
import image from "../../images/vactination.jpeg";
import calendar from "../../images/calendarVaccines.png";
const data = {
  text: [
    {
      title: "Що таке імунітет?",
      text: "При народженні у дітей є пасивний імунітет до деяких захворювань, переданий від матері. Поступово він слабшає, і дитина стає вразливою до інфекцій. Імунна система розвивається поступово, тому на перших роках життя діти особливо схильні до різних захворювань. Захистити організм дитини можна тільки за допомогою профілактичної вакцинації. Завдяки проведенню планових щеплень дітям і дорослим у світі вдалося скоротити поширення багатьох важких захворювань. Зараз батьки часто пишуть відмову від щеплень дітям, хвилюючись про якість та безпеку вакцин. Через це в Києві та інших містах періодично спалахують епідемії кору, дифтерії та інших захворювань. Перед початком відвідування садочку та школи у дитини обов’язково повинні бути зроблені всі щеплення.",
    },
    {
      title: "Як працюють вакцини?",
      text: "Вакцинація забезпечує формування природного імунітету до інфекційних збудників. Залежно від виду застосовуваної вакцини – жива чи інактивована – в організм вводять невелику кількість ослаблених патогенних мікроорганізмів або їх компонентів. Вони не викликають розвиток захворювання, але дозволяють імунній системі сформувати захист.",
    },
    {
      title: "Які можливі реакції на вакцину?",
      text: "Для проведення вакцинації застосовують вкрай невеликі дози і, як правило, ослаблених патогенів. Вони не можуть спровокувати розвиток захворювання і призвести до серйозних ускладнень. Після вакцинації у дитини можуть з’явитися: почервоніння шкіри в місці введення вакцини, набряк та больові відчуття в місці ін’єкції, підвищення температури тіла, легке нездужання",
    },

    {
      title: "Чи безпечна вакцинація?",
      text: "Вакцинація вважається безпечним та ефективним методом профілактики інфекційних захворювань. МОЗ України гарантує, що всі вакцини, які застосовують у дітей та дорослих, проходять сертифікацію і ретельну перевірку. Також вони багаторазово тестуються ще до випуску на ринок. Частота розвитку ускладнень після щеплень у дітей не перевищує в основному одного випадку на мільйон або сто тисяч. Тоді як ймовірність розвитку ускладнень після захворювання на поліомієліт, кір, краснуху та інші інфекції в рази вища. Вони можуть призводити до порушень нервової системи, сліпоти, паралічу та інших незворотних змін в організмі, а також смерті.",
    },
    {
      title: "Коли не рекомендують робити щеплення?",
      text: "Проводити щеплення не рекомендують дітям:  у момент розвитку гострого захворювання, при алергії на компоненти вакцини,  при імунологічних захворюваннях (при ВІЛ протипоказані деякі вакцини)",
    },

    {
      title: "Графік щеплень в Україні?",
      text: <img src={calendar} alt="" />,
    },
  ],

  vaccine: [
    {
      title: "Інфанрікс (INFANRIX™)",
      target: ["Дифтерія", "Коклюш", "Правець"],
      path: "infanrix",
    },
    {
      title: "Інфанрікс Гекса (INFANRIX HEXA™)",
      target: [
        "Гемофільна інфекція типу b",
        "Гепатит В",
        "Дифтерія",
        "Коклюш",
        "Полімієліт",
        "Правець",
      ],
      path: "infanrix-hexa",
    },

    {
      title: "Тетраксім (TETRAXIM®)",
      target: ["Дифтерія", "Коклюш", "Полімієліт", "Правець"],
      path: "tetraxim",
    },

    {
      title: "Пентаксім (PENTAXIM®)",
      target: [
        "Гемофільна інфекція типу b",
        "Дифтерія",
        "Коклюш",
        "Полімієліт",
        "Правець",
      ],
      path: "pentaxim",
    },

    {
      title: "Гексаксім (HEXAXIM™)",
      target: [
        "Гемофільна інфекція типу b",
        "Гепатит В",
        "Дифтерія",
        "Коклюш",
        "Полімієліт",
        "Правець",
      ],
      path: "hexaxim",
    },

    {
      title: "Бустрікс (BOOSTRIX™)",
      target: ["Дифтерія", "Кошлюк", "Правець"],
      path: "boostrix",
    },

    {
      title: "Пріорікс (PRIORIX™)",
      target: ["Кір", "Краснуха", "Паротит"],
      path: "priorix",
    },

    {
      title: "Імовакс поліо (IMOVAX POLIO®)",
      target: ["Полімієліт"],
      path: "imovax",
    },
    {
      title: "Хіберікс (HIBERIX™)",
      target: ["Гемофільна інфекція типу В"],
      path: "hiberix",
    },

    {
      title: "Енджерикс-В (ENGERIX™)",
      target: ["Гепатит В"],
      path: "engerix",
    },

    {
      title: "Превенар 13 (PREVENAR 13®)",
      target: ["Пневмококова інфекція"],
      path: "prevenar",
    },
    {
      title: "Менактра (MENACTRA®)",
      target: ["Менінгококова інфекція"],
      path: "menaktra",
    },
  ],
};

const Vaccines = () => {
  return (
    <section className={style.section}>
      <SectionTitle text="Вакцинація" />
      <div className={style.wrapper}>
        <article className={style.article}>
          <p className={style.text}>
            Вакцинація – надійний метод захисту від важких інфекційних
            захворювань. Вона забезпечує формування імунітету, завдяки чому
            організм стає стійким до інфекційних збудників. Планова вакцинація
            знижує ризик зараження на 90-100%. У випадках, коли дитина все ж
            захворює, хвороба проходить у легкій формі і не викликає розвитку
            ускладнень. В Україні вакцинація є обов’язковою. Профілактичні
            щеплення проводять дітям згідно з національним календарем вакцинації
            або індивідуальним графіком.
          </p>
          <img className={style.image} src={image} alt="" />
        </article>
        <article className={style.article}>
          <div className={style.articleInner}>
            {data.text.map(({ title, text }, ind) => (
              <Accordeon key={ind} title={title}>
                {text}
              </Accordeon>
            ))}
          </div>
        </article>
        <SectionTitle text="Вакцини" />
        <article className={style.article}>
          <VaccineList listItems={data.vaccine} />
        </article>
      </div>
    </section>
  );
};

export default Vaccines;

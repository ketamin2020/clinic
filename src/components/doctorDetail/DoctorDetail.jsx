import React from "react";
import { useParams } from "react-router-dom";
import style from "./DoctorDetail.module.css";
import pravnik from "../../images/doctors/pravnik.webp";
import koshman from "../../images/doctors/koshman.webp";
import lapshina from "../../images/doctors/lapshinajpg.webp";
import kulinenko from "../../images/doctors/kulinenko.webp";
import garbuz from "../../images/doctors/garbuzyk.webp";
import kuharuk from "../../images/doctors/kuharuk.webp";
const details = {
  lapshina: {
    name: "Лапшина Ірина Олександрівна ",
    skil: "Лікар-педіатр, імунолог дитячий",
    image: lapshina,
    education: [
      "Закінчила Київський НМУ ім. О. Богомольця в 2005 р.",
      "Інтернатуру проходила у НМУ ім. О. Богомольця 2005-2007 рр.",
      "У 2020 р. в НМАПО ім. Шупіка отримала сертифікат Імунолог дитячий.",
      "Працювала в ДКЛ №6 м.Києва 2007-2020 рр.",
      "З 2012р. працюю в лікарем-педіатром та імунологом дитячим в Київській обласній дитячій лікарні.",
    ],
    directly: [
      "спостереження дітей від народження і до 18 років",
      "консультування щодо питань грудного вигодовування та догляду за малюками",
      "планування та проведення вакцинацій",
      "направлення на консультації до вузькопрофільних фахівців",
    ],
  },
  pravnik: {
    name: "Правник Михайло Васильович",
    skil: "Лікар-педіатр",
    image: pravnik,

    education: [
      "Закінчив Київський НМУ імені О.О. Богомольця в 2016 році.",
      "Інтернатуру проходив у ЛНМУ імені Данила Галицького (2016-2018 рр.)",
      "Працював лікарем-педіатром у Рівненській обласній лікарні та ЦПМСД N4 Дніпровського району.",
      "У 2018-2019 рр. лікарем-педіатром КНП КМДКЛ №5.",
      "Наразі – лікар-педіатр у Київській обласній дитячій лікарні.",
    ],

    directly: [
      "спостереження дітей від народження і до 18 років",
      "консультування щодо питань грудного вигодовування та догляду за малям",
      "планування та проведення вакцинацій",
      "направлення на консультації до вузькопрофільних фахівців",
    ],
  },
  koshman: {
    name: "Кошман Сергій Миколайович",
    skil: "Лікар-педіатр",
    image: koshman,

    education: [
      "Закінчив Запорізький державний медичний університет у 2016 році.",
      "Інтернатуру проходив у Національній медичній академії післядипломної освіти ім. П.Л. Шупика (2016-2018 рр.).",
      "У 2016 році закінчив школу масажу 'Світ масажу' в Запоріжжі.",
      "У 2017-2018 рр. працював масажистом у спа-центрі 'Центр Здоров'я' з дорослими та дітками від 2 місяців.",
      "Має досвід роботи в пологовому, дитячому, інфекційному відділеннях, амбулаторний прийом (2016-2021 рр.)",
      "Працює за принципом доказової медицини.",
    ],

    directly: [
      "патронаж",
      "спостереження дітей від народження і до 18 років",
      "вакцинація",
      "планування індивідуального графіку щеплень",
      "консультування щодо грудного вигодовування",
      "комплексний/індивідуальний підхід",
    ],
  },
  kulinenko: {
    name: "Куліненко Маргарита Геннадіївна",
    skil: "Лікар-отоларинголог",
    image: kulinenko,

    education: [
      "2010-2016 рр. – Національний медичний університет  ім. О.О.Богомольця (диплом з відзнакою)",
      "2016-2017 рр. – інтернатура з Дитячої отоларингології ( Медична академія післядипломної освіти ім. Шупика)",
      "2018 р. – спеціалізація з Отоларингології( Медична академія післядипломної освіти ім. Шупика)",
      "підвищення кваліфікації з ендоскопічної хірургії пахух носа (Мінськ,Білорусь)",
      "хірургічний курс по кохлеарній імплантації (Дюссельдорф, Німеччина)",
      "хірургічний курс по імплантації  апарату Baha (Мінськ, Білорусь)",
      "стажування в ЛОР-відділенні клініки Helios (Хільдесайм, Німеччина)",
      "курси по мікрохірургії вуха (Інститут отоларингології)",
      "курси по хірургії скроневої кістки ( Ганновер, Німеччина)",
      "курси по ендоскопічній хірургії приносових пазух (Мінськ, Білорусь)",
      "Наразі працює науковим співробітником Інституту отоларингології ім. проф. О.С.Коломійченка НАМН України",
    ],

    directly: [
      "Лікування ЛОР хвороб для дітей та дорослих",
      "Ендоскопія та мікроскопія ЛОР органів",
      "Хірургія ЛОР органів",
      "ЛОР процедури",
      "Відновлення слуху",
    ],
  },
  garbuzyuk: {
    name: "Гарбузюк Юрій Вікторович",
    skil: "Лікар загальної практики-сімейний лікар",
    image: garbuz,

    education: [
      "Закінчив Національний медичний університет імені О.О. Богомольця в 2009 році.",
      "Проходив інтернатуру в НМУ імені О.О.Богомольця за спеціальністю  'загальна практика-сімейна медицина' (2009-2011 рр.)",
      "З 2011р по 2022р працюва лікарем загальної практики-сімейним лікарем у КНП 'ЦПМСД' N3 Святошинського району м.Києва.'",
      "З лютого 2022р і по теперішній час працює в ЦСМ 'СІМ'Я",
    ],

    directly: [
      "Клінічний огляд пацієнта (огляд, пальпація, перкусія, аускультація)",
      "Огляд, підбір схем лікування, ведення пацієнтів з питань кардіології, гастроентерології, захворювань дихальних шляхів",
      "Передопераціонний огляд",
      "Вакцинація",
      "Інтерпретація результатів лабораторних аналізів",
      "Зняття електрокардіограм, їх розшифрування",
      "Лікування захворювань, які потребують госпіталізації",
    ],
  },
  kuharuk: {
    name: "Кухарук Андрій Сергійович",
    skil: "Ортопед-травматолог",
    image: kuharuk,

    education: [
      "Закінчив Національний медичний університет імені О.О. Богомольця в 2019 році.",
      "Інтернатуру проходив у Національній медичній академії післядипломної освіти ім. П.Л. Шупика (2019-2021 рр.).",
      "З 2021р до нині, працює лікарем ортопедом-травматологом у Київській обласній дитячій лікарні",
      "З лютого 2022р і по теперішній час працює в ЦСМ 'СІМ'Я",
    ],

    directly: [
      "Клінічний огляд пацієнта (огляд, пальпація, перкусія, аускультація)",
      "Огляд, підбір схем лікування, ведення пацієнтів з питань вроджених і набутих захворювань кістково-м'язової системи ",
      "Лікуванням травм і їх наслідків",
      "Реабілітацію в п/травматичних і післяопераційних періодах",
    ],
  },
};

const DoctorDetail = () => {
  const { name } = useParams();
  const { name: fullName, skil, image, directly, education } = details[name];
  return (
    <section className={style.section}>
      <h3 className={style.title}>{fullName}</h3>
      <h4 className={style.subtitle}>{skil}</h4>
      <div className={style.wrapper}>
        <article className={style.article}>
          <img src={image} alt={fullName} className={style.image} />
        </article>
        <article className={style.article}>
          <h4 className={style.articleTitle}>Освіта</h4>
          <ul className={style.list}>
            {education.map((item, ind) => (
              <li key={ind} className={style.item}>
                <span className={style.marker}></span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <h4 className={style.articleTitle}>Напрям діяльності</h4>
          <ul className={style.list}>
            {directly.map((item, ind) => (
              <li key={ind} className={style.item}>
                <span className={style.marker}></span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default DoctorDetail;

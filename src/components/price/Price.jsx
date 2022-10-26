import React from "react";
import style from "./Price.module.css";
import Accordeon from "../../components/uikit/accordeon/Accordeon";
import SectionTitle from "../../components/uikit/SectionTitle/SectionTItle";
import PriceList from "../../common/PriceList/PriceList";
import { data } from "./data";

const Price = () => {
  return (
    <section className={style.section}>
      <SectionTitle text="Вартість послуг" />
      <Accordeon title=" + Консультації">
        <PriceList items={data.consultation} />
      </Accordeon>
      <Accordeon title=" + Лабораторія">
        <Accordeon title=" Тиреоїдна панель">
          <PriceList items={data.laboratoria.tirpanel} />
        </Accordeon>
        <Accordeon title=" Репродуктивна панель">
          <PriceList items={data.laboratoria.reprod} />
        </Accordeon>
        <Accordeon title=" Пренатальної діагностика">
          <PriceList items={data.laboratoria.prenatal} />
        </Accordeon>
        <Accordeon title=" Онкологічна  панель">
          <PriceList items={data.laboratoria.onko} />
        </Accordeon>
        <Accordeon title=" Гіпофізарні-наднирникові показники">
          <PriceList items={data.laboratoria.gipofiz} />
        </Accordeon>
        <Accordeon title="Фактори росту">
          <PriceList items={data.laboratoria.rost} />
        </Accordeon>
        <Accordeon title="Панель остеопорозу">
          <PriceList items={data.laboratoria.osteo} />
        </Accordeon>
        <Accordeon title="Панель цукрового діабету">
          <PriceList items={data.laboratoria.diabet} />
        </Accordeon>
        <Accordeon title="Кардіоревматоїдна панель">
          <PriceList items={data.laboratoria.cardio} />
        </Accordeon>
        <Accordeon title="Гематологічна панель">
          <PriceList items={data.laboratoria.gem} />
        </Accordeon>
        <Accordeon title="Сеча">
          <PriceList items={data.laboratoria.urine} />
        </Accordeon>
        <Accordeon title="Цитологічні дослідження">
          <PriceList items={data.laboratoria.cit} />
        </Accordeon>
        <Accordeon title="Діагностика калу">
          <PriceList items={data.laboratoria.kal} />
        </Accordeon>
        <Accordeon title="Діагностика TORCH-інфекцій">
          <PriceList items={data.laboratoria.torch} />
        </Accordeon>
        <Accordeon title="Інші інфекції">
          <PriceList items={data.laboratoria.other} />
        </Accordeon>
        <Accordeon title="Гельмінти">
          <PriceList items={data.laboratoria.gelm} />
        </Accordeon>
        <Accordeon title="Алергопанель">
          <PriceList items={data.laboratoria.alerg} />
        </Accordeon>
        <Accordeon title="Бактеріологічні дослідження">
          <PriceList items={data.laboratoria.bac} />
        </Accordeon>
        <Accordeon title="Генетичні дослідження">
          <PriceList items={data.laboratoria.gen} />
        </Accordeon>
        <Accordeon title="Пакети">
          <PriceList items={data.laboratoria.pakets} />
        </Accordeon>
      </Accordeon>
      <Accordeon title="+ Сестринські маніпуляції">
        <PriceList items={data.manipulation} />
      </Accordeon>
      <Accordeon title="+ Вакцинація">
        <PriceList items={data.vactination} />
      </Accordeon>
      <Accordeon title="+ Хірургічні послуги">
        <PriceList items={data.surgion} />
      </Accordeon>
      <Accordeon title="+ ЛОР послуги">
        <PriceList items={data.lor} />
      </Accordeon>
      <Accordeon title="+ Гінекологічні послуги">
        <PriceList items={data.ginecolog} />
      </Accordeon>
      <Accordeon title="+ Виїзні консультації лікарів">
        <PriceList items={data.driving} />
      </Accordeon>
      <Accordeon title="+ Масаж">
        <PriceList items={data.manual} />
      </Accordeon>
    </section>
  );
};

export default Price;

import "./ContactCTA.css";

export default function ContactCTA() {
  return (
    <section className="contactCTA" id="contacts">

      <div className="container">

        <h2 className="sectionTitle">
          Не знайшли свою ситуацію?
        </h2>

        <p className="contactText">
          Опишіть Вашу ситуацію. Ми проаналізуємо отриману
          інформацію та найближчим часом зв'яжемося з Вами,
          щоб запропонувати можливі варіанти її вирішення.
        </p>

        <button className="contactButton">
          Зв'язатися з нами
        </button>

      </div>

    </section>
  );
}
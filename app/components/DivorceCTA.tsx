import "./DivorceCTA.css";

export default function DivorceCTA() {
  return (
    <section className="divorceCTA">

      <div className="container">

        <div className="ctaCard">

          <h2>
            Потрібна правова допомога?
          </h2>

          <p>
            Кожна сімейна ситуація має свої особливості.
            Під час консультації ми проаналізуємо саме ваш випадок,
            пояснимо можливі варіанти вирішення питання та
            запропонуємо оптимальний порядок подальших дій.
          </p>

          <a
            href="/consultation"
            className="ctaButton"
          >
            Отримати консультацію
          </a>

        </div>

      </div>

    </section>
  );
}
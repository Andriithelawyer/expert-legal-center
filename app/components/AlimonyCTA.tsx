import "./AlimonyCTA.css";

export default function AlimonyCTA() {
  return (
    <section className="alimonyCTA">

      <div className="container">

        <div className="alimonyCTABox">

          <h2>
            Потрібна консультація?
          </h2>

          <p>
            Ми проаналізуємо Вашу ситуацію,
            пояснимо можливі варіанти вирішення
            питання та запропонуємо оптимальний
            порядок подальших дій.
          </p>

          <a
            href="/consultation"
            className="alimonyCTAButton"
          >
            Зв'язатися з нами
          </a>

        </div>

      </div>

    </section>
  );
}
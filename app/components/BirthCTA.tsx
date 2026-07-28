import "./BirthCTA.css";

export default function BirthCTA() {
  return (
    <section className="birthCTA" id="contacts">

      <div className="container">

        <div className="birthCTABox">

          <h2>
            Потрібна юридична допомога?
          </h2>

          <p>
            Якщо у Вас залишилися запитання або Ви бажаєте
            розпочати оформлення документів, зв'яжіться з нами
            у зручний для Вас спосіб.
          </p>

          <p>
            Ми проаналізуємо Вашу ситуацію, пояснимо порядок
            дій та запропонуємо оптимальний варіант юридичного
            супроводу.
          </p>

          <a
            href="/consultation"
            className="birthCTAButton"
          >
            Отримати консультацію
          </a>

        </div>

      </div>

    </section>
  );
}
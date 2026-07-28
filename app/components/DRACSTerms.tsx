import "./DRACSTerms.css";

export default function DRACSTerms() {
  return (
    <section className="dracsTerms">

      <div className="container">

        <h2 className="birthSectionTitle">
          Строки отримання документів
        </h2>

        <p className="birthSectionText">
          Тривалість процедури залежить від багатьох факторів.
          Після аналізу Вашої ситуації ми повідомимо орієнтовний
          строк отримання документа.
        </p>

        <div className="dracsTermsGrid">

          <div className="dracsTermCard">

            <div className="dracsTermIcon">
              ⏳
            </div>

            <h3>
              Індивідуальний підхід
            </h3>

            <p>
              Строк залежить від виду документа,
              місця знаходження актового запису
              та інших обставин конкретної справи.
            </p>

          </div>

          <div className="dracsTermCard">

            <div className="dracsTermIcon">
              🌍
            </div>

            <h3>
              Дистанційний супровід
            </h3>

            <p>
              Значну частину роботи можна виконати
              дистанційно незалежно від країни,
              у якій Ви перебуваєте.
            </p>

          </div>

          <div className="dracsTermCard">

            <div className="dracsTermIcon">
              📞
            </div>

            <h3>
              Попередня консультація
            </h3>

            <p>
              Після вивчення документів ми одразу
              повідомимо орієнтовні строки саме
              для Вашої ситуації.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
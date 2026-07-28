import "./AlimonyProcess.css";

export default function AlimonyProcess() {
  return (
    <section className="alimonyProcess">

      <div className="container">

        <h2 className="birthSectionTitle">
          Як проходить процедура
        </h2>

        <div className="alimonyProcessGrid">

          <div className="alimonyProcessCard">
            <span>1</span>
            <h3>Аналіз документів</h3>
            <p>
              Вивчаємо Вашу ситуацію та визначаємо
              перелік необхідних документів.
            </p>
          </div>

          <div className="alimonyProcessCard">
            <span>2</span>
            <h3>Підготовка та подання документів до суду адвокатом</h3>
            <p>
              Готуємо процесуальні документи та
              подаємо їх до суду.
            </p>
          </div>

          <div className="alimonyProcessCard">
            <span>3</span>
            <h3>Представництво Ваших інтересів</h3>
            <p>
              Представляємо Ваші інтереси під час
              судового розгляду справи.
            </p>
          </div>

          <div className="alimonyProcessCard">
            <span>4</span>
            <h3>Отримання рішення суду</h3>
            <p>
              Отримуємо рішення суду після
              завершення розгляду справи.
            </p>
          </div>

          <div className="alimonyProcessCard">
            <span>5</span>
            <h3>Передача рішення суду та виконавчого документа клієнтові</h3>
            <p>
              Передаємо готові документи клієнтові
              у зручний для нього спосіб.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
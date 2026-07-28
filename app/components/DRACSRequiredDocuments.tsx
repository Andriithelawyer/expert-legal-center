import "./DRACSRequiredDocuments.css";

export default function DRACSRequiredDocuments() {
  return (
    <section className="dracsRequiredDocuments">

      <div className="container">

        <h2 className="birthSectionTitle">
          Які документи можуть знадобитися
        </h2>

        <p className="birthSectionText">
          Остаточний перелік документів залежить від Вашої
          конкретної ситуації. Після ознайомлення з нею ми
          повідомимо, які саме документи необхідно підготувати.
        </p>

        <div className="dracsRequiredGrid">

          <div className="dracsRequiredCard">

            <h3>
              Документи заявника
            </h3>

            <ul>

              <li>✔ паспорт громадянина України або інший документ, що посвідчує особу</li>

              <li>✔ РНОКПП (за наявності)</li>

              <li>✔ наявні копії документів (якщо збереглися)</li>

            </ul>

          </div>

          <div className="dracsRequiredCard">

            <h3>
              Додаткові документи
            </h3>

            <ul>

              <li>✔ документи, що підтверджують право звернення (за необхідності)</li>

              <li>✔ довіреність або документи представника (якщо інтереси представляє адвокат)</li>

              <li>✔ інші документи залежно від конкретної ситуації</li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}
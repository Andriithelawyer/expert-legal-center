import "./AlimonyDuration.css";

export default function AlimonyDuration() {
  return (
    <section className="alimonyDuration">

      <div className="container">

        <h2 className="birthSectionTitle">
          Скільки триває процедура
        </h2>

        <p className="birthSectionText">
          Тривалість розгляду справи залежить від її
          складності, завантаженості суду та інших
          процесуальних обставин.
        </p>

        <div className="alimonyDurationCard">

          <div className="alimonyDurationIcon">
            ⏳
          </div>

          <div>

            <h3>
              Орієнтовний строк
            </h3>

            <p>
              Після ознайомлення з Вашою ситуацією ми
              зможемо надати більш точну інформацію
              щодо очікуваних строків розгляду справи.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
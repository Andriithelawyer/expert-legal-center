import "./BirthDuration.css";

export default function BirthDuration() {
  return (
    <section className="birthDuration">

      <div className="container">

        <h2 className="birthSectionTitle">
          Скільки триває процедура
        </h2>

        <div className="birthDurationCard">

          <div className="birthDurationIcon">
            ⏳
          </div>

          <div className="birthDurationTime">
            від 2 тижнів
            <br />
            до 2 місяців
          </div>

          <p className="birthDurationText">
            Строк залежить від обставин конкретної справи
            та завантаженості суду, який розглядатиме справу.
          </p>

          <p className="birthDurationNote">
            Це лише орієнтир для загального розуміння строків
            процедури. У кожній справі строки можуть
            відрізнятися.
          </p>

        </div>

      </div>

    </section>
  );
}
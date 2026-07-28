import "./KnowledgeCTA.css";

export default function KnowledgeCTA() {
  return (
    <section className="knowledgeCTA" id="contacts">

      <div className="container">

        <div className="knowledgeCTABox">

          <h2>
            Не знайшли відповіді
            на своє питання?
          </h2>

          <p>
            Кожна життєва ситуація є індивідуальною.
            Якщо після ознайомлення з матеріалами
            у Вас залишилися запитання —
            зверніться за консультацією.
            Ми проаналізуємо Вашу ситуацію
            та запропонуємо оптимальний спосіб
            її вирішення.
          </p>

          <div className="knowledgeCTAButtons">

            <a
              href="tel:+380000000000"
              className="knowledgePrimaryButton"
            >
              📞 Зателефонувати
            </a>

            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              className="knowledgeSecondaryButton"
            >
              ✉️ Написати у Telegram
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}
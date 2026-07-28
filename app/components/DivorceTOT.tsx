import "./DivorceTOT.css";

import DivorceProcess from "./DivorceProcess";
import DivorceDocuments from "./DivorceDocuments";
import DivorceFAQ from "./DivorceFAQ";
import DivorceHelp from "./DivorceHelp";
import DivorceCTA from "./DivorceCTA";

export default function DivorceTOT() {
  return (
    <>
      <section className="divorceHero">

        <div className="container divorceHeroContent">

          <div className="divorceHeroLeft">

            <span className="divorceBadge">
              Розірвання шлюбу
            </span>

            <h1>
              Розірвання шлюбу, якщо один або обидва з подружжя перебувають
              за кордоном чи на тимчасово окупованій території України
            </h1>

            <p className="divorceLead">
              Допомагаємо розірвати шлюб відповідно до законодавства України,
              навіть якщо один із подружжя перебуває за межами України
              або на тимчасово окупованій території.
            </p>

            <div className="divorceSteps">

              <div>
                ✔ супровід справи від консультації до отримання рішення суду;
              </div>

              <div>
                ✔ можливість представництва інтересів у суді;
              </div>

              <div>
                ✔ допомога незалежно від країни перебування.
              </div>

            </div>

            <a
              href="/consultation"
              className="divorceButton"
            >
              Отримати консультацію
            </a>

          </div>

          <div className="divorceCard">

            <span className="divorceCardBadge">
              Що ви отримаєте
            </span>

            <ul>

              <li>
                ✔ рішення суду про розірвання шлюбу;
              </li>

              <li>
                ✔ офіційне припинення шлюбу відповідно до законодавства України;
              </li>

              <li>
                ✔ юридичну визначеність щодо сімейного статусу.
              </li>

            </ul>

          </div>

        </div>

      </section>

      <DivorceProcess />

      <DivorceDocuments />

      <DivorceFAQ />

      <DivorceHelp />

      <DivorceCTA />

    </>
  );
}
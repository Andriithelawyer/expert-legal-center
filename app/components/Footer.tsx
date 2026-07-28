import Link from "next/link";
import "./Footer.css";
import contacts from "../data/contacts";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footerGrid">

        <div>

          <h3 className="footerLogo">
            Expert Legal Center
          </h3>

          <p className="footerText">
            Правова допомога громадянам України,
            які перебувають за кордоном або
            на тимчасово окупованих територіях.
          </p>

        </div>

        <div>

          <h4>Навігація</h4>

          <ul>

            <li>
              <Link href="/">
                Головна
              </Link>
            </li>

            <li>
              <a href="/#services">
                Послуги
              </a>
            </li>

            <li>
              <Link href="/knowledge">
                Корисні матеріали
              </Link>
            </li>

            <li>
              <Link href="/consultation">
                Отримати консультацію
              </Link>
            </li>

          </ul>

        </div>

        <div>

          <h4>Контакти</h4>

          <ul>

            <li>

              <a href={contacts.phoneLink}>
                {contacts.phone}
              </a>

            </li>

            <li>

              <a href={contacts.emailLink}>
                {contacts.email}
              </a>

            </li>

            <li>
              WhatsApp • Telegram • Viber
            </li>

            <li>
              Для телефонних дзвінків
            </li>

            <li className="footerHours">
              {contacts.workingHours}
            </li>

          </ul>

        </div>

      </div>

      <div className="footerBottom">

        © 2026 Expert Legal Center.
        Усі права захищені.

      </div>

    </footer>
  );
}
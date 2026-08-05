"use client";

import Link from "next/link";
import "./Footer.css";
import { contacts } from "../data/contacts";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <h3 className="footerLogo">
            {contacts.company}
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
              <Link href="/">Головна</Link>
            </li>

            <li>
              <a href="/#services">Послуги</a>
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
              <a href={`tel:${contacts.phone}`}>
                {contacts.phoneDisplay}
              </a>
            </li>

            <li>
              <a href={`mailto:${contacts.email}`}>
                {contacts.email}
              </a>
            </li>

            <li>
              {contacts.messengers.join(" • ")}
            </li>

            <li>
              {contacts.address.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </li>

            <li className="footerHours">
              {contacts.workingHours.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </li>

            <li className="footerNotice">
              {contacts.notice}
            </li>
          </ul>
        </div>
      </div>

      <div className="footerBottom">
        © 2026 {contacts.company}. Усі права захищені.
      </div>
    </footer>
  );
}
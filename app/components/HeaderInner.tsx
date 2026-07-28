import Link from "next/link";
import "./HeaderInner.css";

export default function HeaderInner() {
  return (
    <header className="headerInner">

      <div className="container headerInnerContent">

        <Link href="/" className="innerLogo">

          <h2>Expert Legal Center</h2>

          <span>
            Правнича допомога дистанційно
          </span>

        </Link>

        <nav className="innerNavigation">

          <Link href="/">
            Головна
          </Link>

          <Link href="/#services">
            Послуги
          </Link>

          <Link href="/knowledge">
            Корисні матеріали
          </Link>

          <Link href="/#contacts">
            Контакти
          </Link>

        </nav>

        <Link
          href="/#contacts"
          className="innerButton"
        >
          Отримати консультацію
        </Link>

      </div>

    </header>
  );
}
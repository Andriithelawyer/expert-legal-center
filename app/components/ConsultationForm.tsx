"use client";

import { useState } from "react";
import "./ConsultationForm.css";

export default function ConsultationForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      country: (form.elements.namedItem("country") as HTMLInputElement).value,
      contact: (form.elements.namedItem("contact") as HTMLSelectElement).value,
      topic: (form.elements.namedItem("topic") as HTMLSelectElement).value,
      comment: (form.elements.namedItem("comment") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("✅ Дякуємо! Заявку успішно надіслано.");
        form.reset();
      } else {
        setStatus(result.error || "Помилка при надсиланні.");
      }
    } catch {
      setStatus("❌ Не вдалося надіслати заявку.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="consultation">
      <div className="container">
        <div className="consultationBox">

          <span className="consultationBadge">
            Юридична консультація
          </span>

          <h1>
            Отримати юридичну консультацію
          </h1>

          <p className="consultationLead">
            Заповніть форму нижче.
            Ми зв'яжемося з Вами найближчим часом
            та пояснимо можливі варіанти вирішення
            Вашого питання.
          </p>

          <form className="consultationForm" onSubmit={handleSubmit}>

            <div className="formGroup">
              <label>Ім'я *</label>
              <input
                name="name"
                type="text"
                placeholder="Ваше ім'я"
                required
              />
            </div>

            <div className="formGroup">
              <label>Телефон *</label>
              <input
                name="phone"
                type="tel"
                placeholder="+380..."
                required
              />
            </div>

            <div className="formGroup">
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="example@email.com"
              />
            </div>

            <div className="formGroup">
              <label>Країна перебування *</label>
              <input
                name="country"
                type="text"
                placeholder="Наприклад: Польща"
                required
              />
            </div>

            <div className="formGroup">
              <label>Зручний спосіб зв'язку *</label>

              <select name="contact" required>
                <option>Telegram</option>
                <option>WhatsApp</option>
                <option>Viber</option>
                <option>Email</option>
                <option>Телефонний дзвінок</option>
              </select>
            </div>

            <div className="formGroup">
              <label>Питання, яке потрібно вирішити *</label>

              <select name="topic" required>
                <option>Народження дитини на ТОТ</option>
                <option>Смерть родича на ТОТ</option>
                <option>Розірвання шлюбу</option>
                <option>Стягнення аліментів</option>
                <option>Документи ДРАЦС</option>
                <option>Інше питання</option>
              </select>
            </div>

            <div className="formGroup">
              <label>Короткий коментар (за бажанням)</label>

              <textarea
                name="comment"
                rows={5}
                placeholder="За бажанням можете коротко описати ситуацію..."
              />
            </div>

            <p className="consultationHint">
              Повний опис ситуації Ви зможете надати
              під час консультації або в особистому листуванні.
            </p>

            <button
              type="submit"
              className="consultationButton"
              disabled={loading}
            >
              {loading ? "Надсилання..." : "Надіслати заявку"}
            </button>

            {status && (
              <p
                style={{
                  marginTop: "18px",
                  fontWeight: 600,
                  color: "#0F2D52",
                }}
              >
                {status}
              </p>
            )}

            <p className="consultationPrivacy">
              Натискаючи кнопку «Надіслати заявку»,
              Ви погоджуєтесь на обробку персональних
              даних відповідно до законодавства України.
            </p>

          </form>

        </div>
      </div>
    </section>
  );
}
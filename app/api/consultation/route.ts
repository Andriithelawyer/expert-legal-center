import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      phone,
      email,
      country,
      contact,
      topic,
      comment,
    } = data;

    const result = await resend.emails.send({
      from: "Expert Legal Center <onboarding@resend.dev>",
      to: ["a.s.popov.1@gmail.com"],

      subject: "Нова заявка з сайту Expert Legal Center",

      html: `
        <h2>Нова заявка</h2>

        <p><strong>Ім'я:</strong> ${name}</p>

        <p><strong>Телефон:</strong> ${phone}</p>

        <p><strong>Email:</strong> ${email || "-"}</p>

        <p><strong>Країна:</strong> ${country}</p>

        <p><strong>Спосіб зв'язку:</strong> ${contact}</p>

        <p><strong>Питання:</strong> ${topic}</p>

        <p><strong>Коментар:</strong></p>

        <p>${comment || "-"}</p>
      `,
    });

    if (result.error) {
      return NextResponse.json(
        {
          success: false,
          message: "Не вдалося надіслати повідомлення.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Сталася помилка під час надсилання повідомлення.",
      },
      {
        status: 500,
      }
    );
  }
}
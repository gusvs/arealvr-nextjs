import nodemailer from "nodemailer";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export async function sendMail(data) {
  const name = data?.name;
  const phone = data?.phone;
  const date = data?.date;
  const service = data?.service;
  const during = data?.during;
  const message = data?.message;
  const created = data?.created;

  const formattedBody = `
    <html lang="ru">
      <head>
      <title>${name} оставил заявку</title>
      </head>
      <body style="background-color:#fafafa;">
          <div style="padding:20px; font-size:24px;">
              <h3>Заявка с сайта arealvr.ru</h3>
              <p><span style="color:#555; font-weight:700;">Создана: </span>${created}</p>
              <p><span style="color:#555; font-weight:700;">Имя: </span>${name}</p>
              <p><span style="color:#555; font-weight:700;">Телефон: </span>${phone}</p>
              <p><span style="color:#555; font-weight:700;">Дата: </span>${date}</p>
              <p><span style="color:#555; font-weight:700;">Услуга: </span>${service}</p>
              <p><span style="color:#555; font-weight:700;">Продолжительность: </span>${during}</p>
              <p><span style="color:#555; font-weight:700;">Сообщение: </span>${message}</p>
          </div>
      </body>
    </html>
  `;

  const transporter = nodemailer.createTransport({
    // secure: true,
    host: process.env.TRANSPORTER_HOST,
    port: 465,
    auth: {
      user: process.env.HOTMAIL_USER,
      pass: process.env.HOTMAIL_PASS,
    },
  });

  return await transporter.sendMail({
    from: process.env.HOTMAIL_FROM,
    to: process.env.HOTMAIL_TO,
    subject: "Заявка с сайта",
    html: formattedBody,
  });
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default async function lead(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ message: "Разрешены только POST-запросы" });
  }

  const r2 = await sendMail({ ...req.body });
  if (r2?.messageId) {
    res.json({ ok: true });
  } else {
    res.json({ ok: false, message: "Сообщение не отправлено" });
  }
}
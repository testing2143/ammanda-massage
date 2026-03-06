import { NextResponse } from "next/server";

import { siteSettings } from "@/lib/constants";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildMailtoUrl({
  name,
  phone,
  email,
  message
}: {
  name: string;
  phone: string;
  email: string;
  message: string;
}) {
  const params = new URLSearchParams({
    subject: `Nieuwe aanvraag via website - ${name}`,
    body: [
      `Naam: ${name}`,
      `Telefoon: ${phone}`,
      `E-mail: ${email}`,
      "",
      "Bericht:",
      message
    ].join("\n")
  });

  return `mailto:${siteSettings.email}?${params.toString()}`;
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { message: "Het formulier kon niet worden verwerkt." },
      { status: 400 }
    );
  }

  const name = String(payload.name ?? "").trim();
  const phone = String(payload.phone ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const message = String(payload.message ?? "").trim();

  if (!name || !phone || !email || !message) {
    return NextResponse.json(
      { message: "Vul alle verplichte velden in." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Vul een geldig e-mailadres in." },
      { status: 400 }
    );
  }

  const subject = `Nieuwe aanvraag via website - ${name}`;
  const text = [
    `Naam: ${name}`,
    `Telefoon: ${phone}`,
    `E-mail: ${email}`,
    "",
    "Bericht:",
    message
  ].join("\n");

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL || siteSettings.email;

  if (!resendApiKey || !fromEmail) {
    return NextResponse.json({
      mode: "mailto",
      mailtoUrl: buildMailtoUrl({ name, phone, email, message }),
      message:
        "De website is nog niet gekoppeld aan een mailservice. Gebruik de knop 'Open e-mailapp' of neem direct telefonisch contact op."
    });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        text
      })
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          message:
            "Het bericht kon niet worden verzonden. Probeer het later opnieuw of neem telefonisch contact op."
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      mode: "sent",
      message: "Uw bericht is verzonden. Amanda neemt zo spoedig mogelijk contact met u op."
    });
  } catch {
    return NextResponse.json(
      {
        message:
          "Er ging iets mis bij het verzenden. Probeer het later opnieuw of neem telefonisch contact op."
      },
      { status: 500 }
    );
  }
}

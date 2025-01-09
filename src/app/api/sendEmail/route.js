import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
export async function POST(request) {
  try {
    const {
      fullName,
      LastName,
      Emaildata,
      Phonedata,
      Descriptiondata,
      formType,
    } = await request.json();

    const subject =
      formType === "getInTouch"
        ? "New Inquiry From Contact Us of the Royal Crown Website"
        : "New Inquiry From Royal Crown Website";

    const formMessage =
      formType === "getInTouch"
        ? "New Inquiry Form from the Contact Us section of the Royal Crown Website"
        : "New Inquiry Form from the Royal Crown Website";

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "jaykalariya.humbee@gmail.com",
        pass: "pmwzlpxmpwclboag",
        // pmwzlpxmpwclboag
      },
    });
    const logoPath = path.resolve("public", "royalcrownlogo.jpg");
    console.log("Logo Path:", logoPath);

    const mailOption = {
      from: "jaykalariya.humbee@gmail.com",
      to: "jaykalariya.humbee@gmail.com",
      subject: subject, // Use the dynamic subject based on the form type
      html: `
      <div style="border: 1px dashed #ccc; padding: 20px;">
      <img src="cid:logo" alt="Logo" style="max-width: 100%;" />
      <p>${formMessage}</p>
      <div style="border: 1px dashed black; padding: 20px;">
        <ul style="list-style-type: none; padding: 0; margin: 0;">
        <li><strong>First Name:</strong> ${fullName}</li><br /><br />
        <li><strong>LastName:</strong> ${LastName}</li> <br /><br />
        <li><strong>Email:</strong> ${Emaildata}</li> <br /><br />
        <li><strong>Phone No:</strong> ${Phonedata}</li><br /><br /> 
        <li><strong>Message:</strong> ${Descriptiondata}</li> <br />
        </ul>
        </div>
      </div>
        `,
      attachments: [
        {
          filename: "FinalHeaderLogo.svg",
          path: logoPath,
          cid: "logo",
        },
      ],
    };

    await transporter.sendMail(mailOption);

    console.log(mailOption);
    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}

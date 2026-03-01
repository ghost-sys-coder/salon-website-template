import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { db } from "@/db/dribble";
import { clientMessagesTable } from "@/db/schema";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: NextRequest){
    try {
        const { name, email, phone, message } = await request.json();
        
        if (!name || !email || !message) {
            return NextResponse.json({
                success: false,
                message: "Name, email and message are required!"
            }, { status: 404 });
        }

        const [result] = await db.insert(clientMessagesTable).values({
            name,
            email,
            phone,
            message
        }).returning();

        // send email to salon owner
        const { error: ownerError } = await resend.emails.send({
            from: "Salon Website <onboarding@resend.dev>",
            to: "juniorbeast177@gmail.com",
            subject: "New Client Inquiry",
            html: `
            <!DOCTYPE html>
                <html lang="en">
                <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>New Client Inquiry</title>
                <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Jost:wght@300;400&display=swap" rel="stylesheet">
                <style>
                    body { margin:0; padding:0; font-family: 'Jost', sans-serif; background:#0f0c09; color:#f8f4ee; }
                    .container { max-width:600px; margin:40px auto; background:#1a1714; border:1px solid #b8975a33; border-radius:8px; overflow:hidden; }
                    .header { background: linear-gradient(135deg, #1a1714 0%, #2c2824 100%); padding:40px 30px; text-align:center; border-bottom:1px solid #b8975a33; }
                    .header h1 { margin:0; font-family:'Cormorant Garamond', serif; font-weight:300; font-size:32px; color:#d4ae6e; letter-spacing:1px; }
                    .content { padding:40px 30px; line-height:1.7; font-size:15px; }
                    .label { color:#d4ae6e; font-weight:500; margin-right:8px; }
                    .message-box { background:#0f0c09; border-left:4px solid #b8975a; padding:20px; margin:20px 0; border-radius:4px; white-space:pre-wrap; }
                    .footer { text-align:center; padding:20px; font-size:13px; color:#9e9289; border-top:1px solid #b8975a33; }
                </style>
                </head>
                <body>
                <div class="container">
                    <div class="header">
                    <h1>New Client Inquiry</h1>
                    </div>

                    <div class="content">
                    <p>A new message was received from your website:</p>

                    <p><span class="label">Name:</span> ${name}</p>
                    <p><span class="label">Email:</span> ${email}</p>
                    ${phone ? `<p><span class="label">Phone:</span> ${phone}</p>` : ''}
                    
                    <div class="message-box">
                        <strong>Message:</strong><br><br>
                        ${message.replace(/\n/g, '<br>')}
                    </div>

                    <p style="margin-top:32px; text-align:center;">
                        <a href="mailto:${email}" style="color:#d4ae6e; text-decoration:none; border-bottom:1px solid #d4ae6e66; padding-bottom:2px;">
                        Reply to ${name}
                        </a>
                    </p>
                    </div>

                    <div class="footer">
                    Inspire Me • Hair Artistry<br>
                    Received on ${new Date().toLocaleString('en-US', { timeZone: 'Australia' })}
                    </div>
                </div>
                </body>
                </html>
            `,
        });

        if (ownerError) {
            console.error("Failed to deliver email to the owner:", ownerError);
            return NextResponse.json({
                success: false,
                message: (ownerError as Error).message || "Failed to deliver email alert!"
            }, { status: 403})
        }


        // Send Auto Reply to Sender
        const { error: clientError } = await resend.emails.send({
        from: "Luxury Salon <onboarding@resend.dev>",
        to: email,
        subject: "We received your message ✨",
        html: `
        <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Thank You – Inspire Me - Hair Artistry</title>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Jost:wght@300;400&display=swap" rel="stylesheet">
            <style>
                body { margin:0; padding:0; font-family:'Jost', sans-serif; background:#fdfaf6; color:#1a1714; }
                .container { max-width:600px; margin:40px auto; background:#ffffff; border:1px solid #ede8df; border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(184,151,90,0.08); }
                .header { background: linear-gradient(135deg, #1a1714 0%, #2c2824 100%); padding:50px 30px; text-align:center; }
                .header h1 { margin:0; font-family:'Cormorant Garamond', serif; font-weight:300; font-size:36px; color:#d4ae6e; letter-spacing:1.5px; }
                .content { padding:40px 30px; line-height:1.8; font-size:15.5px; color:#2c2824; }
                .highlight { color:#b8975a; font-weight:500; }
                .button { 
                display:inline-block; margin:24px 0; padding:14px 36px; 
                background:#1a1714; color:#f8f4ee; text-decoration:none; 
                border-radius:6px; font-weight:400; letter-spacing:0.8px; 
                transition: all 0.3s ease;
                }
                .button:hover { background:#b8975a; color:#0f0c09; }
                .footer { text-align:center; padding:30px; font-size:13px; color:#9e9289; background:#fdfaf6; border-top:1px solid #ede8df; }
            </style>
            </head>
            <body>
            <div class="container">
                <div class="header">
                <h1>Maison Élara</h1>
                </div>

                <div class="content">
                <p>Dear ${name},</p>

                <p>Thank you for getting in touch with us.</p>

                <p>We have received your message and our team will personally review it shortly. We aim to respond within <span class="highlight">24 hours</span>, often much sooner.</p>

                <p>If your inquiry is regarding booking an appointment, feel free to use our <a href="https://yourdomain.com/booking" style="color:#b8975a; text-decoration:none; border-bottom:1px solid #b8975a66;">online booking system</a> — it allows you to choose services, dates and times instantly.</p>

                <p>We look forward to welcoming you to Maison Élara soon.</p>

                <p style="margin-top:32px;">Warm regards,<br>
                <strong>The Inspire Me - Team</strong></p>

                <a href="https://yourdomain.com" class="button">Visit Our Website</a>
                </div>

                <div class="footer">
                Inspire Me • Hair Artistry<br>
                61 Errol Street, North Melbourne - <br>
                North Melbourne, VIC, Australia, 3051 <br>
                © ${new Date().getFullYear()} Maison Élara. All rights reserved.
                </div>
            </div>
            </body>
            </html>
        `,
        });

        if (clientError) {
            console.error("Failed to send email to client:", clientError);
            return NextResponse.json({
                success: false,
                message: (clientError as Error).message || "Failed to send email!"
            }, { status: 403});
        }


        return NextResponse.json({
            success: true,
            message: "Message sent successfully!",
            result
        }, { status: 201});
    } catch (error) {
        console.error("something went wrong!", error);
        return NextResponse.json({
            success: false,
            message: (error as Error).message || "Something went wrong: status: 500"
        }, { status: 500 });
    }
}
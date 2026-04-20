import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { buildActionPlan, labelFor, type QuizAnswers } from '@/lib/quiz-data';

const STRIPE_LINK = 'https://buy.stripe.com/8x27sM5BF3N6eO93CF0Fi08';
const PAUL_EMAIL = 'paul@pmconsulting.ca';
const FROM_EMAIL = 'Paul Meyers <paul@paulmeyers.ai>';

type QuizSubmission = {
  firstName: string;
  lastName: string;
  email: string;
  answers: QuizAnswers;
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildUserEmail(submission: QuizSubmission): { subject: string; html: string } {
  const plan = buildActionPlan(submission.answers);
  const firstName = escapeHtml(submission.firstName || 'there');

  const recsHtml = plan.recommendations
    .map(
      (r, i) => `
        <div style="margin: 24px 0; padding: 20px; background: #f7f8fb; border-radius: 12px; border-left: 4px solid #3b82f6;">
          <h3 style="margin: 0 0 8px 0; color: #0f172a; font-size: 18px;">${i + 1}. ${escapeHtml(r.title)}</h3>
          <p style="margin: 0 0 12px 0; color: #334155; line-height: 1.5;">${escapeHtml(r.why)}</p>
          <table style="width: 100%; font-size: 14px; color: #64748b;">
            <tr>
              <td style="padding: 4px 0;"><strong>Setup:</strong> ${escapeHtml(r.setup)}</td>
              <td style="padding: 4px 0; text-align: right;"><strong>Cost:</strong> ${escapeHtml(r.cost)}</td>
            </tr>
          </table>
        </div>
      `,
    )
    .join('');

  const subject = 'Your personalized AI action plan for contractors';

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><title>${subject}</title></head>
<body style="margin: 0; padding: 0; background: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="max-width: 620px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: white; border-radius: 16px; padding: 40px; box-shadow: 0 4px 24px rgba(0,0,0,0.06);">
      <p style="color: #3b82f6; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 8px 0; font-family: 'SF Mono', Monaco, monospace;">Your AI Action Plan</p>
      <h1 style="margin: 0 0 24px 0; color: #0f172a; font-size: 28px; line-height: 1.2;">Hey ${firstName}, here are your 3 quick wins.</h1>

      <p style="color: #334155; line-height: 1.6; font-size: 16px; margin: 0 0 16px 0;">${escapeHtml(plan.hook)}</p>
      <p style="color: #334155; line-height: 1.6; font-size: 16px; margin: 0 0 32px 0;">${escapeHtml(plan.challengeResponse)}</p>

      ${recsHtml}

      <div style="margin: 40px 0 24px 0; padding: 28px; background: linear-gradient(135deg, #1e3a8a, #3b82f6); border-radius: 16px; text-align: center;">
        <h2 style="margin: 0 0 12px 0; color: white; font-size: 22px;">Want the full report?</h2>
        <p style="color: #dbeafe; line-height: 1.5; margin: 0 0 20px 0;">The $997 AI Assessment includes a 45-minute deep-dive call, a custom Impact/Effort Matrix for your entire business, a 4-day implementation plan, financial ROI projections, and a 30-minute review call. Delivered in 48 hours.</p>
        <a href="${STRIPE_LINK}" style="display: inline-block; padding: 14px 32px; background: white; color: #1e3a8a; text-decoration: none; font-weight: 600; border-radius: 10px; font-size: 16px;">Get Your $997 Assessment</a>
      </div>

      <p style="color: #64748b; line-height: 1.6; font-size: 14px; margin: 24px 0 0 0;">
        Reply to this email if you have any questions. I answer every one personally.
      </p>

      <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e2e8f0;">
        <p style="color: #0f172a; font-weight: 600; margin: 0 0 4px 0;">Paul Meyers</p>
        <p style="color: #64748b; margin: 0 0 12px 0; font-size: 14px;">AI Solutions Architect</p>
        <p style="margin: 0; font-size: 13px; color: #64748b;">
          <a href="https://paulmeyers.ai" style="color: #3b82f6; text-decoration: none;">paulmeyers.ai</a>
          &nbsp;|&nbsp;
          <a href="tel:+17054912627" style="color: #3b82f6; text-decoration: none;">(705) 491-2627</a>
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;

  return { subject, html };
}

function buildInternalEmail(submission: QuizSubmission): { subject: string; html: string } {
  const rows = Object.entries(submission.answers)
    .map(
      ([qId, aId]) => `
        <tr>
          <td style="padding: 8px 12px; background: #f1f5f9; font-weight: 600; width: 35%;">${escapeHtml(qId)}</td>
          <td style="padding: 8px 12px;">${escapeHtml(labelFor(qId, aId))}</td>
        </tr>
      `,
    )
    .join('');

  const subject = `New AI quiz lead: ${submission.firstName} ${submission.lastName}`;

  const html = `<!DOCTYPE html>
<html><body style="font-family: -apple-system, sans-serif; padding: 20px;">
<h2>New AI Quiz Lead</h2>
<table style="border-collapse: collapse; width: 100%; max-width: 600px;">
  <tr><td style="padding: 8px 12px; background: #f1f5f9; font-weight: 600;">Name</td><td style="padding: 8px 12px;">${escapeHtml(submission.firstName)} ${escapeHtml(submission.lastName)}</td></tr>
  <tr><td style="padding: 8px 12px; background: #f1f5f9; font-weight: 600;">Email</td><td style="padding: 8px 12px;"><a href="mailto:${escapeHtml(submission.email)}">${escapeHtml(submission.email)}</a></td></tr>
  ${rows}
</table>
<p style="margin-top: 24px; color: #64748b; font-size: 14px;">Sent from paulmeyers.ai quiz.</p>
</body></html>`;

  return { subject, html };
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as QuizSubmission;

    if (!body.email || !body.firstName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const userEmail = buildUserEmail(body);
    const internalEmail = buildInternalEmail(body);

    const [userResult, internalResult] = await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: body.email,
        replyTo: PAUL_EMAIL,
        subject: userEmail.subject,
        html: userEmail.html,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: PAUL_EMAIL,
        replyTo: body.email,
        subject: internalEmail.subject,
        html: internalEmail.html,
      }),
    ]);

    if (userResult.error || internalResult.error) {
      console.error('Resend errors:', { user: userResult.error, internal: internalResult.error });
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Quiz submission error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

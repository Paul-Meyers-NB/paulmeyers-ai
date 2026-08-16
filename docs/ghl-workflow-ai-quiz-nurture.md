# GHL Workflow: AI Quiz → $997 Assessment Nurture

Drop-in spec for GoHighLevel Workflow AI. Two parts:
1. Natural-language prompt for GHL's Workflow AI generator
2. Manual-build spec if AI generation misses anything

---

## Part 1: Workflow AI Prompt (Paste This)

Paste the text below into GHL → Automation → Workflows → Create with AI:

```
Create a 4-email nurture workflow named "AI Quiz → $997 Assessment Nurture".

Trigger: When a new contact is created with source URL containing "/quiz" OR when tag "ai-quiz" is added to a contact.

Wait 2 minutes at the start so all custom fields finish populating from the form submission.

Then add tag "ai-quiz-nurture-active" and immediately send Email 1 (the action plan).

Wait 2 days. Exit the workflow if tag "paid-assessment" has been added. Otherwise send Email 2 (the follow-up check-in).

Wait 2 days. Exit if tag "paid-assessment" is present. Otherwise send Email 3 (case study).

Wait 3 days. Exit if tag "paid-assessment" is present. Otherwise send Email 4 (final nudge).

After Email 4, add tag "ai-quiz-nurture-complete" and end the workflow.

Every email should personalize with {{contact.first_name}} and include a link to
https://buy.stripe.com/8x27sM5BF3N6eO93CF0Fi08 for the $997 Assessment.
Sender name: Paul Meyers. Reply-to: paul@pmconsulting.ca.
```

GHL's AI will scaffold most of it. You will still need to paste the email copy from Part 3 below into each email step.

---

## Part 2: Manual Build Spec (Fallback)

If the AI scaffold is off, build manually:

### Trigger
- Type: **Contact Created**
- Filter: **Source** contains `/quiz` (matches submissions from paulmeyers.ai/quiz)
- Alternative trigger to add: **Contact Tag Added** where tag is `ai-quiz`

### Step 1: Wait
- Duration: 2 minutes
- Purpose: gives GHL time to finish syncing custom field values from the external tracking script

### Step 2: Add Tag
- Tag: `ai-quiz-nurture-active`

### Step 3: Send Email (Email 1 – Action Plan)
- See Part 3, Email 1 for subject and body
- From: Paul Meyers <paul@pmconsulting.ca>
- Reply-to: paul@pmconsulting.ca

### Step 4: Wait
- Duration: 2 days

### Step 5: If/Else – Exit if Paid
- Condition: contact has tag `paid-assessment`
- YES branch: Add tag `ai-quiz-converted`, end workflow
- NO branch: continue

### Step 6: Send Email (Email 2 – Check-In)

### Step 7: Wait 2 days → repeat exit-if-paid check → Send Email 3 (Case Study)

### Step 8: Wait 3 days → repeat exit-if-paid check → Send Email 4 (Final Nudge)

### Step 9: Add Tag
- Tag: `ai-quiz-nurture-complete`

---

## Part 3: Email Copy (Paste Into Each Step)

Custom fields referenced: `{{contact.first_name}}`, `{{contact.custom_field.time_sink}}`, `{{contact.custom_field.challenge}}`, `{{contact.custom_field.outcome}}`.

If the custom field merge syntax in your GHL account is different (sometimes it's `{{custom_values.time_sink}}`), swap the prefix but keep the field names.

---

### Email 1 — Action Plan (Day 0, sent immediately)

**Subject:** Your 3 AI quick wins are ready, {{contact.first_name}}

**Body:**

Hey {{contact.first_name}},

Thanks for taking the AI Readiness Quiz. Based on your answers, I pulled the 3 specific tools that will return the most hours to your week this month.

Your personalized plan is here:
https://paulmeyers.ai/quiz/thank-you?firstName={{contact.first_name}}&time_sink={{contact.custom_field.time_sink}}&challenge={{contact.custom_field.challenge}}&outcome={{contact.custom_field.outcome}}

Each recommendation includes the tool, what it solves in your business, setup time, monthly cost, and the specific hours-per-week payback. Most contractors knock out the first one in under 30 minutes.

If you want me to do the whole thing FOR you — map every opportunity in your business on an Impact vs. Effort Matrix, hand you a 4-day implementation plan, and hop on a 30-minute review call 48 hours later — the $997 AI Assessment is the move:

Get your $997 Assessment → https://buy.stripe.com/8x27sM5BF3N6eO93CF0Fi08

Reply to this email with any questions. I answer every one personally.

Paul Meyers
AI Solutions Architect | PM Consulting Inc.
(705) 491-2627 | paulmeyers.ai

---

### Email 2 — Check-In (Day 2)

**Subject:** Did you try one yet, {{contact.first_name}}?

**Body:**

Hey {{contact.first_name}},

Two days ago I sent you 3 AI quick wins tailored to your business. Quick question:

Did you install any of them?

If yes → which one, and what was the result? I collect these to improve the quiz.

If no → what got in the way? Most common answers I hear: "I forgot", "I got busy", or "I wasn't sure which one to start with."

If it's that last one, here's the shortcut: start with the first recommendation on your list. It is the highest-impact lowest-effort one. Every time.

If you want me to install all 3 FOR you plus map the bigger opportunities in your business on an Impact vs. Effort Matrix, the $997 Assessment is the path:

https://buy.stripe.com/8x27sM5BF3N6eO93CF0Fi08

Paul
paulmeyers.ai

---

### Email 3 — Case Study (Day 4)

**Subject:** The contractor who reclaimed 12 hours/week with one automation

**Body:**

Hey {{contact.first_name}},

Quick story.

A contractor I work with was drowning in quote follow-up. Every estimate took 2 hours to write, then he spent another hour/week chasing signatures. 15 estimates a month = 45 hours. One full work week, every month, lost to quoting admin.

We installed 2 tools in one afternoon:

1. A custom GPT trained on his pricing and scope language (turns a 10-minute site walk into a clean written quote in 3 minutes)
2. DocuSign + Stripe integration so he sends the quote, collects the signature, and takes the deposit in one link.

Result: 12 hours per week back. Closes 2 days faster on average. Deposit rate went from ~60% to ~90% because buyers do not bounce to "I will think about it."

Cost to set up: $997 Assessment + ~$35/month in tools.

Your situation is probably different, but the math is usually the same. You spend 10+ hours a week on the same task. A $35/month tool plus one afternoon of setup knocks out 80% of it.

If you want me to map what that looks like in YOUR business, book the Assessment here:

https://buy.stripe.com/8x27sM5BF3N6eO93CF0Fi08

Paul
paulmeyers.ai

---

### Email 4 — Final Nudge (Day 7)

**Subject:** Last one on the $997 Assessment, {{contact.first_name}}

**Body:**

Hey {{contact.first_name}},

This is my last email about the AI Assessment. If it is not a fit right now, no worries. I will leave you with the 3 quick wins I sent on Day 1 and let you run with them.

If it IS a fit, here is the summary:

- 45-minute deep-dive call where we map every time leak in your business
- Custom report delivered in 48 hours with Impact vs. Effort Matrix, 4-day implementation plan, and exact dollar value of hours reclaimed
- 30-minute review call to walk through it together
- Flat $997. No upsell pressure.

Get your $997 Assessment → https://buy.stripe.com/8x27sM5BF3N6eO93CF0Fi08

One last thing: if you are not buying, I'd love to know why. Reply with 1 sentence: what stopped you? It tells me how to improve this for the next contractor.

Paul
paulmeyers.ai

---

## Part 4: Loose Ends

### Adding the `paid-assessment` tag automatically

The exit-if-paid check only works if something tags converters. Options:

1. **Stripe → GHL webhook** (best): Stripe sends `checkout.session.completed` event → webhook URL in GHL → workflow that tags the matching contact. Requires a bit of setup in Stripe + a GHL inbound webhook URL.

2. **Zapier** (easiest): Stripe trigger → GHL "Add Tag to Contact" action. 5 minutes, Zapier charges ~$20/month.

3. **Manual** (shipping fastest): Paul tags new $997 customers by hand after the call. Works for <5 conversions/week.

Ship manual first. Upgrade to Stripe webhook after 10+ conversions.

### Custom field merge syntax

GHL sometimes uses `{{contact.custom_field.time_sink}}`, sometimes `{{custom_values.time_sink}}`, sometimes the display name. Test Email 1 to yourself first and check the thank-you-page URL renders correctly. If the custom fields show as literal text instead of values, the syntax is wrong — swap to the correct form GHL shows in its merge-tag picker.

### If you want per-branch email copy later

Part 3 above is generic (one email per step, same copy for everyone). If you want per-`time_sink` personalization in the emails themselves:

1. Before each Send Email step, add an If/Else splitting on `{{contact.custom_field.time_sink}}` value
2. Build 4 email variants (one per slug: `phone_followup`, `quoting`, `marketing`, `admin`)
3. Route each branch to its matching email

But the thank-you page already handles per-answer personalization, so this is optional. Start with the generic emails, measure open and click rates, upgrade to branched templates only if CTR is below 15%.

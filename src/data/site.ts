// Central content file — non-technical edits happen here.
// [PLACEHOLDER] markers show what still needs real copy from Angie.

export const BOOKING_URL = "https://app.acuityscheduling.com/schedule.php?owner=40285797";

const whatsappNumber = "+49 176 13677449";

export const contact = {
  whatsapp: whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`,
  email: "hi@bloom-balance.info",
  city: "Freiburg",
  instagram: "https://instagram.com/bloom.balance.de",
};

export const languages = "English, German & Russian";

export const navLinks = [
  { label: "Meet Angie", href: "/#meet-angie" },
  { label: "Philosophy", href: "/#philosophy" },
  { label: "What to Expect", href: "/#expect" },
  { label: "Services", href: "/#services" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#booking" },
];

const ACUITY = "https://app.acuityscheduling.com/schedule/a8cadd27/appointment";

export const services = [
  {
    name: "Initial consultation & bespoke bodywork session",
    options: [{ duration: "90 min", price: "150 €", href: `${ACUITY}/97783045/calendar/14510928` }],
  },
  {
    name: "Follow-up bodywork session",
    options: [
      { duration: "45 min", price: "75 €", href: `${ACUITY}/97795172/calendar/14510928` },
      { duration: "60 min", price: "100 €", href: `${ACUITY}/97795093/calendar/14510928` },
      { duration: "75 min", price: "125 €", href: `${ACUITY}/97795017/calendar/14510928` },
    ],
  },
  {
    name: "Buccal massage focus session",
    options: [{ duration: "30 min", price: "50 €", href: `${ACUITY}/97795459/calendar/14510928` }],
  },
  {
    name: "Head, neck and shoulder focus session",
    options: [{ duration: "30 min", price: "50 €", href: `${ACUITY}/97795887/calendar/14510928` }],
  },
  {
    name: "Baby Massage",
    options: [{ duration: "30 min", price: "60 €", href: `${ACUITY}/97914126/calendar/14510928` }],
  },
];

export const steps = [
  {
    title: "Arrival and Wellness Consultation",
    body: "We will discuss your wellbeing questionnaire and personal preferences to help me tailor the session to your goals and wishes.",
  },
  {
    title: "Body Check",
    body: "I will observe your posture and movement patterns.",
  },
  {
    title: "Body Work",
    body: "This will include a selection of gentle techniques, designed to create a restorative experience and encourage a mindful connection with your body.",
  },
  {
    title: "Head and Neck",
    body: "This part of your session may incorporate Scalp, Facial and Buccal massage techniques, to promote a glowing appearance.",
  },
];

export const aftercareDisclaimer =
  "Please note that I am not a medical practitioner, nor a cosmetologist. My services are offered within the scope of wellness and are not intended to provide skin analysis, medical advice, diagnosis, or treatment for pre-existing conditions and pain-related symptoms.";

export const babySession = {
  tagline: "A gentle bodywork session to promote calm, comfort and connection.",
  paragraphs: [
    "With my background in paediatric osteopathy, I have developed a deep understanding of the gentle and sensitive nature of working with babies. I bring this knowledge and experience into my baby massage sessions.",
    "I work without oils, instead using soft tissue techniques and very gentle mobilisations across the whole body, always following your baby's cues and allowing plenty of time to pause, settle, feed or cuddle whenever needed.",
    "Babies can be welcomed from the early weeks after birth, provided they are well and have no underlying health concerns.",
  ],
  disclaimer:
    "This is a wellness and relaxation treatment and does not replace medical or osteopathic care. If your baby has any health concerns, please consult an appropriate healthcare professional before booking.",
};

export const faqs = [
  {
    q: "Payment",
    a: [
      "Treatment costs can be prepaid by card when booking online.",
      "Alternatively, payment can be made by cash or PayPal after your session.",
      "Card payments are not available on-site.",
      "Please note that all sessions are offered for wellness, relaxation, and aesthetic purposes and are not eligible for reimbursement by healthcare insurance providers.",
    ],
  },
  {
    q: "Rebooking & Cancellation",
    a: [
      "You can reschedule or cancel your appointment free of charge up to 24 hours in advance.",
    ],
  },
  {
    q: "No-Show",
    a: ["Missed appointments or late cancellations will be charged in full."],
  },
  {
    q: "Pregnancy",
    a: [
      "If you are pregnant, please consult with your healthcare provider before booking a session. Many people enjoy gentle wellness treatments during pregnancy, but every pregnancy is unique and your individual circumstances should always be considered.",
      "Please let me know if you are pregnant or recently postpartum so that the session can be adapted accordingly and your comfort remains the priority.",
    ],
  },
];

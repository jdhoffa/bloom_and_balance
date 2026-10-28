// Central content file — non-technical edits happen here.

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
  { label: "Meet Angie", href: "/en#meet-angie" },
  { label: "Philosophy", href: "/en#philosophy" },
  { label: "What to Expect", href: "/en#expect" },
  { label: "Services", href: "/en#services" },
  { label: "FAQ", href: "/en#faq" },
  { label: "Contact", href: "/en#booking" },
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
    name: "Kobido massage",
    options: [
      {
        duration: "60 min",
        price: "100 €",
        href: "https://app.acuityscheduling.com/schedule.php?owner=40285797&appointmentType=99131492",
      },
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
    body: "This part of your session may incorporate Scalp, Kobido and Buccal massage techniques, to promote a glowing appearance.",
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

type FaqAnswer = string | { type: "list"; items: string[] };

export const faqs: { q: string; a: FaqAnswer[] }[] = [
  {
    q: "Is parking available?",
    a: [
      "There is no free parking available on the premises. Please plan your journey in advance and allow extra time to find suitable parking nearby.",
    ],
  },
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
  {
    q: "How should I prepare for my facial or buccal massage?",
    a: [
      "Please arrive with a clean face, free of makeup, to ensure the best possible experience during your facial or buccal massage.",
    ],
  },
  {
    q: "When should I avoid a Kobido facial treatment?",
    a: [
      "For your safety, Kobido facial massage may not be suitable in certain circumstances. Please inform me before your appointment if any of the following apply:",
      {
        type: "list",
        items: [
          "Contagious skin infections or active skin inflammation",
          "Open wounds, cuts, or unhealed skin damage on the face, neck, or décolletage",
          "Active herpes or cold sore outbreaks",
          "Fever or an active contagious illness, such as the flu or a severe cold",
          "Active inflammatory acne, as mechanical pressure may aggravate breakouts",
          "Recent facial, dental, or surgical procedures",
          "Recent aesthetic treatments, including Botox, dermal fillers, thread lifts, or laser treatments — please allow the recommended recovery period (generally 2–8 weeks) and follow your practitioner's advice",
          "Cancer or ongoing cancer treatment, unless cleared with written consent from your treating physician",
        ],
      },
      "If you are unsure whether a treatment is suitable for you, please get in touch before booking.",
    ],
  },
  {
    q: "When should I avoid a buccal massage?",
    a: [
      "Buccal massage may be contraindicated in the presence of certain oral health conditions or following recent procedures involving the mouth or jaw. These include:",
      {
        type: "list",
        items: [
          "Active oral infections or inflammation",
          "Active herpes, cold sore outbreaks, or other contagious conditions affecting the mouth",
          "Open wounds, sores, or unhealed tissue inside the mouth",
          "Recent dental treatment, oral surgery, or other procedures involving the mouth or jaw",
        ],
      },
      "Please inform me of any relevant oral health concerns before your appointment. If you are recovering from dental work or oral surgery, please follow your doctor's advice before booking a session.",
    ],
  },
];

export const navLinksDE = [
  { label: "über mich", href: "/#meet-angie" },
  { label: "Philosophie", href: "/#philosophy" },
  { label: "Ihre Sitzung", href: "/#expect" },
  { label: "Behandlungen", href: "/#services" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontakt", href: "/#booking" },
];

export const stepsDE = [
  {
    title: "Ankunft und Wellness-Beratung",
    body: "Wir werden Ihren Fragebogen zum Wohlbefinden und Ihre persönlichen Vorlieben besprechen, damit ich die Sitzung genau auf Ihre Ziele und Wünsche abstimmen kann.",
  },
  {
    title: "Body Check",
    body: "Ich werde Ihre Körperhaltung und Ihre Bewegungsmuster beobachten.",
  },
  {
    title: "Body Work",
    body: "Der Behandlungsteil der Sitzung umfasst eine Auswahl sanfter Techniken, die darauf abzielen, ein regenerierendes Erlebnis zu schaffen und eine achtsame Verbindung zu Ihrem Körper zu fördern.",
  },
  {
    title: "Kopf und Nacken",
    body: "Dieser Teil Ihrer Sitzung kann Kopfhaut-, Kobido- und Bukkalmassagetechniken umfassen, um ein strahlendes Aussehen zu fördern.",
  },
];

export const aftercareDisclaimerDE =
  "Bitte beachten Sie, dass ich weder Ärztin noch Kosmetikerin bin. Meine Dienstleistungen werden im Rahmen der Wellness angeboten und dienen nicht der Hautanalyse, der medizinischen Beratung, der Diagnose oder der Behandlung bereits bestehender Erkrankungen und schmerzbezogener Symptome.";

export const babySessionDE = {
  tagline: "Eine sanfte Körperbehandlung, die Ruhe, Wohlbefinden und Verbundenheit fördert.",
  paragraphs: [
    "Durch meine Ausbildung in pädiatrischer Osteopathie habe ich ein tiefes Verständnis für die sanfte und einfühlsame Art der Arbeit mit Babys entwickelt. Dieses Wissen und diese Erfahrung bringe ich in meine Babymassagen ein.",
    "Ich arbeite ohne Öle, sondern wende Weichteiltechniken und sehr sanfte Mobilisationstechniken am ganzen Körper an. Dabei orientiere ich mich stets an den Signalen Ihres Babys und lasse viel Zeit für Pausen, zum Beruhigen, Stillen oder Kuscheln, wann immer dies nötig ist.",
    "Babys können bereits in den ersten Wochen nach der Geburt zu mir kommen, vorausgesetzt, es geht ihnen gut und sie haben keine gesundheitlichen Vorerkrankungen.",
  ],
  disclaimer:
    "Hierbei handelt es sich um eine Wellness- und Entspannungsbehandlung, die keine medizinische oder osteopathische Behandlung ersetzt. Sollte Ihr Baby gesundheitliche Probleme haben, konsultieren Sie bitte vor der Buchung einen geeigneten Arzt oder Therapeuten.",
};

export const servicesDE = services.map((s, i) => ({
  ...s,
  name: [
    "Erstberatung & bespoke Bodywork Sitzung",
    "Folgebehandlung",
    "Kobido-Massage (Gesichtsmodellierung)",
    "Buccal-Massage Fokus-Sitzung",
    "Kopf, Nacken und Schultern Fokus-Sitzung",
    "Babymassage",
  ][i]!,
}));

export const faqsDE: { q: string; a: FaqAnswer[] }[] = [
  {
    q: "Gibt es Parkmöglichkeiten?",
    a: [
      "Auf dem Gelände stehen keine kostenlosen Parkplätze zur Verfügung. Bitte planen Sie Ihre Anreise im Voraus und rechnen Sie etwas mehr Zeit ein, um in der Nähe einen geeigneten Parkplatz zu finden.",
    ],
  },
  {
    q: "Bezahlung",
    a: [
      "Die Behandlungskosten können bei der Online-Buchung per Karte im Voraus bezahlt werden.",
      "Alternativ können Sie nach Ihrer Sitzung bar oder per PayPal bezahlen.",
      "Kartenzahlungen sind vor Ort nicht möglich.",
      "Bitte beachten Sie, dass alle Sitzungen zu Wellness-, Entspannungs- und ästhetischen Zwecken angeboten werden und nicht von Krankenkassen oder privaten Versicherungen erstattet werden.",
    ],
  },
  {
    q: "Terminverschiebung und Stornierung",
    a: [
      "Sie können Ihren Termin bis zu 24 Stunden im Voraus kostenlos verschieben oder stornieren.",
    ],
  },
  {
    q: "Nichterscheinen",
    a: ["Versäumte Termine oder verspätete Stornierungen werden in voller Höhe in Rechnung gestellt."],
  },
  {
    q: "Schwangerschaft",
    a: [
      "Wenn Sie schwanger sind, sprechen Sie bitte vor der Buchung eines Termins mit Ihrem Arzt oder Ihrer Ärztin. Viele Frauen genießen sanfte Wellness-Behandlungen während der Schwangerschaft, doch jede Schwangerschaft ist einzigartig, und Ihre individuellen Umstände sollten stets berücksichtigt werden.",
      "Bitte teilen Sie mir mit, wenn Sie schwanger sind oder vor kurzem entbunden haben, damit der Termin entsprechend angepasst werden kann und Ihr Wohlbefinden stets im Vordergrund steht.",
    ],
  },
  {
    q: "Wie sollte ich mich auf meine Gesichts- oder Bukkalmassage vorbereiten?",
    a: [
      "Bitte kommen Sie mit einem sauberen, schminkfreien Gesicht, um das bestmögliche Erlebnis während Ihrer Gesichts- oder Bukkalmassage zu gewährleisten.",
    ],
  },
  {
    q: "Wann sollte ich auf eine Kobido-Gesichtsbehandlung verzichten?",
    a: [
      "Zu Ihrer Sicherheit ist die Kobido-Gesichtsmassage unter bestimmten Umständen möglicherweise nicht geeignet. Bitte informieren Sie mich vor Ihrem Termin, falls einer der folgenden Punkte auf Sie zutrifft:",
      {
        type: "list",
        items: [
          "Ansteckende Hautinfektionen oder aktive Hautentzündungen",
          "Offene Wunden, Schnitte oder nicht verheilte Hautverletzungen im Gesicht, am Hals oder am Dekolleté",
          "Aktive Herpes- oder Fieberbläschenausbrüche",
          "Fieber oder eine aktive ansteckende Erkrankung, wie z.\u00a0B. Grippe oder eine schwere Erkältung",
          "Aktive entzündliche Akne, da mechanischer Druck Hautunreinheiten verschlimmern kann",
          "Kürzlich durchgeführte Gesichts-, Zahn- oder chirurgische Eingriffe",
          "Kürzlich durchgeführte ästhetische Behandlungen, einschließlich Botox, Hautfüller, Fadenlifting oder Laserbehandlungen – bitte warten Sie die empfohlene Erholungsphase ab (in der Regel 2–8 Wochen, je nach Eingriff) und befolgen Sie die Anweisungen Ihres behandelnden Arztes",
          "Krebserkrankung oder laufende Krebsbehandlung, sofern keine schriftliche Einwilligung Ihres behandelnden Arztes vorliegt",
        ],
      },
      "Wenn Sie sich nicht sicher sind, ob eine Behandlung für Sie geeignet ist, nehmen Sie bitte vor der Buchung Kontakt auf.",
    ],
  },
  {
    q: "Wann sollte ich auf eine Bukkalmassage verzichten?",
    a: [
      "Eine intraorale Bukkalmassage kann bei bestimmten Erkrankungen der Mundhöhle oder nach kürzlich durchgeführten Eingriffen im Mund- oder Kieferbereich kontraindiziert sein. Dazu gehören:",
      {
        type: "list",
        items: [
          "Aktive Infektionen oder Entzündungen im Mundraum",
          "Aktive Herpes- oder Fieberbläschenausbrüche sowie andere ansteckende Erkrankungen im Mundraum",
          "Offene Wunden, Geschwüre oder noch nicht verheilte Stellen im Mundraum",
          "Kürzlich durchgeführte zahnärztliche Behandlungen, oralchirurgische Eingriffe oder andere Eingriffe im Mund- oder Kieferbereich",
        ],
      },
      "Bitte informieren Sie mich vor Ihrem Termin über relevante Probleme im Bereich der Mundgesundheit. Wenn Sie sich von einer zahnärztlichen Behandlung oder einem oralchirurgischen Eingriff erholen, befolgen Sie bitte die Anweisungen Ihres Arztes, bevor Sie einen Termin vereinbaren.",
    ],
  },
];

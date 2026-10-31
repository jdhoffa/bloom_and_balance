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
    q: "Is free parking available?",
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
          "Open wounds or unhealed skin damage on the face, neck, or décolletage",
          "Active herpes or cold sores",
          "Fever or an active contagious illness",
          "Active inflammatory acne",
          "Recent facial, dental, or surgical procedures",
          "Recent aesthetic treatments, including Botox, dermal fillers, thread lifts, or laser treatments (please allow the recommended recovery period and follow your practitioner's advice)",
          "Cancer or ongoing cancer treatment, unless cleared by your treating physician",
        ],
      },
    ],
  },
  {
    q: "When should I avoid a buccal massage?",
    a: [
      "Buccal massage is not recommended in the following cases:",
      {
        type: "list",
        items: [
          "Active oral infections or inflammation",
          "Active herpes, cold sores, or other contagious oral conditions",
          "Open wounds, sores, or unhealed tissue inside the mouth",
          "Recent dental treatment or oral surgery",
        ],
      },
      "Please inform me of any relevant concerns before your appointment and follow your doctor's advice after dental work or oral surgery.",
    ],
  },
];

export const navLinksDE = [
  { label: "Über mich", href: "/#meet-angie" },
  { label: "Philosophie", href: "/#philosophy" },
  { label: "Deine Sitzung", href: "/#expect" },
  { label: "Behandlungen", href: "/#services" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontakt", href: "/#booking" },
];

export const stepsDE = [
  {
    title: "Ankunft und Wellness-Beratung",
    body: "Wir werden deinen Fragebogen zum Wohlbefinden und deine persönlichen Vorlieben besprechen, damit ich die Sitzung genau auf deine Ziele und Wünsche abstimmen kann.",
  },
  {
    title: "Body Check",
    body: "Ich werde deine Körperhaltung und deine Bewegungsmuster beobachten.",
  },
  {
    title: "Body Work",
    body: "Der Behandlungsteil der Sitzung umfasst eine Auswahl sanfter Techniken, die darauf abzielen, ein regenerierendes Erlebnis zu schaffen und eine achtsame Verbindung zu deinem Körper zu fördern.",
  },
  {
    title: "Kopf und Nacken",
    body: "Dieser Teil deiner Sitzung kann Kopfhaut-, Kobido- und Bukkalmassagetechniken umfassen, um ein strahlendes Aussehen zu fördern.",
  },
];

export const aftercareDisclaimerDE =
  "Bitte beachte, dass ich weder Ärztin noch Kosmetikerin bin. Meine Dienstleistungen werden im Rahmen der Wellness angeboten und dienen nicht der Hautanalyse, der medizinischen Beratung, der Diagnose oder der Behandlung bereits bestehender Erkrankungen und schmerzbezogener Symptome.";

export const babySessionDE = {
  tagline: "Eine sanfte Körperbehandlung, die Ruhe, Wohlbefinden und Verbundenheit fördert.",
  paragraphs: [
    "Durch meine Ausbildung in pädiatrischer Osteopathie habe ich ein tiefes Verständnis für die sanfte und einfühlsame Art der Arbeit mit Babys entwickelt. Dieses Wissen und diese Erfahrung bringe ich in meine Babymassagen ein.",
    "Ich arbeite ohne Öle, sondern wende Weichteiltechniken und sehr sanfte Mobilisationstechniken am ganzen Körper an. Dabei orientiere ich mich stets an den Signalen deines Babys und lasse viel Zeit für Pausen, zum Beruhigen, Stillen oder Kuscheln, wann immer dies nötig ist.",
    "Babys können bereits in den ersten Wochen nach der Geburt zu mir kommen, vorausgesetzt, es geht ihnen gut und sie haben keine gesundheitlichen Vorerkrankungen.",
  ],
  disclaimer:
    "Hierbei handelt es sich um eine Wellness- und Entspannungsbehandlung, die keine medizinische oder osteopathische Behandlung ersetzt. Sollte dein Baby gesundheitliche Probleme haben, konsultiere bitte vor der Buchung einen geeigneten Arzt oder Therapeuten.",
};

export const servicesDE = services.map((s, i) => ({
  ...s,
  name: [
    "Erstberatung & bespoke Bodywork Sitzung",
    "Folgebehandlung",
    "Kobido-Massage (Gesichtsmodellierung)",
    "Bukkalmassage Fokus-Sitzung",
    "Kopf, Nacken und Schultern Fokus-Sitzung",
    "Babymassage",
  ][i]!,
}));

export const faqsDE: { q: string; a: FaqAnswer[] }[] = [
  {
    q: "Gibt es kostenlose Parkmöglichkeiten?",
    a: [
      "Auf dem Gelände stehen keine kostenlosen Parkplätze zur Verfügung. Bitte planen Sie Ihre Anreise im Voraus und rechnen Sie etwas mehr Zeit ein, um in der Nähe einen geeigneten Parkplatz zu finden.",
    ],
  },
  {
    q: "Bezahlung",
    a: [
      "Die Behandlungskosten können bei der Online-Buchung mit Karte im Voraus bezahlt werden.",
      "Alternativ kannst du nach deiner Sitzung bar oder per PayPal bezahlen.",
      "Kartenzahlungen sind vor Ort nicht möglich.",
      "Bitte beachte, dass alle Sitzungen zu Wellness-, Entspannungs- und ästhetischen Zwecken angeboten werden und nicht von Krankenkassen oder privaten Versicherungen erstattet werden.",
    ],
  },
  {
    q: "Terminverschiebung und Stornierung",
    a: [
      "Du kannst deinen Termin bis zu 24 Stunden im Voraus kostenlos verschieben oder stornieren.",
    ],
  },
  {
    q: "Nichterscheinen",
    a: ["Versäumte Termine oder verspätete Stornierungen werden in voller Höhe in Rechnung gestellt."],
  },
  {
    q: "Schwangerschaft",
    a: [
      "Wenn du schwanger bist, sprich bitte vor der Buchung eines Termins mit deinem Arzt oder deiner Ärztin. Viele Frauen genießen sanfte Wellness-Behandlungen während der Schwangerschaft, doch jede Schwangerschaft ist einzigartig, und deine individuellen Umstände sollten stets berücksichtigt werden.",
      "Bitte teile mir mit, wenn du schwanger bist oder vor kurzem entbunden hast, damit der Termin entsprechend angepasst werden kann und dein Wohlbefinden stets im Vordergrund steht.",
    ],
  },
  {
    q: "Wie sollte ich mich auf meine Gesichts- oder Bukkalmassage vorbereiten?",
    a: [
      "Bitte komm mit einem sauberen, umgeschminkten Gesicht, um das bestmögliche Erlebnis während deiner Gesichts- oder Bukkalmassage zu gewährleisten.",
    ],
  },
  {
    q: "Wann sollte ich auf eine Kobido-Gesichtsbehandlung verzichten?",
    a: [
      "Zu deiner Sicherheit ist eine Kobido-Gesichtsmassage in bestimmten Situationen möglicherweise nicht geeignet. Bitte informiere mich vor deinem Termin, wenn einer der folgenden Punkte auf dich zutrifft:",
      {
        type: "list",
        items: [
          "Ansteckende Hautinfektionen oder akute Hautentzündungen",
          "Offene Wunden oder nicht verheilte Hautverletzungen im Gesicht, am Hals oder im Dekolleté",
          "Aktiver Herpes oder Lippenbläschen",
          "Fieber oder eine akute ansteckende Erkrankung",
          "Aktive entzündliche Akne",
          "Kürzlich durchgeführte Gesichtsbehandlungen, zahnmedizinische Eingriffe oder Operationen",
          "Kürzlich durchgeführte ästhetische Behandlungen, einschließlich Botox, Dermal Filler, Fadenlifting oder Laserbehandlungen (bitte halte die empfohlene Erholungszeit ein und befolge die Empfehlungen deiner behandelnden Fachperson)",
          "Krebserkrankungen oder laufende Krebsbehandlungen, sofern keine ärztliche Freigabe vorliegt",
        ],
      },
    ],
  },
  {
    q: "Wann sollte ich auf eine Bukkalmassage verzichten?",
    a: [
      "Eine Bukkal-Massage ist in folgenden Fällen nicht empfohlen:",
      {
        type: "list",
        items: [
          "Aktive Infektionen oder Entzündungen im Mundraum",
          "Aktiver Herpes, Lippenbläschen oder andere ansteckende Erkrankungen im Mundbereich",
          "Offene Wunden, Geschwüre oder nicht verheilte Gewebeverletzungen im Mund",
          "Kürzlich durchgeführte Zahnbehandlungen oder oralchirurgische Eingriffe",
        ],
      },
      "Bitte informiere mich vor deinem Termin über relevante Beschwerden und befolge nach Zahnbehandlungen oder oralchirurgischen Eingriffen die Empfehlungen deines behandelnden Arztes.",
    ],
  },
];

type ImpressumLang = {
  title: string;
  intro: string[];
  tmgHeader: string;
  contactLabel: string;
  emailLabel: string;
  copyright: { title: string; paragraphs: string[] };
};

export const impressum: {
  entity: string[];
  email: string;
  de: ImpressumLang;
  en: ImpressumLang;
} = {
  entity: [
    "Angelina Sukhareva — Bloom & Balance",
    "Hamsa Studio, Hildastraße 17, 79102 Freiburg im Breisgau",
  ],
  email: "hi@bloom-balance.info",
  de: {
    title: "Impressum",
    intro: [],
    tmgHeader: "Angaben gemäß § 5 TMG:",
    contactLabel: "Kontakt:",
    emailLabel: "E-Mail:",
    copyright: {
      title: "Urheberrecht",
      paragraphs: [
        "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
        "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
      ],
    },
  },
  en: {
    title: "Legal Notice",
    intro: [
      "This English version is a non-binding translation. The legally binding version is the German original.",
    ],
    tmgHeader: "Information pursuant to § 5 TMG (German Telemedia Act):",
    contactLabel: "Contact:",
    emailLabel: "Email:",
    copyright: {
      title: "Copyright",
      paragraphs: [
        "The content and works created by the website operators on these pages are subject to German copyright law. Reproduction, processing, distribution, and any form of exploitation beyond the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this page are permitted only for private, non-commercial use.",
        "Where content on this site has not been created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please notify us accordingly. Upon notification of any legal violations, we will remove such content immediately.",
      ],
    },
  },
};

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "h"; text: string }
  | { type: "address"; lines: string[] }
  | { type: "link"; label: string; url: string };

type DatenschutzSection = { title: string; blocks: LegalBlock[] };
type DatenschutzLang = {
  title: string;
  lastUpdated: string;
  intro: string[];
  sections: DatenschutzSection[];
};

export const datenschutz: { de: DatenschutzLang; en: DatenschutzLang } = {
  de: {
    title: "Datenschutzerklärung",
    lastUpdated: "Stand: 3. September 2026",
    intro: [],
    sections: [
      {
        title: "1. Allgemeine Informationen",
        blocks: [
          {
            type: "p",
            text: "Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Ihre personenbezogenen Daten werden im Einklang mit den geltenden Datenschutzvorschriften verarbeitet, insbesondere der Datenschutz-Grundverordnung (DSGVO) sowie den anwendbaren deutschen Datenschutzgesetzen.",
          },
          {
            type: "p",
            text: "Diese Datenschutzerklärung erläutert, welche personenbezogenen Daten verarbeitet werden können, wenn Sie die Website von Bloom & Balance besuchen, die Online-Terminbuchung nutzen, uns kontaktieren oder Links zu externen Diensten verwenden.",
          },
          { type: "p", text: "Diese Datenschutzerklärung gilt für die Website:" },
          { type: "p", text: "bloom-balance-wellness.com" },
          {
            type: "p",
            text: "Wenn Sie über unsere Website Links zu externen Websites oder Diensten aufrufen, richtet sich die Verarbeitung Ihrer personenbezogenen Daten auf diesen externen Plattformen nach den jeweiligen Datenschutzerklärungen der dort verantwortlichen Anbieter.",
          },
        ],
      },
      {
        title: "2. Verantwortliche für die Datenverarbeitung",
        blocks: [
          {
            type: "p",
            text: "Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:",
          },
          {
            type: "address",
            lines: [
              "Bloom & Balance",
              "Inhaberin: Angelina Sukhareva",
              "Hamsa Studio, Hildastraße 17",
              "79102 Freiburg im Breisgau",
              "Deutschland",
            ],
          },
          { type: "p", text: "E-Mail: hi@bloom-balance.info" },
          {
            type: "p",
            text: "Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten können Sie sich jederzeit unter der oben genannten E-Mail-Adresse an uns wenden.",
          },
        ],
      },
      {
        title: "3. Hosting der Website",
        blocks: [
          {
            type: "p",
            text: "Diese Website ist eine statisch generierte Website und wird über GitHub Pages, einen Hosting-Dienst von GitHub, bereitgestellt.",
          },
          {
            type: "p",
            text: "Beim Besuch einer über GitHub Pages bereitgestellten Website kann GitHub technische Informationen über Ihren Besuch verarbeiten, einschließlich Ihrer IP-Adresse, insbesondere zu Sicherheits- und Betriebszwecken.",
          },
          {
            type: "p",
            text: "Je nach den Umständen können beim Zugriff auf unsere Website insbesondere folgende technische Daten verarbeitet werden:",
          },
          {
            type: "list",
            items: [
              "IP-Adresse",
              "Datum und Uhrzeit des Zugriffs",
              "aufgerufene Seite oder Ressource",
              "technische Informationen über das verwendete Gerät oder den verwendeten Browser",
              "Informationen, die für die Bereitstellung und Absicherung der Website erforderlich sind",
            ],
          },
          {
            type: "p",
            text: "Die Verarbeitung dient dazu, die Website bereitzustellen, ihre Sicherheit und Stabilität zu gewährleisten sowie die Hosting-Infrastruktur vor Missbrauch und Angriffen zu schützen.",
          },
          {
            type: "p",
            text: "Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, basierend auf unserem berechtigten Interesse an der sicheren und technisch funktionsfähigen Bereitstellung unserer Website.",
          },
          {
            type: "p",
            text: "GitHub verarbeitet personenbezogene Daten gemäß seinen eigenen Datenschutzbestimmungen.",
          },
          {
            type: "link",
            label: "Datenschutzerklärung von GitHub:",
            url: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
          },
        ],
      },
      {
        title: "4. Keine Analyse- oder Werbe-Tracking-Dienste",
        blocks: [
          {
            type: "p",
            text: "Wir verwenden auf dieser Website keine Dienste wie Google Analytics, Meta Pixel, Werbe-Tracker, verhaltensbezogene Tracking-Dienste, Heatmaps oder vergleichbare Analyse- und Tracking-Technologien.",
          },
          {
            type: "p",
            text: "Wir verwenden die Website nicht zur Erstellung von Nutzerprofilen oder zur Nachverfolgung Ihres Nutzungsverhaltens über verschiedene Websites hinweg.",
          },
        ],
      },
      {
        title: "5. Cookies",
        blocks: [
          {
            type: "p",
            text: "Unsere Website verwendet von unserer Seite keine Cookies zu Analyse-, Werbe-, Profiling- oder sonstigen nicht erforderlichen Tracking-Zwecken.",
          },
          {
            type: "p",
            text: "Bitte beachten Sie jedoch, dass von Drittanbietern bereitgestellte Dienste, die in unsere Website eingebunden oder über diese verlinkt sind, eigene Cookies oder ähnliche Technologien verwenden können, wenn Sie diese Dienste nutzen.",
          },
          {
            type: "p",
            text: "Dies kann insbesondere für das Buchungssystem von Acuity Scheduling gelten, wenn Sie über den auf unserer Website bereitgestellten Link zu diesem Dienst wechseln und ihn nutzen.",
          },
          {
            type: "p",
            text: "Die Verarbeitung durch solche Drittanbieter richtet sich nach den jeweiligen Datenschutzbestimmungen des Anbieters.",
          },
        ],
      },
      {
        title: "6. Terminbuchung über Acuity Scheduling",
        blocks: [
          {
            type: "p",
            text: "Wir verwenden Acuity Scheduling, einen von Squarespace betriebenen Terminplanungsdienst, um Ihnen die Online-Buchung von Terminen zu ermöglichen.",
          },
          {
            type: "p",
            text: "Wenn Sie auf den Buchungslink klicken, werden Sie auf eine separate Webseite weitergeleitet, die von Acuity/Squarespace betrieben wird.",
          },
          {
            type: "p",
            text: "Je nach Buchungsvorgang und den von Ihnen bereitgestellten Informationen können dabei insbesondere folgende Daten erhoben und verarbeitet werden:",
          },
          {
            type: "list",
            items: [
              "Name",
              "E-Mail-Adresse",
              "Telefonnummer",
              "Termindetails",
              "Informationen, die für die Verwaltung Ihrer Buchung erforderlich sind",
              "Zahlungsbezogene Informationen, sofern die Zahlung online erfolgt",
            ],
          },
          {
            type: "p",
            text: "Die Verarbeitung dieser Daten dient dazu, Termine zu vereinbaren, zu verwalten und zu organisieren sowie die von Ihnen angeforderten Dienstleistungen bereitzustellen.",
          },
          {
            type: "p",
            text: "Die Rechtsgrundlage für die Verarbeitung der Buchungsdaten ist grundsätzlich Art. 6 Abs. 1 lit. b DSGVO, sofern die Verarbeitung erforderlich ist, um auf Ihre Anfrage hin vorvertragliche Maßnahmen durchzuführen oder einen Vertrag mit Ihnen zu erfüllen.",
          },
          {
            type: "p",
            text: "Soweit die Verarbeitung nicht zur Vertragserfüllung erforderlich ist und eine andere Rechtsgrundlage zur Anwendung kommt, kann die Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO beruhen, insbesondere auf unserem berechtigten Interesse an einer effizienten Terminbuchung und -verwaltung.",
          },
          {
            type: "p",
            text: "Sobald Sie unsere Webseite verlassen und die Buchungsseite von Acuity Scheduling aufrufen, unterliegt Ihre Nutzung dieses Dienstes zusätzlich den eigenen Datenschutzbestimmungen und Nutzungsbedingungen von Acuity/Squarespace. Acuity/Squarespace kann Ihre personenbezogenen Daten im Rahmen der geltenden gesetzlichen Verpflichtungen und gemäß den eigenen Datenschutzbestimmungen verarbeiten.",
          },
          {
            type: "p",
            text: "Wir empfehlen Ihnen, die Datenschutzerklärung von Squarespace vor der Nutzung des Buchungsdienstes zu lesen.",
          },
          {
            type: "link",
            label: "Datenschutzerklärung von Squarespace:",
            url: "https://www.squarespace.com/privacy",
          },
          {
            type: "link",
            label: "Datenschutzinformationen zu Acuity Scheduling:",
            url: "https://help.acuityscheduling.com/hc/en-us/articles/16726357347981-Data-privacy-and-Acuity-Scheduling",
          },
        ],
      },
      {
        title: "7. Zahlungsabwicklung",
        blocks: [
          {
            type: "p",
            text: "Über Acuity Scheduling gebuchte Termine können online über die innerhalb von Acuity angebotenen Zahlungsdienste bezahlt werden, insbesondere über Stripe und/oder PayPal.",
          },
          {
            type: "p",
            text: "Wir erhalten oder speichern auf unserer Website keine vollständigen Zahlungs- oder Kreditkartendaten.",
          },
          {
            type: "p",
            text: "Zahlungsinformationen werden durch den jeweiligen Zahlungsdienstleister entsprechend dessen eigenen Datenschutzbestimmungen und den geltenden Datenschutzvorschriften verarbeitet.",
          },
          {
            type: "p",
            text: "Die Rechtsgrundlage für die Verarbeitung von Daten, die für die Zahlungsabwicklung erforderlich sind, ist grundsätzlich Art. 6 Abs. 1 lit. b DSGVO, soweit die Verarbeitung zur Erfüllung des Vertrags erforderlich ist, und/oder Art. 6 Abs. 1 lit. c DSGVO, soweit die Verarbeitung zur Erfüllung gesetzlicher Verpflichtungen, insbesondere steuerlicher und buchhalterischer Pflichten, erforderlich ist.",
          },
          {
            type: "p",
            text: "Die Zahlungsdienstleister können personenbezogene Daten für eigene Zwecke, insbesondere zur Erfüllung gesetzlicher Verpflichtungen, zur Sicherheit, zur Betrugsprävention und zur Einhaltung regulatorischer Anforderungen, als eigenständig Verantwortliche verarbeiten.",
          },
          {
            type: "link",
            label: "Datenschutzinformationen von Stripe:",
            url: "https://stripe.com/privacy",
          },
          {
            type: "link",
            label: "Datenschutzerklärung von PayPal:",
            url: "https://www.paypal.com/ee/legalhub/paypal/privacy-full",
          },
        ],
      },
      {
        title: "8. Kontaktaufnahme per E-Mail",
        blocks: [
          {
            type: "p",
            text: "Wenn Sie uns per E-Mail unter hi@bloom-balance.info kontaktieren, verarbeiten wir die von Ihnen übermittelten Informationen, um Ihre Anfrage zu bearbeiten und zu beantworten.",
          },
          { type: "p", text: "Dies kann insbesondere folgende Daten umfassen:" },
          {
            type: "list",
            items: [
              "Name",
              "E-Mail-Adresse",
              "Telefonnummer, sofern angegeben",
              "Inhalt Ihrer Nachricht",
              "sonstige von Ihnen freiwillig übermittelte Informationen",
            ],
          },
          {
            type: "p",
            text: "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn Ihre Anfrage im Zusammenhang mit der Anbahnung eines Vertrags oder einem bestehenden Vertragsverhältnis steht.",
          },
          {
            type: "p",
            text: "Bei allgemeinen Anfragen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten Interesses, auf an uns gerichtete Anfragen zu antworten.",
          },
          {
            type: "p",
            text: "Wir speichern die Kommunikation nur so lange, wie dies zur Bearbeitung der Anfrage und einer daraus entstehenden Geschäftsbeziehung erforderlich ist, sofern keine gesetzlichen Aufbewahrungspflichten oder die Notwendigkeit zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen eine längere Speicherung erfordern.",
          },
        ],
      },
      {
        title: "9. WhatsApp",
        blocks: [
          {
            type: "p",
            text: "Auf unserer Website befindet sich ein Link, über den Sie Bloom & Balance direkt über WhatsApp Business kontaktieren können.",
          },
          {
            type: "p",
            text: "Wenn Sie auf den WhatsApp-Link klicken, verlassen Sie unsere Website und nutzen den Dienst von WhatsApp.",
          },
          {
            type: "p",
            text: "WhatsApp kann personenbezogene Daten wie Ihre Telefonnummer, Kontoinformationen, Nachrichten, Medien, Geräte- und Verbindungsinformationen sowie weitere Daten entsprechend Ihrer Nutzung des Dienstes verarbeiten.",
          },
          {
            type: "p",
            text: "Die Verarbeitung durch WhatsApp richtet sich nach den Datenschutzbestimmungen von WhatsApp.",
          },
          {
            type: "p",
            text: "Wenn Sie uns freiwillig über WhatsApp kontaktieren, verarbeiten wir die von Ihnen übermittelten Informationen zum Zweck der Kommunikation mit Ihnen und gegebenenfalls zur Vereinbarung oder Verwaltung eines Termins.",
          },
          {
            type: "link",
            label: "Datenschutzerklärung von WhatsApp:",
            url: "https://www.whatsapp.com/legal/privacy-policy-eea",
          },
        ],
      },
      {
        title: "10. Instagram",
        blocks: [
          { type: "p", text: "Unsere Website enthält einen Link zu unserem Instagram-Profil:" },
          { type: "p", text: "@bloom.balance.de" },
          {
            type: "p",
            text: "Instagram ist nicht in unsere Website eingebettet. Allein durch den Besuch unserer Website werden daher keine Instagram-Feeds, Beiträge oder Instagram-Tracking-Technologien geladen.",
          },
          {
            type: "p",
            text: "Wenn Sie auf den Instagram-Link klicken, verlassen Sie unsere Website und rufen Instagram auf.",
          },
          {
            type: "p",
            text: "Instagram/Meta kann anschließend personenbezogene Daten gemäß den eigenen Datenschutzbestimmungen verarbeiten.",
          },
          {
            type: "link",
            label: "Datenschutzerklärung von Instagram:",
            url: "https://privacycenter.instagram.com/policy/",
          },
        ],
      },
      {
        title: "11. Google-Bewertungen",
        blocks: [
          {
            type: "p",
            text: "Auf unserer Website können Screenshots oder Bilder von Bewertungen angezeigt werden, die ursprünglich auf Google veröffentlicht wurden.",
          },
          {
            type: "p",
            text: "Diese Bewertungen werden als statische Bilder dargestellt. Wir verwenden kein Live-Widget für Google-Bewertungen und binden keine Google-Dienste zu diesem Zweck direkt in unsere Website ein.",
          },
          {
            type: "p",
            text: "Die in einer Bewertung öffentlich sichtbaren Informationen, beispielsweise der vom Verfasser gewählte Name, ein Profilbild, der Bewertungstext oder andere öffentlich angezeigte Informationen, können dadurch auf unserer Website erscheinen.",
          },
          {
            type: "p",
            text: "Die Darstellung der Bewertungen dient dazu, Besuchern Kundenfeedback und Erfahrungen mit Bloom & Balance zu präsentieren.",
          },
        ],
      },
      {
        title: "12. Externe Links",
        blocks: [
          {
            type: "p",
            text: "Unsere Website enthält Links zu Websites und Diensten Dritter, insbesondere zu Acuity Scheduling, WhatsApp, Instagram, Stripe und PayPal.",
          },
          {
            type: "p",
            text: "Wir haben keinen Einfluss auf die Datenverarbeitung durch diese externen Anbieter, sobald Sie deren Dienste aufrufen oder nutzen.",
          },
          {
            type: "p",
            text: "Für die Verarbeitung personenbezogener Daten durch diese Anbieter gelten deren jeweilige Datenschutzbestimmungen.",
          },
        ],
      },
      {
        title: "13. Speicherdauer",
        blocks: [
          {
            type: "p",
            text: "Wir verarbeiten und speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.",
          },
          { type: "p", text: "Je nach Art der Daten können unterschiedliche Aufbewahrungsfristen gelten." },
          {
            type: "p",
            text: "Insbesondere können Informationen im Zusammenhang mit Buchungen und Zahlungen gesetzlichen Aufbewahrungs- und Dokumentationspflichten unterliegen. Gesetzlich vorgeschriebene Aufbewahrungsfristen haben Vorrang vor einer gewöhnlichen Löschung.",
          },
          {
            type: "p",
            text: "Sobald personenbezogene Daten für den jeweiligen Zweck nicht mehr erforderlich sind und keine gesetzliche Verpflichtung oder ein berechtigter rechtlicher Grund für eine weitere Speicherung besteht, werden die Daten gelöscht oder anonymisiert.",
          },
        ],
      },
      {
        title: "14. Ihre Rechte",
        blocks: [
          {
            type: "p",
            text: "Wenn wir Ihre personenbezogenen Daten verarbeiten, stehen Ihnen nach Maßgabe der gesetzlichen Voraussetzungen insbesondere folgende Rechte nach der DSGVO zu:",
          },
          { type: "h", text: "14.1 Recht auf Auskunft" },
          {
            type: "p",
            text: "Gemäß Art. 15 DSGVO haben Sie das Recht, Auskunft darüber zu verlangen, ob personenbezogene Daten über Sie verarbeitet werden und, sofern dies der Fall ist, eine Kopie dieser Daten zu erhalten.",
          },
          { type: "h", text: "14.2 Recht auf Berichtigung" },
          {
            type: "p",
            text: "Gemäß Art. 16 DSGVO haben Sie das Recht, die Berichtigung unrichtiger personenbezogener Daten und die Vervollständigung unvollständiger personenbezogener Daten zu verlangen.",
          },
          { type: "h", text: "14.3 Recht auf Löschung" },
          {
            type: "p",
            text: "Gemäß Art. 17 DSGVO können Sie unter den gesetzlichen Voraussetzungen die Löschung Ihrer personenbezogenen Daten verlangen.",
          },
          {
            type: "p",
            text: "Das Recht auf Löschung besteht nicht uneingeschränkt. Insbesondere können wir verpflichtet sein, bestimmte Daten aufgrund gesetzlicher Aufbewahrungspflichten aufzubewahren oder Daten zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen zu benötigen.",
          },
          { type: "h", text: "14.4 Recht auf Einschränkung der Verarbeitung" },
          {
            type: "p",
            text: "Gemäß Art. 18 DSGVO können Sie unter den gesetzlichen Voraussetzungen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.",
          },
          { type: "h", text: "14.5 Recht auf Datenübertragbarkeit" },
          {
            type: "p",
            text: "Gemäß Art. 20 DSGVO haben Sie unter den gesetzlichen Voraussetzungen das Recht, personenbezogene Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen.",
          },
          { type: "h", text: "14.6 Widerspruchsrecht" },
          {
            type: "p",
            text: "Gemäß Art. 21 DSGVO haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen, sofern die Verarbeitung auf Art. 6 Abs. 1 lit. e oder lit. f DSGVO beruht.",
          },
          {
            type: "p",
            text: "Werden personenbezogene Daten zum Zwecke der Direktwerbung verarbeitet, haben Sie das Recht, jederzeit gegen diese Verarbeitung zu widersprechen.",
          },
          { type: "h", text: "14.7 Recht auf Widerruf einer Einwilligung" },
          {
            type: "p",
            text: "Soweit wir personenbezogene Daten auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO verarbeiten, können Sie Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.",
          },
          {
            type: "p",
            text: "Der Widerruf der Einwilligung berührt nicht die Rechtmäßigkeit der Verarbeitung, die bis zum Zeitpunkt des Widerrufs erfolgt ist.",
          },
          { type: "h", text: "14.8 Recht auf Beschwerde bei einer Aufsichtsbehörde" },
          {
            type: "p",
            text: "Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen geltendes Datenschutzrecht verstößt.",
          },
          {
            type: "p",
            text: "Für Bloom & Balance ist grundsätzlich der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI Baden-Württemberg) zuständig.",
          },
          {
            type: "link",
            label: "Weitere Informationen finden Sie unter:",
            url: "https://www.baden-wuerttemberg.datenschutz.de/",
          },
          {
            type: "p",
            text: "Sie können sich nach Art. 77 DSGVO auch an eine andere zuständige Datenschutzaufsichtsbehörde wenden, insbesondere an die Aufsichtsbehörde Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.",
          },
        ],
      },
      {
        title: "15. Datensicherheit",
        blocks: [
          {
            type: "p",
            text: "Wir treffen angemessene technische und organisatorische Maßnahmen, um personenbezogene Daten vor zufälliger oder unrechtmäßiger Zerstörung, Verlust, Veränderung, unbefugter Offenlegung oder unbefugtem Zugriff zu schützen.",
          },
          {
            type: "p",
            text: "Da unsere Website Dienste Dritter wie GitHub Pages, Acuity Scheduling, Stripe, PayPal, WhatsApp und Instagram verwendet bzw. auf diese verweist, sind diese Anbieter jeweils selbst für die Sicherheitsmaßnahmen ihrer eigenen Dienste verantwortlich.",
          },
        ],
      },
      {
        title: "16. Änderungen dieser Datenschutzerklärung",
        blocks: [
          {
            type: "p",
            text: "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn dies erforderlich ist, beispielsweise wenn sich unsere Website, unsere Dienstleistungen oder die geltenden gesetzlichen Anforderungen ändern.",
          },
          {
            type: "p",
            text: "Die jeweils aktuelle Fassung dieser Datenschutzerklärung wird auf dieser Website veröffentlicht.",
          },
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: September 3, 2026",
    intro: [
      "This English version is a non-binding translation. The legally binding version is the German original.",
    ],
    sections: [
      {
        title: "1. General Information",
        blocks: [
          {
            type: "p",
            text: "We take the protection of your personal data seriously. Your personal data is processed in accordance with applicable data protection laws, in particular the General Data Protection Regulation (GDPR) and applicable German data protection laws.",
          },
          {
            type: "p",
            text: "This Privacy Policy explains what personal data may be processed when you visit the Bloom & Balance website, use the online booking function, contact us, or interact with links to external services.",
          },
          { type: "p", text: "This Privacy Policy applies to the website:" },
          { type: "p", text: "bloom-balance-wellness.com" },
          {
            type: "p",
            text: "If you follow links from our website to external websites or services, the processing of your personal data on those external services is governed by the respective privacy policies of those providers.",
          },
        ],
      },
      {
        title: "2. Controller Responsible for Data Processing",
        blocks: [
          {
            type: "p",
            text: "The controller responsible for the processing of personal data on this website is:",
          },
          {
            type: "address",
            lines: [
              "Bloom & Balance",
              "Owner: Angelina Sukhareva",
              "Hamsa Studio, Hildastraße 17",
              "79102 Freiburg im Breisgau",
              "Germany",
            ],
          },
          { type: "p", text: "Email: hi@bloom-balance.info" },
          {
            type: "p",
            text: "For questions concerning the processing of your personal data, you may contact us at the email address above.",
          },
        ],
      },
      {
        title: "3. Hosting of the Website",
        blocks: [
          {
            type: "p",
            text: "This website is a statically generated website hosted using GitHub Pages, a hosting service provided by GitHub.",
          },
          {
            type: "p",
            text: "When you visit a website hosted through GitHub Pages, GitHub may process technical information relating to your visit, including your IP address, for security and operational purposes.",
          },
          {
            type: "p",
            text: "Depending on the circumstances, the following technical information may be processed when you access our website:",
          },
          {
            type: "list",
            items: [
              "IP address",
              "Date and time of access",
              "Requested page or resource",
              "Technical information concerning the device or browser used",
              "Information necessary to provide and secure the website",
            ],
          },
          {
            type: "p",
            text: "The purpose of this processing is to make the website available, maintain its security and stability, and protect the hosting infrastructure against misuse and attacks.",
          },
          {
            type: "p",
            text: "The legal basis for this processing is Art. 6(1)(f) GDPR, based on our legitimate interest in providing a secure and technically functional website.",
          },
          {
            type: "p",
            text: "GitHub processes personal data in accordance with its own privacy framework.",
          },
          {
            type: "link",
            label: "GitHub Privacy Statement:",
            url: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
          },
        ],
      },
      {
        title: "4. No Analytics or Advertising Tracking",
        blocks: [
          {
            type: "p",
            text: "We do not use Google Analytics, Meta Pixel, advertising trackers, behavioural tracking tools, heatmaps, or comparable analytics services on this website.",
          },
          {
            type: "p",
            text: "We do not use the website to create profiles of visitors or to track their activities across different websites.",
          },
        ],
      },
      {
        title: "5. Cookies",
        blocks: [
          {
            type: "p",
            text: "Our own website does not intentionally use cookies for analytics, advertising, profiling, or other non-essential tracking purposes.",
          },
          {
            type: "p",
            text: "However, third-party services integrated into or linked from the website may use their own cookies or similar technologies when you interact with those services.",
          },
          {
            type: "p",
            text: "In particular, this may apply if you follow the link provided on our website to the Acuity Scheduling booking system and use that service.",
          },
          {
            type: "p",
            text: "The processing carried out by such third-party services is governed by the respective provider's privacy information.",
          },
        ],
      },
      {
        title: "6. Appointment Booking via Acuity Scheduling",
        blocks: [
          {
            type: "p",
            text: "We use Acuity Scheduling, a scheduling service operated by Squarespace, to allow you to book appointments online.",
          },
          {
            type: "p",
            text: "When you click the booking link, you will be directed to a separate webpage operated by Acuity/Squarespace.",
          },
          {
            type: "p",
            text: "Depending on the booking process and the information you provide, this may include:",
          },
          {
            type: "list",
            items: [
              "Name",
              "Email address",
              "Telephone number",
              "Appointment details",
              "Information necessary to administer your booking",
              "Payment-related information where payment is made online",
            ],
          },
          {
            type: "p",
            text: "The purpose of this processing is to arrange, administer, and manage appointments and to provide the services you request.",
          },
          {
            type: "p",
            text: "The legal basis for our processing of booking information is generally Art. 6(1)(b) GDPR, where processing is necessary to take steps at your request before entering into a contract or to perform a contract with you.",
          },
          {
            type: "p",
            text: "Where processing is not necessary for the performance of a contract and another legal basis is applicable, processing may be based on Art. 6(1)(f) GDPR, in particular our legitimate interest in providing an efficient appointment-booking system.",
          },
          {
            type: "p",
            text: "Once you leave our website and access the Acuity Scheduling booking page, your use of that service is also subject to Acuity/Squarespace's own privacy practices and terms. Acuity/Squarespace may process your personal data in accordance with its own legal obligations and privacy policy.",
          },
          {
            type: "p",
            text: "We recommend reviewing the Squarespace Privacy Policy before using the booking service.",
          },
          {
            type: "link",
            label: "Squarespace Privacy Policy:",
            url: "https://www.squarespace.com/privacy",
          },
          {
            type: "link",
            label: "Acuity Scheduling Privacy Information:",
            url: "https://help.acuityscheduling.com/hc/en-us/articles/16726357347981-Data-privacy-and-Acuity-Scheduling",
          },
        ],
      },
      {
        title: "7. Payments",
        blocks: [
          {
            type: "p",
            text: "Appointments booked through Acuity Scheduling may be paid online using payment services made available through the Acuity platform, including Stripe and/or PayPal.",
          },
          {
            type: "p",
            text: "We do not receive or store your complete payment-card details on our website.",
          },
          {
            type: "p",
            text: "Payment information is processed by the respective payment provider in accordance with its own privacy policy and applicable data protection requirements.",
          },
          {
            type: "p",
            text: "The legal basis for our processing of information necessary to process a payment is generally Art. 6(1)(b) GDPR, where processing is necessary for the performance of the agreement with you, and/or Art. 6(1)(c) GDPR, where processing is necessary to comply with legal obligations, including applicable accounting and tax requirements.",
          },
          {
            type: "p",
            text: "Payment providers may process information independently as data controllers for their own legal, security, fraud-prevention, and regulatory purposes.",
          },
          { type: "link", label: "Stripe Privacy Center:", url: "https://stripe.com/privacy" },
          {
            type: "link",
            label: "PayPal Privacy Policy:",
            url: "https://www.paypal.com/ee/legalhub/paypal/privacy-full",
          },
        ],
      },
      {
        title: "8. Contact by Email",
        blocks: [
          {
            type: "p",
            text: "If you contact us by email at hi@bloom-balance.info, we process the information you provide in order to respond to your enquiry.",
          },
          { type: "p", text: "This may include:" },
          {
            type: "list",
            items: [
              "Name",
              "Email address",
              "Telephone number, if provided",
              "The content of your message",
              "Any other information you voluntarily provide",
            ],
          },
          {
            type: "p",
            text: "The legal basis is Art. 6(1)(b) GDPR where your enquiry relates to taking steps prior to entering into an agreement or to an existing contractual relationship.",
          },
          {
            type: "p",
            text: "For general enquiries, the legal basis is Art. 6(1)(f) GDPR, based on our legitimate interest in responding to communications sent to us.",
          },
          {
            type: "p",
            text: "We retain correspondence only for as long as necessary to deal with the enquiry and any resulting relationship, unless statutory retention obligations or the establishment, exercise, or defence of legal claims require longer retention.",
          },
        ],
      },
      {
        title: "9. WhatsApp",
        blocks: [
          {
            type: "p",
            text: "Our website provides a link allowing you to contact Bloom & Balance directly via WhatsApp Business.",
          },
          {
            type: "p",
            text: "When you click the WhatsApp link, you leave our website and use the WhatsApp service.",
          },
          {
            type: "p",
            text: "WhatsApp may process personal data such as your telephone number, account information, messages, media, device and connection information, and other information depending on how you use its service.",
          },
          {
            type: "p",
            text: "The processing carried out by WhatsApp is governed by WhatsApp's own privacy policy.",
          },
          {
            type: "p",
            text: "When you voluntarily contact us through WhatsApp, we process the information you send to us for the purpose of communicating with you and, where applicable, arranging or managing an appointment.",
          },
          {
            type: "link",
            label: "WhatsApp Privacy Policy:",
            url: "https://www.whatsapp.com/legal/privacy-policy-eea",
          },
        ],
      },
      {
        title: "10. Instagram",
        blocks: [
          { type: "p", text: "Our website contains a link to our Instagram profile:" },
          { type: "p", text: "@bloom.balance.de" },
          {
            type: "p",
            text: "Instagram is not embedded into our website. No Instagram feed, posts, or tracking technology is loaded directly onto the website merely because you visit it.",
          },
          { type: "p", text: "If you click the Instagram link, you leave our website and access Instagram." },
          {
            type: "p",
            text: "Instagram/Meta may then process personal data in accordance with its own privacy policy.",
          },
          {
            type: "link",
            label: "Instagram Privacy Policy:",
            url: "https://privacycenter.instagram.com/policy/",
          },
        ],
      },
      {
        title: "11. Google Reviews",
        blocks: [
          {
            type: "p",
            text: "Our website may display screenshots or images of reviews originally published on Google.",
          },
          {
            type: "p",
            text: "These reviews are displayed as static images. We do not use a live Google Reviews widget or embed Google services for this purpose.",
          },
          {
            type: "p",
            text: "The information visible in a review, including a reviewer's chosen name, profile image, review text, or other publicly displayed information, may therefore appear on our website.",
          },
          {
            type: "p",
            text: "The reviews are displayed for the purpose of presenting customer feedback and informing visitors about experiences with Bloom & Balance.",
          },
        ],
      },
      {
        title: "12. External Links",
        blocks: [
          {
            type: "p",
            text: "Our website contains links to third-party websites and services, including Acuity Scheduling, WhatsApp, Instagram, Stripe, and PayPal.",
          },
          {
            type: "p",
            text: "We have no control over the data processing carried out by these external providers once you leave our website or interact with their services.",
          },
          {
            type: "p",
            text: "The respective provider's privacy policy applies to processing carried out by that provider.",
          },
        ],
      },
      {
        title: "13. Data Retention",
        blocks: [
          {
            type: "p",
            text: "We process and retain personal data only for as long as necessary for the respective purpose or where retention is required by law.",
          },
          { type: "p", text: "Different retention periods may apply depending on the type of information." },
          {
            type: "p",
            text: "In particular, information relating to bookings and payments may be subject to statutory accounting and tax retention obligations. Such legally required retention periods take precedence over ordinary deletion requirements.",
          },
          {
            type: "p",
            text: "Where personal data is no longer required and there is no legal obligation or legitimate legal reason to retain it, the data will be deleted or anonymised.",
          },
        ],
      },
      {
        title: "14. Your Rights",
        blocks: [
          {
            type: "p",
            text: "If we process your personal data, you have the following rights under the GDPR, subject to the applicable legal requirements.",
          },
          { type: "h", text: "14.1 Right of Access" },
          {
            type: "p",
            text: "Under Art. 15 GDPR, you have the right to request information about whether we process personal data concerning you and, where applicable, to obtain a copy of that data.",
          },
          { type: "h", text: "14.2 Right to Rectification" },
          {
            type: "p",
            text: "Under Art. 16 GDPR, you have the right to request correction of inaccurate personal data and completion of incomplete personal data.",
          },
          { type: "h", text: "14.3 Right to Erasure" },
          {
            type: "p",
            text: "Under Art. 17 GDPR, you may request deletion of your personal data where the legal requirements for erasure are met.",
          },
          {
            type: "p",
            text: "The right to erasure is not absolute. For example, we may be required to retain certain information to comply with legal obligations or to establish, exercise, or defend legal claims.",
          },
          { type: "h", text: "14.4 Right to Restriction of Processing" },
          {
            type: "p",
            text: "Under Art. 18 GDPR, you may request restriction of the processing of your personal data where the legal requirements are met.",
          },
          { type: "h", text: "14.5 Right to Data Portability" },
          {
            type: "p",
            text: "Under Art. 20 GDPR, you may have the right to receive personal data that you have provided to us in a structured, commonly used, and machine-readable format or to request its transmission to another controller, where the legal requirements are met.",
          },
          { type: "h", text: "14.6 Right to Object" },
          {
            type: "p",
            text: "Under Art. 21 GDPR, you have the right to object to processing based on Art. 6(1)(e) or Art. 6(1)(f) GDPR where there are grounds relating to your particular situation.",
          },
          {
            type: "p",
            text: "Where personal data is processed for direct marketing, you have the right to object at any time.",
          },
          { type: "h", text: "14.7 Right to Withdraw Consent" },
          {
            type: "p",
            text: "Where we process personal data on the basis of your consent under Art. 6(1)(a) GDPR, you may withdraw your consent at any time.",
          },
          {
            type: "p",
            text: "Withdrawal of consent does not affect the lawfulness of processing carried out before the withdrawal.",
          },
          { type: "h", text: "14.8 Right to Lodge a Complaint" },
          {
            type: "p",
            text: "You have the right to lodge a complaint with a data protection supervisory authority if you believe that the processing of your personal data violates applicable data protection law.",
          },
          {
            type: "p",
            text: "As Bloom & Balance is located in Freiburg im Breisgau, the relevant state supervisory authority is generally:",
          },
          {
            type: "p",
            text: "Landesbeauftragter für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI Baden-Württemberg)",
          },
          {
            type: "link",
            label: "Further information is available at:",
            url: "https://www.baden-wuerttemberg.datenschutz.de/",
          },
          {
            type: "p",
            text: "You may also contact another supervisory authority where permitted under Art. 77 GDPR, in particular the authority in your habitual place of residence, place of work, or the place of the alleged infringement.",
          },
        ],
      },
      {
        title: "15. Data Security",
        blocks: [
          {
            type: "p",
            text: "We take appropriate technical and organisational measures to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or unauthorised access.",
          },
          {
            type: "p",
            text: "Because our website uses third-party services such as GitHub Pages, Acuity Scheduling, Stripe, PayPal, WhatsApp, and Instagram, those providers are independently responsible for security measures applicable to their respective services.",
          },
        ],
      },
      {
        title: "16. Changes to This Privacy Policy",
        blocks: [
          {
            type: "p",
            text: "We reserve the right to update this Privacy Policy where necessary, for example if our website, services, or applicable legal requirements change.",
          },
          {
            type: "p",
            text: "The current version of the Privacy Policy will be published on this website.",
          },
        ],
      },
    ],
  },
};

type AgbClause = { title: string; items: string[] };
type AgbLang = { title: string; intro: string[]; clauses: AgbClause[] };

export const agb: { de: AgbLang; en: AgbLang } = {
  de: {
    title: "Allgemeine Geschäftsbedingungen (AGB) — Bloom & Balance",
    intro: [
      "Mit Vereinbarung eines Termins im Bloom & Balance wird den folgenden AGB zugestimmt:",
    ],
    clauses: [
      {
        title: "1. Geltungsbereich",
        items: [
          "1.1 Die folgenden Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Dienstleistungen, Verkäufe und Geschäftsbeziehungen zwischen Bloom & Balance und meinen Kunden.",
          "1.2 Mit Vereinbarung eines Termins – persönlich, telefonisch, per WhatsApp, E-Mail, Instagram oder über das Buchungssystem – erkennt der Kunde diese AGB verbindlich an. Änderungen sind nur durch schriftliche Individualvereinbarungen möglich.",
          "1.3 Es gelten ausschließlich meine AGB. Abweichende oder ergänzende Bedingungen des Kunden werden nur wirksam, wenn ich ihrer Geltung ausdrücklich schriftlich zustimme.",
          "1.4 Die Unwirksamkeit einzelner Bestimmungen berührt die Wirksamkeit der übrigen Regelungen nicht.",
        ],
      },
      {
        title: "2. Angebote",
        items: ["Meine Angebote sind freibleibend und unverbindlich."],
      },
      {
        title: "3. Terminvergabe und Behandlung",
        items: [
          "3.1 Behandlungen erfolgen nach terminlicher Vereinbarung. Kunden ab 18 Jahren können Termine eigenständig buchen. Minderjährige benötigen die Zustimmung eines Erziehungsberechtigten. Bloom & Balance behält sich vor, eine schriftliche Bestätigung einzuholen.",
          "3.2 Vereinbarte Termine sind verbindlich. Mit der Terminvereinbarung erklärt der Kunde die verbindliche Annahme meines Leistungsangebotes und dieser AGB.",
          "3.3 Behandlungsdauer und -umfang richten sich nach individueller Absprache. Anpassungen im Bedarfsfall sind jederzeit möglich.",
          "3.4 Die in der Preisliste angegebene Behandlungszeit beginnt mit dem Eintreffen des Kunden und endet nach der Verabschiedung.",
          "3.5 Sollte ich einen Termin aus Gründen höherer Gewalt oder Gründen, die ich nicht zu vertreten habe, nicht einhalten können, wird der Kunde umgehend informiert. Ich bin in diesem Fall berechtigt, den Termin zu verschieben oder vom Vertrag zurückzutreten.",
        ],
      },
      {
        title: "4. Terminverzug oder Terminausfall durch den Kunden",
        items: [
          "4.1 Wird ein Termin nicht mindestens 24 Stunden vorher abgesagt, bin ich berechtigt, den vollen Behandlungspreis gemäß § 615 BGB zu berechnen. Ein Anspruch auf Ersatztermin besteht nicht.",
          "4.2 Terminabsagen oder -änderungen müssen schriftlich per E-Mail erfolgen. Andere Kommunikationswege (z. B. Telefon, WhatsApp, Instagram) werden nicht berücksichtigt.",
          "4.3 Bei bekannter Ansteckungsgefahr wird die Behandlung aus Rücksicht auf die Gesundheit anderer abgelehnt. Falls der Kunde erkrankt ist, sollte der Termin auch kurzfristig abgesagt werden, um die Ansteckungsgefahr für das Personal zu vermeiden. In diesem Fall entfällt die sonst übliche Ausfallgebühr von 100%.",
          "4.4 Bei verspätetem Erscheinen besteht Anspruch auf Behandlung nur innerhalb der verbleibenden, vereinbarten Behandlungszeit. Wenn aufgrund eines Folgetermins pünktlich beendet werden muss, wird die volle Behandlungszeit berechnet.",
          "Bei einer Verspätung von mehr als 15 Minuten behalte ich mir vor, die Behandlung aus Qualitäts- und Zeitgründen abzulehnen. In diesem Fall wird der vollständige Behandlungspreis gemäß § 615 BGB fällig.",
        ],
      },
      {
        title: "5. Preise und Zahlung",
        items: [
          "5.1 Es gelten die Preise zum Zeitpunkt der Terminbuchung. Mit Erscheinen neuer Preislisten verlieren vorherige ihre Gültigkeit.",
          "5.2 Bei Onlinebuchungen ist der vollständige Behandlungspreis sofort und in voller Höhe im Voraus fällig. Eine Terminbestätigung erfolgt erst nach Zahlungseingang.",
          "5.3 Vor Ort ist ausschließlich PayPal oder Barzahlung möglich. EC- oder Kartenzahlungen werden nicht angeboten. Für Gutscheinverkäufe gilt dies entsprechend.",
        ],
      },
      {
        title: "6. Gutscheine",
        items: [
          "6.1 Gutscheine haben eine Gültigkeit von 12 Monaten ab Kaufdatum.",
          "6.2 Gutscheine sind nicht übertragbar und können nicht ausgezahlt werden, auch nicht teilweise.",
          "6.3 Bei Preiserhöhungen ist der Differenzbetrag vom Gutscheininhaber zu tragen.",
        ],
      },
      {
        title: "7. Eigentumsvorbehalt",
        items: [
          "Bis zur vollständigen Zahlung bleibt die Kaufsache Eigentum von Bloom & Balance.",
        ],
      },
      {
        title: "8. Gewährleistung",
        items: [
          "8.1 Ich verwende ausschließlich behandlungsgerechte Techniken und Produkte. Eine Garantie auf Behandlungsergebnis kann jedoch nicht gegeben werden, da dies von den individuellen Voraussetzungen abhängt. Der Kunde ist verpflichtet, alle relevanten Gesundheitsinformationen (z. B. Allergien, Erkrankungen und Hautzustände) wahrheitsgemäß anzugeben.",
          "8.2 Offensichtliche Behandlungsmängel sind innerhalb von 3 Kalendertagen schriftlich mitzuteilen.",
          "8.3 Mängelanzeigen bedürfen der Schriftform.",
          "8.4 Es gelten im Übrigen die gesetzlichen Gewährleistungsregelungen.",
        ],
      },
      {
        title: "9. Haftung",
        items: [
          "9.1 Schadensersatzansprüche verfallen grundsätzlich drei Monate nach Beendigung der Behandlung, es sei denn, der Kunde war ohne Verschulden an der Geltendmachung gehindert.",
          "9.2 Schadensersatzansprüche verjähren innerhalb eines Jahres ab Anspruchsentstehung. Dies gilt nicht für Ansprüche aus unerlaubter Handlung.",
          "9.3 Ich hafte nur für Vorsatz und grobe Fahrlässigkeit. Bei Verletzung wesentlicher Vertragspflichten hafte ich auch bei leichter Fahrlässigkeit, jedoch nur in Höhe des typischerweise vorhersehbaren Schadens.",
          "9.4 Für Ansprüche aus dem Produkthaftungsgesetz sowie bei Verletzung von Leben, Körper oder Gesundheit gelten die Haftungsbeschränkungen nicht.",
          "9.5 Die Haftung ist begrenzt auf die Deckungssummen meiner Betriebshaftpflichtversicherung. Haftung für unbekannte Spätfolgen ist ausgeschlossen.",
          "9.6 Falsche oder unvollständige Angaben des Kunden schließen jegliche Haftung aus.",
          "9.7 Verschweigt der Kunde Ausschlussgründe (z. B. Allergien, Infektionen, Schwangerschaft, Hauterkrankungen), entfällt die Haftung vollständig.",
          "9.8 Werden empfohlene Vorbereitungs- oder Nachsorgehinweise nicht befolgt, haftet Bloom & Balance nicht.",
          "9.9 Vom Kunden verursachte Schäden sind zu ersetzen. Ladendiebstähle werden zur Anzeige gebracht.",
          "9.10 Für Diebstahl oder Verlust persönlicher Gegenstände im Studio wird keine Haftung übernommen.",
        ],
      },
      {
        title: "10. Erfüllungsort, Gerichtsstand und Recht",
        items: [
          "Erfüllungsort ist Freiburg im Breisgau. Es gilt deutsches Recht unter Ausschluss internationalen Kaufrechts. Gerichtsstand ist das zuständige Amtsgericht Freiburg im Breisgau.",
        ],
      },
      {
        title: "11. Datenschutz / Foto-Einwilligung",
        items: [
          "11.1 Personenbezogene Daten werden ausschließlich zur Behandlung, Terminverwaltung, Rechnungsstellung oder Übermittlung relevanter Informationen verwendet und nicht an Dritte weitergegeben – außer mit ausdrücklicher Zustimmung.",
          "11.2 Eine erteilte Einwilligung zur Datenverarbeitung kann jederzeit widerrufen werden. Die Daten werden in diesem Fall umgehend gelöscht.",
          "11.3 Fotos, die zur Dokumentation oder zum Vergleich von Behandlungsergebnissen aufgenommen werden, dürfen nur mit vorheriger schriftlicher Zustimmung veröffentlicht werden. Die Einwilligung kann jederzeit widerrufen werden.",
        ],
      },
      {
        title: "12. Haftungsausschluss Website",
        items: [
          "Die Inhalte meiner Website werden sorgfältig gepflegt, dennoch übernehme ich keine Gewähr für Vollständigkeit, Aktualität oder technische Fehlerfreiheit. Für Inhalte verlinkter externer Seiten übernehme ich keine Haftung.",
        ],
      },
      {
        title: "13. Schlussbestimmungen",
        items: [
          "13.1 Der Kunde kann nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen aufrechnen oder ein Zurückbehaltungsrecht ausüben.",
          "13.2 Eine Abtretung von Ansprüchen des Kunden ist ausgeschlossen.",
          "13.3 Sollten einzelne Bestimmungen unwirksam sein, bleiben alle übrigen Regelungen gültig. Unwirksame Klauseln werden durch solche ersetzt, die dem wirtschaftlichen Zweck am nächsten kommen.",
        ],
      },
    ],
  },
  en: {
    title: "Bloom & Balance — Terms & Conditions",
    intro: [
      "This English version is a non-binding translation. The legally binding version is the German original.",
      "By scheduling your appointment at Bloom & Balance, you acknowledge and agree to the Terms & Conditions listed below:",
    ],
    clauses: [
      {
        title: "1. Scope of Application",
        items: [
          "1.1 These Terms & Conditions apply to all services, sales, and business relationships between Bloom & Balance and my clients.",
          "1.2 By scheduling an appointment – whether in person, by phone, WhatsApp, email, Instagram, or via the online booking system – the client fully accepts these Terms & Conditions. Any changes require a written individual agreement.",
          "1.3 Only my Terms & Conditions apply. Deviating or supplementary client conditions are only valid if I explicitly agree to them in writing.",
          "1.4 If individual provisions should become invalid, the remaining provisions remain unaffected.",
        ],
      },
      {
        title: "2. Offers",
        items: ["All offers are non-binding and subject to change."],
      },
      {
        title: "3. Appointments and Treatments",
        items: [
          "3.1 Treatments are carried out by appointment only. Clients aged 18 and over may book appointments independently. Minors require the consent of a legal guardian, and Bloom & Balance reserves the right to request written confirmation.",
          "3.2 All scheduled appointments are binding. By booking an appointment, the client accepts my service offer and these Terms & Conditions.",
          "3.3 Treatment duration and scope are based on individual agreements. Adjustments may be made when necessary.",
          "3.4 The treatment time listed in the price list begins when the client arrives and ends after the farewell.",
          "3.5 If I cannot keep an appointment due to force majeure or circumstances beyond my control, the client will be informed immediately. In such cases, I am entitled to reschedule or cancel the appointment.",
        ],
      },
      {
        title: "4. Delays or Missed Appointments by the Client",
        items: [
          "4.1 If an appointment is not cancelled at least 24 hours in advance, I am entitled to charge the full treatment price in accordance with § 615 BGB (German Civil Code). There is no entitlement to a replacement appointment.",
          "4.2 Cancellations or appointment changes must be made in writing via email. Other forms of communication (phone, WhatsApp, Instagram, etc.) are not accepted.",
          "4.3 If there is a known risk of infection, treatment will be refused out of consideration for the health of others. If the client is ill, the appointment should be canceled, even at short notice, to avoid the risk of infection for the staff. In this case, the usual 100% cancellation fee will be waived.",
          "4.4 If the client arrives late, the treatment will only be provided within the remaining scheduled time. If the appointment must end on time due to a following booking, the full treatment price will still be charged.",
          "For delays of more than 15 minutes, I reserve the right to decline the treatment for quality and scheduling reasons. In such cases, the full treatment price is due (§ 615 BGB).",
        ],
      },
      {
        title: "5. Prices and Payment",
        items: [
          "5.1 Prices applicable at the time of booking apply. When new price lists are published, previous prices lose validity.",
          "5.2 For online bookings, the full treatment price is due immediately. The appointment is only confirmed once payment has been received.",
          "5.3 On-site payment is PayPal or cash only. Card payments are not available. This applies equally to gift card purchases.",
        ],
      },
      {
        title: "6. Gift Cards",
        items: [
          "6.1 Gift cards are valid for 12 months from the date of purchase.",
          "6.2 Gift cards are non-transferable and cannot be redeemed for cash, in whole or in part.",
          "6.3 In the event of price increases, the difference must be covered by the gift card holder.",
        ],
      },
      {
        title: "7. Retention of Title",
        items: [
          "Goods remain the property of Bloom & Balance until full payment has been made.",
        ],
      },
      {
        title: "8. Warranty",
        items: [
          "8.1 I exclusively use treatment-appropriate techniques and products. However, no guarantee can be given for treatment results, as these depend on individual conditions. The client must provide all relevant health information (including allergies, conditions and skin sensitivities) truthfully.",
          "8.2 Obvious treatment defects must be reported in writing within 3 calendar days.",
          "8.3 Defect notifications must be submitted in writing.",
          "8.4 Statutory warranty regulations apply.",
        ],
      },
      {
        title: "9. Liability",
        items: [
          "9.1 Claims for damages expire three months after completion of the treatment unless the client was prevented from asserting them without fault.",
          "9.2 Claims for damages expire one year after arising. This does not apply to claims based on unlawful acts.",
          "9.3 I am liable only for intent and gross negligence. For breaches of essential contractual obligations, I am also liable for slight negligence, but only for foreseeable damages.",
          "9.4 Liability exclusions do not apply in cases covered by the Product Liability Act or in cases involving injury to life, body, or health.",
          "9.5 Liability is limited to the coverage amounts of my business liability insurance. Liability for unknown long-term consequences is excluded.",
          "9.6 Incorrect or incomplete client information excludes liability.",
          "9.7 If the client conceals contraindications (allergies, infections, pregnancy, skin conditions), liability is fully excluded.",
          "9.8 Bloom & Balance assumes no liability if pre-care or after-care instructions are not followed.",
          "9.9 Damages caused by the client must be compensated. Shoplifting will be reported.",
          "9.10 Bloom & Balance assumes no liability for theft or loss of personal items.",
        ],
      },
      {
        title: "10. Place of Performance, Jurisdiction, and Applicable Law",
        items: [
          "The place of performance is Freiburg im Breisgau. German law applies, excluding international commercial law. Jurisdiction lies with the competent court in Freiburg im Breisgau.",
        ],
      },
      {
        title: "11. Data Protection / Photo Consent",
        items: [
          "11.1 Personal data is used solely for treatments, appointment management, billing, or relevant communication and will not be shared with third parties without explicit consent.",
          "11.2 Consent to data processing can be revoked at any time. Data will then be deleted immediately.",
          "11.3 Photos taken for documentation or comparison may only be published with prior written consent. Consent can be revoked at any time.",
        ],
      },
      {
        title: "12. Website Disclaimer",
        items: [
          "Website content is maintained carefully, but no guarantee is given for completeness, accuracy, or technical error-free operation. Bloom & Balance assumes no liability for the content of external links.",
        ],
      },
      {
        title: "13. Final Provisions",
        items: [
          "13.1 The client may only offset undisputed or legally established claims.",
          "13.2 Assignment of client claims is excluded.",
          "13.3 Should individual clauses become invalid, the remaining provisions remain effective. Invalid clauses will be replaced by those most closely matching the intended economic purpose.",
        ],
      },
    ],
  },
};

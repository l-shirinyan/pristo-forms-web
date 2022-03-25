import { createI18n } from 'vue-i18n';
import getBrowserLocale from '../utils/getBrowserLocale';
import 'tw-elements';

const messages = {
  en: {
    app_title: 'Pristo',
    header: {
      institution : 'Institution 1323925',
      high_school: 'High school inspection',
    },
    chapters: {
      complete_chapters: 'Please complete the following chapters:',
      inspection_details: 'Inspection details',
      teacher_workforce: 'Teacher workforce',
      teacher_jobs: 'Teacher jobs',
      parental_payments: 'Parental payments',
      cleanliness_health: 'Cleanliness and health',
      summary_with_manager: 'Summary with manager',
      progress: 'In progress',
      complete: 'Complete',
      not_started: 'Not started',
      open: 'Open',
    },
    details: {
      entity_details: 'Entity details',
      today: 'Today 15:00',
      jerusalem: '304010, Jerusalem',
      bus_egged: 'Bus 10, Egged',
      name: 'Name: Zipi Cohen',
      operator: 'Operator: Egged',
      bus_line: 'Bus line: 10',
      bus_type: 'Bus type: City bus',
      frequency: 'Frequency: Every 2 hours',
    },
    attachment: {
      upload_file: 'Upload File',
      choose_file: 'Please choose a file',
    },
    formPages: {
      starting_control: 'Guidelines for starting control',
      text: "The controllers will present themselves, briefly review the format of the expected control procedure and ask the principal to present himself and his school briefly.\n" +
        "The issues below should be noted to the principal\n" +
        "The Ministry of Education's Control and Enforcement Licensing Administration is the body responsible for enforcing the Ministry of Education's FormPages among schools and external parties related to the education system. \"\n" +
        "By virtue of its role, the administration controls the implementation of the policy, the implementation of pedagogical processes in the schools, as well as the use of the resources allocated by the ministry to the schools.\n" +
        "System won a tender to control the performance of tuition in schools in the upper division, the purpose of which is to carry out multidisciplinary control in the upper division in a nationwide distribution.",
      basic_data: 'Basic data',
      detail_of_findings: 'Detail of findings',
      safety_certificates: 'Safety certificates',
      control_findings: 'Control findings',
      questions_manager: 'Questions with a manager',
      questions_coordinator: 'Questions with a coordinator',
      finish: "Finish",
      previous: 'Previous',
      next: 'Next'
    }
  },
  he: {
    app_title: 'פריסטו',
    header: {
      institution : 'מוסד 1323925',
      high_school: 'בקרת על יסודי',
    },
    chapters: {
      complete_chapters: 'אנא מלא/י את הפרקים הבאים:',
      inspection_details: 'פרטי הבקרה',
      teacher_workforce: 'מצבת מורים',
      teacher_jobs: 'משרות מורים',
      parental_payments: 'תשלומי הורים',
      cleanliness_health: 'ניקיון ובריאות',
      summary_with_manager: 'סיכום מול מנהל',
      progress: 'בתהליך',
      complete: 'לְהַשְׁלִים',
      not_started: 'טרם החל',
      open: 'פתיחה',
    },
    details: {
      entity_details: 'פרטי יישות',
      today: 'היום 15:00',
      jerusalem: 'ירושלים, 304010',
      bus_egged: "מס' קו 10, אגד",
      name: 'שם: ציפי כהן',
      operator: 'מפעיל: אגד',
      bus_line: "מס' קו: 10",
      bus_type: 'סוג אוטובוס: עירוני',
      frequency: 'תדירות: כל שעתיים',
    },
    attachment: {
      upload_file: 'הוספת קובץ',
      choose_file: 'אנא בחר קובץ',
    },
    formPages: {
      starting_control: 'הנחיות לתחילת בקרה',
      text: ".הבקרים יציגו את עצמם," +
        " יסקרו בקצרה את מתכונת הליך הבקרה הצפוי ויבקשו מהמנהל להציג את עצמו ואת בית ספרו בקצרה :יש לציין בפני המנהל את הנושאים להלן .מינהל רישוי בקרה ואכיפה במשרד החינוך," +
        " הינו הגוף האחראי על אכיפת הנחיות משרד החינוך בקרב בתי הספר וגורמים חיצוניים הקשורים במערכת החינוך\" .מתוקף תפקידו, המינהל מבצע בקרה על מימוש המדיניות," +
        " ביצוע תהליכים פדגוגיים בבתי הספר וכן שימוש במשאבים אותם מקצה המשרד לבתי הספר .חברת סיסטם זכתה במכרז בקרת ביצוע של שכר לימוד בבתי ספר בחטיבה העליונה שמטרתו ביצוע בקרה" +
        " רב-תחומית בחטיבה העליונה בפריסה ארצית רחבה כפי שנמסר לך במסגרת ההודעה שנשלחה אליכם ובכנס הווירטואלי שנערך למנהלים, נושאי הבקרה הם: מצבת מורים ומשרות הוראה," +
        " מצבת תלמידים, תשלומי הורים וכן ניקיון בית הספר .\"וסביבתו במהלך הריאיון הבקרים יבקשו מהמנהל להדפיס שתי מערכות כיתות מכל שכבה. כמו כן עליהם לקבל מהמנהל את" +
        " אלפון המורים שהוא התבקש להכין בהודעה על הבקרה הצפויה. על האלפון .לכלול את רשימת התפקידים בבית הספר. הבקר יוודא כי מערכות הכיתה שקיבל מהמנהל הן מלאות ומדויקות",
      basic_data: 'נתונים בסיסיים',
      detail_of_findings: 'פירוט הממצאים',
      safety_certificates: 'אישורי בטיחות',
      control_findings: 'ממצאי הבקרה',
      questions_manager: 'שאלות מול המנהל',
      questions_coordinator: 'שאלות מול הרכז',
      finish: 'סיום',
      previous: 'קודם',
      next: 'הַבָּא'
    }
  }
};

const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: getBrowserLocale({ countryCodeOnly: true }) || 'en', // set fallback locale
  messages // set locale messages
});

export default i18n;

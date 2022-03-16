import { createI18n } from 'vue-i18n';
import getBrowserLocale from '../utils/getBrowserLocale';

const messages = {
  en: {
    app_title: 'Pristo',
    institution : 'Institution 1323925',
    high_school: 'High school inspection',
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
    entity_details: 'Entity details',
    details_today: 'Today 15:00',
    details_jerusalem: '304010, Jerusalem',
    details_bus_egged: 'Bus 10, Egged',
    details_name: 'Name: Zipi Cohen',
    details_operator: 'Operator: Egged',
    details_bus_line: 'Bus line: 10',
    details_bus_type: 'Bus type: City bus',
    details_frequency: 'Frequency: Every 2 hours',
    upload_file: 'Upload File',
    choose_file: 'Please choose a file',
  },
  he: {
    app_title: 'פריסטו',
    institution : 'מוסד 1323925',
    high_school: 'בקרת על יסודי',
    complete_chapters: 'אנא מלא/י את הפרקים הבאים:',
    inspection_details: 'פרטי הבקרה',
    teacher_workforce: 'מצבת מורים',
    teacher_jobs: 'משרות מורים',
    parental_payments: 'תשלומי הורים',
    cleanliness_health: 'ניקיון ובריאות',
    summary_with_manager: 'סיכום מול מנהל',
    progress: 'In progress',
    complete: 'Complete',
    not_started: 'טרם החל',
    open: 'פתיחה',
    entity_details: 'פרטי יישות',
    details_today: 'היום 15:00',
    details_jerusalem: 'ירושלים, 304010',
    details_bus_egged: "מס' קו 10, אגד",
    details_name: 'שם: ציפי כהן',
    details_operator: 'מפעיל: אגד',
    details_bus_line: "מס' קו: 10",
    details_bus_type: 'סוג אוטובוס: עירוני',
    details_frequency: 'תדירות: כל שעתיים',
    upload_file: 'הוספת קובץ',
    choose_file: 'אנא בחר קובץ',
  }
};

const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: getBrowserLocale({ countryCodeOnly: true }) || 'en', // set fallback locale
  messages // set locale messages
});

export default i18n;

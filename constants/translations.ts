import { Language, Translations } from '../types';

export const translations: Translations = {
  [Language.EN]: {
    // App Title & Nav
    appTitle: 'Customer Data Entry',
    navLocation: 'Location',
    navCustomerInfo: 'Customer Info',

    // Language Switcher
    langTh: 'ไทย',
    langEn: 'English',
    
    // Location Form
    locationHeader: 'Share Installation Location',
    locationInstruction: 'Please share the location or the nearby place for installation. You can provide a Google Maps link, latitude/longitude, or a description of a nearby landmark.',
    locationPlaceholder: 'e.g., Google Maps link, 13.7563° N, 100.5018° E, or near Victory Monument',
    
    // Customer Info Form
    customerInfoHeader: 'Customer Information',
    nameLabel: 'Name',
    namePlaceholder: 'Enter your full name',
    nicknameLabel: 'Nick Name',
nicknamePlaceholder: 'Enter your nick name',

    phoneLabel: 'Phone Number',
    phonePlaceholder: 'Enter your phone number',
    emailLabel: 'Email',
    emailPlaceholder: 'Enter your email address',
    kycLabel: 'KYC Document (e.g., ID Card)',
    kycButtonText: 'Upload File',
    noFileChosen: 'No file chosen',
    idCardAddressLabel: 'Address as per ID Card',
    idCardAddressPlaceholder: 'Enter the address shown on your ID card',
    presentAddressLabel: 'Present Address (for installation)',
    presentAddressPlaceholder: 'Enter the full address for installation',
    
    //Installation Date
    installDateTimeLabel: 'Preferred Installation Date & Time',
installDateTimePlaceholder: 'Select date and time',
    // Buttons
    submitButton: 'Submit Information',
    submittedMessage: 'Information submitted successfully!',
    nextButton: 'Next',
    backButton: 'Back',
    submitting: 'Submitting...',
    processing: 'Processing...',
  },
  [Language.TH]: {
     // App Title & Nav
    appTitle: 'บันทึกข้อมูลลูกค้า',
    navLocation: 'ตำแหน่งติดตั้ง',
    navCustomerInfo: 'ข้อมูลลูกค้า',

    // Language Switcher
    langTh: 'ไทย',
    langEn: 'English',
    
    // Location Form
    locationHeader: 'โปรดแชร์ตําแหน่งที่ต้องการติดตั้ง',
    locationInstruction: 'โปรดแชร์ตำแหน่งที่ต้องการติดตั้ง หรือแจ้งสถานที่สำคัญใกล้เคียง เพื่อตรวจสอบพื้นที่ให้บริการ ท่านสามารถแชร์ลิงก์ Google Map, ละติจูดและลองจิจูด, หรือสถานที่สำคัญที่สังเกตได้ง่าย',
    locationPlaceholder: 'เช่น ลิงก์ Google Maps, 13.7563° N, 100.5018° E, หรือ ใกล้อนุสาวรีย์ชัยสมรภูมิ',
    
    // Customer Info Form
    customerInfoHeader: 'ข้อมูลลูกค้า',
    nameLabel: 'ชื่อ-นามสกุล',
    namePlaceholder: 'กรอกชื่อ-นามสกุลของท่าน',
    nicknameLabel: 'ชื่อเล่น',
nicknamePlaceholder: 'ระบุชื่อเล่น (ถ้ามี)',

    phoneLabel: 'เบอร์โทรศัพท์',
    phonePlaceholder: 'กรอกเบอร์โทรศัพท์ของท่าน',
    emailLabel: 'อีเมล',
    emailPlaceholder: 'กรอกอีเมลของท่าน',
    kycLabel: 'เอกสารยืนยันตัวตน (เช่น บัตรประชาชน)',
    kycButtonText: 'อัปโหลดไฟล์',
    noFileChosen: 'ยังไม่ได้เลือกไฟล์',
    idCardAddressLabel: 'ที่อยู่ตามบัตรประชาชน',
    idCardAddressPlaceholder: 'กรอกที่อยู่ตามที่แสดงบนบัตรประชาชน',
    presentAddressLabel: 'ที่อยู่ปัจจุบัน (สำหรับติดตั้ง)',
    presentAddressPlaceholder: 'กรอกที่อยู่สำหรับเข้ารับบริการติดตั้ง',
    //Installation Date
    installDateTimeLabel: 'วันที่และเวลาที่ต้องการติดตั้ง',
installDateTimePlaceholder: 'เลือกวันที่และเวลา',
    // Buttons
    submitButton: 'ส่งข้อมูล',
    submittedMessage: 'ส่งข้อมูลเรียบร้อยแล้ว!',
    nextButton: 'ถัดไป',
    backButton: 'ย้อนกลับ',
    submitting: 'กำลังส่ง...',
    processing: 'กำลังดำเนินการ...',
  },
};

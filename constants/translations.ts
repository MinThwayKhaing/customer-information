import { Language, Translations } from '../types';

export const translations: Translations = {
  [Language.EN]: {
    // App Title & Nav
    appTitle: 'Customer Data Entry',
    navLocation: 'Installation Location',
    navCustomerInfo: 'Customer Information',

    // Language Switcher
    langTh: 'ไทย',
    langEn: 'English',

    // Location Form
    locationHeader: 'Share Your Installation Location',
    locationInstruction: 'Please share the location where you want the installation to take place. You can provide a Google Maps link, coordinates (latitude/longitude), or a nearby landmark for easier identification.',
    locationPlaceholder: 'e.g., Google Maps link, 13.7563° N, 100.5018° E, or near Victory Monument',

    // Customer Info Form
    customerInfoHeader: 'Customer Information',
    nameLabel: 'Full Name',
    namePlaceholder: 'Enter your full name',
    nicknameLabel: 'Nickname',
    nicknamePlaceholder: 'Enter your nickname (optional)',
    idCardFileLabel: 'Upload ID Card Photo',
    phoneLabel: 'Phone Number',
    phonePlaceholder: 'Enter your phone number',
    emailLabel: 'Email Address',
    emailPlaceholder: 'Enter your email address',
    kycLabel: 'KYC Document (e.g., ID Card)',
    kycButtonText: 'Upload Document',
      do: "What You Should Do",
    dont: "What You Should Avoid",
    kycGuideText: `Please make sure your KYC document (e.g., ID card) is clear and legible. 
    Upload the entire document showing all details. Avoid glare, shadows, or blurriness 
    to prevent delays in verification.`,
    noFileChosen: 'No file selected',
    idCardAddressLabel: 'Address as per ID Card',
    idCardAddressPlaceholder: 'Enter the address shown on your ID card',
    presentAddressLabel: 'Current Address (for installation)',
    presentAddressPlaceholder: 'Enter the full address for installation',
idCardFileButtonText: 'Choose ID Card File',
    // Installation Date & Time
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
    locationHeader: 'โปรดแชร์ตำแหน่งสำหรับติดตั้ง',
    locationInstruction: 'กรุณาแจ้งตำแหน่งที่ต้องการติดตั้ง โดยสามารถส่งเป็นลิงก์ Google Maps, พิกัดละติจูด-ลองจิจูด หรือสถานที่สำคัญใกล้เคียง เพื่อความสะดวกในการค้นหา',
    locationPlaceholder: 'เช่น ลิงก์ Google Maps, 13.7563° N, 100.5018° E, หรือใกล้อนุสาวรีย์ชัยสมรภูมิ',

    // Customer Info Form
    customerInfoHeader: 'ข้อมูลลูกค้า',
    nameLabel: 'ชื่อ-นามสกุล',
    namePlaceholder: 'กรอกชื่อ-นามสกุลของท่าน',
    nicknameLabel: 'ชื่อเล่น',
    nicknamePlaceholder: 'ระบุชื่อเล่น (ถ้ามี)',

    phoneLabel: 'เบอร์โทรศัพท์',
    phonePlaceholder: 'กรอกหมายเลขโทรศัพท์ของท่าน',
    emailLabel: 'อีเมล',
    emailPlaceholder: 'กรอกที่อยู่อีเมลของท่าน',
    kycLabel: 'เอกสารยืนยันตัวตน (เช่น บัตรประชาชน)',
    kycButtonText: 'อัปโหลดเอกสาร',
    noFileChosen: 'ยังไม่ได้เลือกไฟล์',
     do: "สิ่งที่ควรทำ",
    dont: "สิ่งที่ไม่ควรทำ",
    kycGuideText: `โปรดตรวจสอบว่าเอกสารยืนยันตัวตนของคุณ (เช่น บัตรประชาชน) ชัดเจนและอ่านได้ง่าย 
    กรุณาอัปโหลดเอกสารทั้งฉบับที่แสดงข้อมูลครบถ้วน หลีกเลี่ยงแสงสะท้อน เงา หรือภาพเบลอ 
    เพื่อป้องกันความล่าช้าในการตรวจสอบข้อมูล`,
    idCardAddressLabel: 'ที่อยู่ตามบัตรประชาชน',
    idCardAddressPlaceholder: 'กรอกที่อยู่ตามบัตรประชาชนของท่าน',
    presentAddressLabel: 'ที่อยู่ปัจจุบัน (สำหรับติดตั้ง)',
    presentAddressPlaceholder: 'กรอกที่อยู่สำหรับติดตั้ง',
    idCardFileLabel: 'อัปโหลดไฟล์บัตรประชาชน',
    idCardFileButtonText: 'เลือกไฟล์บัตรประชาชน',
    // Installation Date & Time
    installDateTimeLabel: 'วันที่และเวลาที่สะดวกสำหรับติดตั้ง',
    installDateTimePlaceholder: 'เลือกวันที่และเวลาที่ต้องการ',

    // Buttons
    submitButton: 'ส่งข้อมูล',
    submittedMessage: 'ส่งข้อมูลเรียบร้อยแล้ว!',
    nextButton: 'ถัดไป',
    backButton: 'ย้อนกลับ',
    submitting: 'กำลังส่งข้อมูล...',
    processing: 'กำลังดำเนินการ...',
  },
};

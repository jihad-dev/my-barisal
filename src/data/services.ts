import { Building, Ambulance, Scale, Shield, Droplets } from 'lucide-react';

export const services = [
  {
    id: 'hospital',
    icon: Building,
    title: 'হাসপাতাল',
    description: 'বরিশালের সকল সরকারি ও বেসরকারি হাসপাতালের তথ্য, জরুরি বিভাগ, ডাক্তার তালিকা ও বিছানা সংক্রান্ত তথ্য।',
    count: 85,
    gradient: 'from-emerald-500 to-teal-600',
    shadowColor: 'emerald',
  },
  {
    id: 'ambulance',
    icon: Ambulance,
    title: 'অ্যাম্বুলেন্স',
    description: '২৪/৭ অ্যাম্বুলেন্স সেবা - ফ্রি এম্বুলেন্স, আইসিইউ অ্যাম্বুলেন্স ও এয়ার এম্বুলেন্স সার্ভিস।',
    count: 42,
    gradient: 'from-orange-500 to-red-600',
    shadowColor: 'orange',
  },
  {
    id: 'law',
    icon: Scale,
    title: 'আইনি সেবা',
    description: 'অভিজ্ঞ আইনজীবী, নোটারি পাবলিক, আইনি পরামর্শ ও আদালত সংক্রান্ত সকল তথ্য।',
    count: 156,
    gradient: 'from-violet-500 to-purple-600',
    shadowColor: 'violet',
  },
  {
    id: 'police',
    icon: Shield,
    title: 'পুলিশ সেবা',
    description: 'থানা তালিকা, জরুরি হটলাইন, এফআইআর সংক্রান্ত তথ্য ও পুলিশ সাহায্য লাইন।',
    count: 28,
    gradient: 'from-blue-500 to-cyan-600',
    shadowColor: 'blue',
  },
  {
    id: 'blood',
    icon: Droplets,
    title: 'রক্তদান',
    description: 'স্বেচ্ছা রক্তদাতা ডিরেক্টরি, ব্লাড ব্যাংক ও জরুরি রক্তের জন্য সাহায্য।',
    count: 520,
    gradient: 'from-rose-500 to-pink-600',
    shadowColor: 'rose',
  },
];

export const recentActivities = [
  {
    id: 1,
    type: 'blood',
    message: 'রক্তদাতা রাফি আহমেদ গাউছিয়া হাসপাতালে রক্ত দান করেছেন',
    time: '২ মিনিট আগে',
    location: 'গাউছিয়া হাসপাতাল',
  },
  {
    id: 2,
    type: 'ambulance',
    message: 'অ্যাম্বুলেন্স সার্ভিস শের-ই-বাংলা মেডিকেল থেকে শুরু হয়েছে',
    time: '১৫ মিনিট আগে',
    location: 'শের-ই-বাংলা মেডিকেল',
  },
  {
    id: 3,
    type: 'hospital',
    message: 'নতুন আইসিইউ বেড যুক্ত হয়েছে বরিশাল শিশু হাসপাতালে',
    time: '১ ঘন্টা আগে',
    location: 'বরিশাল শিশু হাসপাতাল',
  },
  {
    id: 4,
    type: 'law',
    message: 'আইনজীবী সালমা খাতুন জেলা আদালতে নতুন কেস নিয়েছেন',
    time: '২ ঘন্টা আগে',
    location: 'বরিশাল জেলা আদালত',
  },
  {
    id: 5,
    type: 'police',
    message: 'কোতোয়ালি থানায় নতুন সার্ভিস চালু হয়েছে',
    time: '৩ ঘন্টা আগে',
    location: 'কোতোয়ালি থানা',
  },
];

export const stats = [
  { label: 'সক্রিয় ব্যবহারকারী', value: 12500, suffix: '+' },
  { label: 'প্রদত্ত সেবা', value: 45000, suffix: '+' },
  { label: 'রেজিস্টার্ড প্রতিষ্ঠান', value: 850, suffix: '+' },
  { label: 'দৈনিক সার্ভিস', value: 250, suffix: '+' },
];

export const navLinks = [
  { label: 'হোম', href: '#home' },
  { label: 'সেবাসমূহ', href: '#services' },
  { label: 'আমাদের সম্পর্কে', href: '#about' },
  { label: 'যোগাযোগ', href: '#contact' },
];

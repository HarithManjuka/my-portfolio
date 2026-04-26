export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string[];
  tech: string[];
  github: string;
  live: string | null;
  liveLabel: string;
  image: string;
  tag: string;
  tagColor: string;
  role: string;
  contribution: string;
  duration: string;
  team: string;
  highlights: { title: string; desc: string }[];
};

export const projects: Project[] = [
  {
    slug: "healthcare-plus",
    title: "HealthCare+ System",
    tagline: "Full-stack healthcare management platform",
    description:
      "A full-stack healthcare management platform with doctor availability scheduling, patient appointments, prescription management, and role-based dashboards for admins, doctors, and patients.",
    longDescription: [
      "HealthCare+ is a comprehensive healthcare management platform designed to streamline the interaction between patients, doctors, and hospital administrators. The system eliminates paper-based workflows and brings the entire care journey into a single, cohesive digital experience.",
      "The platform features a sophisticated scheduling engine that accounts for doctor availability, appointment types, and real-time slot management. Patients can book, reschedule, or cancel appointments with instant confirmation, while doctors get a clean daily schedule view with patient history at a glance.",
      "Role-based access control ensures that each user admin, doctor, or patient only sees what's relevant to them, keeping data secure and the interface uncluttered.",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "JWT", "REST API"],
    github: "https://github.com/SandeepaChathumina/smart-healthcare-platform",
    live: "https://www.youtube.com/watch?v=OKqqNIg93rQ",
    liveLabel: "Demo Video",
    image: "/project-4.png",
    tag: "Micro-services",
    tagColor: "text-violet-500 bg-violet-500/10 border-violet-500/20",
    role: "Full Stack Developer",
    contribution: "Doctor Service",
    duration: "2 months",
    team: "4 members",
    highlights: [
      { title: "Smart Scheduling", desc: "Real-time doctor availability with conflict-free slot booking" },
      { title: "Role-Based Dashboards", desc: "Separate views for admins, doctors, and patients" },
      { title: "Prescription Management", desc: "Digital prescriptions with full history tracking" },
      { title: "Secure Auth", desc: "JWT-based authentication with role-level access control" },
    ],
  },
  {
    slug: "agrihub-lk",
    title: "AgriHUB-LK",
    tagline: "Agricultural logistics platform for Sri Lanka",
    description:
      "Agricultural logistics platform connecting Sri Lankan farmers with transporters. Features real-time trip management, vehicle fleet tracking, and a modern transporter dashboard.",
    longDescription: [
      "AgriHUB-LK bridges the gap between Sri Lankan farmers and the transport infrastructure they need to get produce to market efficiently. The platform tackles a real problem: farmers losing revenue due to logistics delays and lack of transporter visibility.",
      "The platform offers real-time trip management where farmers post load requests and transporters can accept, track, and complete trips through a purpose-built dashboard. Fleet management tools let transport companies manage multiple vehicles and drivers in one place.",
      "Built with a mobile-first approach, the interface is designed for use in the field large tap targets, minimal data usage, and offline-tolerant design patterns ensure reliability even in areas with poor connectivity.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Express", "Node.js"],
    github: "https://github.com/SandeepaChathumina/AgriHUB-LK",
    live: null,
    liveLabel: "Live Demo",
    image: "/project-3.png",
    tag: "Supply Chain Platform",
    tagColor: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
    role: "Full Stack Developer",
    contribution: "Transport Management",
    duration: "1 month",
    team: "4 members",
    highlights: [
      { title: "Trip Management", desc: "End-to-end trip lifecycle from request to delivery" },
      { title: "Fleet Tracking", desc: "Real-time vehicle and driver management dashboard" },
      { title: "Farmer Portal", desc: "Simple load posting and transporter discovery" },
      { title: "Mobile-First UI", desc: "Optimized for field use with low-bandwidth support" },
    ],
  },
  {
    slug: "ceylon-leaf",
    title: "CeylonLeaf",
    tagline: "Tea estate management from field to factory",
    description:
      "Comprehensive agricultural management system empowering Sri Lankan tea estate operations with end-to-end integration from tea leaves plucking to factory handover.",
    longDescription: [
      "CeylonLeaf is an end-to-end tea estate management system built specifically for the unique operational needs of Sri Lankan tea plantations. The system covers the entire production chain from field worker attendance to factory handover replacing fragmented manual processes with a unified digital platform.",
      "A standout feature is the QR-based worker attendance system, which validates shifts automatically and generates daily workforce reports. Field supervisors can log incidents in real time with photo evidence, creating an auditable trail that helps estates meet compliance requirements.",
      "The factory handover module tracks each batch of plucked leaves through quality checks, weight recording, and transport assignment, giving estate managers complete visibility over daily production metrics.",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "QR Code API"],
    github: "https://github.com/DilshaPrathibha/Tea-Plantation-Management-System",
    live: "https://youtu.be/wiyqExWuGbk?si=iUJNBbym9mf5gJ6H",
    liveLabel: "Demo Video",
    image: "/project-2.png",
    tag: "Agriculture",
    tagColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    role: "Full Stack Developer",
    contribution: "Pest & Disease, Incident & Production Management",
    duration: "3 months",
    team: "5 members",
    highlights: [
      { title: "QR Attendance", desc: "Automated shift validation via QR scanning" },
      { title: "Incident Reporting", desc: "Real-time field incidents with photo evidence" },
      { title: "Production Metrics", desc: "Daily harvest tracking from field to factory" },
      { title: "Transport Logistics", desc: "Batch assignment and delivery tracking" },
    ],
  },
  {
    slug: "dailybloom",
    title: "DailyBloom",
    tagline: "Android wellness app for building sustainable healthy habits",
    description:
      "An Android wellness application promoting personal wellbeing through structured habit management, mood tracking with emoji journaling, hydration reminders, and a gamified achievement system built on behavioral psychology principles.",
    longDescription: [
      "DailyBloom is a personal wellness companion built for Android, designed to help users establish and maintain sustainable healthy routines. The app integrates behavioral psychology principles into a clean, intuitive mobile experience making it easy to track habits, log moods, and stay hydrated without friction.",
      "The daily habit tracker lets users create, edit, and delete personalized wellness habits like exercise, meditation, and hydration. Visual progress indicators and streak counters give users a clear sense of momentum, while the mood journal with emoji selectors allows them to log emotional patterns over time and spot trends in their wellbeing.",
      "A gamified achievement system keeps users motivated through badges like First Habit, Water Champion, and Mood Tracker. Smart hydration reminders powered by AlarmManager and WorkManager ensure timely nudges throughout the day, making DailyBloom a lightweight but effective tool for anyone building a healthier lifestyle.",
    ],
    tech: ["Kotlin", "Android Studio", "Activities & Fragments", "SharedPreferences", "AlarmManager", "WorkManager"],
    github: "https://github.com/HarithManjuka/DailyBloom",
    live: "/dailybloom.pdf",
    liveLabel: "Download PDF",
    image: "/mobileApp-1.png",
    tag: "Android App",
    tagColor: "text-pink-500 bg-pink-500/10 border-pink-500/20",
    role: "Solo Android Developer",
    contribution: "End-to-end development",
    duration: "1 month",
    team: "1 member",
    highlights: [
      { title: "Daily Habit Tracker", desc: "Add, edit & delete personalized wellness habits with visual completion progress" },
      { title: "Mood Journal", desc: "Log daily moods with emoji selectors and view historical emotional patterns" },
      { title: "Hydration Reminders", desc: "Smart notifications via AlarmManager & WorkManager for timely water intake" },
      { title: "Achievement System", desc: "Unlock badges like Week Warrior, Water Champion, and Month Master for consistency" },
    ],
  },
  {
    slug: "foundit",
    title: "FoundIT",
    tagline: "Campus lost & found system for university environments",
    description:
      "A mobile application that streamlines reporting, locating, and recovering lost items within a university campus. Provides a centralized platform for students to submit lost/found reports, manage claims, and receive real-time status notifications.",
    longDescription: [
      "FoundIT solves a common but frustrating campus problem: lost belongings with no easy way to recover them. The app provides a centralized digital lost and found platform where students can submit detailed reports, upload photographs, and pinpoint last known locations replacing scattered notice boards and group chats with a structured, searchable system.",
      "The claim management flow is designed around trust and verification. When a student spots their item in the found listings, they can initiate a claim request that goes through a secure verification step before the handover is facilitated, reducing the risk of false claims and ensuring items reach their rightful owners.",
      "Real-time notifications keep both reporters and claimants updated on every status change, while robust search and filter tools let users quickly narrow down reports by date, category, and campus location. Built entirely as a solo project, FoundIT demonstrates end-to-end Android development from UI design to local data persistence.",
    ],
    tech: ["Kotlin", "Android Studio", "Activities & Fragments", "SharedPreferences"],
    github: "https://github.com/HarithManjuka/FoundIT",
    live: "/foundit.pdf",
    liveLabel: "Download PDF",
    image: "/mobileApp-2.png",
    tag: "Android App",
    tagColor: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    role: "Solo Android Developer",
    contribution: "End-to-end development",
    duration: "1 month",
    team: "1 member",
    highlights: [
      { title: "Lost & Found Reporting", desc: "Submit item details, photos, and last known location with ease" },
      { title: "Claim Management", desc: "Secure item claiming through verification before handover" },
      { title: "Real-time Notifications", desc: "Instant status updates on claim requests and item matches" },
      { title: "Search & Filter", desc: "Filter reports by date, category, and campus location" },
    ],
  },
];
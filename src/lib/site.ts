import p1 from "@/assets/photos/p1.asset.json";
import p2 from "@/assets/photos/p2.asset.json";
import p3 from "@/assets/photos/p3.asset.json";
import p4 from "@/assets/photos/p4.asset.json";
import p5 from "@/assets/photos/p5.asset.json";
import p6 from "@/assets/photos/p6.asset.json";
import p7 from "@/assets/photos/p7.asset.json";
import p8 from "@/assets/photos/p8.asset.json";
import p9 from "@/assets/photos/p9.asset.json";
import p10 from "@/assets/photos/p10.asset.json";
import p11 from "@/assets/photos/p11.asset.json";
import p12 from "@/assets/photos/p12.asset.json";
import p13 from "@/assets/photos/p13.asset.json";
import p14 from "@/assets/photos/p14.asset.json";
import p15 from "@/assets/photos/p15.asset.json";
import p16 from "@/assets/photos/p16.asset.json";
import cctvImg from "@/assets/services/cctv.png.asset.json";
import networkImg from "@/assets/services/network.png.asset.json";
import itSupportImg from "@/assets/services/it-support.png.asset.json";
import computerLabImg from "@/assets/services/computer-lab.png.asset.json";
import dataCenterImg from "@/assets/services/data-center.png.asset.json";

export const site = {
  name: "MZ IT Services",
  tagline: "Enterprise IT Infrastructure, Built Right.",
  owner: "Muhammad Zubair",
  city: "Lahore",
  country: "Pakistan",
  phone: "0328 4501906",
  phoneIntl: "+923284501906",
  email: "Muhammadzubairofficial003@gmail.com",
  whatsapp: "https://wa.me/923284501906",
  address: "Lahore, Punjab, Pakistan",
} as const;

export const photos = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16].map((p) => p.url);

export type ServiceSlug =
  | "cctv-cameras"
  | "network-infrastructure"
  | "it-support"
  | "data-center"
  | "computer-lab-setup";

export interface Service {
  slug: ServiceSlug;
  title: string;
  short: string;
  tagline: string;
  icon: string; // lucide name
  features: string[];
  description: string;
  hero: string;
}

export const services: Service[] = [
  {
    slug: "cctv-cameras",
    title: "CCTV Cameras",
    short: "24/7 surveillance you can rely on.",
    tagline: "HD & 4K IP camera systems with remote monitoring",
    icon: "Camera",
    features: [
      "IP, HD-CVI & analog camera installation",
      "NVR / DVR setup with redundant storage",
      "Remote viewing on mobile & desktop",
      "Night-vision, PTZ and fisheye options",
      "Annual maintenance contracts",
    ],
    description:
      "End-to-end CCTV deployments for offices, factories, schools and retail across Lahore. We design coverage maps, install cameras, configure recorders, and hand over a system you can monitor from anywhere.",
    hero: cctvImg.url,
  },
  {
    slug: "network-infrastructure",
    title: "Network Infrastructure",
    short: "Structured cabling that scales for years.",
    tagline: "Cat6 / Cat6A / fiber, switches, routers & enterprise Wi-Fi",
    icon: "Network",
    features: [
      "Patch panel termination & labeling",
      "Enterprise Wi-Fi design & site surveys",
    ],
    description:
      "From a single floor to a multi-building campus, we plan and install cabling, racks and active equipment to enterprise standards — colour-coded, labelled, tested and documented.",
    hero: networkImg.url,
  },
  {
    slug: "it-support",
    title: "IT Support & Maintenance",
    short: "On-site & remote support, fast.",
    tagline: "Reactive and proactive support for SMBs and enterprises",
    icon: "Wrench",
    features: [
      "On-site engineer visits across Lahore",
      "Remote troubleshooting & helpdesk",
      "Server, workstation and printer support",
    ],
    description:
      "Predictable monthly support contracts that keep your team productive. SLAs you can measure, engineers you can reach, and a quarterly health report that tells you what we did.",
    hero: itSupportImg.url,
  },
  {
    slug: "data-center",
    title: "Data Center Network",
    short: "Racks built clean. Cables you can read.",
    tagline: "Rack build-out, patching, cable management & cooling",
    icon: "Server",
    features: [
      "Rack assembly, mounting & power distribution",
      "High-density patch panel termination",
      "Colour-coded cable management & labeling",
      "Switch stacking & uplink design",
      "Cooling, airflow and UPS planning",
    ],
    description:
      "We specialise in clean, serviceable data-center networks. Every cable is measured, routed and labelled so future changes take minutes — not days.",
    hero: dataCenterImg.url,
  },
  {
    slug: "computer-lab-setup",
    title: "Computer Lab Setup",
    short: "Turn-key labs for schools, colleges and offices.",
    tagline: "From wiring to workstations — ready on day one",
    icon: "MonitorSmartphone",
    features: [
      "Power, networking & internet provisioning",
      "Workstation imaging & deployment",
      "Training and handover documentation",
    ],
    description:
      "Complete computer lab deployments — power, network drops, desks, PCs, software and a teacher console. We deliver a lab that's ready for students from the first session.",
    hero: computerLabImg.url,
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

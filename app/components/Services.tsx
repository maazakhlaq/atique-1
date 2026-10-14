import Image from "next/image";

const services = [
  // ── General / Existing Services ─────────────────
  {
    title: "Architectural Design & Consultancy",
    image: "/images/Consultancy.jpg",
    group: "General",
  },
  {
    title: "Engineering & Construction",
    image: "/images/Engineering.jpg",
    group: "General",
  },
  {
    title: "Warehouses & Industrial Buildings",
    image: "/images/Warehouses.jpg",
    group: "General",
  },
  {
    title: "Electrical Wiring & Low Current Works",
    image: "/images/Electrical.jpg",
    group: "General",
  },
  {
    title: "Industrial Projects & Temporary Facilities",
    image: "/images/Industrial.jpg",
    group: "General",
  },
  {
    title: "Operational & Technical Support Services",
    image: "/images/technical.jpg",
    group: "General",
  },
  {
    title: "Asphalt & Paving Works",
    image: "/images/Paving.jpg",
    group: "General",
  },

  // ── Civil Construction Works ────────────────────
  {
    title: "Civil Construction Works",
    image: "/images/Civil & Structural Works.jpg",
    group: "Civil",
  },
  {
    title: "Infrastructure Works",
    image: "/images/Civil & Structural Works.jpg",
    group: "Civil",
  },
  {
    title: "Building Maintenance and Renovation",
    image: "/images/maintinance.jpg",
    group: "Civil",
  },
  {
    title: "External and Landscaping Works",
    image: "/images/External and Landscaping Works.jpg",
    group: "Civil",
  },
  {
    title: "Industrial and Commercial Civil Works",
    image: "/images/Industrial and Commercial Civil Works.jpg",
    group: "Civil",
  },
  {
    title: "Civil Engineering and Project Support",
    image: "/images/Engineering.jpg",
    group: "Civil",
  },

  // ── Mechanical Works ────────────────────────────
  {
    title: "HVAC Systems",
    image: "/images/HVAC Support.jpg",
    group: "Mechanical",
  },
  {
    title: "Plumbing and Sanitary Works",
    image: "/images/Plumbing and Sanitary Works.jpg",
    group: "Mechanical",
  },
  {
    title: "Firefighting Systems",
    image: "/images/firefignter.jpg",
    group: "Mechanical",
  },
  {
    title: "Mechanical Piping Works",
    image: "/images/Mechanical Piping Works.jpg",
    group: "Mechanical",
  },
  {
    title: "Pump and Equipment Installation",
    image: "/images/Pump and Equipment Installation.jpg",
    group: "Mechanical",
  },
  {
    title: "Industrial Mechanical Works",
    image: "/images/Industrial.jpg",
    group: "Mechanical",
  },
  {
    title: "Ducting and Ventilation Works",
    image: "/images/HVAC Support.jpg",
    group: "Mechanical",
  },

  // ── Security & Networking Systems ───────────────
  {
    title: "CCTV Surveillance Systems",
    image: "/images/cctv.jpg",
    group: "Security",
  },
  {
    title: "Access Control Systems",
    image: "/images/Access Control Systems.jpg",
    group: "Security",
  },
  {
    title: "Intrusion Detection and Alarm Systems",
    image: "/images/infusion detection.png",
    group: "Security",
  },
  {
    title: "Video Intercom and Door Entry Systems",
    image: "/images/Video Intercom and Door Entry Systems.jpg",
    group: "Security",
  },
  {
    title: "Network and Structured Cabling",
    image: "/images/image_10a71652.jpg",
    group: "Security",
  },
  {
    title: "Smart Security and Integrated Systems",
    image: "/images/Smart Security and Integrated Systems.jpg",
    group: "Security",
  },
  {
    title: "Fiber Optic & Network Infrastructure",
    image: "/images/Fiber Optic & Network Infrastructure.jpg",
    group: "Security",
  },
];

const groups = [
  { key: "General", label: "General Services" },
  { key: "Civil", label: "Civil Construction Works" },
  { key: "Mechanical", label: "Mechanical Works" },
  { key: "Security", label: "Security & Networking Systems" },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-amber-600 tracking-widest text-xs mb-2">
          CAPABILITIES
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Our Services
        </h2>
        <p className="text-slate-600 max-w-2xl mb-12">
          Integrated civil, mechanical, electrical, security and networking
          services — delivered with discipline, quality and safety.
        </p>

        {groups.map((g) => {
          const items = services.filter((s) => s.group === g.key);
          if (items.length === 0) return null;

          return (
            <div key={g.key} className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  {g.label}
                </h3>
                <div className="flex-1 h-px bg-slate-200" />
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((s, i) => (
                  <div
                    key={s.title}
                    className="group rounded-lg border border-slate-200 overflow-hidden hover:border-amber-500 hover:shadow-lg transition"
                  >
                    <div className="relative h-40 w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      
                      <p className="font-semibold text-slate-900 group-hover:text-amber-700 transition">
                        {s.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
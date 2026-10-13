import Image from "next/image";

const services = [
  {
    title: "Architectural Design & Consultancy",
    image: "/images/Consultancy.jpg",
  },
  {
    title: "Fire Fighting Systems",
    image: "/images/firefignter.jpg",
  },
  {
    title: "Engineering & Construction",
    image: "/images/Engineering.jpg",
  },
  {
    title: "Warehouses & Industrial Buildings",
    image: "/images/Warehouses.jpg",
  },
  {
    title: "Electrical Wiring & Low Current Works",
    image: "/images/Electrical.jpg",
  },
  {
    title: "CCTV & Security Systems",
    image: "/images/cctv.jpg",
  },
  {
    title: "Fiber Optic & Network Infrastructure",
    image: "/images/image_10a71652.jpg",
  },
  {
    title: "Industrial Projects & Temporary Facilities",
    image: "/images/Industrial.jpg",
  },
  {
    title: "Operational & Technical Support Services",
    image: "/images/technical.jpg",
  },
  {
    title: "Building Maintenance",
    image: "/images/maintinance.jpg",
  },
  {
    title: "Civil & Structural Works",
    image: "/images/Civil & Structural Works.jpg",
  },
  {
    title: "Asphalt & Paving Works",
    image: "/images/Paving.jpg",
  },
  {
    title: "Ducting & HVAC Support",
    image: "/images/HVAC Support.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-amber-600 tracking-widest text-xs mb-2">
          CAPABILITIES
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group rounded-lg border border-slate-200 overflow-hidden hover:border-amber-500 hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative h-40 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div className="p-5">
                
                <p className="font-semibold text-slate-900 group-hover:text-amber-700 transition">
                  {s.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
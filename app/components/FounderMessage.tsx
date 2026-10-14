import Image from "next/image";

export default function FounderMessage() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-center">
        {/* Founder photo */}
        <div className="md:col-span-1">
          <div className="relative w-full max-w-xs mx-auto">
            <div className="aspect-square rounded-lg overflow-hidden border border-slate-200 bg-white">
              <Image
                src="/images/logo.jpeg"
                alt="Atif Imtiaz Ahmed — Founder & CEO"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <p className="text-amber-600 tracking-widest text-xs mb-3">
            FOUNDER&apos;S MESSAGE
          </p>

          <blockquote className="border-l-4 border-amber-500 pl-6">
            <p className="text-xl md:text-2xl italic text-slate-700 leading-relaxed">
              &ldquo;At Atqon Industrial Services, our vision is to deliver
              excellence, build lasting relationships, and create sustainable
              value. We are committed to integrity, innovation, and the highest
              standards of quality in everything we do. Your trust inspires us
              to grow, innovate, and achieve greater success together.&rdquo;
            </p>

            <footer className="mt-6">
              <p className="font-bold text-slate-900">Atif Imtiaz Ahmed</p>
              <p className="text-sm text-slate-500">
                Founder &amp; CEO
              </p>
              <p className="text-sm text-slate-500">
                Atqon Industrial Services
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
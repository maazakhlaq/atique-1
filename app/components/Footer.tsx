'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
    useEffect(() => {
    // This runs only on the client, after hydration
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        {/* Column 1 — Brand + logo */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/logo.jpeg"
              alt="Atqon Industrial Services"
              width={48}
              height={48}
              className="object-contain bg-white rounded p-1"
            />
            <div className="leading-tight">
              <p className="text-white font-bold">ATQON</p>
              <p className="text-[10px] tracking-widest text-amber-500">
                INDUSTRIAL SERVICES
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Integrated industrial and technical services across construction,
            engineering, maintenance and infrastructure.
          </p>

          {/* Registration details */}
          <div className="mt-4 space-y-1 text-xs text-slate-500">
            <p>
              <span className="text-slate-300 font-medium">CR:</span>{" "}
              7055391846
            </p>
            <p>
              <span className="text-slate-300 font-medium">VAT:</span>{" "}
              315094522400003
            </p>
          </div>
        </div>

        {/* Column 2 — Services */}
        <div>
          <p className="text-white font-semibold mb-4">Services</p>
          <ul className="space-y-2 text-sm">
            <li>Engineering &amp; Construction</li>
            <li>Fire Fighting Systems</li>
            <li>HVAC &amp; Ducting Support</li>
            <li>Electrical &amp; Low Current Works</li>
            <li>Civil &amp; Structural Works</li>
            <li>Building Maintenance</li>
          </ul>
        </div>

        {/* Column 3 — Contact + branches */}
        <div>
          <p className="text-white font-semibold mb-4">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>
              📞{" "}
              <a
                href="tel:+966559030323"
                className="hover:text-amber-500  transition"
              >
                +966 55 903 0323 
                 
              </a>
             
            </li>
             <li>
              📞{" "}
             
               <a
                href="tel:+966563375187"
                className="hover:text-amber-500 transition"
              >
                +966 56 3375187
                
              </a>
            </li>
            <li>
              📧{" "}
              <a
                href="mailto:info@atqon.sa.com"
                className="hover:text-amber-500 transition"
              >
                info@atqon.com.sa
              </a>
            </li>
            <li>
              🌐{" "}
              <a
                href="https://www.atqon.com.sa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-500 transition"
              >
                www.atqon.com.sa
              </a>
            </li>
          </ul>

          <p className="text-white font-semibold mt-6 mb-2">Branches</p>
          <ul className="space-y-1 text-sm">
            <li>📍 Jeddah (Head Office)</li>
            <li>📍 Yanbu</li>
            <li>📍 Jubail</li>
            <li>📍 Riyadh</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>
            © {year} Atqon Industrial Services. All rights
            reserved.
          </p>
          <p>
            CR 7055391846 · VAT 315094522400003
          </p>
        </div>
      </div>
    </footer>
  );
}
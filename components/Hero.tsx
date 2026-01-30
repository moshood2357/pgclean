import Link from "next/link";
export default function Hero() {
  return (
    <div>
      <section className="relative w-full h-[90vh] sm:h-screen overflow-hidden">
        {/* 🔹 Background Video */}
        <div className="absolute inset-0 w-full h-full ">
          <video
            id="heroVideo"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            // poster="/luxury.png"
            aria-hidden="true"
          >
            <source src="/spray.mp4" type="video/mp4" />
            <source src="/spray.webm" type="video/webm" />
          </video>

          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* 🔹 Hero Text Content */}
        <div className="py-5 relative z-10 flex flex-col justify-center items-center h-full px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto text-left">
          <h1
            className="text-white font-extrabold mb-6 leading-tight tracking-tight
text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span className="block">Professional Carpet &</span>
            <span className="block">Upholstery Cleaning</span>
          </h1>

          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-3 max-w-2xl leading-relaxed pb-4">
            PG Clean Ltd. provides reliable, professional carpet & upholstery
            cleaning across Gloucestershire. We use professional equipment to
            deliver outstanding results for homes and businesses.
          </p>

          <p className="text-[#036e92] font-medium text-sm sm:text-base md:text-lg tracking-wide mb-5 italic">
            It's not just clean — it's PG Clean.
          </p>

          <Link
            href="/contact-us"
            className="bg-[#4CD1FE] text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#41bae2] transition-all duration-300"
          >
            GET IN TOUCH →
          </Link>
        </div>
      </section>
    </div>
  );
}

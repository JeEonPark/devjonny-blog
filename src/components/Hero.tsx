import Image from "next/image";

interface HeroProps {
  children: React.ReactNode;
}

// Banner band shared by the post pages; same treatment as the home page's band.
export default function Hero({ children }: HeroProps) {
  return (
    <section className="relative h-[240px] md:h-[300px] overflow-hidden flex items-end">
      <Image
        src="/images/banner.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-40"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-[rgb(var(--bg))]" />
      <div className="relative z-[1] w-full max-w-[720px] mx-auto px-4 md:px-6 pb-10 md:pb-12 text-[rgb(var(--white))]">
        {children}
      </div>
    </section>
  );
}

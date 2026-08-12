import Image from "next/image";
import Link from "next/link";

export default async function Hero() {
  return (
    <div>
      <div className="max-h-screen w-full relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)",
          }}
        />

        <section className="max-w-7xl mx-auto relative flex flex-col items-center justify-center text-center py-36 text-white">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full container mx-auto gap-14 md:gap-0">
            <div className="flex-1 ">
              <div className="max-w-[486px]">
                <h1 className="text-white font-bold text-5xl leading-16 ">
                  Hello, my name is Mayesha Mumtaz
                </h1>
                <p className="text-[#828282] text-xl py-5">
                  I build full-stack web apps with clean frontends and scalable
                  backends.
                </p>
                <button>
                  <Link
                    href="/projects"
                    className="px-6 py-2 rounded-md border-2 border-[#25282B] hover:bg-[#FDC435] hover:border-[#FDC435] duration-300 transition-all font-semibold hover:text-white capitalize"
                  >
                    project
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="https://res.cloudinary.com/dtb6o7zzr/image/upload/v1761590871/e789a464-ae43-49ea-b6ee-6f1aad2d2d94_gwdliu.jpg"
                alt="Mayesha's Profile Picture"
                width={500}
                height={500}
                className="rounded-full shadow-lg object-cover ml-auto border-4 border-[#FDC435]"
                priority
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

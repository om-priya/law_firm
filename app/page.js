import TypeWriter from "@/components/typewriter";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div>
        <Image
          src="/images/supreme_court_banner.jpg"
          width={0}
          height={0}
          sizes="100vw"
          alt="Picture of the author"
          style={{ width: "100%", height: "30%" }}
        />
      </div>
      <section className="flex flex-col justify-center items-center gap-5">
        <div className="font-semibold text-6xl sm:text-7xl text-[#7752FE] text-center">
          Law Firm Name
        </div>
        <div className="text-center mb-6">
          <TypeWriter />
        </div>
        <div className="m-4">
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            assumenda repudiandae explicabo quisquam sequi optio sint dicta.
            Ipsam asperiores optio recusandae? Perspiciatis officiis sequi omnis
            quod accusantium dolorem blanditiis quo vel autem ipsum. Eveniet
            maxime et voluptatibus natus ipsum aliquid incidunt, corporis veniam
            blanditiis quos reiciendis ut obcaecati hic consequuntur accusantium
            quam ratione impedit dolore laboriosam iste expedita. Odio hic
            consequuntur a id voluptatibus ad! Nam magnam, architecto veniam
            facilis repudiandae voluptatum dicta, voluptas corporis, nemo quas
            quia rerum! Architecto nulla vero, tempora dolores atque labore
            voluptates excepturi non omnis ea beatae, iure, aliquid est sed!
            Reiciendis labore eligendi tempore.
          </p>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center gap-5 mt-2 flex-wrap">
          <Link href={"/about"}>
            <button className="p-1 border-2 bg-[#7752FE] text-white hover:scale-125 sm:w-36">
              About Us
            </button>
          </Link>
          <Link href={"/team"}>
            <button className="p-1 border-2 bg-[#7752FE] text-white hover:scale-125 sm:w-36">
              Team Members
            </button>
          </Link>
          <Link href={"/services"}>
            <button className="p-1 border-2 bg-[#7752FE] text-white hover:scale-125 sm:w-36">
              Services
            </button>
          </Link>
          <Link href={"/policy"}>
            <button className="p-1 border-2 bg-[#7752FE] text-white hover:scale-125 sm:w-36">
              Policy
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

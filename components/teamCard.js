import Image from "next/image";

export default function TeamCard({ imageUrl, name, law_perspective }) {
  return (
    <div className="mt-2 p-2">
      <section className="flex flex-col sm:flex-row items-center justify-evenly gap-10">
        <Image
          src={imageUrl}
          width={300}
          height={300}
          alt="Profile Of Respective Member"
          className="rounded-full"
        />
        <div className="mt-6 flex flex-col items-center justify-evenly">
          <h3 className="font-semibold text-2xl text-[#7752FE]">{name}</h3>
          <p>{law_perspective}</p>
        </div>
      </section>
    </div>
  );
}

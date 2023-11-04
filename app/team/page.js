import TeamCard from "@/components/teamCard";
const teamInfo = [
  {
    id: 1,
    imageUrl: "/images/teamMembers/member1.jpg",
    name: "demo name",
    law_perspective: "law is good",
  },
  {
    id: 2,
    imageUrl: "/images/teamMembers/member1.jpg",
    name: "demo name",
    law_perspective: "law is good",
  },
  {
    id: 3,
    imageUrl: "/images/teamMembers/member1.jpg",
    name: "demo name",
    law_perspective: "law is good",
  },
  {
    id: 4,
    imageUrl: "/images/teamMembers/member1.jpg",
    name: "demo name",
    law_perspective: "law is good",
  },
];
export default function team() {
  return (
    <main>
      <div className="mt-6 text-center text-5xl font-semibold">
        <span className="text-[#7752FE]">Team</span> Members
      </div>
      <div className="mt-4 text-center italic">
        <p>
          "Teamwork is the ability to work together toward a common vision. It
          is the fuel that allows common people to attain uncommon results." -
          Andrew Carnegie
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        {teamInfo.map((data, index) => {
          return (
            <TeamCard
              key={index}
              imageUrl={data.imageUrl}
              name={data.name}
              law_perspective={data.law_perspective}
            />
          );
        })}
      </div>
    </main>
  );
}

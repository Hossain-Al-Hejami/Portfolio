
import logo1 from "../assets/logo-1.png";
import logo2 from "../assets/logo-2.png";
import logo3 from "../assets/logo-3.png";
import logo4 from "../assets/logo-4.png";

const imgs = [
  { name: "React", img: logo1 },
  { name: "TypeScript", img: logo2 },
  { name: "Docker", img: logo3 },
  { name: "Docker", img: logo4 },
];

export default function TechStack() {
  return (
    <section id="#" className="py-16">
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-xl mb-10">
          Trusted by
        </h1>

        <div className="flex gap-30 items-center">
          {imgs.map((item) => (
            <div
              key={item.name}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-40"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

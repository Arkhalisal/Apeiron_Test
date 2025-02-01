// this is the component that renders the element chart

// system imports
import { PieChart, Pie, Cell } from "recharts";
import Image from "next/image";

// local imports
import normalPlanet from "@public/image-assets/icon-planet-state-normal.png";

// types
import { Elements } from "@/types";

export default function ElementChart({ fire, water, earth, air }: Elements) {
  // filter out elements with 0 value and create a new array
  const elements = [
    { name: "Fire", value: fire, color: "#FF4B4B" },
    { name: "Water", value: water, color: "#4B9EFF" },
    { name: "Air", value: air, color: "#50C878" },
    { name: "Earth", value: earth, color: "#8B7355" },
  ].filter((item) => item.value > 0);

  // if there is no element data, return a message
  if (elements.length === 0) {
    return <div className="text-white text-center text-5xl">No element data available</div>;
  }

  return (
    <div className="relative p-[3px] bg-[#1A1A1A] w-[350px] border-[3px] border-[#463829] sm:w-[600px]">
      {/* corners of the border */}
      <div className="absolute -top-[3px] -left-[3px] w-8 h-8 border-t-[3px] border-l-[3px] border-[#8B7355]" />
      <div className="absolute -top-[3px] -right-[3px] w-8 h-8 border-t-[3px] border-r-[3px] border-[#8B7355]" />
      <div className="absolute -bottom-[3px] -left-[3px] w-8 h-8 border-b-[3px] border-l-[3px] border-[#8B7355]" />
      <div className="absolute -bottom-[3px] -right-[3px] w-8 h-8 border-b-[3px] border-r-[3px] border-[#8B7355]" />

      {/* main content */}
      <div className="flex flex-col items-center justify-center my-8 sm:flex-row sm:mr-8">
        {/* pie chart and inner planet image */}
        <div className="relative">
          {/* pie chart */}
          <PieChart width={200} height={200}>
            <Pie
              data={elements}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              stroke="none"
            >
              {elements.map((element, index) => (
                <Cell key={`cell-${index}`} fill={element.color} className="outline-none" />
              ))}
            </Pie>
          </PieChart>

          {/* inner planet image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-[46%] -translate-y-[46%] w-[120px] h-[120px]">
            <Image src={normalPlanet} alt="Planet" fill className="object-cover" priority />
          </div>
        </div>

        {/* element percentages data */}
        <div className="flex flex-col gap-2">
          {elements.map((element, index) => (
            <div key={index} className="flex items-center gap-2">
              {/* element icon */}
              <div className="w-3 h-3 rotate-45" style={{ backgroundColor: element.color }} />
              {/* element name and percentage */}
              <span className="text-white text-sm">
                {element.name} - {element.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

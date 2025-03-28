import { Projects } from "@/components/HomePage/Projects";
import { Frame } from "@/components/Utils/Frame";
import { Navbar } from "@/components/Utils/Navbar";

export default function projects() {
  return (
    <div>
      <Frame>
        <Navbar />
        <Projects />
      </Frame>
    </div>
  )
}
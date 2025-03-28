import { Experience } from "@/components/HomePage/Experience";
import { Frame } from "@/components/Utils/Frame";
import { Navbar } from "@/components/Utils/Navbar";

export default function experience() {
  return (
    <div>
      <Frame>
        <Navbar />
        <Experience />
      </Frame>
    </div>
  )
}
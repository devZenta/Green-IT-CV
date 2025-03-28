import { Education } from "@/components/HomePage/Education";
import { Frame } from "@/components/Utils/Frame";
import { Navbar } from "@/components/Utils/Navbar";

export default function education() {
  return (
    <div>
      <Frame>
        <Navbar />
        <Education />
      </Frame>
    </div>
  )
}
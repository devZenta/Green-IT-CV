import { Contact } from "@/components/HomePage/Contact";
import { Frame } from "@/components/Utils/Frame";
import { Navbar } from "@/components/Utils/Navbar";

export default function contact() {
  return (
    <div>
      <Frame>
        <Navbar />
        <Contact />
      </Frame>
    </div>
  )
}
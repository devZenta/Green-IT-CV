import { Frame } from "@/components/Utils/Frame";
import { Navbar } from "@/components/Utils/Navbar";
import { QuoteContent } from "@/components/Utils/Quote";

export default function Page() {
  return (
    <div>
      <Frame>
        <Navbar />
        <QuoteContent />
      </Frame>
    </div>
  )
}
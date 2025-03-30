import { Frame } from "@/components/Utils/Frame";
import { QuoteContent } from "@/components/HomePage/Quote";
import { VerticalName } from "@/components/Utils/VerticalName";

export default function Page() {
  return (
    <div>
      <Frame>
        <QuoteContent />
        <VerticalName />
      </Frame>
    </div>
  )
}
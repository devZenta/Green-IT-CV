import { Frame } from "@/components/Utils/Frame";
import { QuoteContent } from "@/components/HomePage/Quote";
import { SocialButtons } from "@/components/HomePage/Socials";

export default function Page() {
  return (
    <div>
      <Frame>
        <QuoteContent />
        <SocialButtons />
      </Frame>
    </div>
  )
}
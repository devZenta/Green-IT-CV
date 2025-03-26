import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

export function Header() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1a8870] to-[#1a6470] p-8 shadow-xl">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="relative">
        <h1 className="text-4xl font-bold mb-2">Hugo Ghesquier</h1>
        <h2 className="text-xl text-emerald-200 mb-4">Junior Software Engineer</h2>
        
        <div className="flex flex-wrap gap-4 text-sm">
          <ContactItem icon={<Mail className="w-4 h-4" />} text="hugo.ghesquier.pro@gmail.com" />
          <ContactItem icon={<Phone className="w-4 h-4" />} text="+33 6 11 07 15 78" />
          <ContactItem icon={<MapPin className="w-4 h-4" />} text="Lille, France" />
          <ContactItem icon={<Github className="w-4 h-4" />} text="https://github.com/devZenta" />
          <ContactItem icon={<Linkedin className="w-4 h-4" />} text="https://www.linkedin.com/in/hugo-ghesquier/" />
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span>{text}</span>
    </div>
  );
}
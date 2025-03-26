import { NavBar } from "@/components/ui/tubelight-navbar"

export function Navbar() {
  const navItems = [
    { name: 'Home', url: '#'},
    { name: 'Education', url: '#'},
    { name: 'Experience', url: '#'},
    { name: 'Projects', url: '#'},
    { name: 'Contact', url: '#'}
  ]

  return <NavBar items={navItems} />
}
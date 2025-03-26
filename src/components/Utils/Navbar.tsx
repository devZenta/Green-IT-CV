import { NavBar } from "@/components/ui/tubelight-navbar"

export function Navbar() {
  const navItems = [
    { name: 'Home', url: '#'},
    { name: 'About', url: '#'},
    { name: 'Projects', url: '#'},
    { name: 'Resume', url: '#'}
  ]

  return <NavBar items={navItems} />
}
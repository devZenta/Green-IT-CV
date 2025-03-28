import { NavBar } from "@/components/ui/tubelight-navbar"

export function Navbar() {
  const navItems = [
    { name: 'Home', url: '/'},
    { name: 'Education', url: '/education'},  
    { name: 'Experience', url: '/experience'},
    { name: 'Projects', url: '/projects'},
    { name: 'Contact', url: '/contact'},
  ]

  return <NavBar items={navItems} />
}
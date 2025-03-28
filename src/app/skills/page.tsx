import { Frame } from "@/components/Utils/Frame";
//import { Navbar } from "@/components/Utils/Navbar";
import { HorizontalTimeline } from "@/components/Utils/Timeline";

const timelineItems = [
  {
    id: "1",
    date: "2020",
    title: "Fondation",
    description: "Création de l'entreprise et développement du concept initial.",
  },
  {
    id: "2",
    date: "2021",
    title: "Expansion",
    description: "Ouverture de nouveaux marchés et croissance de l'équipe.",
  },
  {
    id: "3",
    date: "2022",
    title: "Innovation",
    description: "Lancement de nouveaux produits et services révolutionnaires.",
  },
  {
    id: "4",
    date: "2023",
    title: "Reconnaissance",
    description: "Obtention de prix d'excellence et reconnaissance internationale.",
  },
  {
    id: "5",
    date: "2024",
    title: "Avenir",
    description: "Nouvelles perspectives et projets ambitieux pour l'avenir.",
  },
]

export default function skills() {
  return (
    <div>
      <Frame>
        <HorizontalTimeline items={timelineItems} />
      </Frame>
    </div>
  )
}
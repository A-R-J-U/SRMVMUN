import { Star, Award, Users, MessageSquare, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TeamMember {
  name: string;
  role: string;
  description: string;
  followers: number;
  following: number;
  image: string;
}

const coreTeamMembers = [
  {
    name: "Sarah Johnson",
    role: "Secretary General",
    description:
      "Leading diplomatic excellence and fostering international cooperation through innovative MUN experiences.",
    followers: 1247,
    following: 892,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Michael Chen",
    role: "Deputy Secretary General",
    description: "Coordinating global initiatives and ensuring seamless execution of diplomatic simulations.",
    followers: 1089,
    following: 743,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Aisha Patel",
    role: "Director General",
    description: "Overseeing strategic planning and maintaining the highest standards of diplomatic protocol.",
    followers: 956,
    following: 634,
    image: "/placeholder.svg?height=400&width=300",
  },
]

const usgMembers = [
  {
    name: "Emma Rodriguez",
    role: "USG ECOSOC",
    description: "Economic and Social Council specialist focused on sustainable development goals.",
    followers: 687,
    following: 423,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "James Wilson",
    role: "USG UNSC",
    description: "Security Council expert in international peace and security matters.",
    followers: 743,
    following: 512,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Priya Sharma",
    role: "USG UNGA",
    description: "General Assembly coordinator for multilateral diplomatic discussions.",
    followers: 592,
    following: 387,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "David Kim",
    role: "USG WHO",
    description: "World Health Organization delegate specializing in global health policies.",
    followers: 634,
    following: 445,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Sofia Martinez",
    role: "USG UNESCO",
    description: "Educational and cultural organization representative promoting international cooperation.",
    followers: 578,
    following: 356,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Ryan Thompson",
    role: "USG UNHCR",
    description: "Refugee affairs specialist dedicated to humanitarian protection and assistance.",
    followers: 612,
    following: 398,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Fatima Al-Zahra",
    role: "USG UNICEF",
    description: "Children's rights advocate working on global child welfare initiatives.",
    followers: 689,
    following: 467,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Lucas Brown",
    role: "USG UNDP",
    description: "Development programme coordinator focusing on poverty reduction and sustainability.",
    followers: 556,
    following: 334,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Zara Ahmed",
    role: "USG UNEP",
    description: "Environmental programme specialist addressing climate change and conservation.",
    followers: 623,
    following: 412,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Oliver Davis",
    role: "USG ILO",
    description: "Labor organization representative promoting decent work and social justice.",
    followers: 567,
    following: 345,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Anya Volkov",
    role: "USG IMF",
    description: "International Monetary Fund delegate specializing in global financial stability.",
    followers: 698,
    following: 478,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Carlos Mendez",
    role: "USG World Bank",
    description: "Development finance expert working on poverty alleviation and economic growth.",
    followers: 645,
    following: 423,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Leila Hassan",
    role: "USG WTO",
    description: "Trade organization specialist facilitating international commerce and fair trade.",
    followers: 587,
    following: 367,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Noah Anderson",
    role: "USG IAEA",
    description: "Atomic energy agency representative focusing on nuclear safety and non-proliferation.",
    followers: 612,
    following: 389,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Amara Okafor",
    role: "USG UNHRC",
    description: "Human Rights Council advocate promoting fundamental freedoms and dignity.",
    followers: 734,
    following: 456,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Ethan Lee",
    role: "USG UNODC",
    description: "Drugs and crime office specialist combating transnational organized crime.",
    followers: 543,
    following: 321,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Isabella Garcia",
    role: "USG UNIDO",
    description: "Industrial development organization coordinator promoting sustainable industrialization.",
    followers: 598,
    following: 378,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Kai Nakamura",
    role: "USG ITU",
    description: "Telecommunications union representative advancing global connectivity and digital inclusion.",
    followers: 567,
    following: 345,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Noor Al-Rashid",
    role: "USG WIPO",
    description: "Intellectual property organization specialist protecting innovation and creativity.",
    followers: 623,
    following: 401,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Benjamin Clark",
    role: "USG WMO",
    description: "Meteorological organization expert on weather, climate, and water resources.",
    followers: 578,
    following: 356,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Yasmin Osman",
    role: "USG ICAO",
    description: "Civil aviation organization coordinator ensuring safe and sustainable air transport.",
    followers: 612,
    following: 389,
    image: "/placeholder.svg?height=400&width=300",
  },
]

function ProfileCard({ member, isCore = false }: { member: TeamMember; isCore?: boolean }) {
  return (
    <div className="group relative h-[500px] w-full max-w-sm mx-auto">
      <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={member.image || "/placeholder.svg"} alt={member.name} className="h-full w-full object-cover" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/60 via-teal-600/40 to-transparent"></div>
          {/* Bottom Translucent Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
        </div>

        {/* Badge */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white border border-white/30">
            {isCore ? <Star className="h-4 w-4 fill-current" /> : <Award className="h-4 w-4" />}
            {isCore ? "Core Team" : "Under Secretary"}
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          {/* Name and Role */}
          <div className="mb-4">
            <h3 className="mb-1 text-2xl font-bold text-white flex items-center gap-2">
              {member.name}
              <div className="h-5 w-5 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                <div className="h-2 w-2 rounded-full bg-white"></div>
              </div>
            </h3>
            <p className="text-white/90 font-medium mb-2">{member.role}</p>
            <p className="text-sm text-white/80 leading-relaxed line-clamp-3">{member.description}</p>
          </div>

          {/* Stats and Button */}
          <div className="flex items-center justify-between">
            <div className="flex gap-6">
              <div className="flex items-center gap-1 text-white/90">
                <Users className="h-4 w-4" />
                <span className="font-bold text-sm">{member.followers}</span>
              </div>
              <div className="flex items-center gap-1 text-white/90">
                <MessageSquare className="h-4 w-4" />
                <span className="font-bold text-sm">{member.following}</span>
              </div>
            </div>
            <Button
              size="sm"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-sm px-4"
              variant="outline"
            >
              Connect <Plus className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Cards() {
  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            MUN Leadership Team
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet our distinguished team of diplomatic leaders and Under Secretary Generals committed to fostering
            international cooperation and excellence in Model United Nations.
          </p>
        </div>

        {/* Core Team Section */}
        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">Core Leadership Team</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {coreTeamMembers.map((member) => (
              <ProfileCard key={member.name} member={member} isCore={true} />
            ))}
          </div>
        </div>

        {/* USG Section */}
        <div>
          <h2 className="mb-12 text-center text-3xl font-bold text-white">Under Secretary Generals</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {usgMembers.map((member) => (
              <ProfileCard key={member.name} member={member} isCore={false} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <p className="text-gray-500">Join our mission to create future diplomatic leaders and global citizens.</p>
        </div>
      </div>
    </div>
  )
}
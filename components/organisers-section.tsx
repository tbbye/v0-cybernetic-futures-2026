import { OrganiserCard } from "@/components/organiser-card"

const organisers = [
  {
    name: "Adelaide Genay",
    bio: "Researcher in AR/VR and human-computer interaction.",
  },
  {
    name: "Martin Gibbs",
    bio: "Professor of HCI focusing on digital memorialisation and games.",
  },
  {
    name: "Tom Byers",
    bio: "PhD researcher exploring time and user experience in games.",
  },
]

export function OrganisersSection() {
  return (
    <section className="py-16 px-4 bg-primary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-white">
          Organisers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisers.map((organiser) => (
            <OrganiserCard
              key={organiser.name}
              name={organiser.name}
              bio={organiser.bio}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

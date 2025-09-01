import Image from "next/image"
import { Calendar, MapPin, Clock } from "lucide-react"

function EventHero() {
  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto max-w-4xl px-6 py-0">
        <Image
          src="/images/event-hero-banner.png"
          alt="Event banner for Beyond Opens: Data-Driven Messaging Strategies That Actually Work"
          width={1280}
          height={480}
          className="w-full h-auto rounded-md border object-cover"
          priority
        />
      </div>
    </header>
  )
}

function EventDetails() {
  return (
    <section aria-labelledby="event-details-title" className="w-full border-b bg-background">
      <h2 id="event-details-title" className="sr-only">
        Event details
      </h2>
      <div className="mx-auto max-w-4xl px-6 py-5">
        <ul className="grid grid-cols-1 gap-3 text-sm md:grid-cols-3">
          <li className="flex items-center gap-3 rounded-md border bg-card px-4 py-3">
            <Calendar className="size-4 text-primary" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="font-medium">Date</span>
              <span className="text-muted-foreground">September 13, 2025</span>
            </div>
          </li>
          <li className="flex items-center gap-3 rounded-md border bg-card px-4 py-3">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="font-medium">Location</span>
              <span className="text-muted-foreground">Hilton, Embassy GolfLinks, Bengaluru</span>
            </div>
          </li>
          <li className="flex items-center gap-3 rounded-md border bg-card px-4 py-3">
            <Clock className="size-4 text-primary" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="font-medium">Time</span>
              <span className="text-muted-foreground">10:00 AM – 1:00 PM</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

type AgendaItem = {
  time: string
  title: string
  description: string
}

const agenda: AgendaItem[] = [
  {
    time: "10:00 – 10:30 AM",
    title: "Registration & Executive Networking",
    description: "Arrive, grab a coffee, and connect with fellow industry leaders before the session kicks off.",
  },
  {
    time: "10:30 – 11:00 AM",
    title: "Welcome & The Channel Deep-Dive",
    description:
      "Introduction by Vipasha, followed by an expert session with Vipasha & Karthik on the nuances of Email vs. WhatsApp vs. SMS.",
  },
  {
    time: "11:00 AM – 12:00 PM",
    title: "Interactive Strategy Sessions",
    description:
      "Flow through reactivation playbooks and industry benchmarks. Featuring research facts from Santosh and moderated group discussions.",
  },
  {
    time: "12:00 – 1:00 PM",
    title: "Live Demo & Product Q&A",
    description:
      "Witness a live product demo by Praveen and get all your questions answered in a dedicated Q&A session.",
  },
  {
    time: "1:00 PM Onwards",
    title: "Networking Lunch",
    description:
      "Join fellow leaders and our speakers for lunch, a perfect opportunity to continue the conversation and build new connections",
  },
]

function AgendaTimeline() {
  return (
    <section aria-labelledby="agenda-title" className="w-full">
      <div className="mx-auto max-w-4xl px-6 py-10 md:py-12">
        <div className="mb-6">
          <h2 id="agenda-title" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
            A Morning Packed With Actionable Insights
          </h2>
        </div>

        <ol className="ml-3">
          {agenda.map((item, idx) => (
            <li key={idx} className="relative mb-10 border-l-2 border-border pl-6 last:mb-0 group">
              <div
                className="absolute left-0 -translate-x-1/2 top-2 h-3 w-3 rounded-full border-2 border-primary bg-background ring-4 ring-background shadow-sm transition-transform duration-200 group-hover:scale-110 py-0 px-0"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-1">
                <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                  {item.time}
                </span>
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <main>
      <EventHero />
      <EventDetails />
      <AgendaTimeline />
    </main>
  )
}

import MaxWidthWrapper from '@/components/MaxWidthWrapper'

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          LAN <span className="text-blue-500">2025</span>
        </h1>
        <p className="text-muted-foreground">
          {/* TODO: Get names from some DB here */}
          The annual gaming get-together {<br />} Hosted by: -names here-
        </p>
      </div>
    </MaxWidthWrapper>
  )
}

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl">
          LAN <span className="text-primary">2025</span>
        </h1>
        <p className="text-muted-foreground">
          {/* TODO: Get names from some DB here */}
          The annual gaming get-together {<br />} Hosted by: -names here-
        </p>
        <div className="flex flex-row sm:flex-row gap-4 mt-6">
          <Link href="/make-team" className={buttonVariants()}>
            Make a Team
          </Link>
          <Button variant={'ghost'} className="text-primary">
            See who is playing today &rarr;
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

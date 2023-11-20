/**
 * v0 by Vercel.
 * @see https://v0.dev/t/X9FM1lRbM0h
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Checkout</h1>
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
              <CardDescription>Enter your details below to proceed with the payment.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="number">Card number</Label>
                <Input id="number" placeholder="Enter your card number" type="text" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiration Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="CVC" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto" type="submit">
                Submit Payment
              </Button>
            </CardFooter>
          </Card>
          <div className="w-full max-w-sm space-y-2">
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              By clicking Submit Payment, you agree to the
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


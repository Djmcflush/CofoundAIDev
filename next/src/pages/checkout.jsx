export default function Component() {
  return (
    <section class="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
      <div class="container px-4 md:px-6">
        <div class="flex flex-col items-center space-y-4 text-center">
          <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Checkout</h1>
          <div
            class="bg-card text-card-foreground w-full max-w-lg rounded-lg border shadow-sm"
            data-v0-t="card"
          >
            <div class="flex flex-col space-y-1.5 p-6">
              <h3 class="text-2xl font-semibold leading-none tracking-tight">Payment Information</h3>
              <p class="text-muted-foreground text-sm">
                Enter your details below to proceed with the payment.
              </p>
            </div>
            <div class="space-y-4 p-6">
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="name"
                  >Name</label
                ><input
                  class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                  >Email</label
                ><input
                  type="email"
                  class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="number"
                  >Card number</label
                ><input
                  type="text"
                  class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="number"
                  placeholder="Enter your card number"
                />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="expiry"
                    >Expiration Date</label
                  ><input
                    class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="expiry"
                    placeholder="MM/YY"
                  />
                </div>
                <div class="space-y-2">
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="cvc"
                    >CVC</label
                  ><input
                    class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="cvc"
                    placeholder="CVC"
                  />
                </div>
              </div>
            </div>
            <div class="flex items-center p-6">
              <button
                class="ring-offset-background focus-visible:ring-ring bg-blue-500 text-white hover:bg-blue-700 ml-auto inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                type="submit"
              >
                Submit Payment
              </button>
            </div>
        </div>
          <div class="w-full max-w-sm space-y-2">
            <p class="text-xs text-zinc-500 dark:text-zinc-400">
              By clicking Submit Payment, you agree to the
              <button class="underline underline-offset-2" href="#" rel="ugc"> Terms &amp; Conditions </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

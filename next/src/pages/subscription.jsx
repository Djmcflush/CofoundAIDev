
import Button  from "../components/Button";
import Link from 'next/link';

export default function Component() {
  return (

<section className="min-h-screen w-full py-12 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 flex items-center">    
  <Link href="/"> 
  <Button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">          BACK
  </Button>
  </Link>
  <div className="w-full max-j-md mx-auto p-4">
    <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      <stripe-pricing-table pricing-table-id="prctbl_1OKgiNFocc3ZhknrN1bQckFV"
      publishable-key="pk_live_Cxxx4MuMby0Ba6X0JlryBM7700DQvvmyh7">
      </stripe-pricing-table>   
  </div>

  </section>
  )
}

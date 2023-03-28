import Image from 'next/image'
import Stripe from 'stripe'


async function getStripeProducts()
{
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? '',{
      apiVersion:'2020-08-27'

    })
    const res = await stripe.prices.list({
      expand:['data.product']
    })
    const prices= res.data 
    return prices

}

export default async function Home() {
  const products = await getStripeProducts()
  console.log(products)
  return (
    <main className='p-4'> 
    </main>
  )
}

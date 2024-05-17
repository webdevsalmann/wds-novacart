import CartItems from "./CartItems"
import Summery from "./Summery"

export default function page() {

  return (
    <section>
      <div className="section-wrapper">
        <h1>Shopping Cart</h1>

        <div className="relative mx-auto sm:w-4/5 lg:w-full  mt-8 grid gap-8 md:gap-12 lg:grid-cols-3">
          <CartItems />
          <Summery />
        </div>
      </div>
    </section>
  )
}

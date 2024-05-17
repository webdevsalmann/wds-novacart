import CategoryCard from '@/components/cards/CategoryCard'
import React from 'react'

export default function Categories() {
  return (
    <section className='sm:pb-0 md:pb-0 lg:pb-0'>
      <div className="section-wrapper">
        <h2 className='relative rest-line'>
          <span>Browse By Category</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-base">
          <CategoryCard
            title="Belts"
            imageUrl="/images/products/braided-leather-belt-1.jpg"
          />
          <CategoryCard
            title="Sunglasses"
            imageUrl="/images/products/dock-sunglasses-1.jpg"
          />
          <CategoryCard
            title="Scarfs"
            imageUrl="/images/products/wool-scarf-1.jpg"
          />
          <CategoryCard
            title="Bags"
            imageUrl="/images/products/khaki-tote-bag-1.jpg"
          />
        </div>
      </div>
    </section>
  )
}

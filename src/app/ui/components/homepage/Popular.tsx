import React from 'react'
import { TravelCard } from '../common'

type Props = {}

const Popular = (props: Props) => {
  return (
    <div className='px-4 container max-w-[1400px] mx-auto py-20'>
        <div className="flex justify-rounded items-center mb-8">
            <h2 className='text-3xl font-semibold'>Most Popular Packages</h2>
            <a href="#view-all-package" className='italic'>View all packages</a>
        </div>
        <div className="md:flex gap-x-8">
            <TravelCard />
            <TravelCard />
            <TravelCard />
            <TravelCard />
        </div>
    </div>
  )
}

export default Popular
import { ResponsiveCalendar } from '@nivo/calendar'
import React from 'react'
import data from './data'

function UserDashboard() {
  return (
    <>
      <div className='min-h-[93vh] bg-gradient-to-b from-yellow-100 to-green-100'>
        <h1 className='font-light text-2xl p-5'>Welcome Iswar</h1>

        <div>
          <h2 className='px-5 pt-5'>Click through chart</h2>
          <div className='h-[25rem] w-[40rem]'>
            <ResponsiveCalendar
              data={data}
              from="2015-03-01"
              to="2017-01-01"
              emptyColor='#ffffe0'
              colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
              margin={{ top: 0, right: 0, bottom: 0, left: 40 }}
              yearSpacing={40}
              monthBorderColor="#fff"
              dayBorderWidth={1}
              dayBorderColor="#ff9"
              legends={[
                {
                  anchor: 'bottom-right',
                  direction: 'row',
                  translateY: 36,
                  itemCount: 4,
                  itemWidth: 42,
                  itemHeight: 36,
                  itemsSpacing: 14,
                  itemDirection: 'right-to-left'
                }
              ]}

              onClick={(day) => { console.log(day); }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDashboard
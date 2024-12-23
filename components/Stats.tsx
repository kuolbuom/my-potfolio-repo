'use client'
import CountUp from 'react-countup'

const stats = [
  {
    num: 3.5,
    text: 'years of experince'
  },
  {
    num: 20,
    text: 'projects completed'
  },
  {
    num: 5,
    text: 'Technologies mastered'
  },
  {
    num: 250,
    text: 'Code commits'
  },
]

const Stats = () => {
  return (
    <section className='pt-4 pb-12 md:pt-0 md:pb-0'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto md:max-w-[none]'>
          {
            stats.map((item,index) =>{
              return(
                <div
                   className='flex-1 flex gap-4 items-center justify-center md:justify-start'
                   key={index}
                  >
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className='text-4xl md:text-6xl font-extrabold'
                  />
                  <p
                    className={`${
                      item.text.length < 15 ? 'max-w-100px':'max-w-[150px]'
                    } leading-snug text-white/80`}
                  >{item.text}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Stats
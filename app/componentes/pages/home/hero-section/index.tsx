import { TechBadge } from '@/app/componentes/tech-badge'
import Image from 'next/image'
import { Button } from '@/app/componentes/button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {
  TbBrandGithub,
  TbBrandGmail,
  TbBrandInstagram,
  TbBrandLinkedin,
} from 'react-icons/tb'

const MOCK_CONTACTS = [
  {
    url: 'https://github.com.br',
    icon: <TbBrandGithub />
  },
  {
    url: 'https://github.com.br',
    icon: <TbBrandLinkedin />
  },
  {
    url: 'https://github.com.br',
    icon: <TbBrandGmail />
  },
  {
    url: 'https://github.com.br',
    icon: <TbBrandInstagram />
  },
]

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Uedson Gaiek</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis soluta temporibus velit
            tempora nihil accusamus vitae rerum dolorum totam, reiciendis facilis mollitia odio ad
            provident maxime! Deserunt ad quisquam repellendus.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name="Next.js" />
            ))}
          </div>

          <div className='mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row'>
            <Button className="w-max shadow-button">
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image width={420} height={404} src="/images/profile-pic.png" alt="Uedson Gaiek" className='w-300px h-[300px] lg: w-[420px] lg:h-[404px] mb-0 shadow-2xl rounded-lg object-cover' />
      </div>
    </section>
  )
}

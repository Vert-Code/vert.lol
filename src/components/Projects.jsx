import React from 'react'

export default function Projects() {
  return (
    <>
        <div className='mx-auto mt-20 max-w-3xl p-4 py-10 text-5xl font-bold text-white'>💻 Projects</div>

        <div className='space-x-5 ml-56 mt-24'><a href='https://iconicbot.xyz'target={'_blank'} rel="noreferrer">
        <button className='px-14 py-5 rounded-md border-solid shadow-sm drop-shadow-lg bg-indigo-500 text-white'>
            <div className=''>
            <span className='font-bold text-3xl'>
                Iconic
            </span>
            <p className='opacity-50 text-base max-w-xs max-h-28'>
            Iconic makes managing and moderating your server a breeze, advanced features from the future allows you to unlock your servers maximum potential for completely free
            </p>
            <span className='opacity-50 text-sm my-8'>
                iconicbot.xyz
            </span>

            </div>
        </button>
        </a>

        <a href='https://samson.ink'target={'_blank'} rel="noreferrer">
        <button className='px-14 py-5 rounded-md border-solid shadow-sm drop-shadow-lg bg-green-700	 text-white'>
                <div className=''>
                <span className='font-bold text-3xl'>
                        Samson
                </span>
                <p className='opacity-50 text-base max-w-xs max-h-28'>
                    Samson is a bright vibrant colorful and natural theme for Visual Studio Code inspired by the lush Australian Bushland Samson connects your code with nature
                </p>
                <span className='opacity-50 text-sm my-8'>
                    samson.ink
                </span>

                </div>
            </button>
        </a>

        <a href='https://vert.lol'target={'_blank'} rel="noreferrer">
        <button className='px-14 py-5 rounded-md border-solid shadow-sm drop-shadow-lg bg-pink-600 text-white'>
            <div className=''>
            <span className='font-bold text-3xl'>
                Website
            </span>
            <p className='opacity-50 text-base max-w-xs max-h-28'>
            Vert's personal website made with React and TailwindCSS, first time experimenting with tailwind and it turned out well, the website is also completely open source check it out
            </p>
            <span className='opacity-50 text-sm my-8'>
                vert.lol
            </span>

            </div>
        </button>
        </a>
        </div>
    </>
  )
}

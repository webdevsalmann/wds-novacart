import { creditMd } from "@/lib/metaData"
import Link from "next/link"

export const metadata = {
  title: creditMd.title,
  description: creditMd.description,
}

const creditData = [
  {
    id: "cd1",
    category: "Images",
    credits: [
      {
        title: "pexels",
        link: "https://www.pexels.com/"
      },
      // {
      //   title: "unsplash",
      //   link: "https://unsplash.com/"
      // },
      // {
      //   title: "pixabay",
      //   link: "https://pixabay.com/"
      // },
    ]
  },
  // {
  //   id: "cd2",
  //   category: "Illustration",
  //   credits: [
  //     {
  //       title: "storyset",
  //       link: "https://storyset.com"
  //     },
  //   ]
  // }
]

export default function Page() {
  return (
    <section>
      <div className="section-wrapper">
        <h1 className="mb-8 text-center">Credits </h1>

        <div className="mx-auto w-full md:w-1/2">
          {creditData.map(item => (
            <div className="my-12" key={item.id}>
              <h2 className="mb-6">{item.category}</h2>
              <ul className="list-disc">
                {item.credits.map(item => (
                  <li key={item.title}>
                    <Link className="capitalize text-blue-600 hover:text-blue-800 hover:underline" href={item.link} target="_blank">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

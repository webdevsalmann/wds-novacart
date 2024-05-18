import { creditMd } from "@/lib/metaData"
import Link from "next/link"

export const metadata = {
  title: creditMd.title,
  description: creditMd.description,
}

const creditData = [
  {
    id: "cd2",
    category: "Project",
    credits: [
      {
        title: "Code Bootcamp - Full Stack E-Commerce App",
        link: "https://youtu.be/g2sE034SGjw?si=SqPYd-IkNriX4vA7"
      },
    ]
  }
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

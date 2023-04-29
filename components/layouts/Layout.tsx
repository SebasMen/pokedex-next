import { FC } from "react"

import Head from "next/head"

import { Navbar } from "../ui";

type Props = {
  title?: string;
  children: React.ReactNode
}

export const Layout: FC<Props> = ({
  title = "Pokemon App",
  children 
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Sebastian Meneses" />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta name="description" content={`Informacíon sobre el pokémon ${title}`} />
      </Head>

      <Navbar />

      <main style={{
        padding: "0px 20px"
      }}>
        { children }
      </main>
    </>
  )
}

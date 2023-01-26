import { Box } from "@mui/material";
import { padding } from "@mui/system";
import Head from 'next/head';


import Navbar from "./components/Navbar";
import Policy from "./components/Policy";
import ScrollTop from "./components/ScrollTop";
import SocialBar from "./components/SocialBar";




export default function Home() {
  return (
    <>
       <Head>
   
        <title>Wefa Copy</title>
        <meta
          name="description"
          content=" website."
        />
        <meta property="og:title" content="wefa" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wefa.com" />
        <meta property="og:description" content="wefa website, built with Next.js." />
        <meta property="description" content="wefa website, built with Next.js." />
        <meta name="theme-color" content="#FFF1" />
        <link rel="icon" href="static/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

<link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@500&display=swap" rel="stylesheet"/>

      </Head>
      <>
    <Box p={0} m={0}>
    <SocialBar/>
      <Navbar />
      

      <Policy/>
  {/* <ScrollTop/> */}
      </Box>
      </>
      </>
  )
}

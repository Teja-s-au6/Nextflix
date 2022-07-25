import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../Components/banner/Banner";
import NavBar from "../Components/nav/navbar";
import SectionCards from "../Components/card/section-cards";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix</title>
        <meta name="description" content="Nextflx" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar username={"tejas@gmail.com"} />
      <Banner
        title="Clifford"
        subTitle="Dog Movie"
        imgUrl="/static/clifford.webp"
      />

      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" videos={[]} size="large" />
        <SectionCards
          title="Watch it again"
          videos={[]}
          size="small"
        />
        <SectionCards title="Travel" videos={[]} size="small" />
        <SectionCards
          title="Productivity"
          videos={[]}
          size="medium"
        />
        <SectionCards title="Popular" videos={[]} size="small" />
      </div>
    </div>
  );
}

import Banner from "@/components/ui/banner";
import About from "@/components/ui/about";
import { siteData } from "@/constants/siteData";
import Info from "@/components/ui/info";
interface IProps {
  about: {
    firstPostTitle: string;
    firstPostDescription: string;
    secondPostTitle: string;
    secondPostDescription: string;
  };
  info: [];
  banner: {
    title: string;
    subtitle: string;
  };
}
export default function Home({ about, banner, info }: IProps) {
  return (
    <>
      <Banner title={banner.title} subTitle={banner.subtitle} />
      <About
        firstPostDescription={about.firstPostDescription}
        firstPostTitle={about.firstPostTitle}
        secondPostDescription={about.secondPostDescription}
        secondPostTitle={about.secondPostTitle}
      />
      <Info posts={info} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      ...siteData,
    },
  };
}

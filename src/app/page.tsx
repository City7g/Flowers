import HomeSection from "@/components/HomeSection";
import IndexAbout from "@/components/Index/About";
import ContactUs from "@/components/Index/ContactUs";
import IndexWhy from "@/components/Index/Why";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <IndexAbout />
      <IndexWhy />
      <ContactUs />
    </main>
  )
}

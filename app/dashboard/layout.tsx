// import SideNav from '@/app/ui/dashboard/sidenav';
import SideNav from "@/components/dashboard/Sidenav";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Header />
        <div className="flex h-full flex-col md:overflow-hidden justify-start w-full p-5">
            <SideNav />
            {children}
        </div>
    </>
  );
}
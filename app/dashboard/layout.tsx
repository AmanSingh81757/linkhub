// import SideNav from '@/app/ui/dashboard/sidenav';
import SideNav from "@/components/dashboard/Sidenav";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Header />
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden justify-start w-full p-5">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
        <Footer />
    </>
  );
}
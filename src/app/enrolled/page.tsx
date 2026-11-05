import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EnrolSuccessView } from "@/components/sections/EnrolSuccessView";

export const metadata = {
  title: "Enrolment Complete · Thinkova",
  description: "Your child is enrolled in Thinkova.",
};

export default function EnrolledPage() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-64px)] bg-[#fbf9f5] flex items-center justify-center">
        <EnrolSuccessView childName="Aarav" payPlan="full" email="you@example.com" />
      </main>
      <Footer />
    </>
  );
}

//
import { Outlet } from "react-router-dom";
import Container from "../components/ui/Container";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

export default function AppLayout() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <main className="min-h-[calc(100vh-80px)] ">
        <Outlet />
      </main>
      <footer className="bg-black  py-[50px]">
        <Footer />
      </footer>
    </>
  );
}

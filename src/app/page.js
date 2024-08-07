import Image from "next/image";
import Modal from "./components/Modal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Modal />
    </main>
  );
}

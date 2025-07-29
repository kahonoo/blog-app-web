import { auth } from "@/auth";
import WritePage from "./components/WritePage";
import { notFound, redirect } from "next/navigation";

const Write = async () => {
  const session = await auth();

  if (!session?.user) return notFound();
  return <WritePage />;
};

export default Write;

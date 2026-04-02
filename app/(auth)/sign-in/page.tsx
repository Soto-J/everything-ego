import { redirect } from "next/navigation";

import { getCurrentSession } from "@/lib/auth/get-current-session";

import SignInView from "./ui/view/sign-in-view";

export default async function SignInPage() {
  const session = await getCurrentSession();

  if (!!session) redirect("/");

  return <SignInView />;
}

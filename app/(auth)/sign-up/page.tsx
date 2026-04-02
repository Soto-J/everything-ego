import { redirect } from "next/navigation";

import { getCurrentSession } from "@/lib/auth/get-current-session";

import SignUpView from "./ui/view/sign-up-view";

export default async function SignUpPage() {
  const session = await getCurrentSession();

  if (!!session) redirect("/");

  return <SignUpView />;
}

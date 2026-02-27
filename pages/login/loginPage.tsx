"use client";

import { signIn } from "next-auth/react";
import { AppButton } from "../../components/buttons/appButton";


export default function LoginPage() {

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6F42C1] via-[#8B5CF6] to-[#A78BFA] p-6">
      <div className="w-full max-w-md p-10 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-purple-900/30">
        <h1 className="text-3xl font-extrabold text-white mb-6 text-center drop-shadow">
          Welcome Back 👋
        </h1>
        <div className="mt-6 space-y-3">
          <AppButton
            type="button"
            onClick={() => signIn("google")}
          >
            Continue with Google
          </AppButton>
          <AppButton
            type="button"
            onClick={() => signIn("github")}
          >
            Continue with GitHub
          </AppButton>
        </div>
      </div>
    </div>
  );
}

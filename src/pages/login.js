import { useSession, signIn, signOut } from "next-auth/react";

const LogInPage = () => {
  const session = useSession();
  console.log(session);
  return (
    <div className="grid place-items-center min-h-screen">
      <button
        onClick={() =>
          signIn("github", { callbackUrl: "http://localhost:3000/pc-builder" })
        }
        className="btn btn-neutral"
      >
        Continue with GitHub
      </button>
    </div>
  );
};

export default LogInPage;

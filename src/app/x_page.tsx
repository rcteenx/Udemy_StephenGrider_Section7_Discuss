import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign In</Button>
      </form>

      <form action={actions.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>
      {session?.user ? <div>Signed In</div> : <div>Signed Out</div>}

      <div>{session?.user ? "Signed In" : "Signed Out"}</div>
      {/* I did it! */}
      <div>{session?.user ? `${session?.user.name}` : "Signed Out"}</div>

      {/* For Demonstration */}
      <div>
        {session?.user ? `${JSON.stringify(session.user)}` : "Signed Out"}
      </div>

      <div>
        <br />
        <hr />
        <h2>Profile Component - client</h2>
        <Profile />
      </div>
    </div>
  );
}

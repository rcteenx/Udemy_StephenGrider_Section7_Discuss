"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return (
      <div>
        From client: User is signed in
        <br />
        <h2>{JSON.stringify(session.data.user)}</h2>
      </div>
    );
  }
  return <div>From client: User is NOT signed</div>;
}

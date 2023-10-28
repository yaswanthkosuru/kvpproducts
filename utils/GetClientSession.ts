import { useSession } from "next-auth/react";
import { Session } from "next-auth";

type SessionData = {
    session: Session | null;
    status: "authenticated" | "loading" | "unauthenticated";
};


export const GetSessionData = (): SessionData => {
    const { data: session, status } = useSession();
    return { session, status };
};

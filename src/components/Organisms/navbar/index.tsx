import { getSession, useSession } from "next-auth/react";
import AtomsAvatar from "@/components/atoms/avatar";

const OrganismsNavbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="absolute right-5 flex px-4 py-6 items-center gap-4">
      <p>My scores</p>
      <div className="w-[30px] h-[30px] rounded-full">
        <AtomsAvatar
          src={session?.user.image || "/images.png"}
          alt="user's avatar"
          className="h-full w-full"
        />
      </div>
    </nav>
  );
};

OrganismsNavbar.displayName = "OrganismsNavbar";
export default OrganismsNavbar;

OrganismsNavbar.getInitialProps = async () => {
  const session = await getSession();
  return { session };
};

import { getSession, useSession } from "next-auth/react";
import AtomsAvatar from "@/components/atoms/avatar";
import OrganismsDropdown from "../dropdown";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";

const OrganismsNavbar = () => {
  const { data: session } = useSession();

  const elementsList = [
    { key: 1, name: "Profile", link: "#" },
    { key: 2, name: "Scores", link: "#" },
    { key: 3, name: session ? "Log out" : "Log in", link: "#" },
  ];

  const renderElements = elementsList.map((i) => {
    return (
      <a
        className="block py-2 px-2 hover:bg-slate-100 hover:cursor-pointer"
        key={i.key}
      >
        {i.name}
      </a>
    );
  });
  return (
    <nav className="absolute right-5 flex px-4 py-6 items-center gap-4">
      <p>My scores</p>
      <div className="w-[30px] h-[30px] rounded-full">
        <OrganismsDropdown
          className="w-[150px] px-0 absolute -right-5 top-1"
          elementsList={renderElements}
          trigger={
            <AtomsAvatar
              src={session?.user.image || "/images.png"}
              alt="user's avatar"
              className="h-full w-full"
            />
          }
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

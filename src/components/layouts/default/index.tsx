import OrganismsNavbar from "@/components/Organisms/navbar";
import { getSession } from "next-auth/react";

type LayoutDefaultProps = {
  children: JSX.Element;
};

const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <div>
      <OrganismsNavbar />
      <>{children}</>
    </div>
  );
};

export default LayoutDefault;

OrganismsNavbar.getInitialProps = async () => {
  const session = await getSession();
  return { session };
};

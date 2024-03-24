import { getSession } from "next-auth/react";

const OrganismsNavbar = () => {
  return (
    <nav>
      <p>Navbar test</p>
    </nav>
  );
};

OrganismsNavbar.displayName = "OrganismsNavbar";
export default OrganismsNavbar;

OrganismsNavbar.getInitialProps = async () => {
  const session = await getSession();
  return { session };
};

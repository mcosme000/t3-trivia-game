import OrganismsNavbar from "@/components/Organisms/navbar";

type LayoutDefaultProps = {
  children: JSX.Element;
};

const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <div>
      <OrganismsNavbar />
      <>{children}</>
    </div>
  )

};

export default LayoutDefault;

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type OrganismsDropdownProps = {
  className?: string;
  trigger: JSX.Element;
  elementsList?: JSX.Element;
};

const OrganismsDropdown = ({
  className,
  trigger,
  elementsList,
}: OrganismsDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className={className}>
        {elementsList}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

OrganismsDropdown.displayName = "OrganismsDropdown";
export default OrganismsDropdown;

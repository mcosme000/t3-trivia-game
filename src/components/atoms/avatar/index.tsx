import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AtomAvatarProps {
  className?: string;
  src: string | undefined;
  alt?: string;
}

const AtomsAvatar = ({ className, src, alt }: AtomAvatarProps) => {
  return (
    <Avatar>
      <AvatarImage className={className} src={src} alt={alt} />
    </Avatar>
  );
};

AtomsAvatar.displayName = "AtomsAvatar";
export default AtomsAvatar;

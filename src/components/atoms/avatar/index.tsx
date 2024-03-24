import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AtomAvatarProps {
  src: string | undefined;
  alt?: string;
}

const AtomsAvatar: React.FC<AtomAvatarProps> = ({ src, alt }) => {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
    </Avatar>
  );
};

AtomsAvatar.displayName = "AtomsAvatar";
export default AtomsAvatar;

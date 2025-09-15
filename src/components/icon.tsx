import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Icon({image, username}: {image?: string, username?: string }) {
    return (
        <Avatar>
            <AvatarImage src={image} alt="Huntly Logo" />
            <AvatarFallback className="bg-orange-500 text-white">
                {username ? username.charAt(0).toUpperCase() : 'H'}
            </AvatarFallback>
        </Avatar>
    )
}
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AvatarComponent } from "@components/react-components/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DropdownComponent(){

    return (
        <DropdownMenu>
  <DropdownMenuTrigger>
<AvatarComponent src={'https://github.com/shadcn.png'} alt={'shadcn'} fallbackText={'Texty'}></AvatarComponent>

  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>
        <a href="/dashboard">My Dashboard</a>
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    )
}
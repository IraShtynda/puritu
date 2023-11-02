import { Navigation } from "./Navigation"
import { SocialIcons } from "../SocialIcons"
import { Logo } from "../Logo";

export const BurgerMenu = () => {
  return (
    <aside className="flex flex-col items-center gap-10">
      <Logo />
      <Navigation />
      <SocialIcons />
    </aside>
  )
}
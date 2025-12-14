import { BotMessageSquare } from "lucide-react";
import Link from "next/link";

import { Button } from "./ui/button";
import MenuSheet from "./menu-sheet";

const Header = () => {
  return (
    <header className="bg-background flex items-center justify-between px-5 py-6">
      <Link href="/" className="text-xl font-bold">
        CASTRO DEVELOPMENT GROUP
      </Link>
      <div className="flex items-center gap-2">
        <Link href="/chat">
          <Button variant="outline" size="icon">
            <BotMessageSquare className="size-5" />
          </Button>
        </Link>
        <MenuSheet />
      </div>
    </header>
  );
};

export default Header;

"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

//images
import logoDark from "../../public/img/logo.png";
import logoLight from "../../public/img/logo_white.png";

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const themeLogo = theme === "dark" ? logoLight : logoDark;

  useEffect(() => {
    if (!theme || theme === "system") {
      const storedTheme = JSON.parse(localStorage.getItem("dark"));
      if (storedTheme) {
        setTheme(storedTheme);
      } else {
        // Set default theme if not stored
        localStorage.setItem("theme", JSON.stringify("dark"));
        setTheme("dark");
      }
    }
  }, [theme, setTheme]);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="w-full">
      <nav className="container relative flex items-center justify-between p-6 md:px-8 mx-auto">
        {/* Logo  */}
        <Disclosure>
          <>
            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
              <Link href="/">
                <Image
                  src={themeLogo}
                  alt="Logo English with Labelle"
                  style={{ maxWidth: 180, height: "auto" }}
                />
              </Link>
            </div>
          </>
        </Disclosure>

        <ThemeChanger />
      </nav>
    </div>
  );
};

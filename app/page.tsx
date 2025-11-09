"use client"

import { Instagram, Facebook, MapPin } from "lucide-react"
import Image from "next/image"

export default function Page() {
  const links = [
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Suivez-nous sur Instagram",
      href: "#",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Aimez-nous sur Facebook",
      href: "#",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
      label: "Regardez-nous sur TikTok",
      href: "#",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          viewBox="-19.2 -19.2 230.40 230.40"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinejoin="round"
            strokeWidth="14.208"
            d="M95.918 22.002c-11.963-.087-24.145 4.54-32.031 13.717-6.995 7.405-9.636 17.901-9.284 27.868-.03 5.119.032 10.237.05 15.355-4.901-1.217-9.873-4.624-15.063-2.937-4.422 1.313-6.267 7.088-3.596 10.791 2.876 3.761 7.346 5.907 11.08 8.71 1.837 1.5 4.313 2.571 5.68 4.499-.001 4.62-2.425 8.897-4.722 12.786-5.597 8.802-14.342 15.531-23.705 20.18-2.39 1.035-4.59 4.144-2.473 6.499 3.862 3.622 9.327 4.778 14.195 6.486 2.047.64 5.078 1.34 4.886 4.084.335 2.923 2.205 6.066 5.492 6.078 7.873.91 16.289.522 23.345 4.741 6.917 4.006 14.037 8.473 22.255 8.96 8.188.767 16.623-.888 23.642-5.255 5.23-2.884 10.328-6.477 16.456-7.061 5.155-1.206 10.702-.151 15.685-2.072 3.193-1.367 2.762-5.244 4.104-7.808 2.532-1.747 5.77-1.948 8.59-3.102 3.687-1.47 8.335-2.599 10.268-6.413 1.148-3.038-2.312-4.698-4.453-5.88-11.38-5.874-21.631-14.921-26.121-27.191-.496-1.936-2.279-4.834.084-6.255 4.953-4.176 11.413-6.575 15.514-11.715 3.103-3.884.941-10.55-4.141-11.322-4.928-.78-9.525 1.893-14.152 3.127-.404-8.53.502-17.232-.776-25.746-2.429-13.808-13.514-25.157-26.813-29.124-4.521-1.401-9.266-2.037-13.996-2Z"
          ></path>
        </svg>
      ),
      label: "Ajoutez-nous sur Snapchat",
      href: "#",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Trouvez-nous sur Google Maps",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "#",
      label: "Instagram",
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      href: "#",
      label: "Facebook",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
      href: "#",
      label: "TikTok",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          viewBox="0 0 192 192"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinejoin="round"
            strokeWidth="12"
            d="M95.918 22.002c-11.963-.087-24.145 4.54-32.031 13.717-6.995 7.405-9.636 17.901-9.284 27.868-.03 5.119.032 10.237.05 15.355-4.901-1.217-9.873-4.624-15.063-2.937-4.422 1.313-6.267 7.088-3.596 10.791 2.876 3.761 7.346 5.907 11.08 8.71 1.837 1.5 4.313 2.571 5.68 4.499-.001 4.62-2.425 8.897-4.722 12.786-5.597 8.802-14.342 15.531-23.705 20.18-2.39 1.035-4.59 4.144-2.473 6.499 3.862 3.622 9.327 4.778 14.195 6.486 2.047.64 5.078 1.34 4.886 4.084.335 2.923 2.205 6.066 5.492 6.078 7.873.91 16.289.522 23.345 4.741 6.917 4.006 14.037 8.473 22.255 8.96 8.188.767 16.623-.888 23.642-5.255 5.23-2.884 10.328-6.477 16.456-7.061 5.155-1.206 10.702-.151 15.685-2.072 3.193-1.367 2.762-5.244 4.104-7.808 2.532-1.747 5.77-1.948 8.59-3.102 3.687-1.47 8.335-2.599 10.268-6.413 1.148-3.038-2.312-4.698-4.453-5.88-11.38-5.874-21.631-14.921-26.121-27.191-.496-1.936-2.279-4.834.084-6.255 4.953-4.176 11.413-6.575 15.514-11.715 3.103-3.884.941-10.55-4.141-11.322-4.928-.78-9.525 1.893-14.152 3.127-.404-8.53.502-17.232-.776-25.746-2.429-13.808-13.514-25.157-26.813-29.124-4.521-1.401-9.266-2.037-13.996-2Z"
          />
        </svg>
      ),
      href: "#",
      label: "Snapchat",
    },
  ]

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 md:p-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/design-mode/bth.png.jpeg"
          alt="Boutique La Liberté Interior"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 w-full max-w-2xl mx-auto bg-[#0f172a]/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl shadow-white/10">
        <div className="relative w-full h-64">
          <Image
            src="/images/design-mode/Screenshot%202025-11-09%20at%2001.21.14.png"
            alt="Boutique La Liberté Storefront"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Logo overlapping the cover image */}
        <div className="relative -mt-16 flex justify-center mb-4">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-white/30 bg-[#1e3a8a]">
            <Image
              src="/images/design-mode/517974443_17909625588173170_3184396106227672728_n_imgupscaler.ai_Beta_2K.jpg"
              alt="Boutique La Liberté Logo"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Profile Section */}
        <div className="text-center px-6 mb-8 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">BOUTIQUE LA LIBERTÉ</h1>
          <p className="text-lg text-white/80 italic">Votre style, votre liberté.</p>

          {/* Social Icons Row */}
          <div className="flex justify-center gap-6 pt-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-white hover:text-[#60a5fa] transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link Buttons */}
        <div className="space-y-4 px-6 mb-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group block w-full px-6 py-4 border-2 border-white rounded-full bg-[#0f172a] hover:bg-white hover:text-[#1e3a8a] transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-white/30"
            >
              <div className="flex items-center gap-4">
                <span className="text-white group-hover:text-[#1e3a8a] transition-colors duration-300">
                  {link.icon}
                </span>
                <span className="flex-1 text-center text-white group-hover:text-[#1e3a8a] font-medium transition-colors duration-300">
                  {link.label}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-white/60 px-6 pb-8">
          <p>© 2025 Boutique La Liberté – Tous droits réservés</p>
        </footer>
      </div>
    </div>
  )
}

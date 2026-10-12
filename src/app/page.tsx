"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const projects = [
  {
    title: "London Events",
    category: "Live experiences",
    description:
      "A look at the visual worlds and live experiences created for events in London.",
    image: "/index/eventos-londres.webp",
    imageAlt: "Visual for a London events project",
    position: "left-[5%] top-0 w-[40%] h-[25%] sm:left-[8%] sm:w-[18%] sm:h-[34%]",
    drift: 16,
    duration: 22,
    delay: 0,
  },
  {
    title: "GUAP Gala",
    category: "Gala",
    description:
      "An event project for GUAP Gala, bringing together art direction and a distinctive atmosphere.",
    image: "/index/guap-gala.webp",
    imageAlt: "GUAP Gala project",
    position: "right-[5%] top-0 w-[39%] h-[24%] sm:left-[36%] sm:w-[20%] sm:h-[31%]",
    drift: -14,
    duration: 22,
    delay: 5.5,
  },
  {
    title: "World Cup Campaign",
    category: "Brand experience",
    description:
      "A campaign-led project exploring visual storytelling for a global sporting moment.",
    image: "/index/soluciones-mundial.webp",
    imageAlt: "World Cup campaign visual",
    position: "left-[5%] top-0 w-[40%] h-[26%] sm:left-[64%] sm:w-[20%] sm:h-[34%]",
    drift: 18,
    duration: 22,
    delay: 8,
  },
  {
    title: "Event Experiences",
    category: "Events",
    description:
      "A selection of event imagery focused on creating engaging, memorable experiences.",
    image: "/index/guap-gala.avif",
    imageAlt: "Event experience project",
    position: "right-[5%] top-0 w-[40%] h-[25%] sm:left-[38%] sm:w-[19%] sm:h-[29%]",
    drift: -18,
    duration: 22,
    delay: 11.5,
  },
];

const navLinks = [
  { href: "/our-work", label: "Work" },
  { href: "/about-us", label: "Studio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Home() {
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selectedProject && !menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [selectedProject, menuOpen]);

  return (
    <main
      aria-labelledby="floating-projects-title"
      className="relative h-[100dvh] min-h-[540px] overflow-hidden bg-white"
    >
      <h1 id="floating-projects-title" className="sr-only">
        Selected projects
      </h1>

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-30 grid grid-cols-[auto_1fr_auto] items-center gap-4 bg-white px-4 py-3 shadow-sm sm:px-8">
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-haspopup="dialog"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full outline-none transition-colors hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-red-600"
        >
          <span className="block h-0.5 w-6 bg-gray-900" />
          <span className="block h-0.5 w-6 bg-gray-900" />
          <span className="block h-0.5 w-6 bg-gray-900" />
        </button>

        <p className="mx-auto max-w-xl text-center text-[11px] leading-snug text-gray-600 sm:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>

        <Link href="/" aria-label="Home">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            priority
            className="h-8 w-auto sm:h-10"
          />
        </Link>
      </header>

      {/* Proyectos flotando en bucle vertical infinito */}
      {projects.map((project, index) => (
        <button
          key={`${project.title}-${index}`}
          type="button"
          aria-label={`View ${project.title} project`}
          aria-haspopup="dialog"
          onClick={() => setSelectedProject(project)}
          className={`group absolute block overflow-hidden rounded-sm text-left shadow-lg outline-none ring-red-600 transition-shadow hover:z-10 hover:shadow-2xl focus-visible:z-10 focus-visible:ring-2 ${project.position}`}
          style={{
            animation: `project-float ${project.duration}s linear -${project.delay}s infinite`,
            "--project-drift": `${project.drift}vw`,
          } as CSSProperties & { "--project-drift": string }}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 640px) 40vw, 20vw"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
          <span className="absolute inset-x-0 bottom-0 p-2 text-white sm:p-4">
            <span className="block text-sm font-semibold sm:text-lg">
              {project.title}
            </span>
            <span className="mt-0.5 block text-[10px] uppercase tracking-wider text-white/80 sm:text-xs">
              {project.category}
            </span>
          </span>
        </button>
      ))}

      {/* Menú */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              ref={menuOpen ? closeButtonRef : undefined}
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="absolute left-4 top-3 flex h-10 w-10 items-center justify-center rounded-full text-3xl text-gray-900 transition-colors hover:bg-gray-100 sm:left-8"
            >
              &times;
            </button>
            <ul className="flex flex-col items-center gap-6 text-4xl font-medium tracking-wide sm:text-6xl">
              {navLinks.map(({ href, label }) => (
                <li
                  key={href}
                  className="text-red-600 transition-colors hover:text-gray-900"
                >
                  <Link href={href} onClick={() => setMenuOpen(false)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Modal de proyecto */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.article
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              className="relative grid max-h-[90dvh] w-full max-w-4xl overflow-auto bg-white md:grid-cols-2"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selectedProject.image}
                alt={selectedProject.imageAlt}
                width={1200}
                height={1200}
                className="h-56 w-full object-cover md:h-full md:min-h-[420px]"
              />
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="text-xs uppercase tracking-[0.2em] text-red-700">
                  {selectedProject.category}
                </p>
                <h3
                  id="project-modal-title"
                  className="mt-3 text-3xl font-bold text-gray-950 sm:text-4xl"
                >
                  {selectedProject.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-gray-700">
                  {selectedProject.description}
                </p>
              </div>
              <button
                ref={selectedProject ? closeButtonRef : undefined}
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-gray-900 shadow-md transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
              >
                &times;
              </button>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

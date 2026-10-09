"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties } from "react";

//asd

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

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: 0.2,
    },
  },
};

export default function Home() {
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [selectedProject]);

  const navLinks = [
    { href: "/our-work", label: "Work" },
    { href: "/about-us", label: "Studio" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <section className="relative h-[70dvh] md:h-[90dvh] bg-black">
        <video
          src="ejemplo.mp4"
          className="relative z-0 w-full h-full object-cover"
          autoPlay
          loop
          playsInline
          muted
        ></video>
      </section>
      <section className="flex flex-col flex-wrap items-center mb-16">
        {/* Fondo blanco de ancho completo */}
        <div className="w-full bg-white py-22 px-4 md:px-20">
          <div className="info container text-center mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              Set design / Art direction / Fabrication
            </h1>
            <br />
            <br />
            <p className="text-base md:text-2xl mt-4 text-gray-900">
              Korrea Studio works across art direction, set design and
              fabrication for film, editorial and brand worlds. We develop
              spatial environments from concept to completion, driven by
              storytelling, atmosphere and contemporary visual language.
            </p>
          </div>
        </div>

        {/* Menú de links con fondo negro de ancho completo */}
        <div className="w-full bg-[url(/fondoB.jpg)] bg-cover py-12 px-4 md:px-20">
          <motion.div variants={scaleUp}>
            <div className="overflow-hidden hover:border-gray-600 transition-colors group h-full rounded-2xl w-[500px] lg:w-[1100px] mx-auto">
              <div className="relative h-[320px] overflow-hidden flex flex-col justify-center items-center text-white text-center">
                <div className="absolute inset-0" />
                <ul className="relative z-20 flex flex-row gap-8 text-3xl md:text-5xl font-medium tracking-wide">
                  {navLinks.map(({ href, label }) => (
                    <li
                      key={href}
                      className="text-red-600 hover:text-white transition-colors"
                    >
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section
        aria-labelledby="floating-projects-title"
        className="relative h-[100dvh] min-h-[540px] overflow-hidden bg-white"
      >
        <div className="absolute left-1/2 top-5 z-10 -translate-x-1/2 text-center">
          <h2
            id="floating-projects-title"
            className="whitespace-nowrap text-2xl font-bold text-gray-900 sm:text-4xl"
          >
            Selected projects
          </h2>
          <p className="mt-1 text-sm text-gray-600 sm:text-base">
            Select a project to explore
          </p>
        </div>

        {projects.map((project) => (
          <button
            key={project.title}
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
                  ref={closeButtonRef}
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
      </section>
    </>
  );
}

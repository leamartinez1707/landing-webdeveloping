import { motion } from "motion/react";

const SocialMedia = () => {

    const iconVariants = {
        hover: { scale: 1.12, color: "#1f5a50", transition: { duration: 0.25 } },
        tap: { scale: 0.96 },
    };

    const links = [
        {
            href: "https://www.linkedin.com/in/leandromartinezuy",
            label: "LinkedIn",
            icon: (
                <svg className="size-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.82-1.8-1.8 0-1 .82-1.8 1.8-1.8 1 0 1.8.82 1.8 1.8 0 1-.8 1.8-1.8 1.8zm13.5 11.3h-3v-5.5c0-1.3-1.2-1.5-1.2-1.5s-1.2 0-1.2 1.5v5.5h-3v-10h3v1.3s.8-1.3 2.8-1.3c2 0 3.4 1.3 3.4 4v6z" />
                </svg>
            )
        },
        {
            href: "https://github.com/leamartinez1707",
            label: "GitHub",
            icon: (
                <svg className="size-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.62 0-12 5.38-12 12 0 5.3 3.44 9.8 8.21 11.38.6.1.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.26 1.87 1.26 1.08 1.84 2.83 1.3 3.52.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.05.14 3 .41 2.28-1.55 3.28-1.23 3.28-1.23.67 1.64.25 2.86.13 3.16.77.85 1.24 1.93 1.24 3.25 0 4.63-2.81 5.66-5.49 5.95.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12c0-6.62-5.38-12-12-12z" />
                </svg>
            )
        },
        {
            href: "https://api.whatsapp.com/send?phone=59895220063&text=Hola%20Leandro,%20quiero%20consultar%20por%20un%20proyecto.",
            label: "WhatsApp",
            icon: (
                <svg className="size-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.51.661 4.867 1.818 6.905L2 30l7.315-1.696A13.938 13.938 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm0 25.846c-2.385 0-4.69-.7-6.72-2.09L5.23 26.77l1.062-3.98A11.813 11.813 0 0 1 4.154 16c0-6.542 5.304-11.846 11.846-11.846 6.543 0 11.846 5.304 11.846 11.846 0 6.543-5.303 11.846-11.846 11.846Z" />
                </svg>
            )
        },
    ];

    return (
        <div className="mt-10 border-t border-[var(--line)] pt-9">
            <p className="mb-4 text-center text-xs uppercase tracking-[0.08em] text-[var(--muted)]">tambien podes escribirme por</p>
            <div className="flex justify-center gap-4 text-[var(--muted)]">
                {links.map((item) => (
                    <motion.a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className="rounded border border-[var(--line)] bg-[rgba(255,255,255,0.66)] p-3"
                        whileHover="hover"
                        whileTap="tap"
                        variants={iconVariants}
                        style={{ color: "currentColor" }}
                    >
                        {item.icon}
                    </motion.a>
                ))}
            </div>
        </div>
    );
}

export default SocialMedia
import { motion } from "motion/react";

const SocialMedia = () => {

    const iconVariants = {
        hover: { scale: 1.2, color: "#2563EB", transition: { duration: 0.3 } },
        tap: { scale: 0.9 },
    };
    return (
        <div className="mt-10 border-t pt-12 flex justify-center space-x-6 text-gray-600">
            <motion.a
                href="https://www.linkedin.com/in/leandromartinezuy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-700 will-change-transform"
                whileHover="hover"
                whileTap="tap"
                variants={iconVariants}
                style={{ color: "currentColor" }}
            >
                <svg
                    className="size-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.82-1.8-1.8 0-1 .82-1.8 1.8-1.8 1 0 1.8.82 1.8 1.8 0 1-.8 1.8-1.8 1.8zm13.5 11.3h-3v-5.5c0-1.3-1.2-1.5-1.2-1.5s-1.2 0-1.2 1.5v5.5h-3v-10h3v1.3s.8-1.3 2.8-1.3c2 0 3.4 1.3 3.4 4v6z" />
                </svg>
            </motion.a>

            <motion.a
                href="https://github.com/leamartinez1707"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-gray-900 will-change-transform"
                whileHover={{ scale: 1.2, color: "#333" }}
                whileTap={{ scale: 0.9 }}
            >
                <svg
                    className="size-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M12 0c-6.62 0-12 5.38-12 12 0 5.3 3.44 9.8 8.21 11.38.6.1.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.26 1.87 1.26 1.08 1.84 2.83 1.3 3.52.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.05.14 3 .41 2.28-1.55 3.28-1.23 3.28-1.23.67 1.64.25 2.86.13 3.16.77.85 1.24 1.93 1.24 3.25 0 4.63-2.81 5.66-5.49 5.95.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12c0-6.62-5.38-12-12-12z" />
                </svg>
            </motion.a>

            <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-600 will-change-transform"
                whileHover={{ scale: 1.2, color: "#E1306C" }}
                whileTap={{ scale: 0.9 }}
            >
                <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    className="size-10"
                    viewBox="-271 273 256 256"
                >
                    <path d="M-64.5 273h-157c-27.3 0-49.5 22.2-49.5 49.5v157.1c0 27.3 22.2 49.5 49.5 49.5h157c27.3 0 49.5-22.2 49.5-49.5V322.4c-.1-27.2-22.3-49.4-49.5-49.4zm14.2 29.5h5.7v43.4l-43.3.1-.1-43.4 37.7-.1zm-129.3 72.2c8.2-11.3 21.5-18.8 36.5-18.8s28.3 7.4 36.5 18.8c5.4 7.4 8.5 16.5 8.5 26.3 0 24.8-20.2 45.1-45.1 45.1s-44.9-20.3-44.9-45.1c0-9.8 3.2-18.9 8.5-26.3zM-40 479.5C-40 493-51 504-64.5 504h-157c-13.5 0-24.5-11-24.5-24.5V374.7h38.2c-3.3 8.1-5.2 17-5.2 26.3 0 38.6 31.4 70 70 70s70-31.4 70-70c0-9.3-1.9-18.2-5.2-26.3H-40v104.8z" />
                </svg>
            </motion.a>
        </div>
    );
}

export default SocialMedia
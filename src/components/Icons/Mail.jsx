const MailIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 32 32"
        className="fill-white"
        fill="white"
        {...props}
    >
        <title>{"mail"}</title>
        <path
            fill="white" // ← Ahora el ícono es blanco
            fillRule="evenodd"
            d="M30 20c0 .203-.039.395-.095.578L21 11l9-7v16ZM3.556 21.946l9.024-9.616L16 14.915l3.272-2.601 9.172 9.632c-.143.033-24.745.033-24.888 0ZM2 20V4l9 7-8.905 9.578A1.966 1.966 0 0 1 2 20ZM29 2 16 12 3 2h26Zm-1-2H4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Z"
        />
    </svg>

)
export default MailIcon

const categories = ["web", "mobile", "design"];

const projects = [
    {
        category: categories[0],
        url: "https://github.com/Jackan04/blog-api",
        title: "Blog Platform",
        preview:
            "Full-stack blogging platform with API, admin, and public clients.",
        description:
            "A three-part blogging platform consisting of a REST API built with Node.js, Express, PostgreSQL, and JWT authentication, consumed by two separate frontends. Blog Admin handles authenticated content management, while Blog Public serves as the reader-facing client for browsing and commenting on published posts.",
    },
    {
        category: categories[0],
        url: "https://github.com/Jackan04/file-uploader",
        title: "File Uploader",
        preview: "Full-stack Node.js app for uploading and managing files.",
        description:
            "A full-stack web application designed for personal file storage and organization. The service allows users to upload, manage, and download files within their personal drive, similar to cloud storage platforms like Google Drive.",
    },
    {
        category: categories[0],
        url: "https://github.com/Jackan04/clubhouse",
        title: "Clubhouse",
        preview: "Role-based members-only messaging dashboard.",
        description:
            "A members-only message dashboard featuring role-based access. Visitors can read messages, while signed-in members and admins have permissions to interact with and manage content and users.",
    },
    {
        category: categories[1],
        url: "https://github.com/Jackan04/ShelfLife",
        title: "Shelf Life",
        preview: "Mobile app to track groceries and expiration dates.",
        description:
            "A mobile application designed to help users track their groceries and reduce food waste by keeping a close eye on expiration dates.",
    },
    {
        category: categories[0],
        url: "https://github.com/Jackan04/Ticky",
        title: "Task Manager",
        preview: "Simple personal task manager for lists and due dates.",
        description:
            "A personal task manager focused on speed and simplicity. It provides a clutter-free way to manage tasks, lists, and due dates without unnecessary complexity.",
    },
    {
        category: categories[1],
        url: "https://github.com/Jackan04/MediaTracker?tab=readme-ov-file",
        title: "Media Tracker",
        preview: "Mobile watchlist app for movies and TV shows.",
        description:
            "A mobile app for managing movie and TV show watchlists. It allows users to discover new content, search for specific titles, and keep their content organized in one place.",
    },
    {
        category: categories[2],
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7356214960147832832/?originTrackingId=eSg5eAa5mcuCMkl2pRHjqw%3D%3D",
        title: "Redesign of Self-Checkout",
        preview: "UX redesign concept to simplify self-checkout flows.",
        description:
            "I noticed people getting frustrated with self-checkout screens. I analyzed why the flow was so confusing and redesigned it to be much more intuitive.",
    },
];

export { projects, categories };

export default function Footer() {
  return (
    <footer className="py-6 text-center border-t border-gray-800 text-gray-400">
      © {new Date().getFullYear()} My Portfolio. Built with Next.js ❤️
    </footer>
  );
}
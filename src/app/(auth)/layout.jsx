export default function AuthLayout({ children }) {
  return (
    <main className="flex items-center justify-center min-h-screen bg-background">
      {children}
    </main>
  );
}

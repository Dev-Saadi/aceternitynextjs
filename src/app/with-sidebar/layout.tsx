// app/(with-sidebar)/layout.tsx
import LeftSideBar from "@/components/LeftSideBar";

export default function WithSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LeftSideBar>{children}</LeftSideBar>;
}

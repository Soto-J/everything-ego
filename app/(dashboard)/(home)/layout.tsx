export default function HomeLayout({ children }: LayoutProps<"/">) {
  return <div className="relative flex-1 overflow-hidden">{children}</div>;
}

export default function Container({ children }: React.PropsWithChildren) {
  return <div className="mx-auto max-w-[1192px] w-[95%]">{children}</div>;
}

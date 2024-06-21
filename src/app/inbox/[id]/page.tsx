import { notFound } from "next/navigation";

export default function Inbox({ params }: { params: { id: string } }) {
  if (["abc"].includes(params.id)) notFound();
  return <div>Inbox: {params.id}</div>;
}

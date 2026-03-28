
import { fetchNoteById } from "@/lib/api";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";
import { title } from "process";

type Props = {
  params: Promise<{ id: string }>;
};
const NotesPage = async ({ params }: Props) => {
  const { id } = await params;
 
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id, title);
  });
  
  return (
	<HydrationBoundary state={dehydrate(queryClient)}>
		<NoteDetailsClient />
	</HydrationBoundary>
  )
}

export default NotesPage;
import { fetchNoteById } from "@/lib/api";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";

const NoteDetails = async () => {
  const id = "1"; // Replace with actual ID from params
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });
  
  return (
	<HydrationBoundary state={dehydrate(queryClient)}>
		<NoteDetailsClient />
	</HydrationBoundary>
  )
}

export default NoteDetails;
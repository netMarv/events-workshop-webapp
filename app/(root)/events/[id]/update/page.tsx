import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs/server";
import { getEventById } from "@/lib/mongodb/actions/event.actions";

type UpdateEventProps = {
  params: {
    id: string;
  };
};

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  const event = await getEventById(id);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-cetner py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Event aktualisieren
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm
          type="Aktualisiere"
          event={event}
          eventId={event._id}
          userId={userId}
        />
      </div>
    </>
  );
};

export default UpdateEvent;

import EventItem from "./Components/EventItem";
import useEventsData from "../../hooks/useEventsData";

const Events = ({searchTerm}) => {
    const {events, loading} = useEventsData();
    const handelEventItemClick = (id) => {
        console.log('Diste click en evento', id);
    };

    const renderEvents = () => {
        let eventsFiltered = events;

        if(searchTerm.length>0){
            eventsFiltered = eventsFiltered.filter((item)=>item.name.toLocaleLowerCase().includes(searchTerm));
        }

        return eventsFiltered.map((eventitem)=> (
            <EventItem key={eventitem.id}
            name = {eventitem.name}
            info={eventitem.info}
            id={eventitem.id}
            image = {eventitem.images[2].url}
            onEventClick={handelEventItemClick}
            />
        ));
    };

    if(!loading){
        return <div>Está cargando</div>        
    }

    return(
        <div>
            Eventos
            {renderEvents()}
        </div>        
    );
};

export default Events;
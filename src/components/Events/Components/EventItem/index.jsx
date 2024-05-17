const EventItem = ({info, id, name, image, onEventClick}) => {
    
    const handlerSeeMoreClick = (evt) =>{
        evt.stopPropagation();
        onEventClick(id);
    };
    return(
        <div onClick={()=>console.log('padre')}>
            <img src={image} alt={image} width={300} height={200}/>
            <h4>{name}</h4>
            <p>{info}</p>
            <button onClick={handlerSeeMoreClick}>Ver más</button>
        </div>
    );
};


export default EventItem;
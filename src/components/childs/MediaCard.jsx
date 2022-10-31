const MediaCard = ({
    title,
    body,
    img
}) => {
    return (
        <div className="child__container media__card">
            <div className="info">
            <p className="alert">Child Component!</p>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div className="img__container">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default MediaCard;
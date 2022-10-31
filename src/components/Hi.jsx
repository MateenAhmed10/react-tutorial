import Gate from "./childs/Gate";
import MediaCard from "./childs/MediaCard";
import Room from "./childs/Room";

const Hi = () => {

    let title = "Elon Musk";
    let body = "Elon Reeve Musk FRS is a business magnate and investor. He is the founder, CEO and chief engineer of SpaceX; angel investor, CEO and product architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink and OpenAI; president of Musk Foundation; and owner of Twitter."
    let image = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg";

    return (


        <div className="box">
            <div className="info">
                <h1>
                    Class 3 and 4, React Tutorial
                </h1>
                <ul>
                    <p>Learning React is:</p>
                    <li><strong>Awesome</strong></li>
                    <li><strong>Great</strong></li>
                    <li><strong>
                        Fun
                    </strong></li>
                </ul>
            </div>
            <Gate />
            <MediaCard
                title={title}
                body={body}
                img={image}
            />
            <Room />
        </div>
    );
}

export default Hi;
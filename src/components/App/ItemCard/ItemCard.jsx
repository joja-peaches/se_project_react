import './ItemCard.css';

function ItemCard({ item }) {
    return (
    <div className='clothes-card'>
        <h2 className='clothes-card__title'>{item.name}</h2>
        <img src={item.link} className='clothes-card__image' alt={item.name} />
    </div>
    );
}

export default ItemCard;
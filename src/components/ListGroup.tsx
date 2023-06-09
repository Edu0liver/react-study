import { useState } from 'react';

interface Props {
    items: string[];
    heading: string;
}

export default function ListGroup({ items, heading }: Props) {

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const isVoidArray = () => items.length === 0 && <p>No items!</p>;

    return (
        <>  
            <h1>{heading}</h1>

            {isVoidArray()}

            <ul className='list-group'>
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={
                            selectedIndex === index
                            ? 'list-group-item active'
                            : 'list-group-item'
                        }
                        onClick={() => { setSelectedIndex(index) }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    )
}
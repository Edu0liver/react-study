import { useState } from 'react';

export default function ListGroup() {

    const items: string[] = [
        'New York',
        'Los Angeles',
        'Chicago',
        'Houston',
        'Phoenix',
        'Philadelphia',
    ];

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const isVoidArray = () => items.length === 0 && <p>No items!</p>;

    return (
        <>  
            <h1>List Group</h1>

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
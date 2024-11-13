import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

const ZCardList = () => {
    const [items, setItems] = useState([
        { id: 1, title: 'Item 1' },
        { id: 2, title: 'Item 2' },
        { id: 3, title: 'Item 3' },
        { id: 4, title: 'Item 4' },
        { id: 5, title: 'Item 5' },
    ])
    
    const transition = useTransition(items, {
        from: { opacity: 0, transform: 'translateY(-20px)' },
        enter: { opacity: 1, transform: 'translateY(0)' },
        leave: { opacity: 0, transform: 'translateY(-20px)' },
        keys: items.map(item => item.id),
    });

    const addItem = () => {
        setItems([...items, { id: items.length + 1, title: `Item ${items.length + 1}` }]);
    }
    
    const removeItem = () => {
        setItems(items.slice(0, -1));
    }

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <button onClick={removeItem}>Remove Item</button>
            <div>
                {transition((style, item) => (
                    <animated.div key={item.i} style={style}>
                        {item.title}
                    </animated.div>
                ))}
            </div>
        </div>
    )
}

export default ZCardList;
import React from 'react';


// Use functional components, when we do not need "state" and a primarily concerned with UI
const Ninja = (props) => {
    const { ninjas } = props;
    
    const ninjaList = ninjas.map(ninja => {
        // alternative is to use a ternary operator.  condition ? (if true) : (if false)
        if (ninja.age >= 20) {
        
        return (
            <div className="ninja" key={ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
            </div>
        )
        } else {
            return null
        }
    })
    
    return (
        <div className="ninja-lst">
            {ninjaList}
        </div>        
        )
};

export default Ninja;
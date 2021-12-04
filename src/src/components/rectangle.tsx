import React from 'react';
import classNames from "classnames";
import { Props } from "../type/type";

export const Rectangle: React.FC<Props> = ({ items, onChoose, turn }) => {
    const newColor = [...items].sort(function(firstColor, secondColor){
        if(firstColor.color < secondColor.color) { return -1; }
        if(firstColor.color > secondColor.color) { return 1; }
        return 0
    });

        return (
            <div>
                <div className='rectangle'>
                    {newColor.map(item => (
                        <button
                            disabled={item.conditional}
                            key={item.id}
                            style={{backgroundColor: item.color}}
                            className={classNames( {
                                'button-true': item.conditional && item.conditional1,
                                'button-false': item.conditional && !item.conditional1,
                                'button': !item.conditional,
                                'button-passive': item.conditional || item.conditional || !turn
                            })}
                            onClick={() => onChoose(item.id)}
                        >
                        </button>
                    ))}
                </div>
            </div>
        )
}
import React from 'react';
import classNames from "classnames";
import { Props } from "../type/type";

export const Rectangle: React.FC<Props> = ({ items, onChoose, turn }) => {
        return (
            <div>
                <div className='rectangle'>
                    {items.map(item => (
                        <button
                            disabled={item.conditional && !item.conditional || item.conditional && item.conditional}
                            key={item.id}
                            style={{backgroundColor: item.color}}
                            className={classNames( {
                                'button-true': item.conditional && item.conditional1,
                                'button-false': item.conditional && !item.conditional1,
                                'button': !item.conditional && !item.conditional,
                                'button-passive': item.conditional && !item.conditional
                                    || item.conditional && item.conditional
                                || !turn
                            })}
                            onClick={() => onChoose(item.id)}
                        >
                        </button>
                    ))}
                </div>
            </div>
        )
}
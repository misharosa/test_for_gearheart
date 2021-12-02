import React from "react";
import classNames from "classnames";
import {Props} from "../type/type";

export const ColorItem:React.FC<Props> = ({ items, onChoose, turn }) => {

        return (
            <div>
                <ul className="list">
                    {items.map(item => (
                        <button
                            disabled={
                                item.conditional && !item.conditional
                                || item.conditional && item.conditional
                                || !turn
                            }
                            className="btn-outline-secondary"
                            key={item.id}
                            onClick={() => {
                                onChoose(item.id)
                            }}
                        >
                            {item.color}
                        <span className={classNames({
                            'icon-true': item.conditional && item.conditional1,
                            'icon-false': item.conditional && !item.conditional1
                        })}
                        />
                        </button>
                    ))}
                </ul>
            </div>
    )
}

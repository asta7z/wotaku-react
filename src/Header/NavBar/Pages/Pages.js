import React from "react";

function Pages({ title, submenu }) {
    return (
        <button className="menu">
            <span>{title}</span>
            <i className="fa fa-chevron-down"></i>
            <ul className="submenu">
                {submenu.map((item, index) => (
                    item.category ? (
                        <li className="submenu-item" key={item.category}>
                            <span className="submenu-title">{item.category}</span>
                            <ul className="nested-submenu">
                                {item.items.map((subitem) => (
                                    <li key={subitem.label}>
                                        <a href={subitem.url} rel="noopener noreferrer">
                                            {subitem.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            {index < submenu.length - 1 && submenu[index + 1].category && (
                                <li className="separator"></li>
                            )}
                        </li>
                    ) : (
                        <li key={item.label}>
                            <a href={item.url} rel="noopener noreferrer">
                                {item.label}
                            </a>
                        </li>
                    )
                ))}
            </ul>
        </button>
    );
}

export default Pages;

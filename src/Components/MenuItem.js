import React, { useState } from 'react';
import Link from "next/link";

const MenuItem = ({ title, link, submenuItems, onclick }) => {

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const handleClick = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <li className="slicknav_collapsed slicknav_parent">
            <a
                href="#"
                aria-haspopup="true"
                className="slicknav_item slicknav_row"
                onClick={handleClick}
                style={{ outline: 'none' }}
            >
                {link ? (
                    <Link href={link} onClick={onclick}>{title}</Link>
                ) : (
                    <span>{title}</span>
                )}
                {submenuItems && (
                    <span className="slicknav_arrow">{isSubMenuOpen ? '▼' : '►'}</span>
                )}
            </a>
            {isSubMenuOpen && submenuItems && (
                <ul className="slicknav_hidden" aria-hidden="true">
                    {submenuItems.map((item) => (
                        <li key={item.link}>
                            {item.link ? (
                                <Link href={item.link} onClick={onclick}>{item.title}</Link>
                            ) : (
                                <span>{item.title}</span>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default MenuItem;
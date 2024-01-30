import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ title, link, submenuItems }) => {

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const handleClick = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <li className="slicknav_collapsed slicknav_parent">
            <a
                href="#"
                aria-haspopup="true"
                className='slicknav_item slicknav_row'
                onClick={handleClick}
                style={{ outline: 'none' }}
            >
                <Link to={link}>{title}</Link>
                {submenuItems &&
                    <span className="slicknav_arrow">{isSubMenuOpen ? '▼' : '►'}</span>
                }
            </a>
            {isSubMenuOpen && submenuItems && (
                <ul className="slicknav_hidden" aria-hidden="true">
                    {submenuItems.map((item) => (
                        <li key={item.link}>
                            <Link to={item.link}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default MenuItem;
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <LinkContainer
                style={{ color: match ? "lightseagreen" : "black", borderBottom: match ? "1px solid lightseagreen" : "1px solid silver" }}
                to={to}
                {...props}
            >
                {children}
            </LinkContainer>
        </div >
    );
}

export default CustomLink;
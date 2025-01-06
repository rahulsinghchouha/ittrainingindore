import React from 'react';
import { Link } from 'react-router-dom';
import parse, { domToReact } from 'html-react-parser';

function ConvertAnchorToLink(htmlString) {

    if (typeof htmlString !== 'string') {
        console.error('Expected a string, but received:', typeof htmlString);
        return null;
      }
    
  const options = {
    replace: ({ name, attribs, children }) => {
      if (name === 'a' && attribs && attribs.href) {
        return (
          <Link to={attribs.href}>
            {domToReact(children)}
          </Link>
        );
      }
    }
  };

  return parse(htmlString, options);
}

export default ConvertAnchorToLink;
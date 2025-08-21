import React, { useState } from 'react';

function ExpandableText({ text, maxLines = 3 }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div>
      <p
        style={{
          display: '-webkit-box',
          WebkitLineClamp: expanded ? 'none' : maxLines,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {text}
      </p>
      <button
        onClick={toggleExpanded}
        style={{
          border: 'none',
          background: 'none',
          color: 'gray',
          cursor: 'pointer',
          padding: 0,
          fontSize: '14px',
        }}
      >
        {expanded ? '▲ 접기' : '▼ 더보기'}
      </button>
    </div>
  );
}

export default ExpandableText;
import React from 'react'

const chevronUp = ({className}) => {
    const classNameCss = className ? `${className}`: '';
  return (
   <svg className={`icon icon-arrow${classNameCss}`} width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.925 5.94496L10.8083 5.06079L5.99417 0.244959C5.91703 0.16733 5.8253 0.105723 5.72425 0.0636827C5.62321 0.0216428 5.51485 0 5.40542 0C5.29598 0 5.18762 0.0216428 5.08658 0.0636827C4.98554 0.105723 4.89381 0.16733 4.81667 0.244959L0 5.06079L0.883333 5.94413L5.40417 1.42413L9.925 5.94496Z" fill="#023D3A"/>
</svg>

  )
}

export default chevronUp;
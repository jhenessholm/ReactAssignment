import React from 'react';

const Text = ({ isVisible }) => {
  const additionalStyles = {
    fontSize: '1.5rem',
  };

  return (
    <p style={{ display: isVisible ? 'block' : 'none', ...additionalStyles }}>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
    </p>
  );
};

export default Text;
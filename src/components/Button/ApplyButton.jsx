import React, { useState } from 'react';

function ApplyButton() {
  const [confirmation, setConfirmation] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  function handleClick() {
    const confirmed = window.confirm("Are you sure you want to apply?");
    setConfirmation(confirmed);
    if (confirmed) {
      setIsDisabled(true);
    }
  }

  return (
    <div>
      <button className="btn apply-btn" onClick={handleClick} disabled={isDisabled}>Apply</button>
      {confirmation && <p>You have applied!</p>}
    </div>
  );
}

export default ApplyButton;

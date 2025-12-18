import React, { useState } from "react";

interface ProfileModalProps {
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ onClose }) => {
  const [fullName, setFullName] = useState(
    localStorage.getItem("fullName") || ""
  );

  const saveProfile = () => {
    if (!fullName.trim()) {
      alert("Full name cannot be empty");
      return;
    }

    /* Frontend-only update */
    localStorage.setItem("fullName", fullName);
    onClose();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal-card"
        onClick={e => e.stopPropagation()}
      >
        <h3>Edit Profile</h3>

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
        />

        <div className="modal-actions">
          <button onClick={saveProfile}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;

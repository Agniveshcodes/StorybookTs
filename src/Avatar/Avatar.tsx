import React from 'react';

interface AvatarGroupProps {
  avatars: string[];   // Array of avatar URLs or initials
  maxVisible: number;  // Maximum number of avatars to show
  collapsed: boolean;  // Whether the avatars should be collapsed or not
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars, maxVisible, collapsed }) => {
  // Get visible avatars based on collapsed state and maxVisible prop
  const visibleAvatars = collapsed ? avatars.slice(0, maxVisible) : avatars;

  // Calculate the number of remaining avatars
  const remainingAvatars = avatars.length - visibleAvatars.length;

  return (
    <div className="flex items-center space-x-2">
      {visibleAvatars.map((avatar, index) => (
        <div
          key={index}
          className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden border-2 border-white"
        >
          {avatar.startsWith('http') ? (
            <img src={avatar} alt={`Avatar ${index}`} className="w-full h-full object-cover" />
          ) : (
            <span className="text-sm font-medium text-gray-700">{avatar}</span>
          )}
        </div>
      ))}

      {remainingAvatars > 0 && (
        <div className="w-10 h-10 rounded-full bg-gray-500 text-white flex items-center justify-center text-sm font-medium border-2 border-white">
          +{remainingAvatars}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;

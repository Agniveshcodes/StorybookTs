import Avatar from "./Avatar/Avatar";

export const avatarUrls = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/women/5.jpg",
];

function App() {
  return (
    <>
      <div>
        <h1>Avatar Group</h1>
        <Avatar maxVisible={3} collapsed={false} avatars={avatarUrls} />
        <Avatar maxVisible={2} collapsed={true} avatars={avatarUrls} />
      </div>
    </>
  );
}

export default App;

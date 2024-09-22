import "../styles/Profile.css";

function Profile({ data, declareEdit }) {
  return (
    <div id="profile">
      <button
        className="editBtn noPrint"
        onClick={() => {
          declareEdit([
            { type: "h1", text: "Profile", id: "title" },
            {
              type: "image",
              text: "Profile picture",
              id: "picture",
              value: data.picture,
            },
            { type: "input", name: "Name", id: "name", value: data.name },
            {
              type: "input",
              name: "Location",
              id: "location",
              value: data.location,
            },
            { type: "input", name: "Email", id: "email", value: data.email },
            { type: "input", name: "Mobile", id: "mobile", value: data.mobile },
          ]);
        }}
      >
        Edit
      </button>
      <img src={data.picture} alt="profile picture" />
      <div id="profile-details">
        <h1 id="name">{data.name}</h1>
        <p id="location">{data.location}</p>
        <div id="contact">
          <p id="email">{data.email}</p>
          <p id="mob">{data.mobile}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;

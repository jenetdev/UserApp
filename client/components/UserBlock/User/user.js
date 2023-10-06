import UpdateUser from "./updateUser";
import DeleteUser from "./deleteUser";
import "./user.css";

const User = ({ item, fetchData, setCurrentpage, currentPage }) => {
  const session = localStorage?.getItem("user");

  return (
    <div key={item?.id} className="user-card-grid">
      <div className="user-card">
        <h2>{item?.attributes?.username}</h2>
        <p style={{ color: "blueviolet" }}>{item?.attributes?.email}</p>

        {session === "admin" ? (
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <UpdateUser
              id={item?.id}
              item={item?.attributes?.username}
              fetchData={fetchData}
              setCurrentpage={setCurrentpage}
              currentPage={currentPage}
            />
            <DeleteUser
              id={item?.id}
              item={item?.attributes?.username}
              fetchData={fetchData}
              setCurrentpage={setCurrentpage}
              currentPage={currentPage}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default User;

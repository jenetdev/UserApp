"use client";
import Spinner from "react-bootstrap/Spinner";
import { Button } from "reactstrap";
import User from "./User/user";
import CreateUser from "./CreateUser";
import useUserBlock from "./useUserBlock";

const UserBlock = () => {
  const {
    handleLogout,
    handleNext,
    totalPageCount,
    handlePrevious,
    pageSize,
    isLoading,
    sesn,
    currentPage,
    setCurrentpage,
    fetchData,
    users,
    error,
  } = useUserBlock();

  if (error) {
    return <h1>{error}</h1>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        className="p-5 bg-light"
      >
        {sesn === "admin" && (
          <CreateUser
            currentPage={currentPage}
            fetchData={fetchData}
            setCurrentpage={setCurrentpage}
          />
        )}
        <h4 className="mb-3">Users List</h4>

        <Button type="button" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      {users?.data?.length !== 0 ? (
        <div>
          {users &&
            users?.data?.length !== 0 &&
            users?.data?.map((item) => {
              return (
                <User
                  key={item?.id}
                  item={item}
                  fetchData={fetchData}
                  setCurrentpage={setCurrentpage}
                  currentPage={currentPage}
                />
              );
            })}
          <div>
            <Button
              color="success"
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span>
              Page {currentPage} of {totalPageCount}
            </span>
            <Button
              onClick={handleNext}
              color="success"
              disabled={
                users?.meta?.pagination?.page ===
                users?.meta?.pagination?.pageCount
              }
            >
              Next
            </Button>
          </div>
        </div>
      ) : (
        <h1>No Users to Show</h1>
      )}
    </div>
  );
};

export default UserBlock;

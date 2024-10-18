import React from "react";

function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createDate = new Date(created_at);

  return (
    <div className="user p-4 border border-black rounded">
      <div>
        <img
          src={avatar_url}
          alt="User"
          className="avatar h-[150px] rounded-lg mx-auto"
        />
      </div>
      <div className="name-container flex flex-col gap-5 justify-center items-center mt-5">
        <a href={`https://github.com/${login}`}
        className="text-blue-900 font-bold"
        >{name || login}</a>
        <p className="m-0 text-1.5xl font-bold">
          User Joined On{" "}
          {`${createDate.getDate()} ${createDate.toLocaleString("en-us", {
            month: "short",
          })} ${createDate.getFullYear()}`}
        </p>
      </div>
      <div className="profile-info  ">
        <div className="flex justify-center gap-5 font-bold text-1.5xl">
          <p>Public Repos:</p>
          <p>{public_repos}</p>
        </div>
        <div className="flex justify-center gap-5 font-bold text-1.5xl">
          <p>Followers:</p>
          <p>{followers}</p>
        </div>
        <div className="flex justify-center gap-5 font-bold text-1.5xl">
          <p>Following:</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}

export default User;

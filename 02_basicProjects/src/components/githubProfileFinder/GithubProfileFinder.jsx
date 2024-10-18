import { useEffect, useState } from "react";
import User from "./User";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("nagender811");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data);

    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }
  function handleSubmit() {
    fetchGithubUserData();
  }
  useEffect(() => {
    fetchGithubUserData();
  }, []);
  if (loading) {
    return <h1>Loading Data ! Please Wait</h1>;
  }
  return (
    <div className="github-profile-container mx-0 my-auto w-[90%] max-w-[1000px] p-5 flex flex-col justify-center items-center gap-2">
      <div className="input-wrapper ">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          className="border border-black px-2 rounded"
        />
        <button
          onClick={handleSubmit}
          className="border mx-2 border-black px-2 rounded"
        >
          Search
        </button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}

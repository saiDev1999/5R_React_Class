export const ListParentOrdered = () => {
  return (
    <ol>
      <ListItems />
    </ol>
  );
};

export const ListParentUnordered = () => {
  return (
    <ul>
      <ListItems />
    </ul>
  );
};

const ListItems = () => {
  const iplTeams = [
    {
      teamName: "CSK",
      teamPlayers: ["Dhoni", "Jadeja", "raina"],
      won: 5,
      wonYears: [2015, 2012, 2016, 2017],
      teamsLogo: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      teamName: "SRH",
      teamPlayers: ["Cummins", "Jadeja", "raina"],
      won: 5,
      wonYears: [2015, 2012, 2016, 2017],
      teamsLogo:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      teamName: "RCB",
      teamPlayers: ["Cummins", "Jadeja", "raina"],
      won: 8,
      wonYears: [],
      teamsLogo: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
  ];

  function filterData(iplTeams) {
    const newTeams = iplTeams.filter((eachTeam) => eachTeam.won >= 5);
    return newTeams;
  }

  function countMatch(iplTeams) {
    const newIplTeamsCount = iplTeams.reduce((acc, eachTeam) => {
      return acc + eachTeam.won;
    }, 0);
    return newIplTeamsCount;
  }

  return (
    <div>
      <h3>Total count of matches {countMatch(iplTeams)}</h3>
      {filterData(iplTeams).map((eachTeam) => {
        return (
          <div>
            <h2>{eachTeam.teamName}</h2>
            <img src={eachTeam.teamsLogo} width={100} height={100} />
            {eachTeam.teamPlayers.map((eachPlayer) => {
              return (
                <>
                  <h6>{eachPlayer}</h6>
                </>
              );
            })}
          </div>
        );
      })}
      {/* {fruitList.map((eachFruit) => {
        return <h4>{eachFruit}</h4>;
      })} */}
    </div>
  );
};

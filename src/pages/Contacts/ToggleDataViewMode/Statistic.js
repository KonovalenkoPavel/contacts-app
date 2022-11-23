import { Nationality } from "../../../constantce/nationality";

export const Stastic = ({ contactsAfterAZFilter }) => {
  const malesCount = contactsAfterAZFilter.filter(
    (c) => c.gender === "male"
  ).length;
  const famaleCount = contactsAfterAZFilter.filter(
    (c) => c.gender === "female"
  ).length;
  const whoPredominate =
    malesCount > famaleCount ? "male predominate" : "famale predominate";

  const nationalitiesCount = () => {
    const nationalitiesObj = {};
    for (let i = 0; i < contactsAfterAZFilter.length; i++) {
      const nat = contactsAfterAZFilter[i].nat;
      if (nationalitiesObj[nat]) {
        nationalitiesObj[nat] = nationalitiesObj[nat] + 1;
      } else {
        nationalitiesObj[nat] = 1;
      }
    }
    return Object.entries(nationalitiesObj).map(([key, value]) => {
      return (
        <span key={key}>
          <b>{Nationality[key]}</b>: {`${value} contact  `}
        </span>
      );
    });
  };
  return (
    <>
      {" "}
      <h3>Statistic</h3>
      <div className="d-flex justify-content-around alert alert-primary">
        <div className="d-flex flex-column">
          <span>Collection size</span>
          <div>{contactsAfterAZFilter.length}</div>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-around">
            <div className="d-flex flex-column">
              <span>Males</span>
              <div>{malesCount}</div>
            </div>
            <div>
              <span>Famales</span>
              <div>{famaleCount}</div>
            </div>
          </div>
          <div>{whoPredominate}</div>
        </div>
      </div>
      <h5>Nationalities</h5>
      <div className="alert alert-secondary">{nationalitiesCount()}</div>{" "}
    </>
  );
};

export default Stastic;

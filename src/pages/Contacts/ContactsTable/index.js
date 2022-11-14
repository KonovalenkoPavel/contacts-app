import React from "react";
import { CopyToClickbordText } from "../../../components/CopyToClickbordText";

export const ContactsTable = (props) => {
  const tableBody = props.contacts.map((contact) => {
    const createName = () => {
      const { title, first, last } = contact.name;
      return `${title}. ${first} ${last}`;
    };

    const createData = () => {
      const ourDate = contact.dob.date;
      const dateArr = ourDate.split("T")[0].split("-");
      const dayNumber = new Date(
        dateArr[0],
        dateArr[1] - 1,
        dateArr[2]
      ).getDay();
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const date = dateArr.reverse().join("/");
      const time = ourDate.split("T")[1].split(".")[0];
      return `${days[dayNumber]}, ${date}, ${time}`;
    };

    const createLocation = () => {
      return (
        <>
          <b>{`/${contact.location.country}/`}</b>
          <div>{`${contact.location.postcode} ${contact.location.city}, ${contact.location.street.name}, ${contact.location.street.number}`}</div>
        </>
      );
    };

    return (
      <tr key={contact.login.uuid}>
        <td>
          <div>
            <img
              className="rounded-circle"
              src={contact.picture.thumbnail}
              alt="contactLogo"
            />
          </div>
        </td>
        <td>
          <a href="_blanc">{createName()}</a>
        </td>
        <td>
          <div>{createData()}</div>
          <div>{contact.dob.age} years</div>
        </td>
        <td>
          <CopyToClickbordText text={contact.email} />
        </td>
        <td>
          <CopyToClickbordText text={contact.phone} />
        </td>
        <td>{createLocation()}</td>
        <td>{contact.location.country}</td>
      </tr>
    );
  });
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Avatar</th>
            <th scope="col">Full Name</th>
            <th scope="col">Birthday</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Location</th>
            <th scope="col">Nationality</th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </>
  );
};

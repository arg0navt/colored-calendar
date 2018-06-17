import React from 'react';
import renderer from "react-test-renderer";
import moment from "moment";
import SingleCalendar from 'components/ColoredCalendar/singleCalendar';

it("render default", () => {
  const tree = renderer.create(
    <SingleCalendar />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("render with colors", () => {
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const arrayList = [];
  let startMonth = moment().startOf("month").startOf("week");
  for (let weekNumber = 0; weekNumber <= 5; weekNumber++) {
    for (let dayNumber = 0; dayNumber <= 6; dayNumber++) {
      const day = moment(startMonth).add({week: weekNumber, days: dayNumber});
      arrayList.push({color: getRandomColor(), day: day.format("DD"), month: day.format("MM"), year: day.format("YY")});
    }
  }
  const tree = renderer.create(
    <SingleCalendar colors={arrayList} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("render with format date YYMMDDhhmmss000", () => {
  const tree = renderer.create(
    <SingleCalendar format={"YYMMDDhhmmss000"} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
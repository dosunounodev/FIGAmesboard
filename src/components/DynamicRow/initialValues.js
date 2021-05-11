const initialValues = ({ type, data }) => {
  let values = {};

  if (type === "games") {
    values = {
      id: data.id,
      name: data.name,
      console: {
        id: data.console.id,
        name: data.console.name,
      },
      franchises: [
        {
          id: data.franchises[0].id,
          name: data.franchises[0].name,
        },
      ],
      year: data.year,
      hours: data.hours,
      description: data.description,
      bought: data.bought,
      acquired: data.acquired,
      price: data.price,
      owned: data.owned,
      finished: data.finished,
      available: data.available,
    };
  }

  return values;
};

export default initialValues;

exports.handler = async (event) => {
  console.log(JSON.stringify(event, null, 2));

  switch (event.httpMethod) {
    case 'POST':
      console.log(`handling POST`);
      return {
        statusCode: 200,
        body: JSON.stringify({"message": "successfully handled POST from photos lambda"})
      };
    case 'GET':
      console.log(`handling GET`);
      return {
        statusCode: 200,
        body: JSON.stringify({"message": "successfully handled GET from photos lambda"})
      };
    default:
      throw new Error(`cannot handle httpMethod: ${event.httpMethod}`);
  }
};

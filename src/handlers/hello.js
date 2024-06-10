
export const handler = async (event, context) => {
  
  return {
    statusCode: 201,
    body: JSON.stringify({message:"Serveless function working correctly!"})
  };
};

export const getCars = async () => {
  const res = await fetch(
    "https://ef41asg6e4.execute-api.us-east-1.amazonaws.com/cars_by_user?user_id=1"
  );
  const a = await res.json();
  console.log(a);
  return a;
};

export const getParks = async () => {
  const res = await fetch(
    "https://ef41asg6e4.execute-api.us-east-1.amazonaws.com/search_parklots"
  );
  const a = await res.json();
  console.log("res json", a);
  return a;
};

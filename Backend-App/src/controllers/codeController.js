
const getUserList = async (req, res)=>{
  res.status(200).send(["Tony", "Lisa", "Michael", "Ginger", "Food"])
  // res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
};

module.exports = {getUserList};
module.exports.user = function (req, res) {
  return res.render("user_profile", {
    title: "user profile",
  });
};

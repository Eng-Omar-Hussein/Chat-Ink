const groups = require("../models/groupsModel");

exports.getPuplicGroups = async (req, res) => {
  try {
    console.log("iam is available getGroups");
    const group = await groups
      .find({ visibility: true })
      .populate("user")
      .populate("chat");
    if (!group) return res.status(404).json({ message: "Groups not found" });
    return res.json(group);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
exports.getPrivateGroups = async (req, res) => {
  try {
    console.log("iam is available getGroups");
    const group = await groups.find({ visibility: false });
    if (!group) return res.status(404).json({ message: "Groups not found" });
    return res.json(group);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
exports.getGroupsById = async (req, res) => {
  try {
    let id = req.params.id;
    const group = await groups.findById(id);
    if (!group) return res.status(404).json({ message: "Groups not found" });
    return res.json(group);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
exports.createGroup = async (req, res) => {
  console.log("iam is available createGroup");

  const { name, visibility, admin, members, messages, description, photoURL } =
    req.body;

  if (!name || !visibility || !members || !admin || !photoURL) {
    return res.status(400).json({
      error: "(name && visibility && members && admin && photoURL isrequired)",
    });
  }

  try {
    const newGroup = new groups({
      name,
      visibility,
      admin,
      members,
      messages,
      description,
      photoURL,
    });
    await newGroup.save();

    res.status(201).json({
      message: "Group created successfully",
      group: newGroup,
    });
  } catch (error) {
    console.error("Error creating group:", error);
    res.status(500).json({ error: "Server error, unable to create group" });
  }
};
exports.updatePhotoGroup = async (req, res) => {
  let id = req.params.id;
  const { photoURL } = req.body;
  try {
    const group = await groups.findByIdAndUpdate(
      id,
      { photoURL },
      { new: true }
    );
    if (!group) {
      return res.status(404).send({ message: "Group not found" });
    }
    return res.json({ message: "Group updated" }, group);
  } catch (error) {
    return res.status(500).send({ message: "Server error" });
  }
};

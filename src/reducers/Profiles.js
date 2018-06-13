import services from "../service";
let profileId = 1;

const profile = (state = [], action) => {
  switch (action.type) {
    case "PROFILE_ADD":
      profileId++;
      services.profile.add({ ...action.payload });
      return [...state, { ...action.payload, id: profileId }];
    case "PROFILE_LOAD":
      console.log("loading profile!");
  }
};

export default Profile;

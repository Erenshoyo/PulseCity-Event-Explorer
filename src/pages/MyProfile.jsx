import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { gooeyToast } from "goey-toast";
import { Mail, User, Image, Save } from "lucide-react";

const MyProfile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);

  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayName(user?.displayName || "");
      setPhotoURL(user?.photoURL || "");
    }
  }, [user]);

  const handleCancel = () => {
    setIsEditing(false);
 
    setDisplayName(user?.displayName || "");
    setPhotoURL(user?.photoURL || "");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Submit button clicked! handleUpdate is running.");
    setIsUpdating(true);
    const userData = { displayName, photoURL };

    updateUser(userData)
      .then(() => {
        setUser({ ...user, displayName, photoURL });
        setIsEditing(false);
        gooeyToast.success("Your profile has been successfully updated!", {
          classNames: {
            wrapper: "protect-gooey-wrapper",
          },
        });
      })
      .catch((error) => {
        const errorMessage = error?.message || "An error occurred";
        gooeyToast.warning(`${errorMessage}. Please try again!`, {
          classNames: {
            wrapper: "protect-gooey-wrapper",
          },
        });
      })
      .finally(() => {
        setIsUpdating(false);
      });
  };
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            My Profile
          </h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-card/40 backdrop-blur-xl border border-border shadow-2xl">
          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-8 pb-8 border-b border-border">
            <div className="relative group">
              <img
                src={photoURL || "https://via.placeholder.com/150"}
                alt={displayName || "User Avatar"}
                className="w-32 h-32 rounded-full object-cover ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all"
              />
              <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Image className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground mt-4">
              {user?.displayName || "Anonymous User"}
            </h2>
            <p className="text-muted-foreground">
              {user?.email || "No email available"}
            </p>
          </div>

          {/* Profile Form */}
          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="flex items-center space-x-2">
                <User className="w-4 h-4 text-primary" />
                <span>Full Name</span>
              </label>
              <input
                id="name"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                disabled={!isEditing || isUpdating}
                className="w-full px-4 py-2 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-secondary" />
                <span>Email Address</span>
              </label>
              <input
                id="email"
                type="email"
                value={user?.email || ""}
                disabled={true}
                className="w-full px-4 py-2 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Email cannot be changed here.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="photoURL" className="flex items-center space-x-2">
                <Image className="w-4 h-4 text-accent" />
                <span>Photo URL</span>
              </label>
              <input
                id="photoURL"
                type="url"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                disabled={!isEditing || isUpdating}
                className="w-full px-4 py-2 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>

            {isEditing && (
              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="flex-1 flex justify-center items-center py-2.5 px-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {isUpdating ? "Saving..." : "Save Changes"}
                </button>
                <button
                  type="button"
                  disabled={isUpdating}
                  onClick={handleCancel}
                  className="flex-1 py-2.5 px-4 rounded-lg border border-border hover:bg-muted transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
              </div>
            )}
          </form>
          {!isEditing && (
            <div className="pt-4">
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="w-full py-2.5 px-4 rounded-lg text-white font-medium bg-primary hover:opacity-90 transition-opacity"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

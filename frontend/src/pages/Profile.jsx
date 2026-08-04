import GradientBackground from "../components/GradientBackground";
import GlassCard from "../components/GlassCard";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { FaUserCircle } from "react-icons/fa";


export default function Profile() {
const { user, setUser } = useContext(UserContext);
    return (
    <GradientBackground>
      <div className="min-h-screen p-8">

        <h1 className="text-5xl font-black text-white">
          My Profile 
        </h1>

        <p className="mt-2 text-gray-400">
          Manage your academic profile.
        </p>

        <GlassCard>
          <div className="p-8 mt-8">

            <div className="flex items-center gap-8">
<div className="flex flex-col items-center">

  <div className="w-36 h-36 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 flex items-center justify-center text-4xl font-black text-white overflow-hidden">

    {user.photo ? (
      <img
        src={user.photo}
        alt="Profile"
        className="h-full w-full object-cover"
      />
    ) : user.name ? (
      user.name.charAt(0).toUpperCase()
    ) : (
      <FaUserCircle className="text-7xl text-white/80" />
    )}

  </div>

  <label className="mt-4 cursor-pointer rounded-lg bg-violet-600 px-4 py-2 text-sm text-white hover:bg-violet-500">

    📷 Change Photo

    <input
      type="file"
      accept="image/*"
      className="hidden"
      onChange={(e) => {
        const file = e.target.files[0];

        if (file) {
          const reader = new FileReader();

          reader.onload = () => {
            setUser({
              ...user,
              photo: reader.result,
            });
          };

          reader.readAsDataURL(file);
        }
      }}
    />

  </label>

</div>
     

              <div>

  <h2 className="text-3xl font-bold text-white">
{user.name}
  </h2>

  <p className="mt-2 text-violet-300">
    {user.department}
  </p>

  <p className="text-gray-400">
   {user.college || "Select College"}
  </p>

  <div className="mt-6 flex gap-3">

    <span className="rounded-full bg-violet-600 px-4 py-2 text-sm text-white">
      React
    </span>

    <span className="rounded-full bg-cyan-500 px-4 py-2 text-sm text-slate-900">
      Java
    </span>

    <span className="rounded-full bg-pink-500 px-4 py-2 text-sm text-white">
      AI
    </span>

  </div>

 <div className="mt-6">

  <input
    type="text"
    value={user.name}
    onChange={(e) =>
      setUser({
        ...user,
        name: e.target.value,
      })
    }
    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
  />
  <div className="mt-4">

  <input
    type="email"
    placeholder="Enter Email"
    value={user.email}
    onChange={(e) =>
      setUser({
        ...user,
        email: e.target.value,
      })
    }
    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
  />

</div>
<div className="mt-4">

  <input
    type="tel"
    placeholder="Enter Phone Number"
    value={user.phone}
    onChange={(e) =>
      setUser({
        ...user,
        phone: e.target.value,
      })
    }
    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
  />
  <div className="mt-4">
  <input
    type="text"
    placeholder="GitHub Profile URL"
    value={user.github}
    onChange={(e) =>
      setUser({
        ...user,
        github: e.target.value,
      })
    }
    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
  />
</div>

<div className="mt-4">
  <input
    type="text"
    placeholder="LinkedIn Profile URL"
    value={user.linkedin}
    onChange={(e) =>
      setUser({
        ...user,
        linkedin: e.target.value,
      })
    }
    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
  />
</div>

<div className="mt-4">
  <input
    type="text"
    placeholder="Skills (React, Java, MERN)"
    value={user.skills}
    onChange={(e) =>
      setUser({
        ...user,
        skills: e.target.value,
      })
    }
    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
  />
</div>

<div className="mt-4">
  <textarea
    rows="4"
    placeholder="Write about yourself..."
    value={user.bio}
    onChange={(e) =>
      setUser({
        ...user,
        bio: e.target.value,
      })
    }
    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
  />
</div>

  <button
  onClick={() => alert("✅ Profile Updated Successfully")}
  className="mt-6 w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3 font-bold text-white transition hover:scale-105"
>
  💾 Save Profile
</button>

</div>

</div>

</div>

            </div>

          </div>
</GlassCard>

<div className="mt-8">
  <GlassCard>
    <div className="p-8">

      <h2 className="text-3xl font-bold text-white">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <InfoCard
         title="📧 Email"
             value={user.email || "Not Added"}
            />
<InfoCard
  title="📱 Phone"
  value={user.phone || "Not Added"}
/>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
  <p className="text-violet-300 font-semibold">
    🎓 College
  </p>

  <input
    type="text"
    placeholder="Enter your College Name"
    value={user.college}
    onChange={(e) =>
      setUser({
        ...user,
        college: e.target.value,
      })
    }
    className="mt-3 w-full rounded-xl bg-slate-800 p-3 text-white placeholder:text-gray-400"
  />
</div>

 <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
  <p className="text-violet-300 font-semibold">
    💻 Department
  </p>

  <select
    value={user.department}
    onChange={(e) =>
      setUser({
        ...user,
        department: e.target.value,
      })
    }
    className="mt-3 w-full rounded-xl bg-slate-800 p-3 text-white"
  >
    <option value="">Select Department</option>
    <option value="Computer Science Engineering">
      Computer Science Engineering
    </option>
    <option value="Information Technology">
      Information Technology
    </option>
    <option value="Artificial Intelligence and Data Science">
      Artificial Intelligence and Data Science
    </option>
    <option value="Electronics and Communication Engineering">
      Electronics and Communication Engineering
    </option>
    <option value="Electrical and Electronics Engineering">
      Electrical and Electronics Engineering
    </option>
    <option value="Mechanical Engineering">
      Mechanical Engineering
    </option>
    <option value="Civil Engineering">
      Civil Engineering
    </option>
  </select>
</div>
      </div>

    </div>
  </GlassCard>
</div>

</div>
</GradientBackground>        

     
  );
}
function InfoCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-violet-300 font-semibold">{title}</p>
      <p className="mt-3 text-white">{value}</p>
    </div>
  );
}
import GradientBackground from "../components/GradientBackground";
import GlassCard from "../components/GlassCard";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { QRCodeCanvas } from "qrcode.react";

export default function Portfolio() {
  const { user } = useContext(UserContext);
const portfolioLink =
`${window.location.origin}/portfolio/${
  user.name?.toLowerCase().replace(/\s+/g, "-")
}`;
    const copyLink = () => {
  navigator.clipboard.writeText(portfolioLink);
  alert("✅ Portfolio link copied!");
};

const openPortfolio = () => {
  window.open(portfolioLink, "_blank");
};

const downloadQR = () => {
  const canvas = document.getElementById("portfolioQR");

  const pngUrl = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");

  const downloadLink = document.createElement("a");

  downloadLink.href = pngUrl;
  downloadLink.download = `${user.name || "portfolio"}-QR.png`;

  document.body.appendChild(downloadLink);

  downloadLink.click();

  document.body.removeChild(downloadLink);
};

  return (
    <GradientBackground>
      <div className="min-h-screen p-8 max-w-6xl mx-auto">

        {/* Hero Section */}
        <GlassCard>
  <div className="mt-8 p-8 text-center">

    <h2 className="text-3xl font-bold text-white">
      🌍 Share Your Portfolio
    </h2>

    <p className="mt-3 text-gray-400">
      Anyone can scan this QR Code to view your portfolio.
    </p>

    <div className="mt-8 flex justify-center">

      <div className="rounded-2xl bg-white p-6">

       <QRCodeCanvas
  id="portfolioQR"
  value={portfolioLink}
  size={220}
  includeMargin={true}
/>

      </div>

    </div>

    <p className="mt-6 text-cyan-400 break-all">
      {portfolioLink}
    </p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">

  <button
    onClick={copyLink}
    className="rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-500"
  >
    📋 Copy Link
  </button>

  <button
    onClick={openPortfolio}
    className="rounded-xl bg-cyan-500 px-6 py-3 text-slate-900 hover:bg-cyan-400"
  >
    🌐 Open Portfolio
  </button>

  <button
    onClick={downloadQR}
    className="rounded-xl bg-green-500 px-6 py-3 text-white hover:bg-green-400"
  >
    ⬇ Download QR
  </button>

</div>

  </div>
</GlassCard>

        <GlassCard>
          <div className="p-10 text-center">

            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 flex items-center justify-center text-5xl font-black text-white">
              {user.photo ? (
  <img
    src={user.photo}
    alt="Profile"
    className="h-full w-full rounded-full object-cover"
  />
) : (
  user.name?.charAt(0).toUpperCase() || "?"
)}
            </div>

            <h1 className="mt-6 text-5xl font-black text-white">
              {user.name || "Student Name"}
            </h1>

            <p className="mt-3 text-xl text-violet-300">
                 {user.department || "Department"}
            </p>

            <p className="mt-2 text-gray-400">
              {user.college || "College Name"}
            </p>

            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <button className="rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-500">
                Download Resume
              </button>

              <a
  href={user.github || "#"}
  target="_blank"
  rel="noreferrer"
  className="rounded-xl bg-cyan-500 px-6 py-3 text-slate-900 hover:bg-cyan-400"
>
  GitHub
</a>
   <a
  href={user.linkedin || "#"}
  target="_blank"
  rel="noreferrer"
  className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-500"
>
  LinkedIn
</a>
            </div>

          </div>
        </GlassCard>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <GlassCard>
            <div className="p-6 text-center">
             <h2 className="text-4xl font-black text-white">
  {user.certificates?.length || 0}
</h2>
              <p className="text-gray-400 mt-2">Certificates</p>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="p-6 text-center">
             <h2 className="text-4xl font-black text-white">
  {user.projects?.length || 0}
</h2>
              <p className="text-gray-400 mt-2">Projects</p>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="p-6 text-center"> 
            <h2 className="text-4xl font-black text-white">
  {user.achievements?.length || 0}
</h2>
              <p className="text-gray-400 mt-2">Achievements</p>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="p-6 text-center">
            <h2 className="text-4xl font-black text-green-400">
  {Math.min(
    100,
    (user.certificates?.length || 0) * 10 +
      (user.projects?.length || 0) * 15 +
      (user.achievements?.length || 0) * 20
  )}
%
</h2>
              <p className="text-gray-400 mt-2">Portfolio Score</p>
            </div>
          </GlassCard>

        </div>

        {/* About */}
        <GlassCard>
          <div className="p-8 mt-8">

            <h2 className="text-3xl font-bold text-white">
              About Me
            </h2>

            <p className="mt-4 text-gray-300 leading-8">
             {user.bio || "No description added yet."}
            </p>

          </div>
        </GlassCard>

        {/* Skills */}
        <GlassCard>
          <div className="p-8 mt-8">

            <h2 className="text-3xl font-bold text-white">
              Skills
            </h2>

            <div className="flex flex-wrap gap-4 mt-6">

              {user.skills ? (
  user.skills.split(",").map((skill, index) => (
    <span
      key={index}
      className="rounded-full bg-violet-600 px-5 py-2 text-white"
    >
      {skill.trim()}
    </span>
  ))
) : (
  <span className="text-gray-400">
    No skills added.
  </span>
)}

            </div>

          </div>
        </GlassCard>

      </div>
    </GradientBackground>
  );
}
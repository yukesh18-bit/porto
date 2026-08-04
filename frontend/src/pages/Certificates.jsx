import { useContext, useState } from "react";
import GradientBackground from "../components/GradientBackground";
import GlassCard from "../components/GlassCard";
import { UserContext } from "../Context/UserContext";

export default function Certificates() {
    const { user, setUser } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [certificates, setCertificates] = useState([
  {
    title: "Google AI Essentials",
    company: "Google",
    status: "Verified",
    color: "bg-green-500",
  },
  {
    title: "IBM Java Developer",
    company: "IBM",
    status: "Verified",
    color: "bg-blue-500",
  },
  {
    title: "AWS Cloud Practitioner",
    company: "Amazon",
    status: "Pending",
    color: "bg-yellow-500",
  },
]);
const [certificateName, setCertificateName] = useState("");
const [organization, setOrganization] = useState("");

  return (
    <GradientBackground>
      <div className="min-h-screen p-8">

        {/* Header */}
        <h1 className="text-5xl font-black text-white">
          Certificates 📜
        </h1>

        <p className="mt-2 text-gray-400">
          Manage all your academic certificates.
        </p>

        {/* Header Actions */}
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <button
            onClick={() => setShowModal(true)}
            className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white hover:bg-violet-500 transition"
          >
            + Upload Certificate
          </button>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search certificate..."
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-400"
            />

            <select className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white">
              <option className="text-black">All</option>
              <option className="text-black">Verified</option>
              <option className="text-black">Pending</option>
            </select>
          </div>

        </div>

        {/* Cards */}
        <div className="grid gap-6 mt-8 md:grid-cols-2 xl:grid-cols-3">

         {(user.certificates && user.certificates.length > 0
  ? user.certificates
  : certificates
).map((certificate, index) => (
  <CertificateCard
    key={index}
    title={certificate.title}
    company={certificate.company}
    status={certificate.status}
    color={certificate.color}
  />
))}

        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60">

            <GlassCard>
              <div className="p-8 w-[400px]">

                <h2 className="text-2xl font-bold text-white">
                  Upload Certificate
                </h2>

                 <input
  type="text"
  placeholder="Certificate Name"
  value={certificateName}
  onChange={(e) => setCertificateName(e.target.value)}
  className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
/>

               <input
  type="text"
  placeholder="Organization"
  value={organization}
  onChange={(e) => setOrganization(e.target.value)}
  className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
/>

                <div className="mt-6 flex gap-3">

                  <button
  onClick={() => {
    if (!certificateName || !organization) {
      alert("Please fill all fields");
      return;
    }
      setUser({
  ...user,

  certificates: [
    ...(user.certificates || []),
    {
      title: certificateName,
      company: organization,
      status: "Pending",
      color: "bg-yellow-500",
    },
  ],

  activity: [
    `📜 Certificate Added : ${certificateName}`,
    ...(user.activity || []),
  ],
});

    setCertificateName("");
    setOrganization("");
    setShowModal(false);
  }}
  className="flex-1 rounded-xl bg-violet-600 py-3 text-white hover:bg-violet-500 transition"
>
  Save
</button>

                  <button
                    onClick={() => setShowModal(false)}
                    className="flex-1 rounded-xl bg-red-500 py-3 text-white"
                  >
                    Cancel
                  </button>

                </div>

              </div>
            </GlassCard>

          </div>
        )}

      </div>
    </GradientBackground>
  );
}

function CertificateCard({ title, company, status, color }) {
  return (
    <GlassCard>
      <div className="p-6">

        <div className="h-40 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 flex items-center justify-center text-6xl">
          📄
        </div>

        <h2 className="mt-6 text-2xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-2 text-gray-400">
          {company}
        </p>

        <span
          className={`inline-block mt-4 rounded-full ${color} px-4 py-2 text-sm font-semibold text-white`}
        >
          {status}
        </span>

        <div className="mt-6 flex gap-3">

          <button className="flex-1 rounded-xl bg-violet-600 py-3 text-white hover:bg-violet-500 transition">
            View
          </button>

          <button className="flex-1 rounded-xl bg-cyan-500 py-3 text-slate-900 hover:bg-cyan-400 transition">
            Download
          </button>

        </div>

      </div>
    </GlassCard>
  );
}
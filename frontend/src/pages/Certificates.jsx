import { useContext, useState } from "react";
import GradientBackground from "../components/GradientBackground";
import GlassCard from "../components/GlassCard";
import { UserContext } from "../Context/UserContext";
import axios from "axios";

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
const [selectedFile, setSelectedFile] = useState(null);

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
).map((certificate, index) => {

  console.log(certificate);

  return (
    <CertificateCard
      key={index}
      id={certificate._id}
      title={certificate.title}
      company={certificate.company}
      status={certificate.status}
      color={certificate.color}
      file={certificate.file}
    />
  );
})}

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
   <input
  type="file"
  accept=".pdf,.png,.jpg,.jpeg"
  onChange={(e) => setSelectedFile(e.target.files[0])}
  className="mt-4 w-full text-white
             file:mr-4
             file:rounded-lg
             file:border-0
             file:bg-violet-600
             file:px-4
             file:py-2
             file:text-white
             hover:file:bg-violet-500"
/>

{selectedFile && (
  <p className="mt-2 text-sm text-green-400">
    Selected: {selectedFile.name}
  </p>
)}

                <div className="mt-6 flex gap-3">

                  <button
  onClick={async() => {
    if (!certificateName || !organization) {
      alert("Please fill all fields");
      return;
    }
    if (!selectedFile) {
  alert("Please select a certificate");
  return;
}
console.log(user);
console.log(user._id);
console.log("userId =", user._id);

const formData = new FormData();

formData.append("certificate", selectedFile);
formData.append("title", certificateName);
formData.append("company", organization);
formData.append("userId", user._id);
try {
  const res = await axios.post(
    "https://your-render-backend-1.onrender.com/api/certificates/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  console.log(res.data);

  setUser({
    ...user,
    certificates: [
      ...(user.certificates || []),
      {
        ...res.data.certificate,
        status: "Pending",
        color: "bg-yellow-500",
      },
    ],
    activity: [
      `📜 Certificate Added : ${certificateName}`,
      ...(user.activity || []),
    ],
  });

} catch (err) {
  console.log(err);
  console.log(err.response);
  console.log(err.response?.data);

  alert("Upload Failed");
  return;
}

setCertificateName("");
setOrganization("");
setSelectedFile(null);
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

function CertificateCard({ id, title, company, status, color, file }) {
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this certificate?")) {
      return;
    }

    try {
      await axios.delete(
        `https://your-render-backend-1.onrender.com/api/certificates/${id}`
      );

      alert("Certificate Deleted Successfully");

    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };
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

  <button
  onClick={() => {
    if (!file) {
      alert("File not found");
      return;
    }

    window.open(`https://your-render-backend-1.onrender.com${file}`, "_blank");
  }}
  className="flex-1 rounded-xl bg-violet-600 py-3 text-white hover:bg-violet-500 transition"
>
  View
</button>

 <button
  onClick={() => {
    if (!file) {
      alert("File not found");
      return;
    }

    const link = document.createElement("a");
    link.href = `https://your-render-backend-1.onrender.com${file}`;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="flex-1 rounded-xl bg-cyan-500 py-3 text-slate-900 hover:bg-cyan-400 transition"
>
  Download
</button>

  <button
    onClick={handleDelete}
    className="flex-1 rounded-xl bg-red-600 py-3 text-white hover:bg-red-500 transition"
  >
    Delete
  </button>

</div>

      </div>
    </GlassCard>
  );
}
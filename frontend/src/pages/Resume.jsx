import { useContext, useRef } from "react";
import { UserContext } from "../Context/UserContext";
import GradientBackground from "../components/GradientBackground";
import GlassCard from "../components/GlassCard";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Resume() {
const { user } = useContext(UserContext);

const resumeRef = useRef(null);

const downloadResume = async () => {

  const input = resumeRef.current;

  const canvas = await html2canvas(input,{
    scale:2,
    useCORS:true,
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF(
    "p",
    "mm",
    "a4"
  );

  const imgWidth = 210;

  const pageHeight = 295;

  const imgHeight =
    (canvas.height * imgWidth) /
    canvas.width;

  let heightLeft = imgHeight;

  let position = 0;

  pdf.addImage(
    imgData,
    "PNG",
    0,
    position,
    imgWidth,
    imgHeight
  );

  heightLeft -= pageHeight;

  while (heightLeft > 0) {

    position = heightLeft - imgHeight;

    pdf.addPage();

    pdf.addImage(
      imgData,
      "PNG",
      0,
      position,
      imgWidth,
      imgHeight
    );

    heightLeft -= pageHeight;

  }

  pdf.save(
    `${user.name || "Resume"}.pdf`
  );

};

const printResume = () => {
  const printContents = resumeRef.current.innerHTML;

  const newWindow = window.open("", "", "width=900,height=900");

  newWindow.document.write(`
    <html>
      <head>
        <title>Resume</title>
      </head>
      <body>
        ${printContents}
      </body>
    </html>
  `);

  newWindow.document.close();
  newWindow.focus();
  newWindow.print();
};

const previewResume = () => {
  resumeRef.current?.scrollIntoView({
    behavior: "smooth",
  });
};
  return (
    <GradientBackground>

      <div className="min-h-screen p-8 max-w-5xl mx-auto">

        <GlassCard>
          <div className="p-10">

            <h1 className="text-5xl font-black text-white">
              AI Resume
            </h1>

            <p className="mt-2 text-gray-400">
              ATS Friendly Resume
            </p>

            <hr className="my-8 border-white/10" />

            {/* Personal */}
            <h2 className="text-2xl font-bold text-violet-300">
              Personal Information
            </h2>

            <div className="mt-4 space-y-2 text-white">
              <p><b>Name :</b> {user.name || "Not Added"}</p>
              <p><b>Email :</b> {user.email || "Not Added"}</p>
              <p><b>Phone :</b> {user.phone || "Not Added"}</p>
              <p><b>College :</b> {user.college || "Not Added"}</p>
              <p><b>Department :</b> {user.department || "Not Added"}</p>
            </div>

            {/* Skills */}
            <h2 className="mt-10 text-2xl font-bold text-violet-300">
              Skills
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-violet-600 px-4 py-2 text-white">
                Java
              </span>

              <span className="rounded-full bg-cyan-500 px-4 py-2 text-black">
                React
              </span>

              <span className="rounded-full bg-pink-500 px-4 py-2 text-white">
                AI
              </span>

              <span className="rounded-full bg-green-500 px-4 py-2 text-white">
                MySQL
              </span>
            </div>

            {/* Certificates */}
            <h2 className="mt-10 text-2xl font-bold text-violet-300">
              Certificates
            </h2>

            <p className="mt-4 text-white">
              Total Certificates :
              <span className="font-bold text-green-400">
                {" "}
                {user.certificates?.length || 0}
              </span>
            </p>

            {/* Projects */}
            <h2 className="mt-10 text-2xl font-bold text-violet-300">
              Projects
            </h2>

            <p className="mt-4 text-white">
              Total Projects :
              <span className="font-bold text-green-400">
                {" "}
                {user.projects?.length || 0}
              </span>
            </p>

            {/* Achievements */}
            <h2 className="mt-10 text-2xl font-bold text-violet-300">
              Achievements
            </h2>

            <p className="mt-4 text-white">
              Total Achievements :
              <span className="font-bold text-green-400">
                {" "}
                {user.achievements?.length || 0}
              </span>
            </p>

            {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

  <button
    onClick={previewResume}
    className="rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-500"
  >
    👁 Preview Resume
  </button>

  <button
    onClick={downloadResume}
    className="rounded-xl bg-cyan-500 px-6 py-3 text-slate-900 hover:bg-cyan-400"
  >
    ⬇ Download Resume
  </button>

  <button
    onClick={printResume}
    className="rounded-xl bg-green-500 px-6 py-3 text-white hover:bg-green-400"
  >
    🖨 Print 
  </button>

</div>

          </div>
        </GlassCard>
        <GlassCard>
  <div
  id="resume"
  ref={resumeRef}
  className="mt-10 bg-white text-black rounded-xl p-10 shadow-xl"
>
    {/* Header */}
    <div className="text-center border-b-2 pb-6">
      <h1 className="text-4xl font-bold">
        {user.name || "Your Name"}
      </h1>

      <p className="mt-2">
        {user.email || "Email"} | {user.phone || "Phone"}
      </p>

      <p className="mt-2">
        {user.college || "College"}
      </p>

      <p>
        {user.department || "Department"}
      </p>
    </div>

    {/* About */}
    <div className="mt-8">
      <h2 className="text-2xl font-bold border-b pb-2">
        Professional Summary
      </h2>

      <p className="mt-3">
        {user.bio ||
          "A passionate Computer Science student interested in Software Development, Artificial Intelligence and Full Stack Development."}
      </p>
    </div>

    {/* Skills */}
    <div className="mt-8">
      <h2 className="text-2xl font-bold border-b pb-2">
        Technical Skills
      </h2>

      <p className="mt-3">
        {user.skills ||
          "Java, React, JavaScript, HTML, CSS, Tailwind CSS, MySQL"}
      </p>
    </div>

    {/* Projects */}
    <div className="mt-8">
      <h2 className="text-2xl font-bold border-b pb-2">
        Projects
      </h2>

      {(user.projects || []).length === 0 ? (
        <p className="mt-3">
          No Projects Added
        </p>
      ) : (
        user.projects.map((project, index) => (
          <div key={index} className="mt-4">
            <h3 className="font-bold text-lg">
                {project.projectName}
            </h3>

            <p>{project.techStack}</p>

            <p>{project.description}</p>

    <p className="mt-2">
      <b>GitHub:</b> {project.github}
    </p>
          </div>
        ))
      )}
    </div>

    {/* Certificates */}
    <div className="mt-8">
      <h2 className="text-2xl font-bold border-b pb-2">
        Certifications
      </h2>

      {(user.certificates || []).length === 0 ? (
        <p className="mt-3">
          No Certificates Added
        </p>
      ) : (
        user.certificates.map((certificate, index) => (
          <div key={index} className="mt-3">
            • {certificate.title}
          </div>
        ))
      )}
    </div>

    {/* Achievements */}
    <div className="mt-8">
      <h2 className="text-2xl font-bold border-b pb-2">
        Achievements
      </h2>

      {(user.achievements || []).length === 0 ? (
        <p className="mt-3">
          No Achievements Added
        </p>
      ) : (
        user.achievements.map((achievement, index) => (
          <div key={index} className="mt-3">
            • {achievement.title}
          </div>
        ))
      )}
    </div>

  </div>
</GlassCard>
     <GlassCard>
  <div className="mt-8 p-8">

    <h2 className="text-3xl font-bold text-white">
      🤖 AI Resume Analysis
    </h2>

    <div className="mt-8">

      <h3 className="text-xl font-semibold text-green-400">
        ATS Score
      </h3>

      <div className="mt-3 h-5 rounded-full bg-white/10">

        <div
          className="h-5 rounded-full bg-gradient-to-r from-green-500 via-cyan-400 to-violet-500"
          style={{
            width: `${Math.min(
              100,
              (user.projects?.length || 0) * 20 +
              (user.certificates?.length || 0) * 15 +
              (user.achievements?.length || 0) * 20 +
              (user.skills ? 15 : 0) +
              (user.github ? 15 : 0) +
              (user.linkedin ? 15 : 0)
            )}%`,
          }}
        ></div>

      </div>

      <h1 className="mt-4 text-5xl font-black text-white">

        {Math.min(
          100,
          (user.projects?.length || 0) * 20 +
          (user.certificates?.length || 0) * 15 +
          (user.achievements?.length || 0) * 20 +
          (user.skills ? 15 : 0) +
          (user.github ? 15 : 0) +
          (user.linkedin ? 15 : 0)
        )}

        %

      </h1>

    </div>
        <div className="mt-8 space-y-4">

      <div className="rounded-xl bg-green-500/10 border border-green-500/30 p-4">

        <p className="text-green-300">

          ✅ Projects :
          {user.projects?.length || 0}

        </p>

      </div>

      <div className="rounded-xl bg-cyan-500/10 border border-cyan-500/30 p-4">

        <p className="text-cyan-300">

          📜 Certificates :
          {user.certificates?.length || 0}

        </p>

      </div>

      <div className="rounded-xl bg-pink-500/10 border border-pink-500/30 p-4">

        <p className="text-pink-300">

          🏆 Achievements :
          {user.achievements?.length || 0}

        </p>

      </div>

    </div>

        <div className="mt-8">

      <h2 className="text-2xl font-bold text-white">

        AI Suggestions

      </h2>

      <ul className="mt-4 space-y-3 text-gray-300">

        {!user.github && (
          <li>
            ⚠ Add GitHub Profile
          </li>
        )}

        {!user.linkedin && (
          <li>
            ⚠ Add LinkedIn Profile
          </li>
        )}

        {!user.skills && (
          <li>
            ⚠ Add Technical Skills
          </li>
        )}

        {(user.projects?.length || 0) < 3 && (
          <li>
            ⚠ Add More Projects
          </li>
        )}

        {(user.certificates?.length || 0) < 5 && (
          <li>
            ⚠ Add More Certificates
          </li>
        )}

      </ul>

    </div>

  </div>

</GlassCard>

      </div>
    </GradientBackground>
  );
}
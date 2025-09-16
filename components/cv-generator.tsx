// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import {
//   Download,
//   Mail,
//   Phone,
//   MapPin,
//   Linkedin,
//   Github,
//   Globe,
//   ExternalLink,
//   Award,
//   GraduationCap,
//   Briefcase,
//   Code,
//   User,
//   Heart,
//   Info,
//   Users,
//   Monitor,
//   Database,
//   Server,
//   Wrench,
//   FolderOpen,
// } from "lucide-react"
// import Image from "next/image"

// export function CVGenerator() {
//   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

//   const handleDownloadPDF = async () => {
//     setIsGeneratingPDF(true)

//     // Create a new window for printing
//     const printWindow = window.open("", "_blank")
//     if (printWindow) {
//       const cvContent = document.getElementById("cv-content")?.innerHTML || ""

//       printWindow.document.write(`
//         <!DOCTYPE html>
//         <html>
//           <head>
//             <title>CV of Md. Nazim Ahmed</title>
//             <meta name="description" content="Professional CV of Md. Nazim Ahmed - Experienced React.js Developer, Next.js Engineer, Frontend Engineer,Frontend Developer with expertise in modern web technologies">
//             <meta name="keywords" content="React.js developer, react.js developer, React.js engineer, react.js engineer, Next.js developer, next.js developer, Next.js engineer, next.js engineer, frontend Engineer,Frontend Engineer, Frontend developer, Frontend Developer, frontend engineer, frontend developer, JavaScript developer, TypeScript developer, MERN stack developer, web developer, software engineer,Software Engineer,Software Developer,software developer">
//             <style>
//               @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

//               * {
//                 margin: 0;
//                 padding: 0;
//                 box-sizing: border-box;
//               }

//               @page {
//                 size: A4;
//                 margin: 12mm;
//               }

//               body {
//                 font-family: 'Inter', sans-serif;
//                 line-height: 1.3;
//                 color: #1e293b !important;
//                 background: white;
//                 font-size: 10px;
//               }

//               .cv-container {
//                 max-width: none;
//                 margin: 0;
//                 padding: 0;
//                 background: white;
//               }

//               h1, h2, h3, h4, h5, h6 {
//                 color: #059669 !important;
//               }

//               p, span, div, li {
//                 color: #1e293b !important;
//               }

//               a {
//                 color: #2563eb !important;
//                 text-decoration: none;
//               }

//               a:hover {
//                 text-decoration: underline !important;
//               }

//               .page-break {
//                 page-break-before: always;
//                 break-before: page;
//               }

//               .avoid-break {
//                 page-break-inside: avoid;
//                 break-inside: avoid;
//               }

//               .cv-header {
//                 margin-bottom: 16px;
//               }

//               .cv-section {
//                 margin-bottom: 14px;
//               }

//               .cv-section h3 {
//                 font-size: 14px;
//                 margin-bottom: 8px;
//               }

//               .cv-section h4 {
//                 font-size: 12px;
//               }

//               .cv-section p, .cv-section li {
//                 font-size: 10px;
//                 line-height: 1.2;
//               }

//               .skills-grid {
//                 display: grid;
//                 grid-template-columns: repeat(2, 1fr);
//                 gap: 10px;
//               }

//               .education-item, .reference-item {
//                 margin-bottom: 10px;
//               }

//               .work-experience {
//                 page-break-inside: avoid;
//               }

//               .project-section {
//                 margin-bottom: 12px;
//               }

//               .compact-spacing {
//                 margin-bottom: 6px;
//               }

//               .tech-tag {
//                 background-color: #10b981 !important;
//                 color: white !important;
//                 padding: 2px 4px;
//                 border-radius: 2px;
//                 font-size: 9px;
//                 font-weight: 500;
//                 margin: 1px;
//                 display: inline-block;
//               }

//               .profile-right {
//                 float: right;
//                 margin-left: 20px;
//                 margin-bottom: 10px;
//               }

//               .header-content {
//                 overflow: hidden;
//               }
//             </style>
//           </head>
//           <body>
//             <div class="cv-container">
//               ${cvContent}
//             </div>
//           </body>
//         </html>
//       `)

//       printWindow.document.close()

//       // Wait for content to load then print
//       setTimeout(() => {
//         printWindow.print()
//         printWindow.close()
//         setIsGeneratingPDF(false)
//       }, 1000)
//     } else {
//       setIsGeneratingPDF(false)
//     }
//   }

//   return (
//     // <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #ffffff, #f8fafc)" }}>
//     //   {/* Header with Download Button */}
//     //   <div
//     //     className="no-print"
//     //     style={{
//     //       position: "sticky",
//     //       top: 0,
//     //       zIndex: 50,
//     //       backgroundColor: "rgba(255, 255, 255, 0.95)",
//     //       backdropFilter: "blur(8px)",
//     //       borderBottom: "1px solid #e2e8f0",
//     //       padding: "16px 0",
//     //     }}
//     //   >
//     //     <div
//     //       style={{
//     //         maxWidth: "1200px",
//     //         margin: "0 auto",
//     //         padding: "0 16px",
//     //         display: "flex",
//     //         justifyContent: "space-between",
//     //         alignItems: "center",
//     //       }}
//     //     >
//     //       <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#059669" }}>Professional CV Generator</h1>
//     //       <Button onClick={handleDownloadPDF} disabled={isGeneratingPDF} style={{ backgroundColor: "#059669" }}>
//     //         <Download style={{ width: "16px", height: "16px", marginRight: "8px" }} />
//     //         {isGeneratingPDF ? "Generating PDF..." : "Download PDF"}
//     //       </Button>
//     //     </div>
//     //   </div>

//     //   {/* CV Content */}
//     //   <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 16px" }}>
//     //     <div style={{ maxWidth: "896px", margin: "0 auto" }}>
//     //       <div
//     //         style={{
//     //           padding: "32px",
//     //           backgroundColor: "#ffffff",
//     //           borderRadius: "8px",
//     //           boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//     //         }}
//     //         id="cv-content"
//     //       >
//     //         {/* Header Section */}
//     //         <div
//     //           className="cv-header avoid-break"
//     //           style={{
//     //             display: "flex",
//     //             alignItems: "center",
//     //             gap: "24px",
//     //             marginBottom: "24px",
//     //             paddingBottom: "20px",
//     //             borderBottom: "2px solid #059669",
//     //           }}
//     //         >
//     //           <div className="profile-right">
//     //             <Image
//     //               src="/images/profile.png"
//     //               alt="Md. Nazim Ahmed - React.js Developer"
//     //               width={100}
//     //               height={100}
//     //               style={{
//     //                 borderRadius: "50%",
//     //                 objectFit: "cover",
//     //                 border: "3px solid #059669",
//     //                 boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)",
//     //               }}
//     //             />
//     //           </div>
//     //           <div style={{ flex: 1 }}>
//     //             <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
//     //               <h1
//     //                 style={{
//     //                   fontSize: "28px",
//     //                   fontWeight: "bold",
//     //                   color: "#059669",
//     //                 }}
//     //               >
//     //                 Md. Nazim Ahmed
//     //               </h1>
//     //               {/* <Image
//     //                 src="/images/signature.png"
//     //                 alt="Nazim Signature"
//     //                 width={60}
//     //                 height={30}
//     //                 style={{
//     //                   objectFit: "contain",
//     //                   opacity: 0.8,
//     //                 }}
//     //               /> */}
//     //             </div>
//     //             <h2
//     //               style={{
//     //                 fontSize: "16px",
//     //                 marginBottom: "12px",
//     //                 fontWeight: "500",
//     //                 color: "#1e293b",
//     //               }}
//     //             >
//     //               Frontend Developer (React.js, Next.js)
//     //             </h2>
//     //             <div
//     //               style={{
//     //                 display: "grid",
//     //                 gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//     //                 gap: "8px",
//     //                 fontSize: "12px",
//     //               }}
//     //             >
//     //               <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//     //                 <Mail style={{ width: "14px", height: "14px", color: "#059669" }} />
//     //                 <span style={{ color: "#1e293b" }}>nazimahmedprovat@gmail.com</span>
//     //               </div>
//     //               <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//     //                 <Phone style={{ width: "14px", height: "14px", color: "#059669" }} />
//     //                 <span style={{ color: "#1e293b" }}>+8801679632572</span>
//     //               </div>
//     //               <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//     //                 <MapPin style={{ width: "14px", height: "14px", color: "#059669" }} />
//     //                 <span style={{ color: "#1e293b" }}>Dhaka - 1207, Bangladesh</span>
//     //               </div>
//     //               <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//     //                 <Linkedin style={{ width: "14px", height: "14px", color: "#059669" }} />
//     //                 <a
//     //                   href="https://www.linkedin.com/in/nazimnk9/"
//     //                   style={{ color: "#059669", textDecoration: "none" }}
//     //                 >
//     //                   linkedin.com/in/nazimnk9
//     //                 </a>
//     //               </div>
//     //               <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//     //                 <Github style={{ width: "14px", height: "14px", color: "#059669" }} />
//     //                 <a href="https://github.com/nazimnk9" style={{ color: "#059669", textDecoration: "none" }}>
//     //                   github.com/nazimnk9
//     //                 </a>
//     //               </div>
//     //               <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//     //                 <Globe style={{ width: "14px", height: "14px", color: "#059669" }} />
//     //                 <a href="https://md-nazim-ahmed.vercel.app/" style={{ color: "#059669", textDecoration: "none" }}>
//     //                   md-nazim-ahmed.vercel.app
//     //                 </a>
//     //               </div>
//     //             </div>
//     //           </div>
//     //         </div>

//     //         {/* Professional Summary */}
//     //         <div className="cv-section avoid-break" style={{ marginBottom: "40px" }}>
//     //           <h3
//     //             style={{
//     //               display: "flex",
//     //               alignItems: "center",
//     //               gap: "6px",
//     //               fontSize: "16px",
//     //               fontWeight: "600",
//     //               marginBottom: "10px",
//     //               paddingBottom: "6px",
//     //               borderBottom: "1px solid #e2e8f0",
//     //               color: "#059669",
//     //             }}
//     //           >
//     //             <User style={{ width: "16px", height: "16px" }} />
//     //             Professional Summary
//     //           </h3>
//     //           <p
//     //             style={{
//     //               lineHeight: "1.5",
//     //               textAlign: "justify",
//     //               color: "#1e293b",
//     //               fontSize: "16px",
//     //             }}
//     //           >
//     //             Creative and detail-oriented Frontend Developer, passionate about building modern, scalable, user-centric
//     //             web applications by transforming complex problems into elegant solutions using the latest web
//     //             technologies. I bring hands-on experience with JavaScript and TypeScript to develop efficient and
//     //             maintainable codebases. I specialize in React.js and Next.js for building dynamic, high-performance
//     //             interfaces and full-stack applications. On the backend, I work with Firebase and MongoDB (Databases) to
//     //             manage data securely and in real time.
//     //           </p>
//     //         </div>

//     <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #ffffff, #f8fafc)" }}>
//       {/* Header with Download Button */}
//       <div
//         className="no-print"
//         style={{
//           position: "sticky",
//           top: 0,
//           zIndex: 50,
//           backgroundColor: "rgba(255, 255, 255, 0.95)",
//           backdropFilter: "blur(8px)",
//           borderBottom: "1px solid #e2e8f0",
//           padding: "16px 0",
//         }}
//       >
//         <div
//           style={{
//             maxWidth: "1200px",
//             margin: "0 auto",
//             padding: "0 16px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#059669" }}>Professional CV Generator</h1>
//           <Button onClick={handleDownloadPDF} disabled={isGeneratingPDF} style={{ backgroundColor: "#059669" }}>
//             <Download style={{ width: "16px", height: "16px", marginRight: "8px" }} />
//             {isGeneratingPDF ? "Generating PDF..." : "Download PDF"}
//           </Button>
//         </div>
//       </div>

//       {/* CV Content */}
//       <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 16px" }}>
//         <div style={{ maxWidth: "896px", margin: "0 auto" }}>
//           <div
//             style={{
//               padding: "32px",
//               backgroundColor: "#ffffff",
//               borderRadius: "8px",
//               boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//             }}
//             id="cv-content"
//           >
//             {/* Header Section */}
//             <div
//               className="cv-header avoid-break"
//               style={{
//                 marginBottom: "20px",
//                 paddingBottom: "16px",
//                 borderBottom: "2px solid #059669",
//               }}
//             >
//               <div className="profile-right">
//                 <Image
//                   src="/images/profile.png"
//                   alt="Md. Nazim Ahmed - React.js Developer"
//                   width={100}
//                   height={100}
//                   style={{
//                     borderRadius: "50%",
//                     objectFit: "cover",
//                     border: "3px solid #059669",
//                     boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)",
//                   }}
//                 />
//               </div>

//               <div className="header-content">
//                 <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
//                   <h1
//                     style={{
//                       fontSize: "26px",
//                       fontWeight: "bold",
//                       color: "#059669",
//                     }}
//                   >
//                     Md. Nazim Ahmed
//                   </h1>
//                   {/* <Image
//                     src="/images/signature.png"
//                     alt="Nazim Signature"
//                     width={50}
//                     height={25}
//                     style={{
//                       objectFit: "contain",
//                       opacity: 0.8,
//                     }}
//                   /> */}
//                 </div>
//                 <h2
//                   style={{
//                     fontSize: "15px",
//                     marginBottom: "12px",
//                     fontWeight: "500",
//                     color: "#1e293b",
//                   }}
//                 >
//                   React.js Developer | Next.js Engineer | Frontend Engineer
//                 </h2>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
//                     gap: "6px",
//                     fontSize: "11px",
//                   }}
//                 >
//                   <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//                     <Mail style={{ width: "12px", height: "12px", color: "#059669" }} />
//                     <a href="mailto:nazimahmedprovat@gmail.com" style={{ color: "#2563eb" }}>
//                       nazimahmedprovat@gmail.com
//                     </a>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//                     <Phone style={{ width: "12px", height: "12px", color: "#059669" }} />
//                     <span style={{ color: "#1e293b" }}>+8801679632572</span>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//                     <MapPin style={{ width: "12px", height: "12px", color: "#059669" }} />
//                     <span style={{ color: "#1e293b" }}>Dhaka - 1207, Bangladesh</span>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//                     <Linkedin style={{ width: "12px", height: "12px", color: "#059669" }} />
//                     <a href="https://www.linkedin.com/in/nazimnk9/" target="_blank" style={{ color: "#2563eb" }}>
//                       linkedin.com/in/nazimnk9
//                     </a>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//                     <Github style={{ width: "12px", height: "12px", color: "#059669" }} />
//                     <a href="https://github.com/nazimnk9" target="_blank" style={{ color: "#2563eb" }}>
//                       github.com/nazimnk9
//                     </a>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//                     <Globe style={{ width: "12px", height: "12px", color: "#059669" }} />
//                     <a href="https://md-nazim-ahmed.vercel.app/" target="_blank" style={{ color: "#2563eb" }}>
//                       md-nazim-ahmed.vercel.app
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Professional Summary */}
//             <div className="cv-section avoid-break" style={{ marginBottom: "40px" }}>
//               <h3
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "6px",
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   marginBottom: "8px",
//                   paddingBottom: "4px",
//                   borderBottom: "1px solid #e2e8f0",
//                   color: "#059669",
//                 }}
//               >
//                 <User style={{ width: "14px", height: "14px" }} />
//                 Professional Summary
//               </h3>
//               <p
//                 style={{
//                   lineHeight: "1.4",
//                   textAlign: "justify",
//                   color: "#1e293b",
//                   fontSize: "10px",
//                 }}
//               >
//                 Experienced React.js Developer and Next.js Engineer with 3+ years of expertise in building modern,
//                 scalable, user-centric web applications. Specialized in frontend development using React.js, Next.js,
//                 TypeScript, and modern JavaScript frameworks. Proven track record in developing responsive,
//                 high-performance interfaces and full-stack applications. Expert in transforming complex business
//                 requirements into elegant technical solutions using cutting-edge web technologies and best practices.
//               </p>
//             </div>

//             {/* Skills Section
//             <div className="cv-section avoid-break" style={{ marginBottom: "40px" }}>
//               <h3
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "6px",
//                   fontSize: "16px",
//                   fontWeight: "600",
//                   marginBottom: "10px",
//                   paddingBottom: "6px",
//                   borderBottom: "1px solid #e2e8f0",
//                   color: "#059669",
//                 }}
//               >
//                 <Code style={{ width: "16px", height: "16px" }} />
//                 Technical Skills
//               </h3>
//               <div className="skills-grid">
//                 <div>
//                   <h4 style={{ fontWeight: "600", marginBottom: "8px", color: "#059669", fontSize: "12px" }}>
//                     Frontend
//                   </h4>
//                   <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
//                     {["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"].map((skill) => (
//                       <span
//                         key={skill}
//                         style={{
//                           padding: "2px 6px",
//                           borderRadius: "3px",
//                           fontSize: "12px",
//                           fontWeight: "500",
//                           backgroundColor: "#f8fafc",
//                           color: "#1e293b",
//                         }}
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div>
//                   <h4 style={{ fontWeight: "600", marginBottom: "8px", color: "#059669", fontSize: "12px" }}>
//                     Backend
//                   </h4>
//                   <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
//                     {["Node.js", "Express.js", "JavaScript"].map((skill) => (
//                       <span
//                         key={skill}
//                         style={{
//                           padding: "2px 6px",
//                           borderRadius: "3px",
//                           fontSize: "12px",
//                           fontWeight: "500",
//                           backgroundColor: "#f8fafc",
//                           color: "#1e293b",
//                         }}
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div>
//                   <h4 style={{ fontWeight: "600", marginBottom: "8px", color: "#059669", fontSize: "12px" }}>
//                     Database
//                   </h4>
//                   <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
//                     {["MongoDB", "Firebase", "MySQL"].map((skill) => (
//                       <span
//                         key={skill}
//                         style={{
//                           padding: "2px 6px",
//                           borderRadius: "3px",
//                           fontSize: "12px",
//                           fontWeight: "500",
//                           backgroundColor: "#f8fafc",
//                           color: "#1e293b",
//                         }}
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div> */}

//             <div className="cv-section avoid-break" style={{ marginBottom: "40px" }}>
//               <h3
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "6px",
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   marginBottom: "8px",
//                   paddingBottom: "4px",
//                   borderBottom: "1px solid #e2e8f0",
//                   color: "#059669",
//                 }}
//               >
//                 <Briefcase style={{ width: "14px", height: "14px" }} />
//                 Work Experience
//               </h3>
//               <div
//                 style={{
//                   paddingLeft: "12px",
//                   paddingBottom: "2px",
//                   marginBottom: "12px",
//                   borderLeft: "3px solid #059669",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "flex-start",
//                     marginBottom: "6px",
//                   }}
//                 >
//                   <div>
//                     <h4 style={{ fontSize: "12px", fontWeight: "600", color: "#059669", marginBottom: "4px" }}>Frontend Developer</h4>
//                     <p
//                       style={{
//                         fontWeight: "500",
//                         color: "#1e293b",
//                         fontSize: "11px",
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "6px",
//                       }}
//                     >
//                       Tizaraa IT - IT Company
//                       <a
//                         href="https://it.tizaraa.com/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={{ color: "#2563eb", textDecoration: "none", fontSize: "12px" }}
//                       >
//                         <ExternalLink style={{ width: "12px", height: "12px" }} />
//                       </a>
//                     </p>
//                   </div>
//                   <span
//                     style={{
//                       fontSize: "10px",
//                       fontWeight: "500",
//                       padding: "3px 6px",
//                       borderRadius: "3px",
//                       color: "#475569",
//                       backgroundColor: "#f8fafc",
//                     }}
//                   >
//                     Oct 2022 - Present
//                   </span>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
//                   <div className="project-section">
//                     <h5
//                       style={{
//                         fontWeight: "600",
//                         marginBottom: "4px",
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "6px",
//                         color: "#059669",
//                         fontSize: "11px",
//                       }}
//                     >
//                       Project: Tizaraa E-Commerce platform
//                       <a
//                         href="https://tizaraa.com/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={{ color: "#2563eb", textDecoration: "none", fontSize: "12px" }}
//                       >
//                         <ExternalLink style={{ width: "12px", height: "12px" }} />
//                       </a>
//                     </h5>
//                     <p style={{ fontSize: "10px", marginBottom: "4px", color: "#475569" }}>
//                       Multivendor e-commerce platform similar to Daraz and Alibaba.
//                     </p>
//                     <div style={{ marginBottom: "4px" }}>
//                       <span style={{ fontSize: "9px", fontWeight: "600", color: "#059669" }}>Technologies: </span>
//                       <div style={{ display: "inline-flex", flexWrap: "wrap", gap: "2px" }}>
//                         {["Tailwind CSS", "Material-UI", "Typescript", "React.js", "Next.js"].map(
//                           (tech) => (
//                             <span
//                               key={tech}
//                               style={{
//                                 padding: "2px 4px",
//                                 borderRadius: "2px",
//                                 fontSize: "8px",
//                                 fontWeight: "500",
//                                 border: "1px solid #059669",
//                                 color: "#059669",
//                                 backgroundColor: "#f8fafc",
//                                 display: "inline-block",
//                                 margin: "1px",
//                               }}
//                             >
//                               {tech}
//                             </span>
//                           ),
//                         )}
//                       </div>
//                     </div>
//                     <ul style={{ fontSize: "9px", listStyle: "none", margin: 0, padding: 0 }}>
//                       {[
//                         "Developed and optimized UI for seamless user experience across devices",
//                         "Collaborated with backend developers to integrate APIs for real-time data",
//                         "Ensured cross-browser compatibility and enhanced website performance",
//                       ].map((item, index) => (
//                         <li
//                           key={index}
//                           style={{
//                             position: "relative",
//                             paddingLeft: "10px",
//                             marginBottom: "2px",
//                             color: "#1e293b",
//                           }}
//                         >
//                           <span
//                             style={{
//                               position: "absolute",
//                               left: 0,
//                               fontWeight: "bold",
//                               color: "#059669",
//                             }}
//                           >
//                             •
//                           </span>
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="project-section">
//                     <h5
//                       style={{
//                         fontWeight: "600",
//                         marginBottom: "4px",
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "6px",
//                         color: "#059669",
//                         fontSize: "11px",
//                       }}
//                     >
//                       Project: Johkasou ERP System
//                       <a
//                         href="https://johkasou-erp.com/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={{ color: "#2563eb", textDecoration: "none", fontSize: "12px" }}
//                       >
//                         <ExternalLink style={{ width: "12px", height: "12px" }} />
//                       </a>
//                     </h5>
//                     <p style={{ fontSize: "10px", marginBottom: "4px", color: "#475569" }}>
//                       Advanced ERP solution using Japanese technology for business operations.
//                     </p>
//                     <div style={{ marginBottom: "4px" }}>
//                       <span style={{ fontSize: "9px", fontWeight: "600", color: "#059669" }}>Technologies: </span>
//                       <div style={{ display: "inline-flex", flexWrap: "wrap", gap: "2px" }}>
//                         {["Tailwind CSS", "Material-UI", "JavaScript", "React.js", "Next.js"].map((tech) => (
//                           <span
//                             key={tech}
//                             style={{
//                               padding: "2px 4px",
//                               borderRadius: "2px",
//                               fontSize: "8px",
//                               fontWeight: "500",
//                               border: "1px solid #059669",
//                               color: "#059669",
//                               backgroundColor: "#f8fafc",
//                               display: "inline-block",
//                               margin: "1px",
//                             }}
//                           >
//                             {tech}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                     <ul style={{ fontSize: "9px", listStyle: "none", margin: 0, padding: 0 }}>
//                       {[
//                         "Implemented responsive design principles to enhance accessibility",
//                         "Collaborated with backend developers for API integration",
//                         "Ensured cross-browser compatibility across multiple platforms",
//                       ].map((item, index) => (
//                         <li
//                           key={index}
//                           style={{
//                             position: "relative",
//                             paddingLeft: "10px",
//                             marginBottom: "2px",
//                             color: "#1e293b",
//                           }}
//                         >
//                           <span
//                             style={{
//                               position: "absolute",
//                               left: 0,
//                               fontWeight: "bold",
//                               color: "#059669",
//                             }}
//                           >
//                             •
//                           </span>
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="cv-section personal-experience avoid-break" style={{ marginBottom: "40px" }}>
//               <h3
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "6px",
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   marginBottom: "8px",
//                   paddingBottom: "4px",
//                   borderBottom: "1px solid #e2e8f0",
//                   color: "#059669",

//                 }}
//               >
//                 <FolderOpen style={{ width: "14px", height: "14px" }} />
//                 My Personal Projects
//               </h3>

//               <div style={{
//                 paddingLeft: "12px",
//                 paddingBottom: "2px",
//                 marginBottom: "12px", borderLeft: "3px solid #059669",
//                 display: "flex", flexDirection: "column", gap: "8px"
//               }}>
//                 <div className="project-section avoid-break">
//                   <h5
//                     style={{
//                       fontWeight: "600",
//                       marginBottom: "4px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "6px",
//                       color: "#059669",
//                       fontSize: "11px",

//                     }}
//                   >
//                     Project: Video Calling App
//                     <a
//                       href="https://video-calling-app-lilac.vercel.app/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       style={{ color: "#2563eb", textDecoration: "none", fontSize: "12px" }}
//                     >
//                       <ExternalLink style={{ width: "12px", height: "12px" }} />
//                     </a>
//                   </h5>
//                   <p style={{ fontSize: "10px", marginBottom: "4px", color: "#475569" }}>
//                     A modern video calling application built with Clerk authentication and Stream for real-time video
//                     functionality. Features comprehensive video calling capabilities including meeting scheduling,
//                     recordings, and personal rooms without chat functionality.
//                   </p>
//                   <div style={{ marginBottom: "4px" }}>
//                     <span style={{ fontSize: "9px", fontWeight: "600", color: "#059669" }}>Technologies: </span>
//                     <div style={{ display: "inline-flex", flexWrap: "wrap", gap: "2px" }}>
//                       {["Tailwind CSS", "shadcn/ui", "TypeScript", "React.js", "Next.js", "Clerk", "Stream"].map((tech) => (
//                         <span
//                           key={tech}
//                           style={{
//                             padding: "2px 4px",
//                             borderRadius: "2px",
//                             fontSize: "8px",
//                             fontWeight: "500",
//                             border: "1px solid #059669",
//                             color: "#059669",
//                             backgroundColor: "#f8fafc",
//                             display: "inline-block",
//                             margin: "1px",
//                           }}
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                   <ul style={{ fontSize: "9px", listStyle: "none", margin: 0, padding: 0 }}>
//                     {[
//                       "Real-time video calling functionality with high-quality audio/video",
//                       "Meeting scheduling and management system",
//                       "Recording capabilities for future reference",
//                       "Personal room creation for instant meetings",
//                       "Secure authentication with Clerk integration",
//                     ].map((item, index) => (
//                       <li
//                         key={index}
//                         style={{
//                           position: "relative",
//                           paddingLeft: "10px",
//                           marginBottom: "2px",
//                           color: "#1e293b",
//                         }}
//                       >
//                         <span
//                           style={{
//                             position: "absolute",
//                             left: 0,
//                             fontWeight: "bold",
//                             color: "#059669",
//                           }}
//                         >
//                           •
//                         </span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="project-section avoid-break">
//                   <h5
//                     style={{
//                       fontWeight: "600",
//                       marginBottom: "4px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "6px",
//                       color: "#059669",
//                       fontSize: "11px",
//                     }}
//                   >
//                     Project: Whiteboard App
//                     <a
//                       href="https://whiteboard-app-alpha.vercel.app/design/4/edit"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       style={{ color: "#2563eb", textDecoration: "none", fontSize: "12px" }}
//                     >
//                       <ExternalLink style={{ width: "12px", height: "12px" }} />
//                     </a>
//                   </h5>
//                   <p style={{ fontSize: "10px", marginBottom: "4px", color: "#475569" }}>
//                     A collaborative whiteboard application similar to Canva and Figma, featuring real-time collaboration,
//                     drawing tools, and design capabilities for creative professionals and teams.
//                   </p>
//                   <div style={{ marginBottom: "4px" }}>
//                     <span style={{ fontSize: "9px", fontWeight: "600", color: "#059669" }}>Technologies: </span>
//                     <div style={{ display: "inline-flex", flexWrap: "wrap", gap: "2px" }}>
//                       {["Tailwind CSS", "TypeScript", "React.js", "Next.js"].map(
//                         (tech) => (
//                           <span
//                             key={tech}
//                             style={{
//                               padding: "2px 4px",
//                               borderRadius: "2px",
//                               fontSize: "8px",
//                               fontWeight: "500",
//                               border: "1px solid #059669",
//                               color: "#059669",
//                               backgroundColor: "#f8fafc",
//                               display: "inline-block",
//                               margin: "1px",
//                             }}
//                           >
//                             {tech}
//                           </span>
//                         ),
//                       )}
//                     </div>
//                   </div>
//                   <ul style={{ fontSize: "9px", listStyle: "none", margin: 0, padding: 0 }}>
//                     {[
//                       "Real-time collaborative drawing and design tools",
//                       "Multi-user collaboration with Socket.io integration",
//                       "Responsive design for cross-device compatibility",
//                       "Professional-grade design tools and features",
//                     ].map((item, index) => (
//                       <li
//                         key={index}
//                         style={{
//                           position: "relative",
//                           paddingLeft: "10px",
//                           marginBottom: "2px",
//                           color: "#1e293b",
//                         }}
//                       >
//                         <span
//                           style={{
//                             position: "absolute",
//                             left: 0,
//                             fontWeight: "bold",
//                             color: "#059669",
//                           }}
//                         >
//                           •
//                         </span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="cv-section avoid-break" style={{ marginBottom: "40px" }}>
//               <h3
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "6px",
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   marginBottom: "8px",
//                   paddingBottom: "4px",
//                   borderBottom: "1px solid #e2e8f0",
//                   color: "#059669",
//                 }}
//               >
//                 <Code style={{ width: "14px", height: "14px" }} />
//                 Technical Skills
//               </h3>
//               <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
//                 <div>
//                   <h4
//                     style={{
//                       fontWeight: "600",
//                       marginBottom: "6px",
//                       color: "#059669",
//                       fontSize: "11px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "4px",
//                     }}
//                   >
//                     <Monitor style={{ width: "12px", height: "12px" }} />
//                     Frontend Technologies
//                   </h4>
//                   <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
//                     {[
//                       "HTML5",
//                       "CSS3",
//                       "JavaScript",
//                       "TypeScript",
//                       "React.js",
//                       "Next.js",
//                       "Tailwind CSS",
//                       "Bootstrap",
//                       "Responsive Design",
//                     ].map((skill) => (
//                       <span
//                         key={skill}
//                         style={{
//                           padding: "3px 6px",
//                           borderRadius: "3px",
//                           fontSize: "9px",
//                           fontWeight: "500",
//                           border: "1px solid #059669",
//                           color: "#059669",
//                           backgroundColor: "#f8fafc",
//                         }}
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <h4
//                     style={{
//                       fontWeight: "600",
//                       marginBottom: "6px",
//                       color: "#059669",
//                       fontSize: "11px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "4px",
//                     }}
//                   >
//                     <Server style={{ width: "12px", height: "12px" }} />
//                     Backend Technologies
//                   </h4>
//                   <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
//                     {["Node.js", "Express.js", "RESTful APIs", "API Integration"].map((skill) => (
//                       <span
//                         key={skill}
//                         style={{
//                           padding: "3px 6px",
//                           borderRadius: "3px",
//                           fontSize: "9px",
//                           fontWeight: "500",
//                           border: "1px solid #059669",
//                           color: "#059669",
//                           backgroundColor: "#f8fafc",
//                         }}
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <h4
//                     style={{
//                       fontWeight: "600",
//                       marginBottom: "6px",
//                       color: "#059669",
//                       fontSize: "11px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "4px",
//                     }}
//                   >
//                     <Database style={{ width: "12px", height: "12px" }} />
//                     Database & Storage
//                   </h4>
//                   <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
//                     {["MongoDB", "Firebase", "MySQL", "Local Storage", "Session Storage"].map((skill) => (
//                       <span
//                         key={skill}
//                         style={{
//                           padding: "3px 6px",
//                           borderRadius: "3px",
//                           fontSize: "9px",
//                           fontWeight: "500",
//                           border: "1px solid #059669",
//                           color: "#059669",
//                           backgroundColor: "#f8fafc",
//                         }}
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <h4
//                     style={{
//                       fontWeight: "600",
//                       marginBottom: "6px",
//                       color: "#059669",
//                       fontSize: "11px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "4px",
//                     }}
//                   >
//                     <Wrench style={{ width: "12px", height: "12px" }} />
//                     Development Tools
//                   </h4>
//                   <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
//                     {["Git", "GitHub", "VS Code", "Chrome DevTools", "Postman", "Figma", "Vercel", "Netlify"].map(
//                       (skill) => (
//                         <span
//                           key={skill}
//                           style={{
//                             padding: "3px 6px",
//                             borderRadius: "3px",
//                             fontSize: "9px",
//                             fontWeight: "500",
//                             border: "1px solid #059669",
//                             color: "#059669",
//                             backgroundColor: "#f8fafc",
//                           }}
//                         >
//                           {skill}
//                         </span>
//                       ),
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>


//             {/* Education */}
//             <div className="cv-section education" style={{ marginBottom: "40px" }}>
//               <h3
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "6px",
//                   fontSize: "16px",
//                   fontWeight: "600",
//                   marginBottom: "10px",
//                   paddingBottom: "6px",
//                   borderBottom: "1px solid #e2e8f0",
//                   color: "#059669",
//                 }}
//               >
//                 <GraduationCap style={{ width: "16px", height: "16px" }} />
//                 Education
//               </h3>
//               <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//                 {[
//                   {
//                     title: "Bachelor of Science (B.Sc)",
//                     subtitle: "Computer Science and Engineering (CSE)",
//                     institution: "Bangladesh University, Dhaka",
//                     //grade: "CGPA: 3.62",
//                   },
//                   // {
//                   //   title: "Higher Secondary Certificate (HSC)",
//                   //   subtitle: "Science Group",
//                   //   institution: "College Of Development Alternative (CODA), Dhaka",
//                   //   grade: "GPA: 4.31 (A)",
//                   // },
//                   // {
//                   //   title: "Secondary School Certificate (SSC)",
//                   //   subtitle: "Science Group",
//                   //   institution: "Bangladesh Bank High School, Dhaka",
//                   //   grade: "GPA: 4.10 (A)",
//                   // },
//                 ].map((edu, index) => (
//                   <div
//                     key={index}
//                     className="education-item"
//                     style={{
//                       paddingLeft: "16px",
//                       borderLeft: "3px solid #10b981",
//                     }}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "flex-start",
//                         marginBottom: "4px",
//                       }}
//                     >
//                       <div>
//                         <h4 style={{ fontSize: "13px", fontWeight: "600", color: "#059669" }}>{edu.title}</h4>
//                         <p style={{ color: "#1e293b", fontSize: "11px" }}>{edu.subtitle}</p>
//                         <p style={{ fontSize: "10px", color: "#475569" }}>{edu.institution}</p>
//                       </div>
//                       {/* <span
//                         style={{
//                           fontSize: "10px",
//                           padding: "4px 8px",
//                           borderRadius: "3px",
//                           color: "#475569",
//                           backgroundColor: "#f8fafc",
//                         }}
//                       >
//                         {edu.grade}
//                       </span> */}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {/* <div className="page-break"></div> */}
//             {/* Awards and Achievements */}
//             <div className="cv-section avoid-break" style={{ marginBottom: "40px" }}>
//               <h3
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "6px",
//                   fontSize: "16px",
//                   fontWeight: "600",
//                   marginBottom: "10px",
//                   paddingBottom: "6px",
//                   borderBottom: "1px solid #e2e8f0",
//                   color: "#059669",
//                 }}
//               >
//                 <Award style={{ width: "16px", height: "16px" }} />
//                 Awards and Achievements
//               </h3>
//               <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     padding: "10px",
//                     borderRadius: "6px",
//                     backgroundColor: "#f8fafc",
//                   }}
//                 >
//                   <div>
//                     <h4 style={{ fontWeight: "600", color: "#059669", fontSize: "12px" }}>
//                       Certified MERN Stack Developer
//                     </h4>
//                     <p style={{ fontSize: "10px", color: "#475569" }}>Creative IT Institute</p>
//                   </div>
//                   <a
//                     href="https://certificate.citsmp.com/?certificate_id=mern-23080526"
//                     target="_blank"
//                     style={{
//                       color: "#2563eb",
//                       textDecoration: "none",
//                       fontSize: "12px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "3px",
//                     }}
//                   >
//                     View Certificate <ExternalLink style={{ width: "12px", height: "12px" }} />
//                   </a>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     padding: "10px",
//                     borderRadius: "6px",
//                     backgroundColor: "#f8fafc",
//                   }}
//                 >
//                   <div>
//                     <h4 style={{ fontWeight: "600", color: "#059669", fontSize: "12px" }}>
//                       Certified Web Designer & Developer
//                     </h4>
//                     <p style={{ fontSize: "10px", color: "#475569" }}>Creative IT Institute</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Personal Interests
//             <div className="cv-section compact-spacing" style={{ marginBottom: "40px" }}>
//               <h3
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "6px",
//                   fontSize: "16px",
//                   fontWeight: "600",
//                   marginBottom: "10px",
//                   paddingBottom: "6px",
//                   borderBottom: "1px solid #e2e8f0",
//                   color: "#059669",
//                 }}
//               >
//                 <Heart style={{ width: "16px", height: "16px" }} />
//                 My Interests
//               </h3>
//               <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
//                 {["Swimming", "Reading", "Camping", "Shopping", "Football", "Gardening", "Travel"].map((interest) => (
//                   <span
//                     key={interest}
//                     style={{
//                       padding: "4px 8px",
//                       borderRadius: "3px",
//                       border: "1px solid #059669",
//                       color: "#059669",
//                       fontSize: "10px",
//                     }}
//                   >
//                     {interest}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Personal Information
//             <div className="cv-section compact-spacing" style={{ marginBottom: "40px" }}>
//               <h3
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "6px",
//                   fontSize: "16px",
//                   fontWeight: "600",
//                   marginBottom: "10px",
//                   paddingBottom: "6px",
//                   borderBottom: "1px solid #e2e8f0",
//                   color: "#059669",
//                 }}
//               >
//                 <Info style={{ width: "16px", height: "16px" }} />
//                 Personal Information
//               </h3>
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//                   gap: "8px",
//                   fontSize: "11px",
//                 }}
//               >
//                 <div style={{ color: "#1e293b" }}>
//                   <span style={{ fontWeight: "600", color: "#059669" }}>Place of Birth:</span>
//                   <span style={{ marginLeft: "6px" }}>Dhaka, Bangladesh</span>
//                 </div>
//                 <div style={{ color: "#1e293b" }}>
//                   <span style={{ fontWeight: "600", color: "#059669" }}>Nationality:</span>
//                   <span style={{ marginLeft: "6px" }}>Bangladeshi</span>
//                 </div>
//                 <div style={{ color: "#1e293b", gridColumn: "1 / -1" }}>
//                   <span style={{ fontWeight: "600", color: "#059669" }}>Address:</span>
//                   <span style={{ marginLeft: "6px" }}>
//                     Plot#22 & 25, BSBL Shaymolima (2nd phase), Shaymoli Housing Society, Dhaka Uddan, Mohammadpur, Dhaka
//                     - 1407
//                   </span>
//                 </div>
//               </div>
//             </div> */}

//             {/* References */}
//             <div className="cv-section" style={{ marginBottom: "40px" }}>
//               <h3
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "6px",
//                   fontSize: "16px",
//                   fontWeight: "600",
//                   marginBottom: "10px",
//                   paddingBottom: "6px",
//                   borderBottom: "1px solid #e2e8f0",
//                   color: "#059669",
//                 }}
//               >
//                 <Users style={{ width: "16px", height: "16px" }} />
//                 References
//               </h3>
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//                   gap: "16px",
//                 }}
//               >
//                 {[
//                   {
//                     name: "Dr. Mohammad Nurul Huda",
//                     title: "Professor, Department of CSE",
//                     institution: "United International University",
//                     email: "mnh@cse.uiu.ac.bd",
//                   },
//                   {
//                     name: "Dr. Khondoker Abdullah Al Mamun",
//                     title: "Professor, Department of CSE",
//                     institution: "United International University",
//                     email: "mamun@cse.uiu.ac.bd",
//                   },
//                 ].map((ref, index) => (
//                   <div
//                     key={index}
//                     className="reference-item"
//                     style={{
//                       padding: "12px",
//                       border: "1px solid #e2e8f0",
//                       borderRadius: "6px",
//                     }}
//                   >
//                     <h4 style={{ fontWeight: "600", color: "#059669", fontSize: "12px" }}>{ref.name}</h4>
//                     <p style={{ fontSize: "10px", marginBottom: "4px", color: "#475569" }}>{ref.title}</p>
//                     <p style={{ fontSize: "10px", marginBottom: "2px", color: "#475569" }}>{ref.institution}</p>
//                     <p style={{ fontSize: "10px", color: "#1e293b" }}>
//                       <span style={{ fontWeight: "500" }}>Email:</span> {ref.email}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Signature Section */}
//             <div style={{ marginTop: "24px", textAlign: "right" }}>
//               <div style={{ display: "inline-block" }}>
//                 {/* <div style={{ marginBottom: "6px" }}>
//                   <Image
//                     src="/images/signature.png"
//                     alt="Nazim Signature"
//                     width={80}
//                     height={40}
//                     style={{
//                       objectFit: "contain",
//                       opacity: 0.9,
//                     }}
//                   />
//                 </div> */}
//                 {/* <div
//                   style={{
//                     borderTop: "1px solid #1e293b",
//                     width: "120px",
//                     paddingTop: "4px",
//                     fontSize: "11px",
//                     color: "#475569",
//                   }}
//                 >
//                   Md. Nazim Ahmed
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import {
//   Download,
//   Mail,
//   Phone,
//   MapPin,
//   Linkedin,
//   Github,
//   Globe,
//   ExternalLink,
//   Award,
//   GraduationCap,
//   Briefcase,
//   Code,
//   User,
//   Users,
//   Monitor,
//   Database,
//   Server,
//   Wrench,
//   FolderOpen,
// } from "lucide-react"
// import Image from "next/image"

// export function CVGenerator() {
//   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

//   const handleDownloadPDF = async () => {
//     setIsGeneratingPDF(true)

//     // Create a new window for printing
//     const printWindow = window.open("", "_blank")
//     if (printWindow) {
//       const cvContent = document.getElementById("cv-content")?.innerHTML || ""

//       printWindow.document.write(`
//         <!DOCTYPE html>
//         <html>
//           <head>
//             <title>CV of Md. Nazim Ahmed - React.js Developer | Next.js Engineer | Frontend Engineer</title>
//             <meta name="description" content="Professional CV of Md. Nazim Ahmed - Experienced React.js Developer, Next.js Engineer, Frontend Engineer with 3+ years of expertise in modern web technologies including JavaScript, TypeScript, React, Next.js, and responsive web development.">
//             <meta name="keywords" content="React.js developer, React developer, Next.js developer, Frontend Engineer, Frontend Developer, JavaScript developer, TypeScript developer, web developer, software engineer, React.js, Next.js, HTML5, CSS3, JavaScript, responsive design, web development, UI development, frontend development">
//             <style>
//               @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

//               * {
//                 margin: 0;
//                 padding: 0;
//                 box-sizing: border-box;
//               }

//               @page {
//                 size: A4;
//                 margin: 12mm;
//               }

//               body {
//                 font-family: 'Inter', sans-serif;
//                 line-height: 1.3;
//                 color: #1e293b !important;
//                 background: white;
//                 font-size: 10px;
//               }

//               .cv-container {
//                 max-width: none;
//                 margin: 0;
//                 padding: 0;
//                 background: white;
//               }

//               h1, h2, h3, h4, h5, h6 {
//                 color: #059669 !important;
//               }

//               p, span, div, li {
//                 color: #1e293b !important;
//               }

//               a {
//                 color: #2563eb !important;
//                 text-decoration: none;
//               }

//               a:hover {
//                 text-decoration: underline !important;
//               }

//               .page-break {
//                 page-break-before: always;
//                 break-before: page;
//               }

//               .avoid-break {
//                 page-break-inside: avoid;
//                 break-inside: avoid;
//               }

//               .cv-header {
//                 margin-bottom: 16px;
//               }

//               .cv-section {
//                 margin-bottom: 14px;
//               }

//               .cv-section h3 {
//                 font-size: 14px;
//                 margin-bottom: 8px;
//               }

//               .cv-section h4 {
//                 font-size: 12px;
//               }

//               .cv-section p, .cv-section li {
//                 font-size: 10px;
//                 line-height: 1.2;
//               }

//               .skills-grid {
//                 display: grid;
//                 grid-template-columns: repeat(2, 1fr);
//                 gap: 10px;
//               }

//               .education-item, .reference-item {
//                 margin-bottom: 10px;
//               }

//               .work-experience {
//                 page-break-inside: avoid;
//               }

//               .project-section {
//                 margin-bottom: 12px;
//               }

//               .compact-spacing {
//                 margin-bottom: 6px;
//               }

//               .tech-tag {
//                 background-color: #10b981 !important;
//                 color: white !important;
//                 padding: 2px 4px;
//                 border-radius: 2px;
//                 font-size: 9px;
//                 font-weight: 500;
//                 margin: 1px;
//                 display: inline-block;
//               }

//               .profile-right {
//                 float: right;
//                 margin-left: 20px;
//                 margin-bottom: 10px;
//               }

//               .header-content {
//                 overflow: hidden;
//               }
//             </style>
//           </head>
//           <body>
//             <div class="cv-container">
//               ${cvContent}
//             </div>
//           </body>
//         </html>
//       `)

//       printWindow.document.close()

//       // Wait for content to load then print
//       setTimeout(() => {
//         printWindow.print()
//         printWindow.close()
//         setIsGeneratingPDF(false)
//       }, 1000)
//     } else {
//       setIsGeneratingPDF(false)
//     }
//   }

//   return (
//     <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #ffffff, #f8fafc)" }}>
//       {/* Header with Download Button */}
//       <div
//         className="no-print"
//         style={{
//           position: "sticky",
//           top: 0,
//           zIndex: 50,
//           backgroundColor: "rgba(255, 255, 255, 0.95)",
//           backdropFilter: "blur(8px)",
//           borderBottom: "1px solid #e2e8f0",
//           padding: "16px 0",
//         }}
//       >
//         <div
//           style={{
//             maxWidth: "1200px",
//             margin: "0 auto",
//             padding: "0 16px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#059669" }}>Professional CV Generator</h1>
//           <Button onClick={handleDownloadPDF} disabled={isGeneratingPDF} style={{ backgroundColor: "#059669" }}>
//             <Download style={{ width: "16px", height: "16px", marginRight: "8px" }} />
//             {isGeneratingPDF ? "Generating PDF..." : "Download PDF"}
//           </Button>
//         </div>
//       </div>

//       {/* CV Content */}
//       <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 16px" }}>
//         <div style={{ maxWidth: "896px", margin: "0 auto" }}>
//           <div
//             style={{
//               padding: "32px",
//               backgroundColor: "#ffffff",
//               borderRadius: "8px",
//               boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//             }}
//             id="cv-content"
//           >
//             {/* Header Section */}
//             <div
//               className="cv-header avoid-break"
//               style={{
//                 marginBottom: "20px",
//                 paddingBottom: "16px",
//                 borderBottom: "2px solid #059669",
//               }}
//             >
//               <div className="profile-right">
//                 <Image
//                   src="/images/profile.png"
//                   alt="Md. Nazim Ahmed - React.js Developer and Frontend Engineer"
//                   width={100}
//                   height={100}
//                   style={{
//                     borderRadius: "50%",
//                     objectFit: "cover",
//                     border: "3px solid #059669",
//                     boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)",
//                   }}
//                 />
//               </div>

//               <div className="header-content">
//                 <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
//                   <h1
//                     style={{
//                       fontSize: "26px",
//                       fontWeight: "bold",
//                       color: "#059669",
//                     }}
//                   >
//                     Md. Nazim Ahmed
//                   </h1>
//                 </div>
//                 <h2
//                   style={{
//                     fontSize: "15px",
//                     marginBottom: "12px",
//                     fontWeight: "500",
//                     color: "#1e293b",
//                   }}
//                 >
//                   React.js Developer | Next.js Engineer | Frontend Engineer
//                 </h2>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
//                     gap: "6px",
//                     fontSize: "11px",
//                   }}
//                 >
//                   <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//                     <Mail style={{ width: "12px", height: "12px", color: "#059669" }} />
//                     <a href="mailto:nazimahmedprovat@gmail.com" style={{ color: "#2563eb" }}>
//                       nazimahmedprovat@gmail.com
//                     </a>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//                     <Phone style={{ width: "12px", height: "12px", color: "#059669" }} />
//                     <span style={{ color: "#1e293b" }}>+8801679632572</span>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//                     <MapPin style={{ width: "12px", height: "12px", color: "#059669" }} />
//                     <span style={{ color: "#1e293b" }}>Dhaka - 1207, Bangladesh</span>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//                     <Linkedin style={{ width: "12px", height: "12px", color: "#059669" }} />
//                     <a href="https://www.linkedin.com/in/nazimnk9/" target="_blank" style={{ color: "#2563eb" }}>
//                       linkedin.com/in/nazimnk9
//                     </a>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//                     <Github style={{ width: "12px", height: "12px", color: "#059669" }} />
//                     <a href="https://github.com/nazimnk9" target="_blank" style={{ color: "#2563eb" }}>
//                       github.com/nazimnk9
//                     </a>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//                     <Globe style={{ width: "12px", height: "12px", color: "#059669" }} />
//                     <a href="https://md-nazim-ahmed.vercel.app/" target="_blank" style={{ color: "#2563eb" }}>
//                       md-nazim-ahmed.vercel.app
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Professional Summary */}
//             <div className="cv-section avoid-break" style={{ marginBottom: "40px" }}>
//               <h3
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "6px",
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   marginBottom: "8px",
//                   paddingBottom: "4px",
//                   borderBottom: "1px solid #e2e8f0",
//                   color: "#059669",
//                 }}
//               >
//                 <User style={{ width: "14px", height: "14px" }} />
//                 Professional Summary
//               </h3>
//               <p
//                 style={{
//                   lineHeight: "1.4",
//                   textAlign: "justify",
//                   color: "#1e293b",
//                   fontSize: "10px",
//                 }}
//               >
//                 Experienced React.js Developer and Next.js Engineer with 3+ years of professional experience in frontend development, 
//                 building modern, scalable web applications. Specialized in React.js, Next.js, JavaScript, and TypeScript development 
//                 with expertise in responsive web design, cross-browser compatibility, and performance optimization. Proven track record 
//                 of delivering high-quality user interfaces and full-stack applications using modern development practices. Strong 
//                 problem-solving skills with ability to transform complex business requirements into efficient technical solutions.
//               </p>
//             </div>

//             {/* Work Experience */}
//             <div className="cv-section avoid-break" style={{ marginBottom: "40px" }}>
//               <h3
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "6px",
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   marginBottom: "8px",
//                   paddingBottom: "4px",
//                   borderBottom: "1px solid #e2e8f0",
//                   color: "#059669",
//                 }}
//               >
//                 <Briefcase style={{ width: "14px", height: "14px" }} />
//                 Work Experience
//               </h3>
//               <div
//                 style={{
//                   paddingLeft: "12px",
//                   paddingBottom: "2px",
//                   marginBottom: "12px",
//                   borderLeft: "3px solid #059669",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "flex-start",
//                     marginBottom: "6px",
//                   }}
//                 >
//                   <div>
//                     <h4 style={{ fontSize: "12px", fontWeight: "600", color: "#059669", marginBottom: "4px" }}>Frontend Developer</h4>
//                     <p
//                       style={{
//                         fontWeight: "500",
//                         color: "#1e293b",
//                         fontSize: "11px",
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "6px",
//                       }}
//                     >
//                       Tizaraa IT - IT Company
//                       <a
//                         href="https://it.tizaraa.com/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={{ color: "#2563eb", textDecoration: "none", fontSize: "12px" }}
//                       >
//                         <ExternalLink style={{ width: "12px", height: "12px" }} />
//                       </a>
//                     </p>
//                   </div>
//                   <span
//                     style={{
//                       fontSize: "10px",
//                       fontWeight: "500",
//                       padding: "3px 6px",
//                       borderRadius: "3px",
//                       color: "#475569",
//                       backgroundColor: "#f8fafc",
//                     }}
//                   >
//                     Oct 2022 - Present
//                   </span>
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
//                   <div className="project-section">
//                     <h5
//                       style={{
//                         fontWeight: "600",
//                         marginBottom: "4px",
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "6px",
//                         color: "#059669",
//                         fontSize: "11px",
//                       }}
//                     >
//                       Project: Tizaraa E-Commerce platform
//                       <a
//                         href="https://tizaraa.com/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={{ color: "#2563eb", textDecoration: "none", fontSize: "12px" }}
//                       >
//                         <ExternalLink style={{ width: "12px", height: "12px" }} />
//                       </a>
//                     </h5>
//                     <p style={{ fontSize: "10px", marginBottom: "4px", color: "#475569" }}>
//                       Multivendor e-commerce platform similar to Daraz and Alibaba.
//                     </p>
//                     <div style={{ marginBottom: "4px" }}>
//                       <span style={{ fontSize: "9px", fontWeight: "600", color: "#059669" }}>Technologies: </span>
//                       <div style={{ display: "inline-flex", flexWrap: "wrap", gap: "2px" }}>
//                         {["Tailwind CSS", "Material-UI", "Typescript", "React.js", "Next.js"].map(
//                           (tech) => (
//                             <span
//                               key={tech}
//                               style={{
//                                 padding: "2px 4px",
//                                 borderRadius: "2px",
//                                 fontSize: "8px",
//                                 fontWeight: "500",
//                                 border: "1px solid #059669",
//                                 color: "#059669",
//                                 backgroundColor: "#f8fafc",
//                                 display: "inline-block",
//                                 margin: "1px",
//                               }}
//                             >
//                               {tech}
//                             </span>
//                           ),
//                         )}
//                       </div>
//                     </div>
//                     <ul style={{ fontSize: "9px", listStyle: "none", margin: 0, padding: 0 }}>
//                       {[
//                         "Developed and optimized UI components for seamless user experience across devices",
//                         "Collaborated with backend developers to integrate RESTful APIs for real-time data",
//                         "Implemented responsive design principles ensuring cross-browser compatibility",
//                         "Enhanced website performance through code optimization and best practices",
//                       ].map((item, index) => (
//                         <li
//                           key={index}
//                           style={{
//                             position: "relative",
//                             paddingLeft: "10px",
//                             marginBottom: "2px",
//                             color: "#1e293b",
//                           }}
//                         >
//                           <span
//                             style={{
//                               position: "absolute",
//                               left: 0,
//                               fontWeight: "bold",
//                               color: "#059669",
//                             }}
//                           >
//                             •
//                           </span>
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="project-section">
//                     <h5
//                       style={{
//                         fontWeight: "600",
//                         marginBottom: "4px",
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "6px",
//                         color: "#059669",
//                         fontSize: "11px",
//                       }}
//                     >
//                       Project: Johkasou ERP System
//                       <a
//                         href="https://johkasou-erp.com/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={{ color: "#2563eb", textDecoration: "none", fontSize: "12px" }}
//                       >
//                         <ExternalLink style={{ width: "12px", height: "12px" }} />
//                       </a>
//                     </h5>
//                     <p style={{ fontSize: "10px", marginBottom: "4px", color: "#475569" }}>
//                       Advanced ERP solution using Japanese technology for business operations.
//                     </p>
//                     <div style={{ marginBottom: "4px" }}>
//                       <span style={{ fontSize: "9px", fontWeight: "600", color: "#059669" }}>Technologies: </span>
//                       <div style={{ display: "inline-flex", flexWrap: "wrap", gap: "2px" }}>
//                         {["Tailwind CSS", "Material-UI", "JavaScript", "React.js", "Next.js"].map((tech) => (
//                           <span
//                             key={tech}
//                             style={{
//                               padding: "2px 4px",
//                               borderRadius: "2px",
//                               fontSize: "8px",
//                               fontWeight: "500",
//                               border: "1px solid #059669",
//                               color: "#059669",
//                               backgroundColor: "#f8fafc",
//                               display: "inline-block",
//                               margin: "1px",
//                             }}
//                           >
//                             {tech}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                     <ul style={{ fontSize: "9px", listStyle: "none", margin: 0, padding: 0 }}>
//                       {[
//                         "Implemented responsive design principles to enhance accessibility across devices",
//                         "Collaborated with backend developers for API integration and data management",
//                         "Ensured cross-browser compatibility across multiple platforms and devices",
//                         "Developed reusable components to improve development efficiency",
//                       ].map((item, index) => (
//                         <li
//                           key={index}
//                           style={{
//                             position: "relative",
//                             paddingLeft: "10px",
//                             marginBottom: "2px",
//                             color: "#1e293b",
//                           }}
//                         >
//                           <span
//                             style={{
//                               position: "absolute",
//                               left: 0,
//                               fontWeight: "bold",
//                               color: "#059669",
//                             }}
//                           >
//                             •
//                           </span>
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Personal Projects */}
//             <div className="cv-section personal-experience avoid-break" style={{ marginBottom: "40px" }}>
//               <h3
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "6px",
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   marginBottom: "8px",
//                   paddingBottom: "4px",
//                   borderBottom: "1px solid #e2e8f0",
//                   color: "#059669",
//                 }}
//               >
//                 <FolderOpen style={{ width: "14px", height: "14px" }} />
//                 Personal Projects
//               </h3>

//               <div style={{
//                 paddingLeft: "12px",
//                 paddingBottom: "2px",
//                 marginBottom: "12px", borderLeft: "3px solid #059669",
//                 display: "flex", flexDirection: "column", gap: "8px"
//               }}>
//                 <div className="project-section avoid-break">
//                   <h5
//                     style={{
//                       fontWeight: "600",
//                       marginBottom: "4px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "6px",
//                       color: "#059669",
//                       fontSize: "11px",
//                     }}
//                   >
//                     Project: Video Calling App
//                     <a
//                       href="https://video-calling-app-lilac.vercel.app/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       style={{ color: "#2563eb", textDecoration: "none", fontSize: "12px" }}
//                     >
//                       <ExternalLink style={{ width: "12px", height: "12px" }} />
//                     </a>
//                   </h5>
//                   <p style={{ fontSize: "10px", marginBottom: "4px", color: "#475569" }}>
//                     A modern video calling application built with Clerk authentication and Stream for real-time video
//                     functionality. Features comprehensive video calling capabilities including meeting scheduling,
//                     recordings, and personal rooms.
//                   </p>
//                   <div style={{ marginBottom: "4px" }}>
//                     <span style={{ fontSize: "9px", fontWeight: "600", color: "#059669" }}>Technologies: </span>
//                     <div style={{ display: "inline-flex", flexWrap: "wrap", gap: "2px" }}>
//                       {["Tailwind CSS", "shadcn/ui", "TypeScript", "React.js", "Next.js", "Clerk", "Stream"].map((tech) => (
//                         <span
//                           key={tech}
//                           style={{
//                             padding: "2px 4px",
//                             borderRadius: "2px",
//                             fontSize: "8px",
//                             fontWeight: "500",
//                             border: "1px solid #059669",
//                             color: "#059669",
//                             backgroundColor: "#f8fafc",
//                             display: "inline-block",
//                             margin: "1px",
//                           }}
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                   <ul style={{ fontSize: "9px", listStyle: "none", margin: 0, padding: 0 }}>
//                     {[
//                       "Developed real-time video calling functionality with high-quality audio/video streaming",
//                       "Implemented meeting scheduling and management system for user convenience",
//                       "Integrated recording capabilities for future reference and meeting documentation",
//                       "Created personal room functionality for instant meetings and collaboration",
//                       "Implemented secure authentication system using Clerk integration",
//                     ].map((item, index) => (
//                       <li
//                         key={index}
//                         style={{
//                           position: "relative",
//                           paddingLeft: "10px",
//                           marginBottom: "2px",
//                           color: "#1e293b",
//                         }}
//                       >
//                         <span
//                           style={{
//                             position: "absolute",
//                             left: 0,
//                             fontWeight: "bold",
//                             color: "#059669",
//                           }}
//                         >
//                           •
//                         </span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="project-section avoid-break">
//                   <h5
//                     style={{
//                       fontWeight: "600",
//                       marginBottom: "4px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "6px",
//                       color: "#059669",
//                       fontSize: "11px",
//                     }}
//                   >
//                     Project: Whiteboard App
//                     <a
//                       href="https://whiteboard-app-alpha.vercel.app/design/4/edit"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       style={{ color: "#2563eb", textDecoration: "none", fontSize: "12px" }}
//                     >
//                       <ExternalLink style={{ width: "12px", height: "12px" }} />
//                     </a>
//                   </h5>
//                   <p style={{ fontSize: "10px", marginBottom: "4px", color: "#475569" }}>
//                     A collaborative whiteboard application similar to Canva and Figma, featuring real-time collaboration,
//                     drawing tools, and design capabilities for creative professionals and teams.
//                   </p>
//                   <div style={{ marginBottom: "4px" }}>
//                     <span style={{ fontSize: "9px", fontWeight: "600", color: "#059669" }}>Technologies: </span>
//                     <div style={{ display: "inline-flex", flexWrap: "wrap", gap: "2px" }}>
//                       {["Tailwind CSS", "TypeScript", "React.js", "Next.js", "Socket.io"].map(
//                         (tech) => (
//                           <span
//                             key={tech}
//                             style={{
//                               padding: "2px 4px",
//                               borderRadius: "2px",
//                               fontSize: "8px",
//                               fontWeight: "500",
//                               border: "1px solid #059669",
//                               color: "#059669",
//                               backgroundColor: "#f8fafc",
//                               display: "inline-block",
//                               margin: "1px",
//                             }}
//                           >
//                             {tech}
//                           </span>
//                         ),
//                       )}
//                     </div>
//                   </div>
//                   <ul style={{ fontSize: "9px", listStyle: "none", margin: 0, padding: 0 }}>
//                     {[
//                       "Developed real-time collaborative drawing and design tools for multiple users",
//                       "Implemented multi-user collaboration with Socket.io integration for live updates",
//                       "Created responsive design ensuring cross-device compatibility and performance",
//                       "Built professional-grade design tools and features for creative work",
//                       "Optimized application performance for smooth drawing experience",
//                     ].map((item, index) => (
//                       <li
//                         key={index}
//                         style={{
//                           position: "relative",
//                           paddingLeft: "10px",
//                           marginBottom: "2px",
//                           color: "#1e293b",
//                         }}
//                       >
//                         <span
//                           style={{
//                             position: "absolute",
//                             left: 0,
//                             fontWeight: "bold",
//                             color: "#059669",
//                           }}
//                         >
//                           •
//                         </span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Technical Skills */}
//             <div className="cv-section avoid-break" style={{ marginBottom: "40px" }}>
//               <h3
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "6px",
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   marginBottom: "8px",
//                   paddingBottom: "4px",
//                   borderBottom: "1px solid #e2e8f0",
//                   color: "#059669",
//                 }}
//               >
//                 <Code style={{ width: "14px", height: "14px" }} />
//                 Technical Skills
//               </h3>
//               <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
//                 <div>
//                   <h4
//                     style={{
//                       fontWeight: "600",
//                       marginBottom: "6px",
//                       color: "#059669",
//                       fontSize: "11px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "4px",
//                     }}
//                   >
//                     <Monitor style={{ width: "12px", height: "12px" }} />
//                     Frontend Technologies
//                   </h4>
//                   <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
//                     {[
//                       "HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", 
//                       "Tailwind CSS", "Bootstrap", "Responsive Design", "Material-UI", "shadcn/ui"
//                     ].map((skill) => (
//                       <span
//                         key={skill}
//                         style={{
//                           padding: "3px 6px",
//                           borderRadius: "3px",
//                           fontSize: "9px",
//                           fontWeight: "500",
//                           border: "1px solid #059669",
//                           color: "#059669",
//                           backgroundColor: "#f8fafc",
//                         }}
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <h4
//                     style={{
//                       fontWeight: "600",
//                       marginBottom: "6px",
//                       color: "#059669",
//                       fontSize: "11px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "4px",
//                     }}
//                   >
//                     <Server style={{ width: "12px", height: "12px" }} />
//                     Backend Technologies
//                   </h4>
//                   <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
//                     {["Node.js", "Express.js", "RESTful APIs", "API Integration", "Authentication"].map((skill) => (
//                       <span
//                         key={skill}
//                         style={{
//                           padding: "3px 6px",
//                           borderRadius: "3px",
//                           fontSize: "9px",
//                           fontWeight: "500",
//                           border: "1px solid #059669",
//                           color: "#059669",
//                           backgroundColor: "#f8fafc",
//                         }}
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <h4
//                     style={{
//                       fontWeight: "600",
//                       marginBottom: "6px",
//                       color: "#059669",
//                       fontSize: "11px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "4px",
//                     }}
//                   >
//                     <Database style={{ width: "12px", height: "12px" }} />
//                     Database & Storage
//                   </h4>
//                   <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
//                     {["MongoDB", "Firebase", "MySQL", "Local Storage", "Session Storage"].map((skill) => (
//                       <span
//                         key={skill}
//                         style={{
//                           padding: "3px 6px",
//                           borderRadius: "3px",
//                           fontSize: "9px",
//                           fontWeight: "500",
//                           border: "1px solid #059669",
//                           color: "#059669",
//                           backgroundColor: "#f8fafc",
//                         }}
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <h4
//                     style={{
//                       fontWeight: "600",
//                       marginBottom: "6px",
//                       color: "#059669",
//                       fontSize: "11px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "4px",
//                     }}
//                   >
//                     <Wrench style={{ width: "12px", height: "12px" }} />
//                     Development Tools
//                   </h4>
//                   <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
//                     {["Git", "GitHub", "VS Code", "Chrome DevTools", "Postman", "Figma", "Vercel", "Netlify"].map(
//                       (skill) => (
//                         <span
//                           key={skill}
//                           style={{
//                             padding: "3px 6px",
//                             borderRadius: "3px",
//                             fontSize: "9px",
//                             fontWeight: "500",
//                             border: "1px solid #059669",
//                             color: "#059669",
//                             backgroundColor: "#f8fafc",
//                           }}
//                         >
//                           {skill}
//                         </span>
//                       ),
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Education */}
//             <div className="cv-section education" style={{ marginBottom: "40px" }}>
//               <h3
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "6px",
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   marginBottom: "8px",
//                   paddingBottom: "4px",
//                   borderBottom: "1px solid #e2e8f0",
//                   color: "#059669",
//                 }}
//               >
//                 <GraduationCap style={{ width: "14px", height: "14px" }} />
//                 Education
//               </h3>
//               <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//                 {[
//                   {
//                     title: "Bachelor of Science (B.Sc)",
//                     subtitle: "Computer Science and Engineering (CSE)",
//                     institution: "Bangladesh University, Dhaka",
//                   },
//                 ].map((edu, index) => (
//                   <div
//                     key={index}
//                     className="education-item"
//                     style={{
//                       paddingLeft: "16px",
//                       borderLeft: "3px solid #10b981",
//                     }}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "flex-start",
//                         marginBottom: "4px",
//                       }}
//                     >
//                       <div>
//                         <h4 style={{ fontSize: "12px", fontWeight: "600", color: "#059669" }}>{edu.title}</h4>
//                         <p style={{ color: "#1e293b", fontSize: "11px" }}>{edu.subtitle}</p>
//                         <p style={{ fontSize: "10px", color: "#475569" }}>{edu.institution}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Awards and Achievements */}
//             <div className="cv-section avoid-break" style={{ marginBottom: "40px" }}>
//               <h3
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "6px",
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   marginBottom: "8px",
//                   paddingBottom: "4px",
//                   borderBottom: "1px solid #e2e8f0",
//                   color: "#059669",
//                 }}
//               >
//                 <Award style={{ width: "14px", height: "14px" }} />
//                 Certifications
//               </h3>
//               <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     padding: "10px",
//                     borderRadius: "6px",
//                     backgroundColor: "#f8fafc",
//                   }}
//                 >
//                   <div>
//                     <h4 style={{ fontWeight: "600", color: "#059669", fontSize: "12px" }}>
//                       Certified MERN Stack Developer
//                     </h4>
//                     <p style={{ fontSize: "10px", color: "#475569" }}>Creative IT Institute</p>
//                   </div>
//                   <a
//                     href="https://certificate.citsmp.com/?certificate_id=mern-23080526"
//                     target="_blank"
//                     style={{
//                       color: "#2563eb",
//                       textDecoration: "none",
//                       fontSize: "12px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "3px",
//                     }}
//                   >
//                     View Certificate <ExternalLink style={{ width: "12px", height: "12px" }} />
//                   </a>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     padding: "10px",
//                     borderRadius: "6px",
//                     backgroundColor: "#f8fafc",
//                   }}
//                 >
//                   <div>
//                     <h4 style={{ fontWeight: "600", color: "#059669", fontSize: "12px" }}>
//                       Certified Web Designer & Developer
//                     </h4>
//                     <p style={{ fontSize: "10px", color: "#475569" }}>Creative IT Institute</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* References */}
//             <div className="cv-section" style={{ marginBottom: "40px" }}>
//               <h3
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "6px",
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   marginBottom: "8px",
//                   paddingBottom: "4px",
//                   borderBottom: "1px solid #e2e8f0",
//                   color: "#059669",
//                 }}
//               >
//                 <Users style={{ width: "14px", height: "14px" }} />
//                 References
//               </h3>
//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//                   gap: "16px",
//                 }}
//               >
//                 {[
//                   {
//                     name: "Dr. Mohammad Nurul Huda",
//                     title: "Professor, Department of CSE",
//                     institution: "United International University",
//                     email: "mnh@cse.uiu.ac.bd",
//                   },
//                   {
//                     name: "Dr. Khondoker Abdullah Al Mamun",
//                     title: "Professor, Department of CSE",
//                     institution: "United International University",
//                     email: "mamun@cse.uiu.ac.bd",
//                   },
//                 ].map((ref, index) => (
//                   <div
//                     key={index}
//                     className="reference-item"
//                     style={{
//                       padding: "12px",
//                       border: "1px solid #e2e8f0",
//                       borderRadius: "6px",
//                     }}
//                   >
//                     <h4 style={{ fontWeight: "600", color: "#059669", fontSize: "12px" }}>{ref.name}</h4>
//                     <p style={{ fontSize: "10px", marginBottom: "4px", color: "#475569" }}>{ref.title}</p>
//                     <p style={{ fontSize: "10px", marginBottom: "2px", color: "#475569" }}>{ref.institution}</p>
//                     <p style={{ fontSize: "10px", color: "#1e293b" }}>
//                       <span style={{ fontWeight: "500" }}>Email:</span> {ref.email}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  User,
  Users,
  Monitor,
  Database,
  Server,
  Wrench,
  FolderOpen,
} from "lucide-react"
import Image from "next/image"

export function CVGenerator() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true)

    // Create a new window for printing
    const printWindow = window.open("", "_blank")
    if (printWindow) {
      const cvContent = document.getElementById("cv-content")?.innerHTML || ""

      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>CV of Md. Nazim Ahmed - React.js Developer | Next.js Engineer | Frontend Engineer</title>
            <meta name="description" content="Professional CV of Md. Nazim Ahmed - Experienced React.js Developer, Next.js Engineer, Frontend Engineer with 3+ years of expertise in modern web technologies including JavaScript, TypeScript, React, Next.js, and responsive web development.">
            <meta name="keywords" content="React.js developer, React developer, Next.js developer, Frontend Engineer, Frontend Developer, JavaScript developer, TypeScript developer, web developer, software engineer, React.js, Next.js, HTML5, CSS3, JavaScript, responsive design, web development, UI development, frontend development">
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
              
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              
              @page {
                size: A4;
                margin: 12mm;
              }
              
              body {
                font-family: 'Inter', sans-serif;
                line-height: 1.3;
                color: #1e293b !important;
                background: white;
                font-size: 10px;
              }
              
              .cv-container {
                max-width: none;
                margin: 0;
                padding: 0;
                background: white;
              }
              
              h1, h2, h3, h4, h5, h6 {
                color: #059669 !important;
              }
              
              p, span, div, li {
                color: #1e293b !important;
              }

              .blue {
                color: #2563eb !important;
                }

              a {
                color: #2563eb !important;
                text-decoration: none;
              }

              a:hover {
                text-decoration: underline !important;
              }

              .page-break {
                page-break-before: always;
                break-before: page;
              }

              .avoid-break {
                page-break-inside: avoid;
                break-inside: avoid;
              }

              .cv-header {
                margin-bottom: 16px;
              }

              .cv-section {
                margin-bottom: 14px;
              }

              .cv-section h3 {
                font-size: 14px;
                margin-bottom: 8px;
              }

              .cv-section h4 {
                font-size: 12px;
              }

              .cv-section p, .cv-section li {
                font-size: 10px;
                line-height: 1.2;
              }

              .skills-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
              }

              .education-item, .reference-item {
                margin-bottom: 10px;
              }

              .work-experience {
                page-break-inside: avoid;
              }

              .project-section {
                margin-bottom: 12px;
              }

              .compact-spacing {
                margin-bottom: 6px;
              }

              .tech-tag {
                background-color: #10b981 !important;
                color: white !important;
                padding: 2px 4px;
                border-radius: 2px;
                font-size: 9px;
                font-weight: 500;
                margin: 1px;
                display: inline-block;
              }

              .profile-right {
                float: right;
                margin-left: 20px;
                margin-bottom: 10px;
              }

              .header-content {
                overflow: hidden;
              }
            </style>
          </head>
          <body>
            <div class="cv-container">
              ${cvContent}
            </div>
          </body>
        </html>
      `)

      printWindow.document.close()

      // Wait for content to load then print
      setTimeout(() => {
        printWindow.print()
        printWindow.close()
        setIsGeneratingPDF(false)
      }, 1000)
    } else {
      setIsGeneratingPDF(false)
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #ffffff, #f8fafc)" }}>
      {/* Header with Download Button */}
      <div
        className="no-print"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid #e2e8f0",
          padding: "16px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#059669" }}>Professional CV Generator</h1>
          <Button onClick={handleDownloadPDF} disabled={isGeneratingPDF} style={{ backgroundColor: "#059669" }}>
            <Download style={{ width: "16px", height: "16px", marginRight: "8px" }} />
            {isGeneratingPDF ? "Generating PDF..." : "Download PDF"}
          </Button>
        </div>
      </div>

      {/* CV Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ maxWidth: "896px", margin: "0 auto" }}>
          <div
            style={{
              padding: "32px",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            id="cv-content"
          >
            {/* Header Section */}
            <div
              className="cv-header avoid-break"
              style={{
                marginBottom: "20px",
                paddingBottom: "16px",
                borderBottom: "2px solid #059669",
              }}
            >
              <div className="profile-right">
                <Image
                  src="/images/profile.png"
                  alt="Md. Nazim Ahmed - React.js Developer and Frontend Engineer"
                  width={100}
                  height={100}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid #059669",
                    boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>

              <div className="header-content">
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                  <h1
                    style={{
                      fontSize: "26px",
                      fontWeight: "bold",
                      color: "#059669",
                    }}
                  >
                    Md. Nazim Ahmed
                  </h1>
                </div>
                <h2
                  style={{
                    fontSize: "15px",
                    marginBottom: "12px",
                    fontWeight: "500",
                    color: "#1e293b",
                  }}
                >
                  Frontend Developer (React.js & Next.js)
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "6px",
                    fontSize: "11px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Mail style={{ width: "12px", height: "12px", color: "#059669" }} />
                    <a href="mailto:nazimahmedprovat@gmail.com" style={{ color: "#2563eb" }}>
                      nazimahmedprovat@gmail.com
                    </a>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Phone style={{ width: "12px", height: "12px", color: "#059669" }} />
                    <span className="blue" style={{ color: "#2563eb" }}>+8801679632572</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <MapPin style={{ width: "12px", height: "12px", color: "#059669" }} />
                    <span className="blue" style={{ color: "#2563eb" }}>Dhaka - 1207, Bangladesh</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Linkedin style={{ width: "12px", height: "12px", color: "#059669" }} />
                    <a href="https://www.linkedin.com/in/nazimnk9/" target="_blank" style={{ color: "#2563eb" }}>
                      linkedin.com/in/nazimnk9
                    </a>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Github style={{ width: "12px", height: "12px", color: "#059669" }} />
                    <a href="https://github.com/nazimnk9" target="_blank" style={{ color: "#2563eb" }}>
                      github.com/nazimnk9
                    </a>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Globe style={{ width: "12px", height: "12px", color: "#059669" }} />
                    <a href="https://md-nazim-ahmed.vercel.app/" target="_blank" style={{ color: "#2563eb" }}>
                      md-nazim-ahmed.vercel.app
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="cv-section avoid-break" style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "8px",
                  paddingBottom: "4px",
                  borderBottom: "1px solid #e2e8f0",
                  color: "#059669",
                }}
              >
                <User style={{ width: "14px", height: "14px" }} />
                Professional Summary
              </h3>
              <p
                style={{
                  lineHeight: "1.4",
                  textAlign: "justify",
                  color: "#1e293b",
                  fontSize: "10px",
                }}
              >
                Creative and detail-oriented Frontend Developer specializing in React.js and Next.js, with a strong passion for building modern, responsive, and user-friendly web applications. Skilled in transforming complex requirements into seamless digital experiences with a focus on performance, scalability, and accessibility. Proficient in integrating cutting-edge technologies, optimizing UI/UX, and collaborating with cross-functional teams to deliver high-quality solutions on time. Known for writing clean, maintainable code and implementing best practices that align with industry standards. Committed to continuous learning, innovation, and driving business growth through impactful frontend engineering.
              </p>
            </div>

            {/* Work Experience */}
            <div className="cv-section avoid-break" style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "8px",
                  paddingBottom: "4px",
                  borderBottom: "1px solid #e2e8f0",
                  color: "#059669",
                }}
              >
                <Briefcase style={{ width: "14px", height: "14px" }} />
                Work Experience
              </h3>
              <div
                style={{
                  paddingLeft: "12px",
                  paddingBottom: "2px",
                  marginBottom: "12px",
                  borderLeft: "3px solid #059669",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "6px",
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: "12px", fontWeight: "600", color: "#059669", marginBottom: "4px" }}>Frontend Developer</h4>
                    <p
                      style={{
                        fontWeight: "500",
                        color: "#1e293b",
                        fontSize: "11px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      Tizaraa IT - IT Company
                      <a
                        href="https://it.tizaraa.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#2563eb", textDecoration: "none", fontSize: "12px" }}
                      >
                        <ExternalLink style={{ width: "12px", height: "12px" }} />
                      </a>
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: "500",
                      padding: "3px 6px",
                      borderRadius: "3px",
                      color: "#475569",
                      backgroundColor: "#f8fafc",
                    }}
                  >
                    Jan 2022 - Present
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div className="project-section">
                    <h5
                      style={{
                        fontWeight: "600",
                        marginBottom: "4px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "#059669",
                        fontSize: "11px",
                      }}
                    >
                      Project: Tizaraa E-Commerce platform
                      <a
                        href="https://tizaraa.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#2563eb", textDecoration: "none", fontSize: "12px" }}
                      >
                        <ExternalLink style={{ width: "12px", height: "12px" }} />
                      </a>
                    </h5>
                    <p style={{ fontSize: "10px", marginBottom: "4px", color: "#475569" }}>
                      Multivendor e-commerce platform similar to Daraz and Alibaba, designed to capture market share in competitive e-commerce space.
                    </p>
                    <div style={{ marginBottom: "4px" }}>
                      <span style={{ fontSize: "9px", fontWeight: "600", color: "#059669" }}>Technologies: </span>
                      <div style={{ display: "inline-flex", flexWrap: "wrap", gap: "2px" }}>
                        {["Tailwind CSS", "Material-UI", "TypeScript", "React.js", "Next.js"].map(
                          (tech) => (
                            <span
                              key={tech}
                              style={{
                                padding: "2px 4px",
                                borderRadius: "2px",
                                fontSize: "8px",
                                fontWeight: "500",
                                border: "1px solid #059669",
                                color: "#059669",
                                backgroundColor: "#f8fafc",
                                display: "inline-block",
                                margin: "1px",
                              }}
                            >
                              {tech}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                    <ul style={{ fontSize: "9px", listStyle: "none", margin: 0, padding: 0 }}>
                      {[
                        "Developed and optimized UI components for seamless user experience across devices",
                        "Collaborated with backend developers to integrate RESTful APIs for real-time data",
                        "Implemented responsive design principles ensuring cross-browser compatibility",
                        "Enhanced website performance through code optimization and best practices",
                      ].map((item, index) => (
                        <li
                          key={index}
                          style={{
                            position: "relative",
                            paddingLeft: "10px",
                            marginBottom: "2px",
                            color: "#1e293b",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              left: 0,
                              fontWeight: "bold",
                              color: "#059669",
                            }}
                          >
                            •
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-section">
                    <h5
                      style={{
                        fontWeight: "600",
                        marginBottom: "4px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "#059669",
                        fontSize: "11px",
                      }}
                    >
                      Project: Johkasou ERP System
                      <a
                        href="https://johkasou-erp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#2563eb", textDecoration: "none", fontSize: "12px" }}
                      >
                        <ExternalLink style={{ width: "12px", height: "12px" }} />
                      </a>
                    </h5>
                    <p style={{ fontSize: "10px", marginBottom: "4px", color: "#475569" }}>
                      Advanced ERP solution using Japanese technology for business operations, serving 500+ daily users.
                    </p>
                    <div style={{ marginBottom: "4px" }}>
                      <span style={{ fontSize: "9px", fontWeight: "600", color: "#059669" }}>Technologies: </span>
                      <div style={{ display: "inline-flex", flexWrap: "wrap", gap: "2px" }}>
                        {["Tailwind CSS", "Material-UI", "JavaScript", "React.js", "Next.js"].map((tech) => (
                          <span
                            key={tech}
                            style={{
                              padding: "2px 4px",
                              borderRadius: "2px",
                              fontSize: "8px",
                              fontWeight: "500",
                              border: "1px solid #059669",
                              color: "#059669",
                              backgroundColor: "#f8fafc",
                              display: "inline-block",
                              margin: "1px",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ul style={{ fontSize: "9px", listStyle: "none", margin: 0, padding: 0 }}>
                      {[
                        "Implemented responsive design principles to enhance accessibility across devices",
                        "Collaborated with backend developers for API integration and data management",
                        "Ensured cross-browser compatibility across multiple platforms and devices",
                        "Developed reusable components to improve development efficiency",
                      ].map((item, index) => (
                        <li
                          key={index}
                          style={{
                            position: "relative",
                            paddingLeft: "10px",
                            marginBottom: "2px",
                            color: "#1e293b",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              left: 0,
                              fontWeight: "bold",
                              color: "#059669",
                            }}
                          >
                            •
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Projects */}
            <div className="cv-section personal-experience avoid-break" style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "8px",
                  paddingBottom: "4px",
                  borderBottom: "1px solid #e2e8f0",
                  color: "#059669",
                }}
              >
                <FolderOpen style={{ width: "14px", height: "14px" }} />
                Personal Projects
              </h3>

              <div style={{
                paddingLeft: "12px",
                paddingBottom: "2px",
                marginBottom: "12px", borderLeft: "3px solid #059669",
                display: "flex", flexDirection: "column", gap: "8px"
              }}>
                <div className="project-section avoid-break">
                  <h5
                    style={{
                      fontWeight: "600",
                      marginBottom: "4px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#059669",
                      fontSize: "11px",
                    }}
                  >
                    Project: Video Calling App
                    <a
                      href="https://video-calling-app-lilac.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#2563eb", textDecoration: "none", fontSize: "12px" }}
                    >
                      <ExternalLink style={{ width: "12px", height: "12px" }} />
                    </a>
                  </h5>
                  <p style={{ fontSize: "10px", marginBottom: "4px", color: "#475569" }}>
                    A modern video calling application built with Clerk authentication and Stream for real-time video
                    functionality. Features comprehensive video calling capabilities including meeting scheduling,
                    recordings, and personal rooms.
                  </p>
                  <div style={{ marginBottom: "4px" }}>
                    <span style={{ fontSize: "9px", fontWeight: "600", color: "#059669" }}>Technologies: </span>
                    <div style={{ display: "inline-flex", flexWrap: "wrap", gap: "2px" }}>
                      {["Tailwind CSS", "shadcn/ui", "TypeScript", "React.js", "Next.js", "Clerk", "Stream"].map((tech) => (
                        <span
                          key={tech}
                          style={{
                            padding: "2px 4px",
                            borderRadius: "2px",
                            fontSize: "8px",
                            fontWeight: "500",
                            border: "1px solid #059669",
                            color: "#059669",
                            backgroundColor: "#f8fafc",
                            display: "inline-block",
                            margin: "1px",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul style={{ fontSize: "9px", listStyle: "none", margin: 0, padding: 0 }}>
                    {[
                      "Developed real-time video calling functionality with high-quality audio/video streaming",
                      "Implemented meeting scheduling and management system for user convenience",
                      "Integrated recording capabilities for future reference and meeting documentation",
                      "Created personal room functionality for instant meetings and collaboration",
                      "Implemented secure authentication system using Clerk integration",
                    ].map((item, index) => (
                      <li
                        key={index}
                        style={{
                          position: "relative",
                          paddingLeft: "10px",
                          marginBottom: "2px",
                          color: "#1e293b",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            fontWeight: "bold",
                            color: "#059669",
                          }}
                        >
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-section avoid-break">
                  <h5
                    style={{
                      fontWeight: "600",
                      marginBottom: "4px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#059669",
                      fontSize: "11px",
                    }}
                  >
                    Project: Whiteboard App
                    <a
                      href="https://whiteboard-app-alpha.vercel.app/design/4/edit"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#2563eb", textDecoration: "none", fontSize: "12px" }}
                    >
                      <ExternalLink style={{ width: "12px", height: "12px" }} />
                    </a>
                  </h5>
                  <p style={{ fontSize: "10px", marginBottom: "4px", color: "#475569" }}>
                    A collaborative whiteboard application similar to Canva and Figma, featuring real-time collaboration,
                    drawing tools, and design capabilities for creative professionals and teams.
                  </p>
                  <div style={{ marginBottom: "4px" }}>
                    <span style={{ fontSize: "9px", fontWeight: "600", color: "#059669" }}>Technologies: </span>
                    <div style={{ display: "inline-flex", flexWrap: "wrap", gap: "2px" }}>
                      {["Tailwind CSS", "TypeScript", "React.js", "Next.js", "Socket.io"].map(
                        (tech) => (
                          <span
                            key={tech}
                            style={{
                              padding: "2px 4px",
                              borderRadius: "2px",
                              fontSize: "8px",
                              fontWeight: "500",
                              border: "1px solid #059669",
                              color: "#059669",
                              backgroundColor: "#f8fafc",
                              display: "inline-block",
                              margin: "1px",
                            }}
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                  <ul style={{ fontSize: "9px", listStyle: "none", margin: 0, padding: 0 }}>
                    {[
                      "Developed real-time collaborative drawing and design tools for multiple users",
                      "Implemented multi-user collaboration with Socket.io integration for live updates",
                      "Created responsive design ensuring cross-device compatibility and performance",
                      "Built professional-grade design tools and features for creative work",
                      "Optimized application performance for smooth drawing experience",
                    ].map((item, index) => (
                      <li
                        key={index}
                        style={{
                          position: "relative",
                          paddingLeft: "10px",
                          marginBottom: "2px",
                          color: "#1e293b",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            fontWeight: "bold",
                            color: "#059669",
                          }}
                        >
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="cv-section avoid-break" style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "8px",
                  paddingBottom: "4px",
                  borderBottom: "1px solid #e2e8f0",
                  color: "#059669",
                }}
              >
                <Code style={{ width: "14px", height: "14px" }} />
                Technical Skills
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
                <div>
                  <h4
                    style={{
                      fontWeight: "600",
                      marginBottom: "6px",
                      color: "#059669",
                      fontSize: "11px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Monitor style={{ width: "12px", height: "12px" }} />
                    Frontend Technologies
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
                    {[
                      "HTML5", "CSS3", "Responsive Design", "Tailwind CSS", "Bootstrap", "Material-UI", "shadcn/ui",
                      "JavaScript", "TypeScript", "React.js", "Next.js"
                    ].map((skill) => (
                      <span
                        key={skill}
                        style={{
                          padding: "3px 6px",
                          borderRadius: "3px",
                          fontSize: "9px",
                          fontWeight: "500",
                          border: "1px solid #059669",
                          color: "#059669",
                          backgroundColor: "#f8fafc",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4
                    style={{
                      fontWeight: "600",
                      marginBottom: "6px",
                      color: "#059669",
                      fontSize: "11px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Server style={{ width: "12px", height: "12px" }} />
                    Backend Technologies
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
                    {["Node.js", "Express.js", "RESTful APIs", "API Integration", "Authentication"].map((skill) => (
                      <span
                        key={skill}
                        style={{
                          padding: "3px 6px",
                          borderRadius: "3px",
                          fontSize: "9px",
                          fontWeight: "500",
                          border: "1px solid #059669",
                          color: "#059669",
                          backgroundColor: "#f8fafc",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4
                    style={{
                      fontWeight: "600",
                      marginBottom: "6px",
                      color: "#059669",
                      fontSize: "11px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Database style={{ width: "12px", height: "12px" }} />
                    Database & Storage
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
                    {["MongoDB", "Firebase", "MySQL", "Local Storage", "Session Storage"].map((skill) => (
                      <span
                        key={skill}
                        style={{
                          padding: "3px 6px",
                          borderRadius: "3px",
                          fontSize: "9px",
                          fontWeight: "500",
                          border: "1px solid #059669",
                          color: "#059669",
                          backgroundColor: "#f8fafc",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4
                    style={{
                      fontWeight: "600",
                      marginBottom: "6px",
                      color: "#059669",
                      fontSize: "11px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Wrench style={{ width: "12px", height: "12px" }} />
                    Development Tools
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
                    {["Git", "GitHub", "VS Code", "Chrome DevTools", "Postman", "Figma", "Vercel", "Netlify"].map(
                      (skill) => (
                        <span
                          key={skill}
                          style={{
                            padding: "3px 6px",
                            borderRadius: "3px",
                            fontSize: "9px",
                            fontWeight: "500",
                            border: "1px solid #059669",
                            color: "#059669",
                            backgroundColor: "#f8fafc",
                          }}
                        >
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="cv-section education" style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "8px",
                  paddingBottom: "4px",
                  borderBottom: "1px solid #e2e8f0",
                  color: "#059669",
                }}
              >
                <GraduationCap style={{ width: "14px", height: "14px" }} />
                Education
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  {
                    title: "Bachelor of Science (B.Sc)",
                    subtitle: "Computer Science and Engineering (CSE)",
                    institution: "Bangladesh University, Dhaka",
                    grade: "CGPA: 3.62",
                  },
                ].map((edu, index) => (
                  <div
                    key={index}
                    className="education-item"
                    style={{
                      paddingLeft: "16px",
                      borderLeft: "3px solid #10b981",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "4px",
                      }}
                    >
                      <div>
                        <h4 style={{ fontSize: "12px", fontWeight: "600", color: "#059669" }}>{edu.title}</h4>
                        <p style={{ color: "#1e293b", fontSize: "11px" }}>{edu.subtitle}</p>
                        <p style={{ fontSize: "10px", color: "#475569" }}>{edu.institution}</p>
                      </div>
                      <span
                        style={{
                          fontSize: "10px",
                          padding: "4px 8px",
                          borderRadius: "3px",
                          color: "#475569",
                          backgroundColor: "#f8fafc",
                        }}
                      >
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards and Achievements */}
            <div className="cv-section avoid-break" style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "8px",
                  paddingBottom: "4px",
                  borderBottom: "1px solid #e2e8f0",
                  color: "#059669",
                }}
              >
                <Award style={{ width: "14px", height: "14px" }} />
                Certifications
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px",
                    borderRadius: "6px",
                    backgroundColor: "#f8fafc",
                  }}
                >
                  <div>
                    <h4 style={{ fontWeight: "600", color: "#059669", fontSize: "12px" }}>
                      Certified MERN Stack Developer
                    </h4>
                    <p style={{ fontSize: "10px", color: "#475569" }}>Creative IT Institute</p>
                  </div>
                  <a
                    href="https://certificate.citsmp.com/?certificate_id=mern-23080526"
                    target="_blank"
                    style={{
                      color: "#2563eb",
                      textDecoration: "none",
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                    }}
                  >
                    View Certificate <ExternalLink style={{ width: "12px", height: "12px" }} />
                  </a>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px",
                    borderRadius: "6px",
                    backgroundColor: "#f8fafc",
                  }}
                >
                  <div>
                    <h4 style={{ fontWeight: "600", color: "#059669", fontSize: "12px" }}>
                      Certified Web Designer & Developer
                    </h4>
                    <p style={{ fontSize: "10px", color: "#475569" }}>Creative IT Institute</p>
                  </div>
                </div>
              </div>
            </div>

            {/* References */}
            <div className="cv-section" style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "8px",
                  paddingBottom: "4px",
                  borderBottom: "1px solid #e2e8f0",
                  color: "#059669",
                }}
              >
                <Users style={{ width: "14px", height: "14px" }} />
                References
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "16px",
                }}
              >
                {[
                  {
                    name: "Dr. Mohammad Nurul Huda",
                    title: "Professor, Department of CSE",
                    institution: "United International University",
                    email: "mnh@cse.uiu.ac.bd",
                  },
                  {
                    name: "Dr. Khondoker Abdullah Al Mamun",
                    title: "Professor, Department of CSE",
                    institution: "United International University",
                    email: "mamun@cse.uiu.ac.bd",
                  },
                ].map((ref, index) => (
                  <div
                    key={index}
                    className="reference-item"
                    style={{
                      padding: "12px",
                      border: "1px solid #e2e8f0",
                      borderRadius: "6px",
                    }}
                  >
                    <h4 style={{ fontWeight: "600", color: "#059669", fontSize: "12px" }}>{ref.name}</h4>
                    <p style={{ fontSize: "10px", marginBottom: "4px", color: "#475569" }}>{ref.title}</p>
                    <p style={{ fontSize: "10px", marginBottom: "2px", color: "#475569" }}>{ref.institution}</p>
                    <p style={{ fontSize: "10px", color: "#1e293b" }}>
                      <span style={{ fontWeight: "500" }}>Email:</span> {ref.email}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
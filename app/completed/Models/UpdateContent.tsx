// "use client";

// import { useGlobalState } from "@/app/context/globalContextProvider";
// import axios from "axios";
// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import { FaPlus } from "react-icons/fa";
// import styled from "styled-components";

// const CreateContent = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [date, setDate] = useState("");
//   const [completed, setCompleted] = useState(false);
//   const [important, setImportant] = useState(false);

//   // distructure from Global state
//     const { theme, allTasks, closeModal, tasks } = useGlobalState();
    
//     // console.log(tasks)

//   const handleChange = (name: string) => (e: any) => {
//     switch (name) {
//       case "title":
//         setTitle(e.target.value);
//         break;
//       case "description":
//         setDescription(e.target.value);
//         break;
//       case "date":
//         setDate(e.target.value);
//         break;
//       case "completed":
//         setCompleted(e.target.checked);
//         break;
//       case "important":
//         setImportant(e.target.checked);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     const task = {
//       title,
//       description,
//       date,
//       completed,
//       important,
//     };

//     console.log(task);

//     try {
//       const res = await axios.post("/api/tasks", task);

//       if (res.data.error) {
//         toast.error(res.data.error);
//       }

//       if (!res.data.error) {
//         toast.success("Task created successfully");
//         allTasks();
//         closeModal();
//       }

//       // console.log(completed, important)
//     } catch (error) {
//       toast.error("Something went wrong");
//       console.log(error);
//     }
//     console.log(task);
//   };

//   return (
//     <ContentStyled
//       onSubmit={handleSubmit}
//       theme={theme}
//     >
//       <h1>Create a Task</h1>
//                 <>
//                    <div className="input-control">
//                         <label htmlFor="title">Title</label>
//                         <input
//                             type="text"
//                             name="title"
//                             id="title"
//                             value={title}
//                             placeholder="title"
//                             onChange={handleChange("title")}
//                             className="text-black"
//                         />
//                     </div>
//                     <div className="input-control">
//                         <label htmlFor="description">Description</label>
//                         <textarea
//                             rows={4}
//                             // type='text'
//                             name="description"
//                             id="description"
//                             value={description}
//                             placeholder="description"
//                             onChange={handleChange("description")}
//                             className="text-black"
//                         >
//                         </textarea>
//                     </div>
//                     <div className="input-control">
//                         <label htmlFor="date">Date</label>
//                         <input
//                             type="date"
//                             name="date"
//                             id="date"
//                             value={date}
//                             onChange={handleChange("date")}
//                             className="text-black"
//                         />
//                     </div>
//                     <div className="submit-btn flex justify-end hover:text-white">
//                         <button
//                             type="submit"
//                             className="flex justify-center items-center p-3 gap-2 bg-green-800 rounded-xl hover:bg-green-600 hover:text-white transition-all"
//                         >
//                         <FaPlus className="hover:text-white" />
//                             Update Task
//                         </button>
//                     </div>
//                 </>
//     </ContentStyled>
//   );
// };

// const ContentStyled = styled.form`
//   > h1 {
//     font-size: clamp(1.2rem, 5vw, 1.6rem);
//     font-weight: 600;
//   }

//   color: ${(props) => props.theme.colorGrey1};

//   .input-control {
//     position: relative;
//     margin: 5px 0;
//     font-weight: 500;

//     label {
//       margin-bottom: 0.5rem;
//       display: inline-block;
//       font-size: clamp(0.9rem, 5vw, 1.2rem);

//       span {
//         color: ${(props) => props.theme.colorGrey3};
//       }
//     }

//     input,
//     textarea {
//       width: 100%;
//       border-radius: 5px;
//       padding: 1rem;
//       resize: none;

//       background-color: #122131f8;
//       box-shadow: inset 0 0 40px 2px #000000f8;
//       color: ${(props) => props.theme.colorGrey2};
//     }
//   }

//   .toggler {
//     label {
//       flex: 1;
//     }

//     input {
//       width: initial;
//     }
//   }
// `;

// export default CreateContent;

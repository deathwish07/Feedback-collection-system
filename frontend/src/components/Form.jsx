import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import toast from 'react-hot-toast'


const RadioInput = ({ que, label, value, checked, setter }) => {
  return (
    <label>
      <input type="radio" checked={checked == value}
        onChange={() => setter(value)} />
      <span>{label}</span>
    </label>
  );
};

const Form = () => {
  const [que1, setque1] = useState();
  const [que2, setque2] = useState();
  const [que3, setque3] = useState();
  const [que4, setque4] = useState();
  const [que5, setque5] = useState();

  const { loading, form } = useForm()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!localStorage.getItem("formfill")) {
      
      try {
        const res = await fetch("/api/auth/form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user: localStorage.getItem("authUser"),
            que1: que1,
            que2: que2,
            que3: que3,
            que4: que4,
            que5: que5
          })
        })
        const data = await res.json();
        localStorage.setItem("formfill", JSON.stringify(data))
        toast.success("Successfully filled the form")

      } catch (error) {
        toast.error(error.message)
      }
    } else {
      toast.error("You have already filled the form")
    }

    //await form(que1,que2,que3,que4,que5)
  }

  return (
    <>
      <div className=" w-3/5 m-auto shadow-lg mt-8">
        <p className=" text-center text-3xl font-bold bg-indigo-500 text-white p-2">
          Feedback Form
        </p>
        <form onSubmit={handleSubmit}>
          <div className=" px-5 py-3">
            <div>
              <label>
                1. The semester course content, teaching method and evaluation
                system were provided at the start.
              </label>
              <div className=" flex justify-between m-4">
                <RadioInput
                  que="que1"
                  label="Strongly Agree"
                  value="Strongly Agree"
                  checked={que1}
                  setter={setque1}
                />

                <RadioInput
                  que="que1"
                  label="Agree"
                  value="Agree"
                  checked={que1}
                  setter={setque1}
                />
                <RadioInput
                  que="que1"
                  label="Average"
                  value="Average"
                  checked={que1}
                  setter={setque1}
                />
                <RadioInput
                  que="que1"
                  label="disagree"
                  value="disagree"
                  checked={que1}
                  setter={setque1}
                />
                <RadioInput
                  que="que1"
                  label="Strongly disagree"
                  value="Strongly disagree"
                  checked={que1}
                  setter={setque1}
                />
              </div>
            </div>

            {/* 2 */}

            <div>
              <label>
                2. The course aims and objectives were clearly stated at the
                beginning of the period.
              </label>
              <div className=" flex justify-between m-4">
                <RadioInput
                  que="que2"
                  label="Strongly Agree"
                  value="Strongly Agree"
                  checked={que2}
                  setter={setque2}
                />

                <RadioInput
                  que="que2"
                  label="Agree"
                  value="Agree"
                  checked={que2}
                  setter={setque2}
                />
                <RadioInput
                  que="que2"
                  label="Average"
                  value="Average"
                  checked={que2}
                  setter={setque2}
                />
                <RadioInput
                  que="que2"
                  label="disagree"
                  value="disagree"
                  checked={que2}
                  setter={setque2}
                />
                <RadioInput
                  que="que2"
                  label="Strongly disagree"
                  value="Strongly disagree"
                  checked={que2}
                  setter={setque2}
                />
              </div>
            </div>

            {/* 3 */}

            <div>
              <label>
                3. The course was taught according to the syllabus announced on
                the first day of class.
              </label>
              <div className=" flex justify-between m-4">
                <RadioInput
                  que="que3"
                  label="Strongly Agree"
                  value="Strongly Agree"
                  checked={que3}
                  setter={setque3}
                />

                <RadioInput
                  que="que3"
                  label="Agree"
                  value="Agree"
                  checked={que3}
                  setter={setque3}
                />
                <RadioInput
                  que="que3"
                  label="Average"
                  value="Average"
                  checked={que3}
                  setter={setque3}
                />
                <RadioInput
                  que="que3"
                  label="disagree"
                  value="disagree"
                  checked={que3}
                  setter={setque3}
                />
                <RadioInput
                  que="que3"
                  label="Strongly disagree"
                  value="Strongly disagree"
                  checked={que3}
                  setter={setque3}
                />
              </div>
            </div>

            {/* 4 */}

            <div>
              <label>
                4. The quizzes, assignments, projects and exams contributed to
                helping and learning.
              </label>
              <div className=" flex justify-between m-4">
                <RadioInput
                  que="que4"
                  label="Strongly Agree"
                  value="Strongly Agree"
                  checked={que4}
                  setter={setque4}
                />

                <RadioInput
                  que="que4"
                  label="Agree"
                  value="Agree"
                  checked={que4}
                  setter={setque4}
                />
                <RadioInput
                  que="que4"
                  label="Average"
                  value="Average"
                  checked={que4}
                  setter={setque4}
                />
                <RadioInput
                  que="que4"
                  label="disagree"
                  value="disagree"
                  checked={que4}
                  setter={setque4}
                />
                <RadioInput
                  que="que4"
                  label="Strongly disagree"
                  value="Strongly disagree"
                  checked={que4}
                  setter={setque4}
                />
              </div>
            </div>

            {/* 5 */}

            <div>
              <label>
                5. The instructor’s knowledge was relevant and up to date.
              </label>
              <div className=" flex justify-between m-4">
                <RadioInput
                  que="que5"
                  label="Strongly Agree"
                  value="Strongly Agree"
                  checked={que5}
                  setter={setque5}
                />

                <RadioInput
                  que="que5"
                  label="Agree"
                  value="Agree"
                  checked={que5}
                  setter={setque5}
                />
                <RadioInput
                  que="que5"
                  label="Average"
                  value="Average"
                  checked={que5}
                  setter={setque5}
                />
                <RadioInput
                  que="que5"
                  label="disagree"
                  value="disagree"
                  checked={que5}
                  setter={setque5}
                />
                <RadioInput
                  que="que5"
                  label="Strongly disagree"
                  value="Strongly disagree"
                  checked={que5}
                  setter={setque5}
                />
              </div>
            </div>
            <div className=" text-center pt-5">
              <button className=" btn text-white bg-indigo-400">
                Submit Feedback
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;

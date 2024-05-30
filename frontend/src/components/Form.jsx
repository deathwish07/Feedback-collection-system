import React from "react";

const Form = () => {
  return (
    <>
      <div className=" w-3/5 m-auto shadow-lg mt-8">
        <p className=" text-center text-3xl font-bold bg-indigo-500 text-white p-2">
          Feedback Form
        </p>
        <div className=" px-5 py-3">
          <div>
            <label>
              1. The semester course content, teaching method and evaluation
              system were provided at the start.
            </label>
            <div className=" flex justify-between m-4">
              <input type="radio" name="q1" />
              <label>Strongly Agree</label>
              <input type="radio" name="q1" />
              <label>Agree</label>
              <input type="radio" name="q1" />
              <label>Average</label>
              <input type="radio" name="q1" />
              <label>disagree</label>
              <input type="radio" name="q1" />
              <label>Strongly disagree</label>
            </div>
          </div>

          {/* 2 */}

          <div>
            <label>
              2. The course aims and objectives were clearly stated at the
              beginning of the period.
            </label>
            <div className=" flex justify-between m-4">
              <input type="radio" name="q2" />
              <label>Strongly Agree</label>
              <input type="radio" name="q2" />
              <label>Agree</label>
              <input type="radio" name="q2" />
              <label>Average</label>
              <input type="radio" name="q2" />
              <label>disagree</label>
              <input type="radio" name="q2" />
              <label>Strongly disagree</label>
            </div>
          </div>

          {/* 3 */}

          <div>
            <label>
              3. The course was taught according to the syllabus announced on
              the first day of class.
            </label>
            <div className=" flex justify-between m-4">
              <input type="radio" name="q3" />
              <label>Strongly Agree</label>
              <input type="radio" name="q3" />
              <label>Agree</label>
              <input type="radio" name="q3" />
              <label>Average</label>
              <input type="radio" name="q3" />
              <label>disagree</label>
              <input type="radio" name="q3" />
              <label>Strongly disagree</label>
            </div>
          </div>

          {/* 4 */}

          <div>
            <label>
              4. The quizzes, assignments, projects and exams contributed to
              helping and learning.
            </label>
            <div className=" flex justify-between m-4">
              <input type="radio" name="q4" />
              <label>Strongly Agree</label>
              <input type="radio" name="q4" />
              <label>Agree</label>
              <input type="radio" name="q4" />
              <label>Average</label>
              <input type="radio" name="q4" />
              <label>disagree</label>
              <input type="radio" name="q4" />
              <label>Strongly disagree</label>
            </div>
          </div>

          {/* 5 */}

          <div>
            <label>
              5. The instructor’s knowledge was relevant and up to date.
            </label>
            <div className=" flex justify-between m-4">
              <input type="radio" name="q5" />
              <label>Strongly Agree</label>
              <input type="radio" name="q5" />
              <label>Agree</label>
              <input type="radio" name="q5" />
              <label>Average</label>
              <input type="radio" name="q5" />
              <label>disagree</label>
              <input type="radio" name="q5" />
              <label>Strongly disagree</label>
            </div>
          </div>
          <div className=" text-center pt-5">
            <button className=" btn text-white bg-indigo-400">
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

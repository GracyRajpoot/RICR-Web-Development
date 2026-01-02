import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};

    if (!/^[A-Za-z ]+$/.test(form.fullName || ""))
      err.fullName = "Please enter a valid name";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email || ""))
      err.email = "Invalid email address";

    if (!/^[6-9]\d{9}$/.test(form.mobile || ""))
      err.mobile = "Invalid Indian mobile number";

    const age =
      new Date().getFullYear() - new Date(form.dob || "").getFullYear();
    if (!form.dob || age < 15)
      err.dob = "Minimum age is 15 years";

    if (!form.qualification) err.qualification = "Required";

    if (!/^([0-9]{1,2}|100|[A-Fa-f])$/.test(form.percentage || ""))
      err.percentage = "Invalid value";

    if (!form.course) err.course = "Required";
    if (!form.batch) err.batch = "Required";

    if (!form.address) err.address = "Required";
    if (!/^[A-Za-z ]+$/.test(form.city || ""))
      err.city = "Invalid city";

    if (!/^\d{6}$/.test(form.pincode || ""))
      err.pincode = "Invalid pin code";

    if (!/^[A-Za-z ]+$/.test(form.guardianName || ""))
      err.guardianName = "Invalid name";

    if (!/^[6-9]\d{9}$/.test(form.guardianMobile || ""))
      err.guardianMobile = "Invalid number";

    if (!form.reference) err.reference = "Required";

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-10">

        <h1 className="text-4xl font-extrabold text-white text-center mb-2">
          Coaching Institute Registration
        </h1>
        <p className="text-center text-white/80 mb-8">
          Start your journey towards success
        </p>

        {success && (
          <div className="bg-green-500/90 text-white text-center py-3 rounded-lg mb-6">
            🎉 Registration Successful
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">

          {/* PERSONAL INFO */}
          <div className="col-span-2 section-title">Personal Information</div>

          <Input label="Full Name" name="fullName" onChange={handleChange} error={errors.fullName} />
          <Input label="Email Address" name="email" onChange={handleChange} error={errors.email} />
          <Input label="Mobile Number" name="mobile" onChange={handleChange} error={errors.mobile} />
          <Input label="Date of Birth" type="date" name="dob" onChange={handleChange} error={errors.dob} />

          {/* ACADEMIC */}
          <div className="col-span-2 section-title">Academic Details</div>

          <Select label="Last Qualification" name="qualification" onChange={handleChange}
            options={["10th", "12th", "Graduate", "Postgraduate"]} error={errors.qualification} />

          <Input label="Percentage / Grade" name="percentage" onChange={handleChange} error={errors.percentage} />

          {/* COURSE */}
          <div className="col-span-2 section-title">Course Information</div>

          <Select label="Preferred Course" name="course" onChange={handleChange}
            options={["IIT-JEE", "NEET", "Banking Exams", "UPSC"]} error={errors.course} />

          <Select label="Batch Timing" name="batch" onChange={handleChange}
            options={["Morning", "Afternoon", "Evening", "Weekend"]} error={errors.batch} />

          {/* ADDRESS */}
          <div className="col-span-2 section-title">Address Details</div>

          <Textarea label="Residential Address" name="address" onChange={handleChange} error={errors.address} />
          <Input label="City" name="city" onChange={handleChange} error={errors.city} />
          <Input label="Pin Code" name="pincode" onChange={handleChange} error={errors.pincode} />

          {/* GUARDIAN */}
          <div className="col-span-2 section-title">Guardian Details</div>

          <Input label="Guardian Full Name" name="guardianName" onChange={handleChange} error={errors.guardianName} />
          <Input label="Guardian Contact Number" name="guardianMobile" onChange={handleChange} error={errors.guardianMobile} />

          {/* EXTRA */}
          <div className="col-span-2 section-title">Additional Information</div>

          <Select label="How did you hear about us?" name="reference" onChange={handleChange}
            options={["Friends", "Online Ad", "Newspaper", "Social Media", "Other"]} error={errors.reference} />

          <Textarea label="Special Requirements (Optional)" name="special" onChange={handleChange} />

          <div className="col-span-2">
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg hover:scale-105 transition">
              Submit Registration
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

/* Reusable Components */
const Input = ({ label, error, ...props }) => (
  <div>
    <label className="block mb-1 font-semibold">{label}</label>
    <input {...props} className="glass-input" />
    {error && <p className="error">{error}</p>}
  </div>
);

const Select = ({ label, options, error, ...props }) => (
  <div>
    <label className="block mb-1 font-semibold">{label}</label>
    <select {...props} className="glass-input">
      <option value="">Select</option>
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
    {error && <p className="error">{error}</p>}
  </div>
);

const Textarea = ({ label, error, ...props }) => (
  <div className="md:col-span-2">
    <label className="block mb-1 font-semibold">{label}</label>
    <textarea {...props} className="glass-input h-24" />
    {error && <p className="error">{error}</p>}
  </div>
);

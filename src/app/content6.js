import React, { useState } from 'react';
import './content6.css';

export default function Content6() {
  const [form, setForm] = useState({
    name: '',
    q1: '',
    q2: '',
    q3: [],
    q4: [],
    q5: []
  });

  const [showModal, setShowModal] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const updated = checked
      ? [...form[name], value]
      : form[name].filter((v) => v !== value);
    setForm({ ...form, [name]: updated });
  };

  const handlePreview = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleSubmit = () => {
    setSubmissions([...submissions, form]);
    setForm({ name: '', q1: '', q2: '', q3: [], q4: [], q5: [] });
    setShowModal(false);
  };

  return (
    <div className="container">
      <h2>Feedback Form</h2>
      <form onSubmit={handlePreview}>
        <div className="question">
          <label><strong>Name:</strong></label><br />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        
        <div className="question">
          <label><span>Q1: Are you satisfied with our service?</span></label><br />
          <label><input type="radio" name="q1" value="Yes" checked={form.q1 === 'Yes'} onChange={handleChange} /> Yes</label>
          <label><input type="radio" name="q1" value="No" checked={form.q1 === 'No'} onChange={handleChange} /> No</label>
        </div>

        <div className="question">
          <label><span>Q2: Would you recommend us to others?</span></label><br />
          <label><input type="radio" name="q2" value="Yes" checked={form.q2 === 'Yes'} onChange={handleChange} /> Yes</label>
          <label><input type="radio" name="q2" value="No" checked={form.q2 === 'No'} onChange={handleChange} /> No</label>
        </div>

        <div className="question">
          <label><span>Q3: What features do you use? (Select all that apply)</span></label><br />
          {['Chat', 'Email', 'Video'].map(opt => (
            <label key={opt}>
              <input type="checkbox" name="q3" value={opt} checked={form.q3.includes(opt)} onChange={handleCheckboxChange} /> {opt}
            </label>
          ))}
        </div>

        <div className="question">
          <label><span>Q4: What improvements would you like?</span></label><br />
          {['Faster Support', 'New Features', 'Better UI'].map(opt => (
            <label key={opt}>
              <input type="checkbox" name="q4" value={opt} checked={form.q4.includes(opt)} onChange={handleCheckboxChange} /> {opt}
            </label>
          ))}
        </div>

        <div className="question">
          <label><span>Q5: What do you like about us?</span></label><br />
          {['Easy to Use', 'Affordable', 'Good Support'].map(opt => (
            <label key={opt}>
              <input type="checkbox" name="q5" value={opt} checked={form.q5.includes(opt)} onChange={handleCheckboxChange} /> {opt}
            </label>
          ))}
        </div>

        <button type="submit" className="btn">Preview</button>
      </form>

      {showModal && (
        <div className="modalone">
          <div className="modaltwo">
            <h3>Preview</h3>

            <div className="question">
              <label><strong>Name:</strong></label><br />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="question">
              <label><span>Q1: Are you satisfied with our service?</span></label><br />
              <label><input type="radio" name="q1" value="Yes" checked={form.q1 === 'Yes'} onChange={handleChange} /> Yes</label>
              <label><input type="radio" name="q1" value="No" checked={form.q1 === 'No'} onChange={handleChange} /> No</label>
            </div>

            <div className="question">
              <label><span>Q2: Would you recommend us to others?</span></label><br />
              <label><input type="radio" name="q2" value="Yes" checked={form.q2 === 'Yes'} onChange={handleChange} /> Yes</label>
              <label><input type="radio" name="q2" value="No" checked={form.q2 === 'No'} onChange={handleChange} /> No</label>
            </div>

            <div className="question">
              <label><span>Q3: What features do you use? (Select all that apply)</span></label><br />
              {['Chat', 'Email', 'Video'].map(opt => (
                <label key={opt}>
                  <input type="checkbox" name="q3" value={opt} checked={form.q3.includes(opt)} onChange={handleCheckboxChange} /> {opt}
                </label>
              ))}
            </div>

            <div className="question">
              <label><span>Q4: What improvements would you like?</span></label><br />
              {['Faster Support', 'New Features', 'Better UI'].map(opt => (
                <label key={opt}>
                  <input type="checkbox" name="q4" value={opt} checked={form.q4.includes(opt)} onChange={handleCheckboxChange} /> {opt}
                </label>
              ))}
            </div>

            <div className="question">
              <label><span>Q5: What do you like about us?</span></label><br />
              {['Easy to Use', 'Affordable', 'Good Support'].map(opt => (
                <label key={opt}>
                  <input type="checkbox" name="q5" value={opt} checked={form.q5.includes(opt)} onChange={handleCheckboxChange} /> {opt}
                </label>
              ))}
            </div>

            <button onClick={handleSubmit} className="btn">Submit</button>
            <button onClick={() => setShowModal(false)} className="btn cancel">Cancel</button>
          </div>
        </div>
      )}

      {submissions.length > 0 && (
        <div className="table-wrapper">
          <h3>Submitted Feedback</h3>
          <table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Q1</th>
                <th>Q2</th>
                <th>Q3</th>
                <th>Q4</th>
                <th>Q5</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((s, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{s.name}</td>
                  <td>{s.q1}</td>
                  <td>{s.q2}</td>
                  <td>{s.q3.join(', ')}</td>
                  <td>{s.q4.join(', ')}</td>
                  <td>{s.q5.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

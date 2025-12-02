// ...imports as before
export default function DemoPage() {
  const [form, setForm] = useState({ symptoms: "", age: "", gender: "" });
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setAnswer(null);
    try {
      const res = await fetch("http://localhost:5000/api/predict", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(form)
      });
      if (res.ok) {
        const out = await res.json();
        setAnswer(out);
      }
    } finally {
      setLoading(false);
    }
  }

  // ...rest as before
}
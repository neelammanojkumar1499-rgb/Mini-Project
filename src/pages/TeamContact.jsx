// ...imports as before

  async function handleSubmit(e) {
    e.preventDefault();
    setSent(false);
    try {
      await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(inputs)
      });
      setSent(true);
    } catch { setSent(false); }
    setTimeout(() => setSent(false), 4000);
    setInputs({ name: "", email: "", message: "" });
  }
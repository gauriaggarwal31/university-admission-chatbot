let programs = [];

fetch("scaledown_programs.json")
  .then(res => res.json())
  .then(data => programs = data);

function match() {
  const interest = document.getElementById("interest").value.toLowerCase();
  const gpa = parseFloat(document.getElementById("gpa").value);
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const matches = programs.filter(p =>
    p.keywords.some(k => interest.includes(k)) &&
    gpa >= p.min_gpa
  );

  if (matches.length === 0) {
    resultsDiv.innerHTML = "<p>No matching programs found.</p>";
    return;
  }

  matches.forEach(p => {
    resultsDiv.innerHTML += `
      <div class="result">
        <h4>${p.program}</h4>
        <p>Deadline: ${p.deadline}</p>
        <p>Required Documents: ${p.documents.join(", ")}</p>
      </div>
    `;
  });
}

function openChat() {
  alert("AI Admissions Chatbot integration next");
}

function scrollToMatch() {
  document.getElementById("matcher").scrollIntoView({ behavior: "smooth" });
}
